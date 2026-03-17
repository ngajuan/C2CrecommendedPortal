import svgPaths from "./svg-qfkwezagl1";

function LeftHeader() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Left-header">
      <div className="flex flex-col font-['DM_Serif_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-white w-[897px]">
        <p className="leading-[1.5]">Payments</p>
      </div>
      <div className="bg-[#156fbe] h-px shrink-0 w-[20px]" data-name="Divider" />
    </div>
  );
}

function Div() {
  return (
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
  );
}

function DivRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Div-row">
      <LeftHeader />
      <div className="bg-white content-stretch flex gap-[16px] h-[48px] items-center px-[11px] py-[7px] relative rounded-[6px] shrink-0 w-[240px]" data-name="Search field">
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Div />
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
    </div>
  );
}

function Notification() {
  return (
    <div className="absolute inset-[8.33%_14.58%]" data-name="Notification">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1668 16.6669">
        <g id="Notification">
          <path d={svgPaths.p364b6580} fill="var(--fill-0, #102754)" id="Notification_2" />
        </g>
      </svg>
    </div>
  );
}

function Actions() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center right-[24px] top-0" data-name="actions">
      <div className="bg-[#156fbe] content-stretch flex gap-[16px] h-[48px] items-center justify-center px-[16px] py-[10px] relative rounded-[6px] shrink-0" data-name="Primary button">
        <p className="font-['Oxygen:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">New</p>
        <div className="relative shrink-0 size-[24px]" data-name="Iconly">
          <div className="absolute inset-[8.33%_14.37%_8.9%_14.58%]" data-name="vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0518 19.8643">
              <path d={svgPaths.p312cd700} fill="var(--fill-0, white)" id="vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex h-[64px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1186", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[64px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 1">
                <line id="Line 10" stroke="var(--stroke-0, #F3F3F3)" x2="64" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#eee] overflow-clip relative rounded-[99999px] shrink-0 size-[32px]" data-name="Notification">
        <div className="-translate-y-1/2 absolute left-[6px] size-[20px] top-1/2" data-name="Iconly">
          <Notification />
        </div>
      </div>
      <div className="relative shrink-0 size-[32px]" data-name="avatar">
        <div className="absolute left-0 size-[32px] top-0" data-name="Circle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="16" cy="16" fill="var(--fill-0, #102754)" id="Circle" r="16" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute capitalize flex flex-col font-['Oxygen:Bold',sans-serif] h-[19.613px] justify-center leading-[0] left-[16px] not-italic text-[14px] text-center text-white top-[15.81px] w-[32px]">
          <p className="leading-[1.5]">WF</p>
        </div>
      </div>
    </div>
  );
}

function TabBar() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="tab bar">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[16px] relative shrink-0" data-name="Tab item">
        <div aria-hidden="true" className="absolute border-[#156fbe] border-b-3 border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#156fbe] text-[0px] whitespace-nowrap">
          <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] text-[16px]">All</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[16px] relative shrink-0" data-name="Tab item">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">
          <p className="leading-[1.5]">Pending</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[16px] relative shrink-0" data-name="Tab item">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">
          <p className="leading-[1.5]">Failed</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[16px] relative shrink-0" data-name="Tab item">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">
          <p className="leading-[1.5]">Completed</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[16px] relative shrink-0" data-name="Tab item">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">
          <p className="leading-[1.5]">Unable to Process</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[16px] relative shrink-0" data-name="Tab item">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">
          <p className="leading-[1.5]">Canceled</p>
        </div>
      </div>
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="absolute inset-[16.67%_31.25%]" data-name="Arrow - Left 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10.6667">
        <g id="Arrow - Left 2">
          <path d={svgPaths.pde50f00} fill="var(--fill-0, #555555)" id="Arrow - Left 2_2" />
        </g>
      </svg>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="absolute inset-[16.67%_31.25%]" data-name="Arrow - Right 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10.6667">
        <g id="Arrow - Right 2">
          <path d={svgPaths.pc891480} fill="var(--fill-0, #555555)" id="Arrow - Right 2_2" />
        </g>
      </svg>
    </div>
  );
}

