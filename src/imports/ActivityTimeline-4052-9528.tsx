import imgLine26 from "figma:asset/7b09ea33c9d7706b1598031ae90737a2d04af321.png";
import imgLine27 from "figma:asset/7d7ecd3e8304988b23535608a9a1525279b5931a.png";
import imgLine28 from "figma:asset/da83adcec8fef068d9b6d9755dab15405f88dbc4.png";
import imgLine29 from "figma:asset/730253d3210e5e83ba25047059eeb2f28f4931b3.png";

function StatusEllipse() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Status ellipse">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Status ellipse">
          <circle cx="6" cy="6" id="Ellipse 284" r="5.5" stroke="var(--stroke-0, #A0A2A4)" />
          <circle cx="6" cy="6" fill="var(--fill-0, #156FBE)" id="Ellipse 285" r="3" />
        </g>
      </svg>
    </div>
  );
}

function Lines() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0 w-[8px]" data-name="lines">
      <StatusEllipse />
      <div className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90 size-full">
          <div className="relative size-full">
            <div className="absolute inset-[-0.5px_-0.6%]">
              <img alt="" className="block max-w-none size-full" height="1" src={imgLine26} width="85" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusTitle() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Status title">
      <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[20px] w-[346px]">Request Started</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Container">
      <StatusTitle />
      <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#2b3034] text-[16px] w-[min-content]">The request was started by Jessie Owens</p>
      <p className="font-['Oxygen:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#555] text-[0px] text-[14.4px] w-[346px]">
        <span className="leading-[1.5]">01/14/2026</span>
        <span className="leading-[1.5]">{` at `}</span>
        <span className="leading-[1.5]">9</span>
        <span className="leading-[1.5]">:05 AM</span>
      </p>
    </div>
  );
}

function Status() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Status">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex gap-[12px] items-start pb-[24px] pt-[16px] px-[16px] relative w-full">
        <Lines />
        <Container />
      </div>
    </div>
  );
}

function ActivityLine() {
  return (
    <div className="relative shrink-0 w-full" data-name="Activity Line">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pt-[4px] px-[20px] relative w-full">
          <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[24px]">
                <div className="absolute inset-[-0.5px_-2.08%]">
                  <img alt="" className="block max-w-none size-full" height="1" src={imgLine27} width="25" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LineCouple() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="line couple">
      <div className="col-1 flex h-[69px] items-center justify-center ml-[4px] mt-0 relative row-1 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[69px]">
            <div className="absolute inset-[-0.5px_-0.72%]">
              <img alt="" className="block max-w-none size-full" height="1" src={imgLine29} width="70" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 ml-0 mt-[69px] relative row-1 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 285" r="3.5" stroke="var(--stroke-0, #A0A2A4)" />
        </svg>
      </div>
    </div>
  );
}

function Lines1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[8px]" data-name="Lines">
      <div className="flex h-[8px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[8px]">
            <div className="absolute inset-[-0.5px_-6.25%]">
              <img alt="" className="block max-w-none size-full" height="1" src={imgLine28} width="9" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[8px]" data-name="foundation ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="foundation ellipse" r="3.5" stroke="var(--stroke-0, #A0A2A4)" />
        </svg>
      </div>
      <LineCouple />
    </div>
  );
}

function ActivityItem() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full" data-name="Activity item">
      <p className="font-['Oxygen:Bold',sans-serif] relative shrink-0 text-[16px] w-full">
        <span className="leading-[1.5]">{`Request Opened by `}</span>
        <span className="font-['Oxygen:Regular',sans-serif] leading-[1.5]">Jessie Owens</span>
      </p>
      <p className="font-['Oxygen:Regular',sans-serif] relative shrink-0 text-[14.4px] w-full">
        <span className="leading-[1.5]">01/14/2026</span>
        <span className="leading-[1.5]">{` at `}</span>
        <span className="leading-[1.5]">9</span>
        <span className="leading-[1.5]">:05 AM</span>
      </p>
    </div>
  );
}

function ActivityItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full" data-name="Activity item">
      <p className="font-['Oxygen:Bold',sans-serif] relative shrink-0 text-[16px] w-full">
        <span className="leading-[1.5]">{`Request Sent `}</span>
        <span className="font-['Oxygen:Regular',sans-serif] leading-[1.5]">by Ramon Susa</span>
      </p>
      <p className="font-['Oxygen:Regular',sans-serif] relative shrink-0 text-[14.4px] w-full">
        <span className="leading-[1.5]">01/14/2026</span>
        <span className="leading-[1.5]">{` at `}</span>
        <span className="leading-[1.5]">9</span>
        <span className="leading-[1.5]">:03 AM</span>
      </p>
    </div>
  );
}

function Activities() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start leading-[0] min-h-px min-w-px not-italic relative text-[#555] text-[0px]" data-name="Activities">
      <ActivityItem />
      <ActivityItem1 />
    </div>
  );
}

function Event() {
  return (
    <div className="relative shrink-0 w-full" data-name="Event">
      <div className="content-stretch flex gap-[12px] items-start px-[16px] relative w-full">
        <Lines1 />
        <Activities />
      </div>
    </div>
  );
}

export default function ActivityTimeline() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Activity timeline">
      <Status />
      <ActivityLine />
      <Event />
    </div>
  );
}