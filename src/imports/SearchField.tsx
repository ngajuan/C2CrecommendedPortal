import svgPaths from "./svg-xivdl1cxh2";

export default function SearchField() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-center px-[11px] py-[7px] relative rounded-[6px] size-full" data-name="Search field">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] h-full items-center min-h-px min-w-px overflow-clip relative" data-name="Div">
        <div className="relative shrink-0 size-[16px]" data-name="Icon=ic-search">
          <div className="absolute inset-[8.33%]" data-name="vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
              <path clipRule="evenodd" d={svgPaths.p21c7d400} fill="var(--fill-0, #A0A2A4)" fillRule="evenodd" id="vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#a0a2a4] text-[16px]">
          <p className="leading-[1.5]">Search payments...</p>
        </div>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="Icon=ic-alert-square">
        <div className="absolute flex inset-[8.33%_8.33%_8.33%_8.34%] items-center justify-center">
          <div className="-scale-y-100 flex-none size-[20px]">
            <div className="relative size-full" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                <g id="vector">
                  <path d={svgPaths.p311ef780} fill="var(--fill-0, #156FBE)" />
                  <path d={svgPaths.p50ac400} fill="var(--fill-0, #156FBE)" />
                  <path clipRule="evenodd" d={svgPaths.p23b70f00} fill="var(--fill-0, #156FBE)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}