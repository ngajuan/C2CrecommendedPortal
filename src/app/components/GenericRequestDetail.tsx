import { useState } from 'react';
import { GenericRequest } from './mockData';
import svgPaths from '@/imports/svg-6pkxmj2cve';
import { ActivityTimelineStarted } from './ActivityTimelineStarted';

interface GenericRequestDetailProps {
  request: GenericRequest;
  onBack: () => void;
}

// Green checkmark for Complete
function CompleteDot() {
  return (
    <svg className="shrink-0" width={20} height={20} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="#00A566" />
      <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Gray outlined dot for regular status events
function StatusDot() {
  return (
    <svg className="shrink-0" width={12} height={12} viewBox="0 0 12 12" fill="none">
      <circle cx="6" cy="6" r="5" stroke="#A0A2A4" strokeWidth="2" />
    </svg>
  );
}

function getProgressSteps(status: string): { label: string; reached: boolean }[] {
  const steps = [
    { label: 'Opened', reached: false },
    { label: 'Started', reached: false },
    { label: 'Complete', reached: false },
  ];
  if (status === 'opened' || status === 'started' || status === 'complete') steps[0].reached = true;
  if (status === 'started' || status === 'complete') steps[1].reached = true;
  if (status === 'complete') steps[2].reached = true;
  return steps;
}

function getStatusPillColor(status: string): string {
  if (status === 'complete') return '#00A566';
  return '#156fbe';
}

function getStatusPillLabel(status: string): string {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export function GenericRequestDetail({ request, onBack }: GenericRequestDetailProps) {
  const [showDetails, setShowDetails] = useState(true);
  const progressSteps = getProgressSteps(request.requestStatus);
  const isConfirm = request.type === 'confirm';
  const hasBankDetails = isConfirm && request.bankName;

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

        {/* Name row with Manage button */}
        <div className="flex items-center justify-between w-full gap-[24px]">
          <h1 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-[48px] leading-[1.5]">
            {request.clientName}
          </h1>
          <button className="bg-[#156fbe] flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[10px] rounded-[6px] shrink-0 cursor-pointer">
            <span className="font-['Oxygen:Bold',sans-serif] text-white text-[16px] whitespace-nowrap">Manage</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Role */}
        <p className="font-['Oxygen:Regular',sans-serif] text-[#b7deff] text-[16px] leading-[1.5]">
          {request.clientRole}
        </p>
        <div className="bg-[#156fbe] h-px w-[20px] mt-[4px]" />
      </div>

      {/* White container card - overlaps header with negative margin */}
      <div className="px-[24px] pb-[24px] relative z-10 mt-[-32px]">
        <div className="bg-white rounded-[4px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] p-[24px]">
          {/* Two-column layout */}
          <div className="flex gap-[32px] items-start">
            {/* ─── Left Column ─── */}
            <div className="w-[280px] shrink-0 flex flex-col gap-[0px]">
              {/* Status Pill */}
              <div
                className="rounded-[20px] text-white text-center py-[8px] px-[24px] mb-[20px]"
                style={{ backgroundColor: getStatusPillColor(request.requestStatus) }}
              >
                <span className="font-['Oxygen:Bold',sans-serif] text-[16px]">
                  {getStatusPillLabel(request.requestStatus)}
                </span>
              </div>

              {/* Progress Stepper */}
              <div className="flex items-center mb-[20px]">
                {progressSteps.map((step, idx) => (
                  <div key={step.label} className="flex items-center flex-1">
                    {/* Checkbox */}
                    <div className={`w-[20px] h-[20px] rounded-[4px] border-2 flex items-center justify-center shrink-0 ${
                      step.reached ? 'bg-[#156fbe] border-[#156fbe]' : 'border-[#ddd] bg-white'
                    }`}>
                      {step.reached && (
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                          <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    {/* Line between steps */}
                    {idx < progressSteps.length - 1 && (
                      <div className={`flex-1 h-[2px] mx-[4px] ${
                        progressSteps[idx + 1].reached ? 'bg-[#156fbe]' : 'bg-[#ddd]'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              {/* Step labels */}
              <div className="flex mb-[20px]">
                {progressSteps.map((step) => (
                  <div key={step.label} className="flex-1">
                    <p className={`font-['Oxygen:Regular',sans-serif] text-[12px] ${
                      step.reached ? 'text-[#555]' : 'text-[#a0a2a4]'
                    }`}>{step.label}</p>
                  </div>
                ))}
              </div>

              {/* Status message box */}
              {request.statusMessage && (
                <div className="bg-[#f0f6ff] border border-[#b7deff] rounded-[6px] p-[12px] mb-[20px]">
                  <div className="flex items-start gap-[8px]">
                    <svg className="shrink-0 mt-[2px]" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="#156fbe" strokeWidth="2" />
                      <circle cx="8" cy="5" r="1" fill="#156fbe" />
                      <rect x="7" y="7" width="2" height="4" rx="1" fill="#156fbe" />
                    </svg>
                    <div>
                      <p className="font-['Oxygen:Bold',sans-serif] text-[#283c65] text-[13px] leading-[1.5]">
                        {request.statusMessage}
                      </p>
                      {request.statusDetail && (
                        <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[13px] leading-[1.5] mt-[2px]">
                          {request.statusDetail}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Activity Timeline Card */}
              {(request.requestStatus === 'started' || request.requestStatus === 'opened') && request.timeline.length > 0 ? (
                (() => {
                  const firstEvent = request.timeline[0];
                  const personName = firstEvent.byPerson || request.clientName;
                  const labelLower = firstEvent.label.toLowerCase();
                  let description = '';
                  if (labelLower.includes('started')) {
                    description = `The request was started by ${personName}`;
                  } else if (labelLower.includes('opened')) {
                    description = `The request was opened by ${personName}`;
                  } else if (labelLower.includes('sent') || labelLower.includes('invite')) {
                    description = `The request was sent to ${request.clientName}`;
                  }
                  return (
                    <div className="mb-[24px]">
                      <ActivityTimelineStarted
                        statusTitle={firstEvent.label}
                        statusDescription={description}
                        statusDate={`${firstEvent.date} at ${firstEvent.time}`}
                        events={request.timeline.slice(1)}
                      />
                    </div>
                  );
                })()
              ) : (
                <div className="bg-white rounded-[8px] border border-[#ddd] p-[20px] mb-[24px]">
                  <p className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px] mb-[16px]">Activity</p>
                  <div className="flex gap-[12px] items-start">
                    {/* Timeline dots + lines */}
                    <div className="flex flex-col items-center pt-[2px]">
                      {request.timeline.map((event, idx) => {
                        const isComplete = event.label === 'Complete';
                        const isLast = idx === request.timeline.length - 1;

                        return (
                          <div key={idx} className="flex flex-col items-center">
                            <div className="flex items-center justify-center" style={{ width: isComplete ? 20 : 12, height: isComplete ? 20 : 12 }}>
                              {isComplete ? <CompleteDot /> : <StatusDot />}
                            </div>
                            {!isLast && (
                              <div className="w-[1px] bg-[#ddd]" style={{ height: isComplete ? 36 : 40 }} />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Activity items */}
                    <div className="flex-1 flex flex-col">
                      {request.timeline.map((event, idx) => {
                        const isComplete = event.label === 'Complete';
                        return (
                          <div key={idx} className="flex items-baseline gap-[12px]" style={{ height: idx === request.timeline.length - 1 ? 'auto' : isComplete ? 56 : 52 }}>
                            <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[14px] leading-[1.5] min-w-0">
                              <span className="font-['Oxygen:Bold',sans-serif]">{event.label}</span>
                              {event.byPerson && (
                                <span> by {event.byPerson}</span>
                              )}
                            </p>
                            <p className="font-['Oxygen:Regular',sans-serif] text-[#a0a2a4] text-[13px] leading-[1.5] whitespace-nowrap ml-auto">
                              {event.date}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Divider */}
              <div className="h-px bg-[#ddd] mb-[16px]" />

              {/* Meta info: Office, Sent by, Email */}
              <div className="flex flex-col gap-[16px]">
                <div>
                  <p className="font-['Oxygen:Regular',sans-serif] text-[#a0a2a4] text-[13px] leading-[1.5]">Office</p>
                  <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[15px] leading-[1.5]">{request.office}</p>
                </div>
                <div>
                  <p className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[13px] leading-[1.5]">Sent by:</p>
                  <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[15px] leading-[1.5]">{request.sentBy}</p>
                </div>
                {request.senderEmail && (
                  <div>
                    <p className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[13px] leading-[1.5]">Email:</p>
                    <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[15px] leading-[1.5]">{request.senderEmail}</p>
                  </div>
                )}
              </div>
            </div>

            {/* ─── Right Column ─── */}
            <div className="flex-1 min-w-0 flex flex-col gap-[24px]">

              {/* ── Request Details Card ── */}
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-[16px]">
                  <p className="font-['DM_Serif_Display:Regular',sans-serif] text-[#555] text-[24px] leading-[1.5]">
                    Request details
                  </p>
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="bg-white flex gap-[8px] h-[40px] items-center px-[16px] py-[10px] relative rounded-[6px] shrink-0 cursor-pointer"
                  >
                    <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                    <div className="relative shrink-0 size-[19px]">
                      <div className="absolute inset-[16.67%_8.33%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.833 12.667">
                          <path d={svgPaths.p409c480} fill="#555555" />
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] text-[#555] text-[14.4px] whitespace-nowrap">
                      {showDetails ? 'HIDE' : 'SHOW'}
                    </p>
                  </button>
                </div>

                {showDetails && (
                  <div className="bg-[#f7f7f7] flex gap-[24px] items-start leading-[1.5] p-[20px] rounded-[6px] text-[16px] text-[#555]">
                    {/* Left Column */}
                    <div className="flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px">
                      {isConfirm ? (
                        <>
                          {request.recipientRole && (
                            <div className="flex flex-col items-start">
                              <p className="font-['Oxygen:Bold',sans-serif]">Recipient role</p>
                              <p className="font-['Oxygen:Regular',sans-serif]">{request.recipientRole}</p>
                            </div>
                          )}
                          {request.recipientType && (
                            <div className="flex flex-col items-start">
                              <p className="font-['Oxygen:Bold',sans-serif]">Recipient type</p>
                              <p className="font-['Oxygen:Regular',sans-serif]">{request.recipientType}</p>
                            </div>
                          )}
                          {request.trustName && (
                            <div className="flex flex-col items-start">
                              <p className="font-['Oxygen:Bold',sans-serif]">Trust name</p>
                              <p className="font-['Oxygen:Regular',sans-serif]">{request.trustName}</p>
                            </div>
                          )}
                          {request.representativeName && (
                            <div className="flex flex-col items-start">
                              <p className="font-['Oxygen:Bold',sans-serif]">Representative name</p>
                              <p className="font-['Oxygen:Regular',sans-serif]">{request.representativeName}</p>
                            </div>
                          )}
                          {request.representativeEmail && (
                            <div className="flex flex-col items-start">
                              <p className="font-['Oxygen:Bold',sans-serif]">Representative email</p>
                              <p className="font-['Oxygen:Regular',sans-serif]">{request.representativeEmail}</p>
                            </div>
                          )}
                          {request.representativePhone && (
                            <div className="flex flex-col items-start">
                              <p className="font-['Oxygen:Bold',sans-serif]">Representative phone</p>
                              <p className="font-['Oxygen:Regular',sans-serif]">{request.representativePhone}</p>
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          <div className="flex flex-col items-start">
                            <p className="font-['Oxygen:Bold',sans-serif]">Recipient name</p>
                            <p className="font-['Oxygen:Regular',sans-serif]">{request.clientName}</p>
                          </div>
                          <div className="flex flex-col items-start">
                            <p className="font-['Oxygen:Bold',sans-serif]">Recipient role</p>
                            <p className="font-['Oxygen:Regular',sans-serif]">{request.clientRole}</p>
                          </div>
                          {request.collectDocumentType && (
                            <div className="flex flex-col items-start">
                              <p className="font-['Oxygen:Bold',sans-serif]">Document type</p>
                              <p className="font-['Oxygen:Regular',sans-serif]">{request.collectDocumentType}</p>
                            </div>
                          )}
                          {request.collectDescription && (
                            <div className="flex flex-col items-start">
                              <p className="font-['Oxygen:Bold',sans-serif]">Description</p>
                              <p className="font-['Oxygen:Regular',sans-serif]">{request.collectDescription}</p>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                    {/* Right Column */}
                    <div className="flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px">
                      {isConfirm && request.requestTypeLabel && (
                        <div className="flex flex-col items-start">
                          <p className="font-['Oxygen:Bold',sans-serif]">Request type</p>
                          <p className="font-['Oxygen:Regular',sans-serif]">{request.requestTypeLabel}</p>
                        </div>
                      )}
                      <div className="flex flex-col items-start">
                        <p className="font-['Oxygen:Bold',sans-serif]">File number</p>
                        <p className="font-['Oxygen:Regular',sans-serif] text-[#156fbe]">{request.fileNumber}</p>
                      </div>
                      {request.address && (
                        <div className="flex flex-col items-start">
                          <p className="font-['Oxygen:Bold',sans-serif]">Address</p>
                          <p className="font-['Oxygen:Regular',sans-serif]">{request.address}</p>
                        </div>
                      )}
                      {isConfirm && request.transactionAmount && (
                        <div className="flex flex-col items-start">
                          <p className="font-['Oxygen:Bold',sans-serif]">Transaction amount</p>
                          <p className="font-['Oxygen:Regular',sans-serif]">{request.transactionAmount}</p>
                        </div>
                      )}
                      {isConfirm && request.expectedSettlementDate && (
                        <div className="flex flex-col items-start">
                          <p className="font-['Oxygen:Bold',sans-serif]">Expected settlement date</p>
                          <p className="font-['Oxygen:Regular',sans-serif]">{request.expectedSettlementDate}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* ── Bank Details Card (Confirm only) ── */}
              {hasBankDetails && (
                <div>
                  <div className="flex items-center justify-between mb-[16px]">
                    <p className="font-['DM_Serif_Display:Regular',sans-serif] text-[#555] text-[24px] leading-[1.5]">
                      Bank details
                    </p>
                  </div>

                  {/* Info banner */}
                  {request.bankInfoMessage && (
                    <div className="bg-[#fffbf0] border border-[#f5c842] rounded-[6px] p-[12px] mb-[16px]">
                      <div className="flex items-start gap-[8px]">
                        <svg className="shrink-0 mt-[2px]" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="7" stroke="#156fbe" strokeWidth="2" />
                          <circle cx="8" cy="5" r="1" fill="#156fbe" />
                          <rect x="7" y="7" width="2" height="4" rx="1" fill="#156fbe" />
                        </svg>
                        <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[14px] leading-[1.5]">
                          {request.bankInfoMessage}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="bg-[#f7f7f7] rounded-[6px] p-[20px] text-[16px] text-[#555] leading-[1.5]">
                    {/* Bank name and routing numbers */}
                    <div className="flex gap-[24px] items-start mb-[20px]">
                      <div className="flex-1 flex flex-col gap-[4px]">
                        <p className="font-['Oxygen:Bold',sans-serif]">Bank name</p>
                        <p className="font-['Oxygen:Regular',sans-serif]">{request.bankName}</p>
                        {request.bankAddress && (
                          <p className="font-['Oxygen:Regular',sans-serif] text-[#555] whitespace-pre-line">{request.bankAddress}</p>
                        )}
                      </div>
                      <div className="flex-1 flex flex-col gap-[12px]">
                        {request.wireRoutingNumber && (
                          <div>
                            <p className="font-['Oxygen:Bold',sans-serif]">Wire routing number</p>
                            <p className="font-['Oxygen:Regular',sans-serif]">{request.wireRoutingNumber}</p>
                          </div>
                        )}
                        {request.achRoutingNumber && (
                          <div>
                            <p className="font-['Oxygen:Bold',sans-serif]">ACH routing number</p>
                            <p className="font-['Oxygen:Regular',sans-serif]">{request.achRoutingNumber}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-[#ddd] mb-[20px]" />

                    {/* Credit to */}
                    {request.creditToAccountHolder && (
                      <>
                        <p className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[14px] mb-[12px]">Credit to</p>
                        <div className="flex gap-[24px] items-start mb-[20px]">
                          <div className="flex-1">
                            <p className="font-['Oxygen:Bold',sans-serif]">Account holder</p>
                            <p className="font-['Oxygen:Regular',sans-serif]">{request.creditToAccountHolder}</p>
                          </div>
                          <div className="flex-1">
                            <p className="font-['Oxygen:Bold',sans-serif]">Account number</p>
                            <p className="font-['Oxygen:Regular',sans-serif]">{request.creditToAccountNumber}</p>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Final credit to */}
                    {request.finalCreditToName && (
                      <>
                        <div className="h-px bg-[#ddd] mb-[20px]" />
                        <p className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[14px] mb-[12px]">Final credit to</p>
                        <div className="flex gap-[24px] items-start">
                          <div className="flex-1">
                            <p className="font-['Oxygen:Bold',sans-serif]">Account name</p>
                            <p className="font-['Oxygen:Regular',sans-serif]">{request.finalCreditToName}</p>
                          </div>
                          <div className="flex-1">
                            <p className="font-['Oxygen:Bold',sans-serif]">Account number</p>
                            <p className="font-['Oxygen:Regular',sans-serif]">{request.finalCreditToAccountNumber}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* ── Collect Empty State (when no bank details, early lifecycle) ── */}
              {!isConfirm && request.requestStatus === 'sent' && (
                <div className="border-[2px] border-dashed border-[#ddd] rounded-[8px] p-[32px] flex flex-col items-center justify-center text-center">
                  <div className="size-[48px] mb-[16px]">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="23" stroke="#ddd" strokeWidth="2" strokeDasharray="6 4" />
                      <circle cx="24" cy="24" r="4" fill="#ddd" />
                    </svg>
                  </div>
                  <p className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px] leading-[1.5] mb-[4px]">
                    Waiting for recipient to open the request.
                  </p>
                  <p className="font-['Oxygen:Regular',sans-serif] text-[#a0a2a4] text-[14px] leading-[1.5]">
                    Document uploads will appear here once the recipient starts.
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