function ColumnLabels() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="column labels">
      <div className="bg-[#f3f3f3] content-stretch flex items-center p-[16px] relative shrink-0 w-[215px]" data-name="blocks">
        <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#156fbe] text-[16px] text-center tracking-[1px] uppercase whitespace-nowrap">Status</p>
      </div>
      <div className="bg-[#f3f3f3] content-stretch flex items-center p-[16px] relative shrink-0" data-name="blocks">
        <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#156fbe] text-[16px] text-center tracking-[1px] uppercase whitespace-nowrap">Amount</p>
      </div>
      <div className="bg-[#f3f3f3] content-stretch flex items-center p-[16px] relative shrink-0 w-[108px]" data-name="blocks">
        <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#156fbe] text-[16px] text-center tracking-[1px] uppercase whitespace-nowrap">file #</p>
      </div>
      <div className="bg-[#f3f3f3] content-stretch flex items-center p-[16px] relative shrink-0 w-[200px]" data-name="blocks">
        <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#156fbe] text-[16px] text-center tracking-[1px] uppercase whitespace-nowrap">client</p>
      </div>
      <div className="bg-[#f3f3f3] content-stretch flex items-center p-[16px] relative shrink-0 w-[171px]" data-name="blocks">
        <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#156fbe] text-[16px] text-center tracking-[1px] uppercase whitespace-nowrap">purpose</p>
      </div>
      <div className="bg-[#f3f3f3] content-stretch flex items-center p-[16px] relative shrink-0 w-[155px]" data-name="blocks">
        <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#156fbe] text-[16px] text-center tracking-[1px] uppercase whitespace-nowrap">DESTINATION</p>
      </div>
      <div className="bg-[#f3f3f3] content-stretch flex items-center p-[16px] relative shrink-0" data-name="blocks">
        <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#156fbe] text-[16px] text-center tracking-[1px] uppercase whitespace-nowrap">Last updated</p>
      </div>
      <div className="bg-[#f3f3f3] flex-[1_0_0] h-[56px] min-h-px min-w-px relative" data-name="blocks">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[8px] size-full" />
        </div>
      </div>
      <div className="bg-[#f3f3f3] content-stretch flex gap-[16px] h-[56px] items-center justify-end px-[16px] relative shrink-0" data-name="blocks">
        <div className="bg-white content-stretch flex items-center justify-center py-[10px] relative rounded-[6px] shrink-0 size-[24px]" data-name="Action Button/Outline/Default/Yes/No/Small">
          <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <div className="relative shrink-0 size-[16px]" data-name="Iconly">
            <ArrowLeft />
          </div>
        </div>
        <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14.4px] text-center whitespace-nowrap">
          <p className="leading-[1.5]">1/4</p>
        </div>
        <div className="bg-white content-stretch flex items-center justify-center py-[10px] relative rounded-[6px] shrink-0 size-[24px]" data-name="Action Button/Outline/Default/Yes/No/Small">
          <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <div className="relative shrink-0 size-[16px]" data-name="Iconly">
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

