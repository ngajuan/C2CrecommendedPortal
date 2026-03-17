import svgPaths from "./svg-xnlqikkv1i";

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <div className="capitalize flex flex-col font-['DM_Serif_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-white w-[897px]">
        <p className="leading-[1.5]">Requests</p>
      </div>
      <div className="bg-[#156fbe] h-px shrink-0 w-[20px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[10px] relative shrink-0 w-[6px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
        <g id="Group 353">
          <path d={svgPaths.p1346e080} fill="var(--fill-0, #555555)" id="Polygon 29" />
          <path d={svgPaths.p94a7000} fill="var(--fill-0, #555555)" id="Polygon 30" />
        </g>
      </svg>
    </div>
  );
}

function SelectButton() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Select Button">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">
          <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px] text-right whitespace-nowrap">
            <p className="leading-[1.5]">Select Sender</p>
          </div>
          <Group />
        </div>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] h-full items-center min-h-px min-w-px overflow-clip relative" data-name="Div">
      <div className="relative shrink-0 size-[24px]" data-name="Iconly">
        <div className="absolute inset-[8.33%]" data-name="Search">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9998">
            <path d={svgPaths.pfc3c400} fill="var(--fill-0, #DDDDDD)" id="Search" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a0a2a4] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">Search...</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[235.5px]" data-name="Select">
        <SelectButton />
      </div>
      <div className="bg-white content-stretch flex gap-[16px] h-[48px] items-center px-[11px] py-[7px] relative rounded-[6px] shrink-0 w-[235.5px]" data-name="Search Field">
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Div />
        <div className="relative shrink-0 size-[20px]" data-name="Iconly">
          <div className="absolute inset-[8.33%_8.33%_8.33%_8.34%]" data-name="Info Square">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.667 16.667">
              <path d={svgPaths.p1b0d8a80} fill="var(--fill-0, #156FBE)" id="Info Square" />
            </svg>
          </div>
        </div>
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

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-none">Payoffs</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-none">Businesses</p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Navigation item tag">
        <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
          <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#ffd85a] text-[12px] tracking-[1px] uppercase whitespace-nowrap">beta</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-none">Identities</p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Navigation item tag">
        <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
          <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#61d690] text-[12px] tracking-[1px] uppercase whitespace-nowrap">NEW</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-none">Verifications</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-none">Servicers</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-none">Company</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-none">Users</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-none">Wire Instructions</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-none">Billing</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-none">Integrations</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Header">
      <div className="h-[21.5px] relative shrink-0 w-[20.235px]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2352 21.5003">
          <g id="Union">
            <path d={svgPaths.p1d879480} fill="url(#paint0_linear_4008_5748)" />
            <path clipRule="evenodd" d={svgPaths.p1b954a00} fill="url(#paint1_linear_4008_5748)" fillRule="evenodd" />
            <path d={svgPaths.p22e3eb80} fill="url(#paint2_linear_4008_5748)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4008_5748" x1="20.2352" x2="0" y1="10.7501" y2="10.7501">
              <stop stopColor="#2E76B5" />
              <stop offset="0.0001" stopColor="#2E76B5" />
              <stop offset="1" stopColor="#61D690" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_4008_5748" x1="20.2352" x2="0" y1="10.7501" y2="10.7501">
              <stop stopColor="#2E76B5" />
              <stop offset="0.0001" stopColor="#2E76B5" />
              <stop offset="1" stopColor="#61D690" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_4008_5748" x1="20.2352" x2="0" y1="10.7501" y2="10.7501">
              <stop stopColor="#2E76B5" />
              <stop offset="0.0001" stopColor="#2E76B5" />
              <stop offset="1" stopColor="#61D690" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] h-[22px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-[1.5]">New Feature</p>
      </div>
    </div>
  );
}

function Copy() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Copy">
      <Header />
      <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14.4px] text-white w-full">{`See how CertifID Match verifies identities early in the transaction to prevent fraud. `}</p>
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
      <div className="bg-[#156fbe] content-stretch flex gap-[16px] h-[48px] items-center justify-center px-[16px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
        <p className="capitalize font-['Oxygen:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">New</p>
        <div className="relative shrink-0 size-[24px]" data-name="Iconly">
          <div className="absolute inset-[8.33%_14.37%_8.9%_14.58%]" data-name="Paper Plus">
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
          <p className="leading-[1.5]">TA</p>
        </div>
      </div>
    </div>
  );
}

