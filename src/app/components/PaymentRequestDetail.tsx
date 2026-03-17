import { PaymentRequest } from './mockData';
import svgPaths from '@/imports/svg-6pkxmj2cve';
import activitySvg from '@/imports/svg-g2z9by7he8';
import subStatusSvg from '@/imports/svg-0c6wkz40d7';
import { ActivityTimelineStarted } from './ActivityTimelineStarted';

interface PaymentRequestDetailProps {
  request: PaymentRequest;
  onBack: () => void;
}

// ── Activity Timeline helpers ──

/** Determine the status card configuration from request state */
function getStatusCardConfig(request: PaymentRequest): {
  title: string;
  subStatusLabel: string;
  subStatusBg: string;
  subStatusIconColor: string;
  subStatusTextColor: string;
  dotFill: string;
  description: string;
  icon: 'checkmark' | 'send';
} | null {
  const isWire = request.paymentPath === 'wire';
  const isCertified = request.requestStatus === 'certified';

  if (isWire && isCertified) {
    const wireEvent = request.timeline.find(e => e.type === 'action');
    return {
      title: 'CertifID',
      subStatusLabel: 'Wire instructions downloaded',
      subStatusBg: '#e9fff2',
      subStatusIconColor: '#00A566',
      subStatusTextColor: '#555',
      dotFill: '#00A566',
      description: `${wireEvent?.byPerson || request.clientName} downloaded wire instructions successfully.`,
      icon: 'checkmark',
    };
  }

  if (isWire && request.wireInstructionsAccessed) {
    return {
      title: 'In Progress',
      subStatusLabel: 'Wire instructions accessed',
      subStatusBg: '#deeff9',
      subStatusIconColor: '#156FBE',
      subStatusTextColor: '#102754',
      dotFill: '#156FBE',
      description: `${request.clientName} has accessed the wire instructions.`,
      icon: 'send',
    };
  }

  if (request.paymentPath === 'digital' && request.paymentStatus) {
    const firstEvent = request.timeline[0];
    if (!firstEvent) return null;

    const isCompleted = request.paymentStatus === 'completed';
    const isFailed = request.paymentStatus === 'failed' || request.paymentStatus === 'unable_to_process';

    const statusTitle = isCompleted ? 'Completed' : isFailed ? 'Failed' : 'Pending';
    const dotColor = isCompleted ? '#00A566' : isFailed ? '#E53935' : '#156FBE';
    const badgeBg = isCompleted ? '#e9fff2' : isFailed ? '#fde8e8' : '#deeff9';
    const iconColor = isCompleted ? '#00A566' : isFailed ? '#E53935' : '#156FBE';
    const textColor = isCompleted ? '#555' : isFailed ? '#E53935' : '#102754';

    const descriptions: Record<string, string> = {
      'pending_crediting': "The buyer's funds have been verified, and are being sent to your escrow account.",
      'pending_processing': "The buyer's payment is being processed and verified.",
      'pending_debiting': "The buyer's bank account is being debited.",
      'completed': "The buyer's funds have been deposited into your escrow account.",
      'failed': "The payment could not be completed.",
      'unable_to_process': "The payment could not be processed.",
    };

    return {
      title: statusTitle,
      subStatusLabel: firstEvent.label,
      subStatusBg: badgeBg,
      subStatusIconColor: iconColor,
      subStatusTextColor: textColor,
      dotFill: dotColor,
      description: descriptions[request.paymentStatus] || '',
      icon: isCompleted ? 'checkmark' : 'send',
    };
  }

  // Early lifecycle - sent/opened/started with no payment yet
  if (request.timeline.length > 0) {
    const firstEvent = request.timeline[0];
    const personName = firstEvent.byPerson || request.clientName;
    const labelLower = firstEvent.label.toLowerCase();

    let description = '';
    if (labelLower.includes('opened')) {
      description = `The request was opened by ${personName}`;
    } else if (labelLower.includes('started')) {
      description = `The request was started by ${personName}`;
    } else if (labelLower.includes('sent')) {
      description = `The request was sent by ${personName}`;
    }

    return {
      title: firstEvent.label,
      subStatusLabel: '',
      subStatusBg: '',
      subStatusIconColor: '',
      subStatusTextColor: '',
      dotFill: '#156FBE',
      description,
      icon: 'send',
    };
  }

  return null;
}

