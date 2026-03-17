import svgPaths from "./svg-ud6qdzsfe5";
import imgLine26 from "figma:asset/6d05dc8941865d089191cc7167fe6ab6df199092.png";

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
            <div className="absolute inset-[-0.5px_-0.37%]">
              <img alt="" className="block max-w-none size-full" height="1" src={imgLine26} width="137" />
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
      <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[20px] w-[346px]">Pending</p>
    </div>
  );
}

function SubStatus() {
  return (
    <div className="bg-[#deeff9] content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-name="Sub status">
      <div className="relative shrink-0 size-[24px]" data-name="Iconly">
        <div className="absolute inset-[8.34%_8.33%_8.33%_8.33%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="vector">
              <path d={svgPaths.p15ea0300} fill="var(--fill-0, #156FBE)" />
              <path clipRule="evenodd" d={svgPaths.p30b73500} fill="var(--fill-0, #156FBE)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#102754] text-[16px] whitespace-nowrap">Processing</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Container">
      <StatusTitle />
      <SubStatus />
      <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#2b3034] text-[16px] w-[min-content]">The buyer’s funds are being verified.</p>
      <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[14.4px] w-[346px]">01/14/2026 at 10:05 AM</p>
    </div>
  );
}

export default function Status() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-start pb-[24px] pt-[16px] px-[16px] relative rounded-[8px] size-full" data-name="Status">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Lines />
      <Container />
    </div>
  );
}