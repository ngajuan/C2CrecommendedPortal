import svgPaths from "./svg-bh4dkoj8zq";
import imgLine26 from "figma:asset/7b09ea33c9d7706b1598031ae90737a2d04af321.png";
import imgLine27 from "figma:asset/7d7ecd3e8304988b23535608a9a1525279b5931a.png";
import imgLine28 from "figma:asset/da83adcec8fef068d9b6d9755dab15405f88dbc4.png";

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
      <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[20px] w-[346px]">Request Opened</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Container">
      <StatusTitle />
      <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#2b3034] text-[16px] w-[min-content]">The request was opened by Jessie owens</p>
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
        <Container1 />
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
    </div>
  );
}

function ActivityItem() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start leading-[0] not-italic relative shrink-0 text-[#555] text-[0px] w-full" data-name="Activity item">
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
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Activities">
      <ActivityItem />
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

function ActivityTimeline() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] top-[126px] w-[415px]" data-name="Activity timeline">
      <Status />
      <ActivityLine />
      <Event />
    </div>
  );
}

function Field() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Field">
      <p className="font-['Oxygen:Bold',sans-serif] relative shrink-0">Client name</p>
      <p className="font-['Oxygen:Regular',sans-serif] relative shrink-0">Jessie Owens</p>
    </div>
  );
}

function Field1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Field">
      <p className="font-['Oxygen:Bold',sans-serif] relative shrink-0">Email</p>
      <p className="font-['Oxygen:Regular',sans-serif] relative shrink-0">m****@g***.com</p>
    </div>
  );
}

function Field2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Field">
      <p className="font-['Oxygen:Bold',sans-serif] relative shrink-0">Phone</p>
      <p className="font-['Oxygen:Regular',sans-serif] relative shrink-0">(***) ***-5321</p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start leading-[1.5] min-h-px min-w-px not-italic relative self-stretch text-[#555] text-[16px] whitespace-nowrap" data-name="Column">
      <Field />
      <Field1 />
      <Field2 />
    </div>
  );
}

function Field3() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap" data-name="Field">
      <p className="font-['Oxygen:Bold',sans-serif] relative shrink-0">Current home address</p>
      <p className="font-['Oxygen:Regular',sans-serif] relative shrink-0">717 Brooks Ave, Austin, Texas, 78710</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Column">
      <Field3 />
    </div>
  );
}

function DetailsBox() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex gap-[24px] items-start left-[471px] p-[20px] rounded-[6px] top-[556px] w-[657px]" data-name="Details Box">
      <Column />
      <Column1 />
    </div>
  );
}

function Show() {
  return (
    <div className="absolute inset-[16.67%_8.33%]" data-name="Show">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8334 12.667">
        <g id="Show">
          <path d={svgPaths.pa55d4c0} fill="var(--fill-0, #555555)" id="Show_2" />
        </g>
      </svg>
    </div>
  );
}

function RequestDetailsHeader() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-0 w-[657px]" data-name="Request Details Header">
      <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[24px] whitespace-nowrap">
        <p className="leading-[1.5]">Payment details</p>
      </div>
      <div className="bg-white content-stretch flex gap-[8px] h-[40px] items-center px-[16px] py-[10px] relative rounded-[6px] shrink-0" data-name="Action Button">
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="relative shrink-0 size-[19px]" data-name="Iconly">
          <Show />
        </div>
        <p className="font-['Oxygen:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#555] text-[14.4px] whitespace-nowrap">SHOW</p>
      </div>
    </div>
  );
}

function Field4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 whitespace-nowrap" data-name="Field">
      <p className="font-['Oxygen:Bold',sans-serif] relative shrink-0">Destination account</p>
      <p className="font-['Oxygen:Regular',sans-serif] relative shrink-0">Chase Escrow 2001***</p>
    </div>
  );
}

function Field5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 whitespace-nowrap" data-name="Field">
      <p className="font-['Oxygen:Bold',sans-serif] relative shrink-0">Closing office</p>
      <p className="font-['Oxygen:Regular',sans-serif] relative shrink-0 text-right">Security Title - Jacksonville</p>
    </div>
  );
}

function Field6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 whitespace-nowrap" data-name="Field">
      <p className="font-['Oxygen:Bold',sans-serif] relative shrink-0">Transfer type</p>
      <p className="font-['Oxygen:Regular',sans-serif] relative shrink-0">Instant Payment</p>
    </div>
  );
}

function Field7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 whitespace-nowrap" data-name="Field">
      <p className="font-['Oxygen:Bold',sans-serif] relative shrink-0">Purpose</p>
      <p className="font-['Oxygen:Regular',sans-serif] relative shrink-0">Cash to close</p>
    </div>
  );
}

function Field8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Field">
      <p className="font-['Oxygen:Bold',sans-serif] relative shrink-0 whitespace-nowrap">Notes</p>
      <p className="font-['Oxygen:Regular',sans-serif] min-w-full relative shrink-0 w-[min-content]">“This is for my earnest money deposit on 717 brooks ave. Thank you.”</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative text-[#555]">
      <Field4 />
      <Field5 />
      <Field6 />
      <Field7 />
      <Field8 />
    </div>
  );
}

function Field9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Field">
      <p className="font-['Oxygen:Bold',sans-serif] relative shrink-0 text-[#555]">File number</p>
      <p className="font-['Oxygen:Regular',sans-serif] relative shrink-0 text-[#156fbe] text-right">4561247</p>
    </div>
  );
}

function Field10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#555]" data-name="Field">
      <p className="font-['Oxygen:Bold',sans-serif] relative shrink-0">Transaction ID</p>
      <p className="font-['Oxygen:Regular',sans-serif] relative shrink-0">24aSF452afa</p>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative whitespace-nowrap" data-name="Column">
      <Field9 />
      <Field10 />
    </div>
  );
}

function DetailsBox1() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex gap-[24px] items-start leading-[1.5] left-0 not-italic p-[20px] rounded-[6px] text-[16px] top-[64px] w-[657px]" data-name="Details Box">
      <Frame />
      <Column2 />
    </div>
  );
}

function PaymentDetails() {
  return (
    <div className="absolute h-[448px] left-[471px] top-[24px] w-[657px]" data-name="Payment details">
      <RequestDetailsHeader />
      <DetailsBox1 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white overflow-clip relative rounded-[4px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] size-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Oxygen:Bold',sans-serif] leading-[1.5] left-[54.5px] not-italic text-[#555] text-[16px] text-center top-[24px] whitespace-nowrap">Amount</p>
      <ActivityTimeline />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] left-[471px] not-italic text-[#555] text-[24px] top-[514px] w-[168px]">
        <p className="leading-[1.5]">Client details</p>
      </div>
      <DetailsBox />
      <PaymentDetails />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] left-[24px] not-italic text-[#102754] text-[32px] top-[72px] w-[153px]">
        <p className="leading-[1.5]">$3,000.00</p>
      </div>
    </div>
  );
}