function CloseSquare() {
  return (
    <div className="absolute inset-[8.33%_8.33%_8.33%_8.34%]" data-name="Close Square">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.667 16.667">
        <g id="Close Square">
          <path d={svgPaths.p220d9f00} fill="var(--fill-0, #555555)" id="Close Square_2" />
        </g>
      </svg>
    </div>
  );
}

function ShieldFail() {
  return (
    <div className="absolute inset-[8.33%_14.58%]" data-name="Shield Fail">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.167 16.6662">
        <g id="Shield Fail">
          <path d={svgPaths.p190a5400} fill="var(--fill-0, #DB132C)" id="Shield Fail_2" />
        </g>
      </svg>
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

function BodyTable() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[1152px]" data-name="Body Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[32px]" data-name="column">
        <div className="bg-[#f3f3f3] h-[64px] relative rounded-tl-[4px] shrink-0 w-full" data-name="blocks">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#156fbe] text-[16px] text-center tracking-[1px] uppercase whitespace-nowrap">Status</p>
            </div>
          </div>
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Status">
                <div className="relative shrink-0 size-[20px]" data-name="Iconly">
                  <div className="absolute inset-[8.33%]" data-name="Play">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.667 16.667">
                      <path d={svgPaths.p3769d970} fill="var(--fill-0, #156FBE)" id="vector" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
                  <p className="leading-[1.5]">started</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Status">
                <div className="relative shrink-0 size-[20px]" data-name="Iconly">
                  <div className="absolute inset-[8.33%]" data-name="Play">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.667 16.667">
                      <path d={svgPaths.p3769d970} fill="var(--fill-0, #156FBE)" id="vector" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
                  <p className="leading-[1.5]">started</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Status">
                <div className="relative shrink-0 size-[20px]" data-name="Iconly">
                  <div className="absolute inset-[8.33%]" data-name="Play">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.667 16.667">
                      <path d={svgPaths.p3769d970} fill="var(--fill-0, #156FBE)" id="vector" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
                  <p className="leading-[1.5]">started</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Status">
                <div className="relative shrink-0 size-[20px]" data-name="Iconly">
                  <CloseSquare />
                </div>
                <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
                  <p className="leading-[1.5]">cancelled</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Status">
                <div className="relative shrink-0 size-[20px]" data-name="Iconly">
                  <ShieldFail />
                </div>
                <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
                  <p className="leading-[1.5]">High risk</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Status">
                <div className="relative shrink-0 size-[20px]" data-name="Iconly">
                  <div className="absolute inset-[8.33%]" data-name="Play">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.667 16.667">
                      <path d={svgPaths.p3769d970} fill="var(--fill-0, #156FBE)" id="vector" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
                  <p className="leading-[1.5]">started</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Status">
                <div className="relative shrink-0 size-[20px]" data-name="Iconly">
                  <div className="absolute inset-[8.33%]" data-name="Play">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.667 16.667">
                      <path d={svgPaths.p3769d970} fill="var(--fill-0, #156FBE)" id="vector" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
                  <p className="leading-[1.5]">started</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Status">
                <div className="relative shrink-0 size-[20px]" data-name="Iconly">
                  <div className="absolute inset-[8.33%]" data-name="Play">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.667 16.667">
                      <path d={svgPaths.p3769d970} fill="var(--fill-0, #156FBE)" id="vector" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
                  <p className="leading-[1.5]">started</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Status">
                <div className="relative shrink-0 size-[20px]" data-name="Iconly">
                  <div className="absolute inset-[8.33%]" data-name="Play">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.667 16.667">
                      <path d={svgPaths.p3769d970} fill="var(--fill-0, #156FBE)" id="vector" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
                  <p className="leading-[1.5]">started</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Status">
                <div className="relative shrink-0 size-[20px]" data-name="Iconly">
                  <div className="absolute inset-[8.33%]" data-name="Play">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.667 16.667">
                      <path d={svgPaths.p3769d970} fill="var(--fill-0, #156FBE)" id="vector" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
                  <p className="leading-[1.5]">started</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Status">
                <div className="relative shrink-0 size-[20px]" data-name="Iconly">
                  <div className="absolute inset-[8.33%]" data-name="Play">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.667 16.667">
                      <path d={svgPaths.p3769d970} fill="var(--fill-0, #156FBE)" id="vector" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
                  <p className="leading-[1.5]">started</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Status">
                <div className="relative shrink-0 size-[20px]" data-name="Iconly">
                  <div className="absolute inset-[8.33%]" data-name="Play">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.667 16.667">
                      <path d={svgPaths.p3769d970} fill="var(--fill-0, #156FBE)" id="vector" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
                  <p className="leading-[1.5]">started</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Status">
                <div className="relative shrink-0 size-[20px]" data-name="Iconly">
                  <div className="absolute inset-[8.33%]" data-name="Play">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.667 16.667">
                      <path d={svgPaths.p3769d970} fill="var(--fill-0, #156FBE)" id="vector" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
                  <p className="leading-[1.5]">started</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Status">
                <div className="relative shrink-0 size-[20px]" data-name="Iconly">
                  <div className="absolute inset-[8.33%]" data-name="Play">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.667 16.667">
                      <path d={svgPaths.p3769d970} fill="var(--fill-0, #156FBE)" id="vector" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
                  <p className="leading-[1.5]">started</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Status">
                <div className="relative shrink-0 size-[20px]" data-name="Iconly">
                  <div className="absolute inset-[8.33%]" data-name="Play">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.667 16.667">
                      <path d={svgPaths.p3769d970} fill="var(--fill-0, #156FBE)" id="vector" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
                  <p className="leading-[1.5]">started</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[32px]" data-name="column">
        <div className="bg-[#f3f3f3] h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#156fbe] text-[16px] text-center tracking-[1px] uppercase whitespace-nowrap">type</p>
            </div>
          </div>
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">Confirm</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">Collect</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">Send</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">text</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">text</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">text</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">text</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">text</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">text</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">text</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">text</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">text</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">text</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">text</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">text</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[32px]" data-name="column">
        <div className="bg-[#f3f3f3] h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#156fbe] text-[16px] text-center tracking-[1px] uppercase whitespace-nowrap">sent</p>
            </div>
          </div>
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">08/14/2022</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">08/14/2022</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">08/14/2022</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">08/14/2022</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">08/14/2022</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">08/14/2022</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">08/14/2022</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">08/14/2022</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">08/14/2022</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">08/14/2022</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">08/14/2022</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">08/14/2022</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">08/14/2022</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">08/14/2022</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">08/14/2022</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[32px]" data-name="column">
        <div className="bg-[#f3f3f3] h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#156fbe] text-[16px] text-center tracking-[1px] uppercase whitespace-nowrap">file #</p>
            </div>
          </div>
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">TEST-10001</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">TEST-10001</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">TEST-10001</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">TEST-10001</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">TEST-10001</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">TEST-10001</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">TEST-10001</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">TEST-10001</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">TEST-10001</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">TEST-10001</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">TEST-10001</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">TEST-10001</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">TEST-10001</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">TEST-10001</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-px items-start justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap">TEST-10001</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[346px]" data-name="column">
        <div className="bg-[#f3f3f3] h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#156fbe] text-[16px] text-center tracking-[1px] uppercase whitespace-nowrap">Recipient</p>
            </div>
          </div>
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">Buyer | 1234 Fake St, Grand Rapids, MI 49505</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">Buyer | 1234 Fake St, Grand Rapids, MI, 49505</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">Buyer | 1234 Fake St, Grand Rapids, MI, 49505</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">Buyer | 1234 Fake St, Grand Rapids, MI, 49505</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">Buyer | 1234 Fake St, Grand Rapids, MI, 49505</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">Buyer | 1234 Fake St, Grand Rapids, MI, 49505</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">Buyer | 1234 Fake St, Grand Rapids, MI, 49505</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">Buyer | 1234 Fake St, Grand Rapids, MI, 49505</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">Buyer | 1234 Fake St, Grand Rapids, MI, 49505</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">Buyer | 1234 Fake St, Grand Rapids, MI, 49505</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">Buyer | 1234 Fake St, Grand Rapids, MI, 49505</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">Buyer | 1234 Fake St, Grand Rapids, MI, 49505</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">Buyer | 1234 Fake St, Grand Rapids, MI, 49505</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">Buyer | 1234 Fake St, Grand Rapids, MI, 49505</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">Buyer | 1234 Fake St, Grand Rapids, MI, 49505</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="column">
        <div className="bg-[#f3f3f3] h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#156fbe] text-[16px] text-center tracking-[1px] uppercase whitespace-nowrap">sender</p>
            </div>
          </div>
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">CertifID</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">CertifID</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">CertifID</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">CertifID</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">CertifID</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">CertifID</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">CertifID</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">CertifID</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">CertifID</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">CertifID</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">CertifID</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">CertifID</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">CertifID</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">CertifID</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] gap-px items-start justify-center leading-[1.5] not-italic px-[16px] py-[8px] relative size-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#555] text-[16px]">Ngawang Salaka</p>
              <p className="relative shrink-0 text-[#a0a2a4] text-[14.4px]">CertifID</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-[32px]" data-name="column">
        <div className="bg-[#f3f3f3] h-[64px] relative rounded-tr-[4px] shrink-0 w-full" data-name="blocks">
          <div className="flex flex-row items-center justify-end size-full">
            <div className="content-stretch flex gap-[16px] items-center justify-end px-[16px] relative size-full">
              <div className="bg-white content-stretch flex items-center justify-center py-[10px] relative rounded-[6px] shrink-0 size-[24px]" data-name="Action Button">
                <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div className="relative shrink-0 size-[16px]" data-name="Iconly">
                  <ArrowLeft />
                </div>
              </div>
              <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14.4px] text-center whitespace-nowrap">
                <p className="leading-[1.5]">1/4</p>
              </div>
              <div className="bg-white content-stretch flex items-center justify-center py-[10px] relative rounded-[6px] shrink-0 size-[24px]" data-name="Action Button">
                <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div className="relative shrink-0 size-[16px]" data-name="Iconly">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-end justify-center size-full">
            <div className="content-stretch flex flex-col items-end justify-center px-[16px] relative size-full">
              <div className="bg-white content-stretch flex h-[24px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Action Button">
                <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
                    <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-end justify-center size-full">
            <div className="content-stretch flex flex-col items-end justify-center px-[16px] relative size-full">
              <div className="bg-white content-stretch flex h-[24px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Action Button">
                <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
                    <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-end justify-center size-full">
            <div className="content-stretch flex flex-col items-end justify-center px-[16px] relative size-full">
              <div className="bg-white content-stretch flex h-[24px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Action Button">
                <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
                    <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-end justify-center size-full">
            <div className="content-stretch flex flex-col items-end justify-center px-[16px] relative size-full">
              <div className="bg-white content-stretch flex h-[24px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Action Button">
                <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
                    <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-end justify-center size-full">
            <div className="content-stretch flex flex-col items-end justify-center px-[16px] relative size-full">
              <div className="bg-white content-stretch flex h-[24px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Action Button">
                <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
                    <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-end justify-center size-full">
            <div className="content-stretch flex flex-col items-end justify-center px-[16px] relative size-full">
              <div className="bg-white content-stretch flex h-[24px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Action Button">
                <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
                    <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-end justify-center size-full">
            <div className="content-stretch flex flex-col items-end justify-center px-[16px] relative size-full">
              <div className="bg-white content-stretch flex h-[24px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Action Button">
                <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
                    <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-end justify-center size-full">
            <div className="content-stretch flex flex-col items-end justify-center px-[16px] relative size-full">
              <div className="bg-white content-stretch flex h-[24px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Action Button">
                <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
                    <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-end justify-center size-full">
            <div className="content-stretch flex flex-col items-end justify-center px-[16px] relative size-full">
              <div className="bg-white content-stretch flex h-[24px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Action Button">
                <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
                    <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-end justify-center size-full">
            <div className="content-stretch flex flex-col items-end justify-center px-[16px] relative size-full">
              <div className="bg-white content-stretch flex h-[24px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Action Button">
                <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
                    <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-end justify-center size-full">
            <div className="content-stretch flex flex-col items-end justify-center px-[16px] relative size-full">
              <div className="bg-white content-stretch flex h-[24px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Action Button">
                <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
                    <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-end justify-center size-full">
            <div className="content-stretch flex flex-col items-end justify-center px-[16px] relative size-full">
              <div className="bg-white content-stretch flex h-[24px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Action Button">
                <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
                    <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-end justify-center size-full">
            <div className="content-stretch flex flex-col items-end justify-center px-[16px] relative size-full">
              <div className="bg-white content-stretch flex h-[24px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Action Button">
                <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
                    <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-end justify-center size-full">
            <div className="content-stretch flex flex-col items-end justify-center px-[16px] relative size-full">
              <div className="bg-white content-stretch flex h-[24px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Action Button">
                <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
                    <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="blocks">
          <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-end justify-center size-full">
            <div className="content-stretch flex flex-col items-end justify-center px-[16px] relative size-full">
              <div className="bg-white content-stretch flex h-[24px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Action Button">
                <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div className="h-[3.938px] relative shrink-0 w-[15.563px]" data-name="more">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5625 3.9375">
                    <path d={svgPaths.p34e4c00} fill="var(--fill-0, #555555)" id="more" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

