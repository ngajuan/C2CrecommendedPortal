import { TimelineEvent } from './mockData';

interface ActivityTimelineStartedProps {
  /** The most recent status event — rendered as the top status card */
  statusTitle: string;
  statusDescription: string;
  statusDate: string;
  /** Remaining events rendered below the card */
  events: TimelineEvent[];
}

/**
 * Shared "Started" activity timeline matching the Figma design.
 * Used in both PaymentRequestDetail and GenericRequestDetail for
 * requests whose table status is "Started" (internal opened/started).
 */
export function ActivityTimelineStarted({
  statusTitle,
  statusDescription,
  statusDate,
  events,
}: ActivityTimelineStartedProps) {
  return (
    <div className="flex flex-col items-start mb-[24px]">
      {/* ── Status Card ── */}
      <div className="bg-white relative rounded-[8px] shrink-0 w-full">
        <div
          aria-hidden="true"
          className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[8px]"
        />
        <div className="flex gap-[12px] items-start pb-[24px] pt-[16px] px-[16px] relative w-full">
          {/* Blue dot + dashed line */}
          <div className="flex flex-col gap-[4px] items-center shrink-0 w-[12px] self-stretch">
            <svg className="shrink-0" width={12} height={12} viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5.5" stroke="#A0A2A4" />
              <circle cx="6" cy="6" r="3" fill="#156FBE" />
            </svg>
            <div className="flex-[1_0_0] min-h-[19px] w-0 border-l border-dashed border-[#ddd]" />
          </div>
          {/* Content */}
          <div className="flex-1 flex flex-col gap-[12px] items-start min-w-0">
            <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] text-[#555] text-[20px] w-full">
              {statusTitle}
            </p>
            {statusDescription && (
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] text-[#2b3034] text-[16px] min-w-full">
                {statusDescription}
              </p>
            )}
            <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] text-[#555] text-[14.4px]">
              {statusDate}
            </p>
          </div>
        </div>
      </div>

      {/* ── Connecting dashed line between card and events ── */}
      {events.length > 0 && (
        <div className="flex items-center pt-[4px] px-[20px] w-full">
          <div className="w-0 h-[24px] border-l border-dashed border-[#ddd]" />
        </div>
      )}

      {/* ── Activity Events ── */}
      {events.length > 0 && (
        <div className="flex gap-[12px] items-start px-[16px]">
          {/* Dots + dashed lines column */}
          <div className="flex flex-col items-center w-[8px]">
            {events.map((_event, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {/* Dashed connecting line above dot (except first) */}
                {idx > 0 && (
                  <div className="w-0 h-[69px] border-l border-dashed border-[#A0A2A4]" />
                )}
                {/* Small hollow circle */}
                <svg className="shrink-0" width={8} height={8} viewBox="0 0 8 8" fill="none">
                  <circle cx="4" cy="4" r="3.5" stroke="#A0A2A4" />
                </svg>
              </div>
            ))}
          </div>
          {/* Activity text items */}
          <div className="flex-1 flex flex-col gap-[24px] text-[#555]">
            {events.map((event, idx) => (
              <div key={idx} className="flex flex-col gap-[7px] items-start w-full">
                <p className="font-['Oxygen:Bold',sans-serif] text-[16px] w-full">
                  <span className="leading-[1.5]">{event.label} </span>
                  {event.byPerson && (
                    <span className="font-['Oxygen:Regular',sans-serif] leading-[1.5]">
                      {event.byPerson.startsWith('by ') ? event.byPerson : `by ${event.byPerson}`}
                    </span>
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