function Blocks() {
  return (
    <div className="bg-white h-[80px] relative shrink-0 w-[215px]" data-name="blocks">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Status badge">
          <div className="relative shrink-0 size-[20px]" data-name="Iconly">
            <div className="absolute inset-[8.34%_8.33%_8.33%_8.33%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                <g id="vector">
                  <path d={svgPaths.p62ebf00} fill="var(--fill-0, #102754)" />
                  <path clipRule="evenodd" d={svgPaths.p2d751f00} fill="var(--fill-0, #102754)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
            <p className="leading-[1.5]">Pending</p>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Oxygen:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#a0a2a4] text-[14.4px] w-full">Estimated arrival Jan 16</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Blocks1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[80px] items-end justify-center px-[16px] relative shrink-0 w-[133px]" data-name="blocks">
      <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-white content-stretch flex h-[24px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Contextual Button">
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
            <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Verified() {
  return (
    <div className="content-stretch flex h-[80px] items-center relative shrink-0 w-full" data-name="Verified">
      <Blocks />
      <div className="bg-white h-[80px] relative shrink-0 w-[108px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">$3,000</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[108px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">afs123</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[200px]" data-name="blocks">
        <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#555] text-[16px]">Jessie Owens</p>
          <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">1234 Rivers Road, Alexandria, Virg...</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[171px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">Earnest money</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[155px]" data-name="blocks">
        <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#555] text-[16px]">Security Escrow...</p>
          <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">Security Title</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[162px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">02/27/2024</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <Blocks1 />
    </div>
  );
}

function Blocks2() {
  return (
    <div className="bg-white h-[80px] relative shrink-0 w-[215px]" data-name="blocks">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Status badge">
          <div className="relative shrink-0 size-[20px]" data-name="Iconly">
            <div className="absolute inset-[8.34%_8.33%_8.33%_8.33%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                <g id="vector">
                  <path d={svgPaths.p62ebf00} fill="var(--fill-0, #102754)" />
                  <path clipRule="evenodd" d={svgPaths.p2d751f00} fill="var(--fill-0, #102754)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
            <p className="leading-[1.5]">pending</p>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Oxygen:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#a0a2a4] text-[14.4px] w-[178px]">Estimated arrival Jan 16</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Blocks3() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[80px] items-end justify-center px-[16px] relative shrink-0 w-[133px]" data-name="blocks">
      <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-white content-stretch flex h-[24px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Contextual Button">
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
            <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Verified1() {
  return (
    <div className="content-stretch flex h-[80px] items-center relative shrink-0 w-full" data-name="Verified">
      <Blocks2 />
      <div className="bg-white h-[80px] relative shrink-0 w-[108px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">$2,500</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[108px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">&nbsp;</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[200px]" data-name="blocks">
        <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#555] text-[16px]">{`Courtney Williams `}</p>
          <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">49 James Street, Austin, Texas, 7...</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[171px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">Earnest money</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[155px]" data-name="blocks">
        <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#555] text-[16px]">Security Escrow...</p>
          <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">Security Title</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[162px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">02/27/2024</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <Blocks3 />
    </div>
  );
}

function Blocks4() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[215px]" data-name="blocks">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Status badge">
            <div className="relative shrink-0 size-[20px]" data-name="Iconly">
              <div className="absolute inset-[8.33%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                  <g id="Vector">
                    <path clipRule="evenodd" d={svgPaths.p16f36b00} fill="var(--fill-0, #61D690)" fillRule="evenodd" />
                    <path d={svgPaths.p2b428d00} fill="var(--fill-0, #61D690)" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
              <p className="leading-[1.5]">Completed</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Blocks5() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[82px] items-end justify-center px-[16px] relative shrink-0 w-[133px]" data-name="blocks">
      <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-white content-stretch flex h-[24px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Contextual Button">
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
            <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Verified2() {
  return (
    <div className="content-stretch flex h-[80px] items-center relative shrink-0 w-full" data-name="Verified">
      <Blocks4 />
      <div className="bg-white h-[82px] relative shrink-0 w-[108px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">$3,000</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[82px] relative shrink-0 w-[108px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">&nbsp;</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[82px] relative shrink-0 w-[200px]" data-name="blocks">
        <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#555] text-[16px]">Jamarcus Russell</p>
          <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">717 Brooks Ave, Austin, Texas, 7...</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[82px] relative shrink-0 w-[171px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">Earnest money</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[82px] relative shrink-0 w-[155px]" data-name="blocks">
        <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#555] text-[16px]">Security Escrow...</p>
          <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">Security Title</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[82px] relative shrink-0 w-[162px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">02/27/2024</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <Blocks5 />
    </div>
  );
}

function Blocks6() {
  return (
    <div className="bg-white h-[80px] relative shrink-0" data-name="blocks">
      <div className="content-stretch flex h-full items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Status badge">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Iconly">
            <div className="absolute inset-[8.33%_14.58%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1667 16.6667">
                <g id="vector">
                  <path d={svgPaths.p296fa900} fill="var(--fill-0, #FFA624)" />
                  <path clipRule="evenodd" d={svgPaths.p34433c00} fill="var(--fill-0, #FFA624)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
            <p className="leading-[1.5]">unable to process</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Blocks7() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[80px] items-end justify-center px-[16px] relative shrink-0 w-[133px]" data-name="blocks">
      <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-white content-stretch flex h-[24px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Contextual Button">
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
            <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Verified3() {
  return (
    <div className="content-stretch flex h-[80px] items-center relative shrink-0 w-full" data-name="Verified">
      <Blocks6 />
      <div className="bg-white h-[80px] relative shrink-0 w-[108px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">$2,500</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[108px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">afaf321</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[200px]" data-name="blocks">
        <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#555] text-[16px]">Liliana Brown</p>
          <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">429 29th Street, Austin, Texas ...</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[171px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">Earnest money</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[155px]" data-name="blocks">
        <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#555] text-[16px]">Security Escrow...</p>
          <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">Security Title</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[162px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">02/27/2024</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <Blocks7 />
    </div>
  );
}

function Blocks8() {
  return (
    <div className="bg-white h-[80px] relative shrink-0 w-[215px]" data-name="blocks">
      <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Status badge">
          <div className="relative shrink-0 size-[20px]" data-name="Iconly">
            <div className="absolute inset-[8.33%_8.33%_8.33%_8.34%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                <g id="vector">
                  <path d={svgPaths.p9ce2100} fill="var(--fill-0, #555555)" />
                  <path clipRule="evenodd" d={svgPaths.pe65e600} fill="var(--fill-0, #555555)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
            <p className="leading-[1.5]">canceled</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Blocks9() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[80px] items-end justify-center px-[16px] relative shrink-0 w-[133px]" data-name="blocks">
      <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-white content-stretch flex h-[24px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Contextual Button">
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
            <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Verified4() {
  return (
    <div className="content-stretch flex h-[80px] items-center relative shrink-0 w-full" data-name="Verified">
      <Blocks8 />
      <div className="bg-white h-[80px] relative shrink-0 w-[108px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">$3,000</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[108px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">&nbsp;</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[200px]" data-name="blocks">
        <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#555] text-[16px]">Tina Holmes</p>
          <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">27 Courtney Ave, Austin, Texas, 7...</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[171px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">Earnest money</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[155px]" data-name="blocks">
        <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#555] text-[16px]">Security Escrow...</p>
          <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">Security Title</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[162px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">02/27/2024</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <Blocks9 />
    </div>
  );
}

function Blocks10() {
  return (
    <div className="bg-white h-[80px] relative shrink-0 w-[215px]" data-name="blocks">
      <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Status badge">
          <div className="relative shrink-0 size-[20px]" data-name="Iconly">
            <div className="absolute inset-[8.34%_8.33%_8.33%_8.33%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                <g id="vector">
                  <path d={svgPaths.p62ebf00} fill="var(--fill-0, #102754)" />
                  <path clipRule="evenodd" d={svgPaths.p2d751f00} fill="var(--fill-0, #102754)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
            <p className="leading-[1.5]">Pending</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Blocks11() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[80px] items-end justify-center px-[16px] relative shrink-0 w-[133px]" data-name="blocks">
      <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-white content-stretch flex h-[24px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Contextual Button">
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
            <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Verified5() {
  return (
    <div className="content-stretch flex h-[80px] items-center relative shrink-0 w-full" data-name="Verified">
      <Blocks10 />
      <div className="bg-white h-[80px] relative shrink-0 w-[108px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">$12,000</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[108px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">ght453</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[200px]" data-name="blocks">
        <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#555] text-[16px]">Bonnie Randall</p>
          <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">4453 Ram Road, Austin, Texas, 78...</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[171px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">Earnest money</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[155px]" data-name="blocks">
        <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#555] text-[16px]">Security Escrow...</p>
          <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">Security Title</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[162px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">02/27/2024</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <Blocks11 />
    </div>
  );
}

function Blocks12() {
  return (
    <div className="bg-white h-[80px] relative shrink-0 w-[215px]" data-name="blocks">
      <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Status badge">
          <div className="relative shrink-0 size-[20px]" data-name="Iconly">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p16f36b00} fill="var(--fill-0, #61D690)" fillRule="evenodd" />
                  <path d={svgPaths.p2b428d00} fill="var(--fill-0, #61D690)" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
            <p className="leading-[1.5]">completed</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Blocks13() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[80px] items-end justify-center px-[16px] relative shrink-0 w-[133px]" data-name="blocks">
      <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-white content-stretch flex h-[24px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Contextual Button">
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
            <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Verified6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Verified">
      <Blocks12 />
      <div className="bg-white h-[80px] relative shrink-0 w-[108px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">$3,000</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[108px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">hyt432</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[200px]" data-name="blocks">
        <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#555] text-[16px]">James Bond</p>
          <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">23 Telephone Street, Austin, Texas...</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[171px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">Earnest money</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[155px]" data-name="blocks">
        <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#555] text-[16px]">Security Escrow...</p>
          <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">Security Title</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[162px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">02/27/2024</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <Blocks13 />
    </div>
  );
}

function Blocks14() {
  return (
    <div className="bg-white h-[80px] relative shrink-0 w-[215px]" data-name="blocks">
      <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] h-[21px] items-center relative shrink-0" data-name="Status badge">
          <div className="relative shrink-0 size-[20px]" data-name="Iconly">
            <div className="absolute inset-[8.33%_14.58%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1667 16.6667">
                <g id="vector">
                  <path d={svgPaths.p296fa900} fill="var(--fill-0, #FFA624)" />
                  <path clipRule="evenodd" d={svgPaths.p34433c00} fill="var(--fill-0, #FFA624)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
            <p className="leading-[1.5]">FAILED</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Blocks15() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[80px] items-end justify-center px-[16px] relative shrink-0 w-[133px]" data-name="blocks">
      <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Contextual Button">
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
            <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Verified7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Verified">
      <Blocks14 />
      <div className="bg-white h-[80px] relative shrink-0 w-[108px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">$4,000</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[108px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">aseQ131</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[200px]" data-name="blocks">
        <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#555] text-[16px]">Charles Rogers</p>
          <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">1539 Congress St, Austin, Texas 78710</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[171px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">Earnest money</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[155px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">Security Escrow...</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[80px] relative shrink-0 w-[162px]" data-name="blocks">
        <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">02/27/2024</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <Blocks15 />
    </div>
  );
}

function TableRows() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="table rows">
      <Verified />
      <Verified1 />
      <Verified2 />
      <Verified3 />
      <Verified4 />
      <Verified5 />
      <Verified6 />
      <Verified7 />
    </div>
  );
}

function ArrowLeft1() {
  return (
    <div className="absolute inset-[16.67%_31.25%]" data-name="Arrow - Left 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10.6667">
        <g id="Arrow - Left 2">
          <path d={svgPaths.pde50f00} fill="var(--fill-0, #555555)" id="Arrow - Left 2_2" />
        </g>
      </svg>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="absolute inset-[16.67%_31.25%]" data-name="Arrow - Right 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10.6667">
        <g id="Arrow - Right 2">
          <path d={svgPaths.pc891480} fill="var(--fill-0, #555555)" id="Arrow - Right 2_2" />
        </g>
      </svg>
    </div>
  );
}

function ColumnLabels1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="column labels">
      <div className="bg-white content-stretch flex gap-[16px] h-[56px] items-center justify-end px-[16px] relative shrink-0 w-[133px]" data-name="blocks">
        <div className="bg-white content-stretch flex items-center justify-center py-[10px] relative rounded-[6px] shrink-0 size-[24px]" data-name="Action Button/Outline/Default/Yes/No/Small">
          <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <div className="relative shrink-0 size-[16px]" data-name="Iconly">
            <ArrowLeft1 />
          </div>
        </div>
        <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14.4px] text-center whitespace-nowrap">
          <p className="leading-[1.5]">1/4</p>
        </div>
        <div className="bg-white content-stretch flex items-center justify-center py-[10px] relative rounded-[6px] shrink-0 size-[24px]" data-name="Action Button/Outline/Default/Yes/No/Small">
          <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <div className="relative shrink-0 size-[16px]" data-name="Iconly">
            <ArrowRight1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip pointer-events-auto rounded-[4px] sticky top-0 w-[1152px]" data-name="table">
      <TabBar />
      <ColumnLabels />
      <TableRows />
      <ColumnLabels1 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-6px_3px_10.25px_0px_rgba(16,39,84,0.1)]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-none">Files</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-none">Requests</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-none">Payoffs</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-none">Businesses</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-none">Identities</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-none">Payments</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-none">Incoming</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-none">Outgoing</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] h-[48px] items-center overflow-clip pl-[12px] pr-[8px] relative rounded-[6px] shrink-0 w-[169px]" data-name="Navigation item button">
        <Frame6 />
      </div>
      <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] h-[48px] items-center overflow-clip pl-[12px] pr-[8px] relative rounded-[6px] shrink-0 w-[169px]" data-name="Navigation item button">
        <Frame7 />
      </div>
    </div>
  );
}

function SideNavigationBar() {
  return (
    <div className="absolute bg-[#102754] bottom-[-133px] content-stretch flex flex-col gap-[16px] items-start left-0 px-[24px] py-[16px] top-[64px] w-[240px]" data-name="Side Navigation Bar">
      <div className="bg-[rgba(255,255,255,0.05)] h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="Navigation item button">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[8px] relative size-full">
            <div className="relative shrink-0 size-[24px]" data-name="Icon=ic-folder">
              <div className="absolute inset-[8.33%]" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="vector">
                    <path d={svgPaths.p29ae6a80} fill="var(--fill-0, white)" />
                    <path clipRule="evenodd" d={svgPaths.p9dff840} fill="var(--fill-0, white)" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
            <Frame />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.05)] h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="Navigation item button">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[8px] relative size-full">
            <div className="relative shrink-0 size-[24px]" data-name="Icon=ic-paper-plane">
              <div className="absolute inset-[9.37%_9.37%_9.37%_9.38%]" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5013 19.5013">
                  <path clipRule="evenodd" d={svgPaths.p2ccfd200} fill="var(--fill-0, white)" fillRule="evenodd" id="vector" />
                </svg>
              </div>
            </div>
            <Frame1 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.05)] h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="Navigation item button">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[8px] relative size-full">
            <div className="relative shrink-0 size-[24px]" data-name="Icon=ic-paper">
              <div className="absolute inset-[8.33%_14.37%_8.9%_14.58%]" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.052 19.8647">
                  <g id="vector">
                    <path d={svgPaths.p501f100} fill="var(--fill-0, white)" />
                    <path d={svgPaths.p2e138a00} fill="var(--fill-0, white)" />
                    <path clipRule="evenodd" d={svgPaths.p175ef600} fill="var(--fill-0, white)" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
            <Frame2 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.05)] h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="Navigation item button">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[8px] relative size-full">
            <div className="relative shrink-0 size-[24px]" data-name="Icon=ic-building">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[18.52px] left-[calc(50%+0.7px)] top-[calc(50%-0.03px)] w-[19.5px]" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4996 18.5199">
                  <g id="vector">
                    <path d={svgPaths.p2ddc3a30} fill="var(--fill-0, white)" />
                    <path d={svgPaths.p15b00080} fill="var(--fill-0, white)" />
                    <path d={svgPaths.p1c0add0} fill="var(--fill-0, white)" />
                    <path d={svgPaths.p33e7cf80} fill="var(--fill-0, white)" />
                    <path d={svgPaths.p274ef400} fill="var(--fill-0, white)" />
                    <path d={svgPaths.ped09b00} fill="var(--fill-0, white)" />
                    <path d={svgPaths.p34371500} fill="var(--fill-0, white)" />
                  </g>
                </svg>
              </div>
            </div>
            <Frame3 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.05)] h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="Navigation item button">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[8px] relative size-full">
            <div className="relative shrink-0 size-[24px]" data-name="Icon=ic-scan">
              <div className="absolute inset-[12.5%_4.17%]" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
                  <g id="vector">
                    <path d={svgPaths.p27a988f0} fill="var(--fill-0, white)" />
                    <path d={svgPaths.p2a86f900} fill="var(--fill-0, white)" />
                    <path d={svgPaths.p3dec1880} fill="var(--fill-0, white)" />
                  </g>
                </svg>
              </div>
            </div>
            <Frame4 />
          </div>
        </div>
      </div>
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
            <Frame5 />
          </div>
        </div>
      </div>
      <Frame8 />
      <div className="absolute left-[184px] size-[24px] top-[348px]" data-name="Iconly">
        <div className="absolute inset-[31.25%_16.67%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9">
            <path d={svgPaths.p1351800} fill="var(--fill-0, white)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function PaymentsAll() {
  return (
    <div className="bg-white relative size-full" data-name="Payments - All">
      <div className="absolute bg-[#283c65] content-stretch flex flex-col h-[192px] items-start left-[240px] p-[24px] top-[64px] w-[1200px]" data-name="Page Header">
        <DivRow />
      </div>
      <div className="absolute bottom-0 h-[1055px] left-0 pointer-events-none top-0">
        <div className="bg-white h-[64px] overflow-clip pointer-events-auto shadow-[0px_1px_3px_0px_rgba(16,39,84,0.1)] sticky top-0 w-[1440px]" data-name="navigation bar">
          <div className="absolute h-[37px] left-[24px] top-[14px] w-[190.711px]" data-name="company logo">
            <div className="absolute inset-[71.53%_89.26%_0_5.22%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5242 10.5323">
                <path d={svgPaths.p12a56800} fill="var(--fill-0, #2B3034)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[0_80.64%_29.5%_0]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.914 26.0866">
                <path d={svgPaths.p1f8eae00} fill="var(--fill-0, #156FBE)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[14.11%_65.6%_33.51%_25.46%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0632 19.3816">
                <path d={svgPaths.p261e9840} fill="var(--fill-0, #2B3034)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[15.06%_55.28%_34.45%_37.28%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1903 18.6832">
                <path d={svgPaths.p20ff6900} fill="var(--fill-0, #2B3034)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[15.06%_43.82%_34.45%_47.73%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1056 18.6832">
                <path d={svgPaths.p1442a3c0} fill="var(--fill-0, #2B3034)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[15.06%_33.64%_34.45%_58.28%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4091 18.6832">
                <path d={svgPaths.p2e82ef0} fill="var(--fill-0, #2B3034)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[15.06%_28.62%_34.45%_69.23%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.0917 18.6832">
                <path d={svgPaths.p2ccf6100} fill="var(--fill-0, #2B3034)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[15.06%_17.62%_34.45%_74.94%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1904 18.6832">
                <path d={svgPaths.p3bba83f0} fill="var(--fill-0, #2B3034)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[15.06%_12.55%_34.45%_85.3%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.09169 18.6832">
                <path d={svgPaths.p8197000} fill="var(--fill-0, #156FBE)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[15.06%_0_34.45%_91.01%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1503 18.6832">
                <path d={svgPaths.p165b9000} fill="var(--fill-0, #156FBE)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 absolute flex h-[65px] items-center justify-center left-[240px] top-[calc(50%-0.5px)] w-0" style={{ "--transform-inner-width": "1186", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <div className="h-0 relative w-[65px]" data-name="divider">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 1">
                    <line id="divider" stroke="var(--stroke-0, #F3F3F3)" x2="65" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Oxygen:Regular',sans-serif] justify-center leading-[0] left-[264px] not-italic text-[#555] text-[16px] top-1/2 whitespace-nowrap">
            <p className="leading-[1.5]">Company Name</p>
          </div>
          <Actions />
        </div>
      </div>
      <div className="absolute bottom-0 h-[855px] left-[264px] pointer-events-none top-[200px]">
        <Table />
      </div>
      <SideNavigationBar />
    </div>
  );
}