/** Sub-status icon: checkmark circle or send/paper-plane */
function SubStatusIcon({ type, color }: { type: 'checkmark' | 'send'; color: string }) {
  if (type === 'checkmark') {
    return (
      <svg className="shrink-0" width={24} height={24} viewBox="0 0 24 24" fill="none">
        <g transform="translate(2,2)">
          <path clipRule="evenodd" d={activitySvg.p27733600} fill={color} fillRule="evenodd" />
          <path d={activitySvg.pf3b9100} fill={color} />
        </g>
      </svg>
    );
  }
  return (
    <svg className="shrink-0" width={24} height={24} viewBox="0 0 24 24" fill="none">
      <g transform="translate(2.25,2.25)">
        <path clipRule="evenodd" d={subStatusSvg.p2ccfd200} fill={color} fillRule="evenodd" />
      </g>
    </svg>
  );
}

/** The full activity timeline component */
function ActivityTimeline({ request }: { request: PaymentRequest }) {
  // Started/Opened lifecycle → always use the new Started design from Figma
  const isStartedOrOpened = request.requestStatus === 'started' || request.requestStatus === 'opened';
  // Sent with no payment activity yet → also use the Started design
  const isSentEarly = request.requestStatus === 'sent' && !request.paymentStatus && !(request.paymentPath === 'wire' && (request.wireInstructionsAccessed || request.requestStatus === 'certified'));

  if (isStartedOrOpened || isSentEarly) {
    // Always show "Request Started" — never "Request Opened"
    const statusTitle = request.requestStatus === 'sent' ? 'Request Sent' : 'Request Started';

    // Find the matching status timeline event for the date (not action events)
    const statusEvent = request.timeline.find(
      e => e.type === 'status' && e.label.toLowerCase().includes(request.requestStatus)
    ) || request.timeline.find(e => e.type === 'status') || request.timeline[0];

    if (!statusEvent) return null;

    const personName = statusEvent.byPerson || request.clientName;

    const description = request.requestStatus === 'sent'
      ? `The request was sent by ${personName}`
      : `The request was started by ${personName}`;

    // Filter out action events (e.g. "Wire instructions downloaded") and the status event used for the card
    // Rename any "Request Opened" labels to "Request Started" in sub-events
    const subEvents = request.timeline
      .filter(e => e !== statusEvent && e.type !== 'action')
      .map(e => e.label === 'Request Opened'
        ? { ...e, label: 'Request Started' }
        : e
      );

    return (
      <ActivityTimelineStarted
        statusTitle={statusTitle}
        statusDescription={description}
        statusDate={`${statusEvent.date} at ${statusEvent.time}`}
        events={subEvents}
      />
    );
  }

  const config = getStatusCardConfig(request);
  if (!config) return null;

  // For wire path: first event is CertifID, action events are folded into the status card, rest are regular
  // For digital path: first event is the current status (folded into card), rest are regular
  const isWire = request.paymentPath === 'wire';
  const regularEvents = isWire
    ? request.timeline.filter(e => e.label !== 'CertifID' && e.type !== 'action')
    : request.timeline.slice(1);

  const statusDate = isWire
    ? (() => {
        const wireEvent = request.timeline.find(e => e.type === 'action');
        const certEvent = request.timeline.find(e => e.label === 'CertifID');
        const ev = wireEvent || certEvent;
        return ev ? `${ev.date} at ${ev.time}` : '';
      })()
    : `${request.timeline[0]?.date} at ${request.timeline[0]?.time}`;

  return (
    <div className="flex flex-col items-start mb-[24px]">
      {/* ── Status Card ── */}
      <div className="bg-white relative rounded-[8px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex gap-[12px] items-start pb-[24px] pt-[16px] px-[16px] relative w-full">
          {/* Dot + vertical line */}
          <div className="flex flex-col gap-[4px] items-center shrink-0 w-[12px] self-stretch">
            <svg className="shrink-0" width={12} height={12} viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5.5" stroke="#A0A2A4" />
              <circle cx="6" cy="6" r="3" fill={config.dotFill} />
            </svg>
            <div className="flex-[1_0_0] min-h-[19px] w-0 border-l border-dashed border-[#ddd]" />
          </div>
          {/* Content */}
          <div className="flex-1 flex flex-col gap-[12px] items-start min-w-0">
            <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] text-[#555] text-[20px] w-full">{config.title}</p>
            {config.subStatusLabel && (
              <div className="flex gap-[4px] items-center justify-center p-[8px] rounded-[6px]" style={{ backgroundColor: config.subStatusBg }}>
                <SubStatusIcon type={config.icon} color={config.subStatusIconColor} />
                <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] text-[16px] whitespace-nowrap" style={{ color: config.subStatusTextColor }}>{config.subStatusLabel}</p>
              </div>
            )}
            {config.description && (
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] text-[#2b3034] text-[16px] min-w-full">{config.description}</p>
            )}
            <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] text-[#555] text-[14.4px]">{statusDate}</p>
          </div>
        </div>
      </div>

      {/* ── Connecting line between card and events ── */}
      {regularEvents.length > 0 && (
        <div className="flex items-center pt-[4px] px-[20px] w-full">
          <div className="w-[1px] h-[24px] bg-[#ddd]" />
        </div>
      )}

      {/* ── Activity Events ── */}
      {regularEvents.length > 0 && (
        <div className="flex gap-[12px] items-start px-[16px]">
          {/* Dots + lines column */}
          <div className="flex flex-col items-center w-[8px]">
            {regularEvents.map((_event, idx) => {
              const isLast = idx === regularEvents.length - 1;
              return (
                <div key={idx} className="flex flex-col items-center">
                  {/* Connecting line above dot (except first) */}
                  {idx > 0 && (
                    <div className="w-[1px] h-[69px] bg-[#ddd]" />
                  )}
                  {/* Small circle dot */}
                  <svg className="shrink-0" width={8} height={8} viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="3.5" stroke="#A0A2A4" />
                  </svg>
                </div>
              );
            })}
          </div>
          {/* Activity text items */}
          <div className="flex-1 flex flex-col gap-[24px] text-[#555]">
            {regularEvents.map((event, idx) => (
              <div key={idx} className="flex flex-col gap-[7px] items-start w-full">
                <p className="font-['Oxygen:Bold',sans-serif] text-[16px] w-full">
                  <span className="leading-[1.5]">{event.label} </span>
                  {event.byPerson && (
                    <span className="font-['Oxygen:Regular',sans-serif] leading-[1.5]">{event.byPerson.startsWith('by ') ? event.byPerson : `by ${event.byPerson}`}</span>
                  )}
                </p>
                <p className="font-['Oxygen:Regular',sans-serif] text-[14.4px] w-full leading-[1.5]">
                  {event.date} at {event.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function PaymentRequestDetail({ request, onBack }: PaymentRequestDetailProps) {
  const hasPaymentDetails = request.paymentPath === 'digital' && request.paymentStatus;
  const hasWireDetails = request.paymentPath === 'wire';

  return (
    <div className="flex-1 flex flex-col min-w-0 overflow-auto bg-[#f5f5f5]">
      {/* Dark Navy SubPage Header */}
      <div className="bg-[rgba(16,39,84,0.9)] flex flex-col gap-[4px] items-start px-[24px] pt-[24px] pb-[56px] shrink-0">
        {/* Back button */}
        <button onClick={onBack} className="flex items-center gap-[4px] shrink-0 cursor-pointer mb-[8px]">
          <div className="shrink-0 size-[18px] relative">
            <div className="absolute inset-[16.67%_31.25%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.75 12">
                <path d={svgPaths.p609e480} fill="#B7DEFF" />
              </svg>
            </div>
          </div>
          <span className="font-['Oxygen:Bold',sans-serif] text-[#b7deff] text-[12px] uppercase leading-[1.5]">Back</span>
        </button>

        {/* Name row with Download PDF button */}
        <div className="flex items-center justify-between w-full gap-[24px]">
          <h1 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-[48px] leading-[1.5]">
            {request.clientName}
          </h1>
          <button className="bg-[#00a566] flex gap-[16px] h-[48px] items-center justify-center px-[16px] py-[10px] rounded-[6px] shrink-0 cursor-pointer">
            <span className="font-['Oxygen:Bold',sans-serif] text-white text-[16px] whitespace-nowrap">Download PDF</span>
            <svg width="17" height="20" viewBox="0 0 17.052 19.8647" fill="none">
              <path d="M10.7843 12.8076C11.1985 12.8076 11.5343 13.1434 11.5343 13.5576C11.5343 13.9373 11.2521 14.2511 10.8861 14.3008L10.7843 14.3076H5.3873C4.97309 14.3076 4.6373 13.9718 4.6373 13.5576C4.6373 13.1779 4.91945 12.8641 5.28553 12.8144L5.3873 12.8076H10.7843Z" fill="white" />
              <path fillRule="evenodd" clipRule="evenodd" d="M8.0858 0C8.46553 0 8.78083 0.282154 8.83053 0.648229L8.8358 0.75V11.3787L11.3485 8.91451C11.6357 8.63319 12.0944 8.61213 12.4058 8.85132L12.4914 8.92889C12.7769 9.21199 12.7982 9.66292 12.5553 9.96978L12.4762 10.0535L8.64902 13.7967C8.36183 14.078 7.90322 14.0989 7.59183 13.86L7.50618 13.7824L3.69338 10.0535C3.39817 9.76361 3.39817 9.29266 3.69338 9.00277C3.96678 8.7346 4.39818 8.71441 4.69478 8.94261L4.77898 9.02181L7.3358 11.4893V0.75C7.3358 0.335786 7.67159 0 8.0858 0ZM15.5518 15.0576C15.9661 15.0576 16.3018 15.3934 16.3018 15.8076V17.0576C16.3018 18.4383 15.1826 19.5576 13.8018 19.5576H2.3718C0.991023 19.5576 -0.128174 18.4383 -0.128174 17.0576V15.8076C-0.128174 15.3934 0.207612 15.0576 0.621826 15.0576C1.00155 15.0576 1.31685 15.3398 1.36655 15.7058L1.37183 15.8076V17.0576C1.37183 17.5958 1.78791 18.0369 2.31519 18.0992L2.3718 18.1036L2.37183 18.0576H13.8018L13.8585 18.1036C14.3858 18.0412 14.8018 17.6001 14.8018 17.0619V15.8076C14.8018 15.3934 15.1376 15.0576 15.5518 15.0576Z" fill="white" />
            </svg>
          </button>
        </div>

        {/* Address */}
        <p className="font-['Oxygen:Regular',sans-serif] text-[#b7deff] text-[16px] leading-[1.5]">
          {request.propertyAddress}
        </p>
        <div className="bg-[#156fbe] h-px w-[20px] mt-[4px]" />
      </div>

      {/* White container card - overlaps header with negative margin */}
      <div className="px-[24px] pb-[24px] relative z-10 mt-[-32px]">
        <div className="bg-white rounded-[4px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] p-[24px]">
          {/* Two-column layout */}
          <div className="flex gap-[32px] items-start">
            {/* ─── Left Column ─── */}
            <div className="w-[440px] shrink-0 flex flex-col gap-[0px]">
              {/* Amount */}
              <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[14px] mb-[4px]">Amount</p>
              <p className="font-['Oxygen:Bold',sans-serif] text-[#102754] text-[36px] leading-[1.3] mb-[20px]">{request.amount}</p>

              {/* Activity Timeline */}
              <ActivityTimeline request={request} />

              {/* Meta info: Office, Sent by, Email */}
              
            </div>

            {/* ─── Right Column ─── */}
            <div className="flex-1 min-w-0 flex flex-col gap-[24px]">

              {/* ── Request Details Card (for wire + request-only flows) ── */}
              {(hasWireDetails || (!hasPaymentDetails && !hasWireDetails)) && (
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-[16px]">
                    <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[24px] leading-[1.5]">
                      <p>Request details</p>
                    </div>
                    <div className="bg-white flex gap-[8px] h-[40px] items-center px-[16px] py-[10px] relative rounded-[6px] shrink-0 cursor-pointer">
                      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                      <div className="relative shrink-0 size-[19px]">
                        <div className="absolute inset-[16.67%_8.33%]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.833 12.667">
                            <path d={svgPaths.p409c480} fill="#555555" />
                          </svg>
                        </div>
                      </div>
                      <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] text-[#555] text-[14.4px] whitespace-nowrap">SHOW</p>
                    </div>
                  </div>
                  {/* Details Box */}
                  <div className="bg-[#f7f7f7] flex gap-[24px] items-start leading-[1.5] p-[20px] rounded-[6px] text-[16px] text-[#555]">
                    {/* Left Column */}
                    <div className="flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px">
                      <div className="flex flex-col items-start">
                        <p className="font-['Oxygen:Bold',sans-serif]">Buyer name</p>
                        <p className="font-['Oxygen:Regular',sans-serif]">{request.clientName}</p>
                      </div>
                      <div className="flex flex-col items-start">
                        <p className="font-['Oxygen:Bold',sans-serif]">Purpose</p>
                        <p className="font-['Oxygen:Regular',sans-serif]">{request.purpose === 'cash_to_close' ? 'Cash to close' : 'Earnest money'}</p>
                      </div>
                      <div className="flex flex-col items-start">
                        <p className="font-['Oxygen:Bold',sans-serif]">Closing date</p>
                        <p className="font-['Oxygen:Regular',sans-serif]">{request.closingDateTime || request.closingDate}</p>
                      </div>
                      <div className="flex flex-col items-start">
                        <p className="font-['Oxygen:Bold',sans-serif]">Property address</p>
                        <p className="font-['Oxygen:Regular',sans-serif]">{request.propertyAddress}</p>
                      </div>
                      <div className="flex flex-col items-start">
                        <p className="font-['Oxygen:Bold',sans-serif]">Payment methods offered</p>
                        <p className="font-['Oxygen:Regular',sans-serif]">{request.paymentMethodsOffered || 'Instant Payment, Wire Transfer'}</p>
                      </div>
                    </div>
                    {/* Right Column */}
                    <div className="flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px">
                      <div className="flex flex-col items-start">
                        <p className="font-['Oxygen:Bold',sans-serif]">File number</p>
                        <p className="font-['Oxygen:Regular',sans-serif] text-[#156fbe]">{request.fileNumber}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Payment Details Card (for instant payment flows) ── */}
              {hasPaymentDetails && (
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-[16px]">
                    <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[24px] leading-[1.5]">
                      <p>Payment details</p>
                    </div>
                    <div className="bg-white flex gap-[8px] h-[40px] items-center px-[16px] py-[10px] relative rounded-[6px] shrink-0 cursor-pointer">
                      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                      <div className="relative shrink-0 size-[19px]">
                        <div className="absolute inset-[16.67%_8.33%]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.833 12.667">
                            <path d={svgPaths.p409c480} fill="#555555" />
                          </svg>
                        </div>
                      </div>
                      <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] text-[#555] text-[14.4px] whitespace-nowrap">SHOW</p>
                    </div>
                  </div>
                  {/* Details Box */}
                  <div className="bg-[#f7f7f7] flex gap-[24px] items-start leading-[1.5] p-[20px] rounded-[6px] text-[16px] text-[#555]">
                    {/* Left Column */}
                    <div className="flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px">
                      <div className="flex flex-col items-start">
                        <p className="font-['Oxygen:Bold',sans-serif]">Destination account</p>
                        <p className="font-['Oxygen:Regular',sans-serif]">{request.destinationAccount}</p>
                      </div>
                      <div className="flex flex-col items-start">
                        <p className="font-['Oxygen:Bold',sans-serif]">Closing office</p>
                        <p className="font-['Oxygen:Regular',sans-serif]">{request.office}</p>
                      </div>
                      <div className="flex flex-col items-start">
                        <p className="font-['Oxygen:Bold',sans-serif]">Transfer type</p>
                        <p className="font-['Oxygen:Regular',sans-serif]">{request.transferType}</p>
                      </div>
                      <div className="flex flex-col items-start">
                        <p className="font-['Oxygen:Bold',sans-serif]">Purpose</p>
                        <p className="font-['Oxygen:Regular',sans-serif]">{request.purpose === 'cash_to_close' ? 'Cash to close' : 'Earnest money'}</p>
                      </div>
                      {request.referenceId && (
                        <div className="flex flex-col items-start w-full">
                          <p className="font-['Oxygen:Bold',sans-serif]">Notes</p>
                          <p className="font-['Oxygen:Regular',sans-serif]">{request.referenceId}</p>
                        </div>
                      )}
                    </div>
                    {/* Right Column */}
                    <div className="flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px">
                      <div className="flex flex-col items-start">
                        <p className="font-['Oxygen:Bold',sans-serif]">File number</p>
                        <p className="font-['Oxygen:Regular',sans-serif] text-[#156fbe]">{request.fileNumber}</p>
                      </div>
                      {request.transactionId && (
                        <div className="flex flex-col items-start">
                          <p className="font-['Oxygen:Bold',sans-serif]">Transaction ID</p>
                          <p className="font-['Oxygen:Regular',sans-serif]">{request.transactionId}</p>
                        </div>
                      )}
                      {request.debitId && (
                        <div className="flex flex-col items-start">
                          <p className="font-['Oxygen:Bold',sans-serif]">Debit ID</p>
                          <p className="font-['Oxygen:Regular',sans-serif]">{request.debitId}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ── Buyer Details Card ── */}
              {(request.clientEmail || request.clientPhone) && (
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-[16px]">
                    <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[24px] leading-[1.5]">
                      <p>Buyer details</p>
                    </div>
                  </div>
                  {/* Details Box */}
                  <div className="bg-[#f7f7f7] flex gap-[24px] items-start leading-[1.5] p-[20px] rounded-[6px] text-[16px] text-[#555]">
                    {/* Left Column */}
                    <div className="flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px">
                      <div className="flex flex-col items-start">
                        <p className="font-['Oxygen:Bold',sans-serif]">Name</p>
                        <p className="font-['Oxygen:Regular',sans-serif]">{request.clientName}</p>
                      </div>
                      {request.clientPhone && (
                        <div className="flex flex-col items-start">
                          <p className="font-['Oxygen:Bold',sans-serif]">Phone</p>
                          <p className="font-['Oxygen:Regular',sans-serif]">{request.clientPhone}</p>
                        </div>
                      )}
                      {request.paymentMethod && (
                        <div className="flex flex-col items-start">
                          <p className="font-['Oxygen:Bold',sans-serif]">Payment method</p>
                          <p className="font-['Oxygen:Regular',sans-serif]">{request.paymentMethod}</p>
                        </div>
                      )}
                      {request.clientHomeAddress && (
                        <div className="flex flex-col items-start w-full">
                          <p className="font-['Oxygen:Bold',sans-serif]">Current home address</p>
                          <p className="font-['Oxygen:Regular',sans-serif]">{request.clientHomeAddress}</p>
                        </div>
                      )}
                    </div>
                    {/* Right Column */}
                    <div className="flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px">
                      {request.clientEmail && (
                        <div className="flex flex-col items-start">
                          <p className="font-['Oxygen:Bold',sans-serif]">Email</p>
                          <p className="font-['Oxygen:Regular',sans-serif]">{request.clientEmail}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ── Wire Instructions Card ── */}
              {hasWireDetails && request.bankName && (
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-[16px]">
                    <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[24px] leading-[1.5]">
                      <p>Wire instructions</p>
                    </div>
                  </div>
                  {/* Details Box */}
                  <div className="bg-[#f7f7f7] flex gap-[24px] items-start leading-[1.5] p-[20px] rounded-[6px] text-[16px] text-[#555]">
                    {/* Left Column */}
                    <div className="flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px">
                      <div className="flex flex-col items-start">
                        <p className="font-['Oxygen:Bold',sans-serif]">Bank name</p>
                        <p className="font-['Oxygen:Regular',sans-serif]">{request.bankName}</p>
                      </div>
                      <div className="flex flex-col items-start">
                        <p className="font-['Oxygen:Bold',sans-serif]">Account number</p>
                        <p className="font-['Oxygen:Regular',sans-serif]">{request.accountNumber}</p>
                      </div>
                      {request.wireReference && (
                        <div className="flex flex-col items-start w-full">
                          <p className="font-['Oxygen:Bold',sans-serif]">Reference</p>
                          <p className="font-['Oxygen:Regular',sans-serif]">{request.wireReference}</p>
                        </div>
                      )}
                    </div>
                    {/* Right Column */}
                    <div className="flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px">
                      <div className="flex flex-col items-start">
                        <p className="font-['Oxygen:Bold',sans-serif]">Routing number</p>
                        <p className="font-['Oxygen:Regular',sans-serif]">{request.routingNumber}</p>
                      </div>
                      {request.accountName && (
                        <div className="flex flex-col items-start">
                          <p className="font-['Oxygen:Bold',sans-serif]">Account name</p>
                          <p className="font-['Oxygen:Regular',sans-serif]">{request.accountName}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ── Empty state for early lifecycle (no wire, no payment) ── */}
              {!hasPaymentDetails && !hasWireDetails && (request.requestStatus === 'sent' || request.requestStatus === 'opened') && !request.wireInstructionsAccessed && (
                <div className="border-[2px] border-dashed border-[#ddd] rounded-[8px] p-[32px] flex flex-col items-center justify-center text-center">
                  <div className="size-[48px] mb-[16px]">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="23" stroke="#ddd" strokeWidth="2" strokeDasharray="6 4" />
                      <circle cx="24" cy="24" r="4" fill="#ddd" />
                    </svg>
                  </div>
                  <p className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px] leading-[1.5] mb-[4px]">
                    {request.requestStatus === 'sent'
                      ? 'Waiting for buyer to open the request.'
                      : 'Buyer has opened the request. Waiting for payment method selection.'
                    }
                  </p>
                  <p className="font-['Oxygen:Regular',sans-serif] text-[#a0a2a4] text-[14px] leading-[1.5]">
                    Details will appear here as the buyer progresses.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}