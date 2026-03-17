import svgPaths from "./svg-fnh8rd0p7x";

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-none">Payments</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-none">Incoming</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-none">Outgoing</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] h-[48px] items-center overflow-clip pl-[12px] pr-[8px] relative rounded-[6px] shrink-0 w-[169px]" data-name="Navigation item button">
        <Frame1 />
      </div>
      <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] h-[48px] items-center overflow-clip pl-[12px] pr-[8px] relative rounded-[6px] shrink-0 w-[169px]" data-name="Navigation item button">
        <Frame2 />
      </div>
    </div>
  );
}

export default function SideNavigationBar() {
  return (
    <div className="bg-[#102754] content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[16px] relative size-full" data-name="Side Navigation Bar">
      <div className="bg-[rgba(255,255,255,0.15)] h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="Navigation item button">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[8px] relative size-full">
            <div className="relative shrink-0 size-[24px]" data-name="Icon=ic-bank">
              <div className="absolute inset-[7.83%_8.7%_7.83%_8.67%]" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8307 20.2403">
                  <g id="vector">
                    <path clipRule="evenodd" d={svgPaths.p15c2c880} fill="var(--fill-0, #B7DEFF)" fillRule="evenodd" />
                    <path d={svgPaths.p268b8d00} fill="var(--fill-0, #B7DEFF)" />
                    <path d={svgPaths.p319f1700} fill="var(--fill-0, #B7DEFF)" />
                    <path d={svgPaths.p3e06bef0} fill="var(--fill-0, #B7DEFF)" />
                    <path d={svgPaths.pcaa1180} fill="var(--fill-0, #B7DEFF)" />
                    <path clipRule="evenodd" d={svgPaths.p6f61eb0} fill="var(--fill-0, #B7DEFF)" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
            <Frame />
          </div>
        </div>
      </div>
      <Frame3 />
      <div className="absolute left-[184px] size-[24px] top-[30px]" data-name="Iconly">
        <div className="absolute inset-[31.25%_16.67%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9">
            <path d={svgPaths.p1351800} fill="var(--fill-0, white)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}