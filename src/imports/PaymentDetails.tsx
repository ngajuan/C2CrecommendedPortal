import svgPaths from "./svg-dd6sgc2vtj";

function Show() {
  return (
    <div className="absolute inset-[16.67%_8.33%]" data-name="Show">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.833 12.667">
        <g id="Show">
          <path d={svgPaths.p409c480} fill="var(--fill-0, #555555)" id="Show_2" />
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

function Field() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 whitespace-nowrap" data-name="Field">
      <p className="font-['Oxygen:Bold',sans-serif] relative shrink-0">Destination account</p>
      <p className="font-['Oxygen:Regular',sans-serif] relative shrink-0">Chase Escrow 2001***</p>
    </div>
  );
}

function Field1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 whitespace-nowrap" data-name="Field">
      <p className="font-['Oxygen:Bold',sans-serif] relative shrink-0">Closing office</p>
      <p className="font-['Oxygen:Regular',sans-serif] relative shrink-0 text-right">Security Title - Jacksonville</p>
    </div>
  );
}

function Field2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 whitespace-nowrap" data-name="Field">
      <p className="font-['Oxygen:Bold',sans-serif] relative shrink-0">Transfer type</p>
      <p className="font-['Oxygen:Regular',sans-serif] relative shrink-0">Instant Payment</p>
    </div>
  );
}

function Field3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 whitespace-nowrap" data-name="Field">
      <p className="font-['Oxygen:Bold',sans-serif] relative shrink-0">Purpose</p>
      <p className="font-['Oxygen:Regular',sans-serif] relative shrink-0">Cash to close</p>
    </div>
  );
}

function Field4() {
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
      <Field />
      <Field1 />
      <Field2 />
      <Field3 />
      <Field4 />
    </div>
  );
}

function Field5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Field">
      <p className="font-['Oxygen:Bold',sans-serif] relative shrink-0 text-[#555]">File number</p>
      <p className="font-['Oxygen:Regular',sans-serif] relative shrink-0 text-[#156fbe] text-right">4561247</p>
    </div>
  );
}

function Field6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#555]" data-name="Field">
      <p className="font-['Oxygen:Bold',sans-serif] relative shrink-0">Transaction ID</p>
      <p className="font-['Oxygen:Regular',sans-serif] relative shrink-0">24aSF452afa</p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative whitespace-nowrap" data-name="Column">
      <Field5 />
      <Field6 />
    </div>
  );
}

function DetailsBox() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex gap-[24px] items-start leading-[1.5] left-0 not-italic p-[20px] rounded-[6px] text-[16px] top-[64px] w-[657px]" data-name="Details Box">
      <Frame />
      <Column />
    </div>
  );
}

export default function PaymentDetails() {
  return (
    <div className="relative size-full" data-name="Payment details">
      <RequestDetailsHeader />
      <DetailsBox />
    </div>
  );
}