function Table() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip rounded-[6px] top-0" data-name="Table">
      <BodyTable />
      <div className="bg-white content-stretch flex gap-[16px] h-[64px] items-center justify-end px-[16px] relative shrink-0 w-[1152px]" data-name="Footer">
        <div className="bg-white content-stretch flex items-center justify-center py-[10px] relative rounded-[6px] shrink-0 size-[24px]" data-name="Action Button">
          <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <div className="relative shrink-0 size-[16px]" data-name="Iconly">
            <ArrowLeft1 />
          </div>
        </div>
        <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14.4px] text-center whitespace-nowrap">
          <p className="leading-[1.5]">1/4</p>
        </div>
        <div className="bg-white content-stretch flex items-center justify-center py-[10px] relative rounded-[6px] shrink-0 size-[24px]" data-name="Action Button">
          <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <div className="relative shrink-0 size-[16px]" data-name="Iconly">
            <ArrowRight1 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Requests() {
  return (
    <div className="bg-white relative size-full" data-name="Requests">
      <div className="absolute bg-[rgba(16,39,84,0.9)] content-stretch flex flex-col h-[192px] items-start left-[240px] p-[24px] top-[64px] w-[1200px]" data-name="Page Header">
        <Frame2 />
      </div>
      <div className="absolute bg-[#102754] bottom-[-262px] content-stretch flex flex-col gap-[16px] items-start left-0 px-[24px] py-[16px] top-[64px] w-[240px]" data-name="Side Navigation Bar">
        <div className="bg-[rgba(255,255,255,0.15)] h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="Navigation item button">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[8px] relative size-full">
              <div className="relative shrink-0 size-[24px]" data-name="Icon=ic-paper-plane">
                <div className="absolute inset-[9.37%_9.37%_9.37%_9.38%]" data-name="vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5013 19.5013">
                    <path clipRule="evenodd" d={svgPaths.p2ccfd200} fill="var(--fill-0, #B7DEFF)" fillRule="evenodd" id="vector" />
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
              <Frame3 />
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
              <Frame4 />
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
              <Frame5 />
            </div>
          </div>
        </div>
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
              <Frame6 />
            </div>
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.05)] h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="Navigation item button">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[8px] relative size-full">
              <div className="relative shrink-0 size-[24px]" data-name="Icon=ic-bank">
                <div className="absolute inset-[7.83%_8.7%_7.83%_8.67%]" data-name="vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8307 20.2403">
                    <g id="vector">
                      <path clipRule="evenodd" d={svgPaths.p15c2c880} fill="var(--fill-0, white)" fillRule="evenodd" />
                      <path d={svgPaths.p268b8d00} fill="var(--fill-0, white)" />
                      <path d={svgPaths.p319f1700} fill="var(--fill-0, white)" />
                      <path d={svgPaths.p3e06bef0} fill="var(--fill-0, white)" />
                      <path d={svgPaths.pcaa1180} fill="var(--fill-0, white)" />
                      <path clipRule="evenodd" d={svgPaths.p6f61eb0} fill="var(--fill-0, white)" fillRule="evenodd" />
                    </g>
                  </svg>
                </div>
              </div>
              <Frame7 />
            </div>
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.05)] h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="Navigation item button">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[8px] relative size-full">
              <div className="relative shrink-0 size-[24px]" data-name="Icon=ic-briefcase">
                <div className="absolute inset-[8.33%_8.36%_9.43%_8.33%]" data-name="vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9926 19.7359">
                    <g id="vector">
                      <path clipRule="evenodd" d={svgPaths.p34668940} fill="var(--fill-0, white)" fillRule="evenodd" />
                      <path d={svgPaths.p3b558600} fill="var(--fill-0, white)" />
                      <path d={svgPaths.p28b21a00} fill="var(--fill-0, white)" />
                    </g>
                  </svg>
                </div>
              </div>
              <Frame8 />
            </div>
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.05)] h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="Navigation item button">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[8px] relative size-full">
              <div className="relative shrink-0 size-[24px]" data-name="Icon=ic-user-group">
                <div className="absolute inset-[14.32%_4.39%_15.03%_3.91%]" data-name="vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0099 16.9546">
                    <g id="vector">
                      <path clipRule="evenodd" d={svgPaths.p2c4c9b00} fill="var(--fill-0, white)" fillRule="evenodd" />
                      <path d={svgPaths.p3b483c00} fill="var(--fill-0, white)" />
                      <path d={svgPaths.p3fe08300} fill="var(--fill-0, white)" />
                      <path d={svgPaths.p23398df0} fill="var(--fill-0, white)" />
                      <path d={svgPaths.pb822600} fill="var(--fill-0, white)" />
                      <path clipRule="evenodd" d={svgPaths.p1708c800} fill="var(--fill-0, white)" fillRule="evenodd" />
                    </g>
                  </svg>
                </div>
              </div>
              <Frame9 />
            </div>
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.05)] h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="Navigation item button">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[8px] relative size-full">
              <div className="relative shrink-0 size-[24px]" data-name="Icon=ic-document">
                <div className="absolute inset-[8.33%_12.5%]" data-name="vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
                    <path clipRule="evenodd" d={svgPaths.p145dca00} fill="var(--fill-0, white)" fillRule="evenodd" id="vector" />
                  </svg>
                </div>
              </div>
              <Frame10 />
            </div>
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.05)] h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="Navigation item button">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[8px] relative size-full">
              <div className="relative shrink-0 size-[24px]" data-name="Icon=ic-wallet">
                <div className="absolute inset-[10.42%_8.33%]" data-name="vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0002 19">
                    <g id="vector">
                      <path d={svgPaths.p18903a80} fill="var(--fill-0, white)" />
                      <path d={svgPaths.p3434b400} fill="var(--fill-0, white)" />
                      <path clipRule="evenodd" d={svgPaths.p24089700} fill="var(--fill-0, white)" fillRule="evenodd" />
                    </g>
                  </svg>
                </div>
              </div>
              <Frame11 />
            </div>
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.05)] h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="Navigation item button">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[8px] relative size-full">
              <div className="relative shrink-0 size-[24px]" data-name="Icon=ic-controls">
                <div className="absolute inset-[10.42%_8.33%]" data-name="vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
                    <g id="vector">
                      <path clipRule="evenodd" d={svgPaths.p39af31f0} fill="var(--fill-0, white)" fillRule="evenodd" />
                      <path d={svgPaths.p303d6100} fill="var(--fill-0, white)" />
                      <path clipRule="evenodd" d={svgPaths.p17625c00} fill="var(--fill-0, white)" fillRule="evenodd" />
                      <path d={svgPaths.paa35f00} fill="var(--fill-0, white)" />
                    </g>
                  </svg>
                </div>
              </div>
              <Frame12 />
            </div>
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[6px] shrink-0 w-full" data-name="In-App Announcement">
          <div className="flex flex-col items-end size-full">
            <div className="content-stretch flex flex-col gap-[18px] items-end p-[16px] relative w-full">
              <Copy />
              <div className="relative rounded-[6px] shrink-0 w-full" data-name="Text button">
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[12px] py-[9px] relative w-full">
                    <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#61d690] text-[14.4px] whitespace-nowrap">LEARN MORE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white h-[64px] left-0 overflow-clip shadow-[0px_1px_3px_0px_rgba(16,39,84,0.1)] top-0 w-[1440px]" data-name="navigation bar">
        <div className="absolute h-[37px] left-[24px] top-[14px] w-[190.711px]" data-name="company logo">
          <div className="absolute inset-[71.53%_89.26%_0_5.22%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5242 10.5323">
              <path d={svgPaths.p12a56800} fill="var(--fill-0, #2B3034)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[0_80.64%_29.5%_0]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.9141 26.0866">
              <path d={svgPaths.p8afc600} fill="var(--fill-0, #156FBE)" id="Vector" />
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
              <path d={svgPaths.pa67a200} fill="var(--fill-0, #2B3034)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[15.06%_33.64%_34.45%_58.28%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4091 18.6832">
              <path d={svgPaths.p16ecc600} fill="var(--fill-0, #2B3034)" id="Vector" />
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
      <div className="absolute h-[1088px] left-[264px] top-[193px] w-[1152px]" data-name="Request Table">
        <div className="absolute bg-white h-[1087px] left-0 rounded-[6px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] top-px w-[1152px]" data-name="Container" />
        <Table />
      </div>
    </div>
  );
}