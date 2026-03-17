import svgPaths from "./svg-4ju1a44uaw";

function Iconly() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Iconly">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Iconly">
          <path d={svgPaths.p2ff12c80} fill="var(--fill-0, #156FBE)" id="Send" />
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Header">
      <Iconly />
      <div className="capitalize css-g0mm18 flex flex-col font-['Oxygen:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[24px]">
        <p className="css-ew64yg leading-[1.5]">New Request</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Div">
      <Header />
      <div className="css-g0mm18 flex flex-col font-['Font_Awesome_5_Pro:Regular',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#555] text-[18px]">
        <p className="css-ew64yg leading-[normal]"></p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
      <div className="col-1 css-g0mm18 flex flex-col font-['Oxygen:Regular',sans-serif] justify-center ml-0 mt-[12px] not-italic relative row-1 text-[#555] text-[16px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[1.5]">1. Request details</p>
      </div>
      <div className="bg-[#156fbe] col-1 h-[4px] ml-0 mt-[29px] rounded-[99999px] row-1 w-[169px]" />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
      <div className="col-1 css-g0mm18 flex flex-col font-['Oxygen:Regular',sans-serif] justify-center ml-0 mt-[12px] not-italic relative row-1 text-[#555] text-[16px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[1.5]">2. Review and send</p>
      </div>
      <div className="bg-[#ddd] col-1 h-[4px] ml-0 mt-[29px] rounded-[9999px] row-1 w-[169px]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[24px] items-start leading-[0] relative shrink-0">
      <Group4 />
      <Group5 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center justify-end px-[16px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="capitalize css-ew64yg font-['Oxygen:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#555] text-[16px]">Cancel</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="absolute inset-[16.67%_31.25%]" data-name="Arrow - Right 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 16">
        <g id="Arrow - Right 2">
          <path d={svgPaths.p134c0f00} fill="var(--fill-0, white)" id="Arrow - Right 2_2" />
        </g>
      </svg>
    </div>
  );
}

function Iconly1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Iconly">
      <ArrowRight />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#156fbe] content-stretch flex gap-[16px] h-[48px] items-center justify-end px-[16px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
      <p className="capitalize css-ew64yg font-['Oxygen:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-white">Next</p>
      <Iconly1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame9 />
      <Frame8 />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[#555]" data-name="Column">
      <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[20px]">
        <p className="css-ew64yg leading-[1.5]">Account / Office</p>
      </div>
      <p className="css-4hzbpn font-['Oxygen:Regular',sans-serif] leading-[1.5] min-w-full relative shrink-0 text-[16px] w-[min-content]">{`Select the account you would like this request to be sent from. `}</p>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[10px] relative shrink-0 w-[6px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
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
    <div className="bg-white h-[40px] relative rounded-[6px] shrink-0 w-full" data-name="Select Button">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative size-full">
          <div className="css-g0mm18 flex flex-col font-['Oxygen:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px] text-right">
            <p className="css-ew64yg leading-[1.5]">Default office</p>
          </div>
          <Group />
        </div>
      </div>
    </div>
  );
}

function Select() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Select">
      <SelectButton />
    </div>
  );
}

function Box() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[30px] relative rounded-[4px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] shrink-0 w-[796px]" data-name="Box">
      <Select />
    </div>
  );
}

function FormSection() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Form Section">
      <Column />
      <Box />
    </div>
  );
}

function Box1() {
  return (
    <div className="h-0 relative shrink-0 w-[1152px]" data-name="Box">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1152 1.00008">
          <g id="Box">
            <line id="divider" stroke="var(--stroke-0, #EEEEEE)" x1="5.18693e-08" x2="1152" y1="0.500085" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative text-[#555]" data-name="Column">
      <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center relative shrink-0 text-[20px] w-[190px]">
        <p className="css-4hzbpn leading-[1.5]">Request type</p>
      </div>
      <div className="font-['Oxygen:Regular',sans-serif] min-w-full relative shrink-0 text-[16px] w-[min-content]">
        <p className="css-4hzbpn leading-[1.5] mb-0">{`Select which type of request you would like to send to this recipient. `}</p>
        <p className="css-4hzbpn leading-[1.5] mb-0">&nbsp;</p>
        <p className="css-4hzbpn">
          <span className="leading-[1.5]">{`Learn more about `}</span>
          <span className="leading-[1.5] text-[#156fbe]">request types</span>
          <span className="leading-[1.5]">{`. `}</span>
        </p>
      </div>
    </div>
  );
}

function RadioButton() {
  return (
    <div className="bg-[#156fbe] flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-bl-[6px] rounded-tl-[6px]" data-name="Radio Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[70px] py-[30px] relative size-full">
          <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white">
            <p className="css-ew64yg leading-[1.5]">Send request</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-bl-[6px] rounded-tl-[6px]" />
    </div>
  );
}

function RadioButton1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[80px] min-h-px min-w-px relative" data-name="Radio Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[70px] py-[30px] relative size-full">
          <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px] text-center">
            <p className="css-ew64yg leading-[1.5]">Collect bank details</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function RadioButton2() {
  return (
    <div className="bg-white flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-br-[6px] rounded-tr-[6px]" data-name="Radio Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[70px] py-[30px] relative size-full">
          <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px] text-center">
            <p className="css-ew64yg leading-[1.5]">Confirm bank details</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-br-[6px] rounded-tr-[6px]" />
    </div>
  );
}

function RadioField() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[736px]" data-name="Radio Field">
      <RadioButton />
      <RadioButton1 />
      <RadioButton2 />
    </div>
  );
}

function RadioButton3() {
  return (
    <div className="bg-[#156fbe] flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-bl-[6px] rounded-tl-[6px]" data-name="Radio Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[70px] py-[30px] relative size-full">
          <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white">
            <p className="css-ew64yg leading-[1.5]">Earnest money</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-bl-[6px] rounded-tl-[6px]" />
    </div>
  );
}

function RadioButton4() {
  return (
    <div className="bg-white flex-[1_0_0] h-[80px] min-h-px min-w-px relative" data-name="Radio Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[70px] py-[30px] relative size-full">
          <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px] text-center">
            <p className="css-ew64yg leading-[1.5]">Cash to close</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function RadioButton5() {
  return (
    <div className="bg-white flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-br-[6px] rounded-tr-[6px]" data-name="Radio Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[70px] py-[30px] relative size-full">
          <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px] text-center">
            <p className="css-ew64yg leading-[1.5]">Other</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-br-[6px] rounded-tr-[6px]" />
    </div>
  );
}

function RadioField1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Radio Field">
      <RadioButton3 />
      <RadioButton4 />
      <RadioButton5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <RadioField1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px] text-center">
        <p className="css-ew64yg leading-[1.5]">I’m sending instructions for</p>
      </div>
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <RadioField />
      <Frame4 />
    </div>
  );
}

function Box2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[30px] relative rounded-[4px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] shrink-0 w-[796px]" data-name="Box">
      <Frame7 />
    </div>
  );
}

function FormSection1() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Form Section">
      <Column1 />
      <Box2 />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[#555]" data-name="Column">
      <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[20px]">
        <p className="css-ew64yg leading-[1.5]">File number</p>
      </div>
      <p className="css-4hzbpn font-['Oxygen:Regular',sans-serif] leading-[1.5] min-w-full relative shrink-0 text-[16px] w-[min-content]">Provide the file number associated with the business verification.</p>
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Div">
      <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px]">
        <p className="css-ew64yg leading-[1.5]">File number</p>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="bg-white h-[40px] relative rounded-[6px] shrink-0 w-full" data-name="Div">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[12px] py-[8px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#555] text-[16px]">
            <p className="css-4hzbpn leading-[1.5]">B2468102Y</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="content-stretch flex flex-col gap-[4.8px] items-start relative shrink-0 w-full" data-name="Div">
      <Div2 />
    </div>
  );
}

function TextField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text field">
      <Div1 />
      <Div3 />
    </div>
  );
}

function Box3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[30px] relative rounded-[4px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] shrink-0 w-[796px]" data-name="Box">
      <TextField />
    </div>
  );
}

function FormSection2() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full" data-name="Form Section">
      <Column2 />
      <Box3 />
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[#555]" data-name="Column">
      <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[20px] w-[155px]">
        <p className="css-4hzbpn leading-[1.5]">Recipient</p>
      </div>
      <p className="css-4hzbpn font-['Oxygen:Regular',sans-serif] leading-[1.5] min-w-full relative shrink-0 text-[16px] w-[min-content]">Provide all necessary details for the recipient to receive the request.</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[10px] relative shrink-0 w-[6px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
        <g id="Group 353">
          <path d={svgPaths.p1346e080} fill="var(--fill-0, #555555)" id="Polygon 29" />
          <path d={svgPaths.p94a7000} fill="var(--fill-0, #555555)" id="Polygon 30" />
        </g>
      </svg>
    </div>
  );
}

function SelectButton1() {
  return (
    <div className="bg-white h-[40px] relative rounded-[6px] shrink-0 w-full" data-name="Select Button">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative size-full">
          <div className="css-g0mm18 flex flex-col font-['Oxygen:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px] text-right">
            <p className="css-ew64yg leading-[1.5]">Jessie Owens</p>
          </div>
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function Select1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Select">
      <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px]">
        <p className="css-ew64yg leading-[1.5]">Recipient</p>
      </div>
      <SelectButton1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Select1 />
    </div>
  );
}

function AddFinalCreditTo() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="Add final credit to">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative" data-name="divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 553 1">
            <line id="divider" stroke="var(--stroke-0, #DDDDDD)" x2="553" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px]">
        <p className="css-ew64yg leading-[1.5]">+ Add new recipient</p>
      </div>
    </div>
  );
}

function Box4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[30px] relative rounded-[4px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] shrink-0 w-[796px]" data-name="Box">
      <Frame />
      <AddFinalCreditTo />
    </div>
  );
}

function FormSection3() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Form Section">
      <Column3 />
      <Box4 />
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[#555]" data-name="Column">
      <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[20px]">
        <p className="css-ew64yg leading-[1.5]">Closing details</p>
      </div>
      <p className="css-4hzbpn font-['Oxygen:Regular',sans-serif] leading-[1.5] min-w-full relative shrink-0 text-[16px] w-[min-content]">{`These details will not be shared with the recipient but will help to improve their experiencce. `}</p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px]">
        <p className="css-ew64yg leading-[1.5]">Payment amount</p>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#555] text-[16px]">
            <p className="css-4hzbpn leading-[1.5]">$78,987</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px overflow-clip relative" data-name="Input">
      <Label />
      <Field />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px]">
        <p className="css-ew64yg leading-[1.5]">Closing date</p>
      </div>
    </div>
  );
}

function Field1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#555] text-[16px]">
            <p className="css-4hzbpn leading-[1.5]">01/29/2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px overflow-clip relative" data-name="Input">
      <Label1 />
      <Field1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Input />
      <Input1 />
    </div>
  );
}

function Box5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[30px] relative rounded-[4px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] shrink-0 w-[796px]" data-name="Box">
      <Frame3 />
    </div>
  );
}

function FormSection4() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Form Section">
      <Column4 />
      <Box5 />
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[#555]" data-name="Column">
      <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[20px]">
        <p className="css-ew64yg leading-[1.5]">Property</p>
      </div>
      <p className="css-4hzbpn font-['Oxygen:Regular',sans-serif] leading-[1.5] min-w-full relative shrink-0 text-[16px] w-[min-content]">Provide an address to help identify this request.</p>
    </div>
  );
}

function Div4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Div">
      <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px]">
        <p className="css-ew64yg leading-[1.5]">Property address</p>
      </div>
    </div>
  );
}

function Div5() {
  return (
    <div className="bg-white h-[40px] relative rounded-[6px] shrink-0 w-full" data-name="Div">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[12px] py-[8px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#2b3034] text-[16px]">
            <p className="css-4hzbpn leading-[1.5]">1234 Rivers Road</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div6() {
  return (
    <div className="content-stretch flex flex-col gap-[4.8px] items-start relative shrink-0 w-full" data-name="Div">
      <Div5 />
    </div>
  );
}

function TextField1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text field">
      <Div4 />
      <Div6 />
    </div>
  );
}

function Div7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center leading-[0] not-italic relative shrink-0 w-full" data-name="Div">
      <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center relative shrink-0 text-[#555] text-[16px]">
        <p className="css-ew64yg leading-[1.5]">Apartment, suite, etc.</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Regular',sans-serif] justify-center min-h-px min-w-px relative text-[#a0a2a4] text-[14.4px] text-right">
        <p className="css-4hzbpn leading-[1.5]">Optional</p>
      </div>
    </div>
  );
}

function Div8() {
  return (
    <div className="bg-white h-[40px] relative rounded-[6px] shrink-0 w-full" data-name="Div">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[12px] py-[8px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#555] text-[16px]">
            <p className="css-4hzbpn leading-[1.5]">d200</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div9() {
  return (
    <div className="content-stretch flex flex-col gap-[4.8px] items-start relative shrink-0 w-full" data-name="Div">
      <Div8 />
    </div>
  );
}

function TextField2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text field">
      <Div7 />
      <Div9 />
    </div>
  );
}

function Div10() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Div">
      <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px]">
        <p className="css-ew64yg leading-[1.5]">City</p>
      </div>
    </div>
  );
}

function Div11() {
  return (
    <div className="bg-white h-[40px] relative rounded-[6px] shrink-0 w-full" data-name="Div">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[12px] py-[8px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#555] text-[16px]">
            <p className="css-4hzbpn leading-[1.5]">Buda</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div12() {
  return (
    <div className="content-stretch flex flex-col gap-[4.8px] items-start relative shrink-0 w-full" data-name="Div">
      <Div11 />
    </div>
  );
}

function TextField3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text field">
      <Div10 />
      <Div12 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Label">
      <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px]">
        <p className="css-ew64yg leading-[1.5]">State</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[10px] relative shrink-0 w-[6px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
        <g id="Group 353">
          <path d={svgPaths.p1346e080} fill="var(--fill-0, #555555)" id="Polygon 29" />
          <path d={svgPaths.p94a7000} fill="var(--fill-0, #555555)" id="Polygon 30" />
        </g>
      </svg>
    </div>
  );
}

function SelectButton2() {
  return (
    <div className="bg-white h-[40px] relative rounded-[6px] shrink-0 w-full" data-name="Select Button">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#555] text-[16px]">
            <p className="css-4hzbpn leading-[1.5]">Texas</p>
          </div>
          <Group2 />
        </div>
      </div>
    </div>
  );
}

function SelectFieldWip() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Select field (WIP)">
      <Label2 />
      <SelectButton2 />
    </div>
  );
}

function Div13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Div">
      <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px]">
        <p className="css-ew64yg leading-[1.5]">Zip code</p>
      </div>
    </div>
  );
}

function Div14() {
  return (
    <div className="bg-white h-[40px] relative rounded-[6px] shrink-0 w-full" data-name="Div">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[12px] py-[8px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#555] text-[16px]">
            <p className="css-4hzbpn leading-[1.5]">78610</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div15() {
  return (
    <div className="content-stretch flex flex-col gap-[4.8px] items-start relative shrink-0 w-full" data-name="Div">
      <Div14 />
    </div>
  );
}

function TextField4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Text field">
      <Div13 />
      <Div15 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <SelectFieldWip />
      <TextField4 />
    </div>
  );
}

function Box6() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[30px] relative rounded-[4px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] shrink-0 w-[796px]" data-name="Box">
      <TextField1 />
      <TextField2 />
      <TextField3 />
      <Frame11 />
    </div>
  );
}

function FormSection5() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Form Section">
      <Column5 />
      <Box6 />
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[#555]" data-name="Column">
      <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[20px]">
        <p className="css-ew64yg leading-[1.5]">Underwriter</p>
      </div>
      <p className="css-4hzbpn font-['Oxygen:Regular',sans-serif] leading-[1.5] min-w-full relative shrink-0 text-[16px] w-[min-content]">Select an underwriter to take advantage of underwriter partner pricing.</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="h-[10px] relative shrink-0 w-[6px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
        <g id="Group 353">
          <path d={svgPaths.p1346e080} fill="var(--fill-0, #555555)" id="Polygon 29" />
          <path d={svgPaths.p94a7000} fill="var(--fill-0, #555555)" id="Polygon 30" />
        </g>
      </svg>
    </div>
  );
}

function SelectButton3() {
  return (
    <div className="bg-white h-[40px] relative rounded-[6px] shrink-0 w-full" data-name="Select Button">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative size-full">
          <div className="css-g0mm18 flex flex-col font-['Oxygen:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px] text-right">
            <p className="css-ew64yg leading-[1.5]">Select</p>
          </div>
          <Group3 />
        </div>
      </div>
    </div>
  );
}

function Select2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Select">
      <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px]">
        <p className="css-ew64yg leading-[1.5]">Underwriter</p>
      </div>
      <SelectButton3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Select2 />
    </div>
  );
}

function Box7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[30px] relative rounded-[4px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] shrink-0 w-[796px]" data-name="Box">
      <Frame1 />
    </div>
  );
}

function FormSection6() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Form Section">
      <Column6 />
      <Box7 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[#555]">
      <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[20px]">
        <p className="css-ew64yg leading-[1.5]">Email message</p>
      </div>
      <p className="css-4hzbpn font-['Oxygen:Regular',sans-serif] leading-[1.5] min-w-full relative shrink-0 text-[16px] w-[min-content]">{`This message will be displayed in the email sent to the recipient. `}</p>
    </div>
  );
}

function Div16() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 w-full" data-name="Div">
      <div className="css-g0mm18 flex flex-col font-['Oxygen:Bold',sans-serif] justify-center relative shrink-0 text-[#555] text-[16px]">
        <p className="css-ew64yg leading-[1.5]">Custom message</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Oxygen:Regular',sans-serif] justify-center relative shrink-0 text-[#a0a2a4] text-[14.4px] text-right">
        <p className="css-ew64yg leading-[1.5]">Optional</p>
      </div>
    </div>
  );
}

function Div17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-full" data-name="Div">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex flex-col font-['Oxygen:Regular',sans-serif] items-start justify-between not-italic p-[11px] relative size-full text-[#a0a2a4]">
        <p className="css-4hzbpn leading-[1.5] relative shrink-0 text-[16px] w-full">Enter your message here.</p>
        <div className="flex flex-col justify-center leading-[0] opacity-50 relative shrink-0 text-[14.4px] text-right w-full">
          <p className="css-4hzbpn leading-[1.5]">0/550</p>
        </div>
      </div>
    </div>
  );
}

function TextArea() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[139px] items-start relative shrink-0 w-full" data-name="Text-Area">
      <Div16 />
      <Div17 />
    </div>
  );
}

function Box8() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[30px] relative rounded-[4px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] shrink-0 w-[796px]" data-name="Box">
      <TextArea />
    </div>
  );
}

function FormSection7() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Form Section">
      <Frame5 />
      <Box8 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center justify-end px-[16px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="capitalize css-ew64yg font-['Oxygen:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#555] text-[16px]">Cancel</p>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="absolute inset-[16.67%_31.25%]" data-name="Arrow - Right 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 16">
        <g id="Arrow - Right 2">
          <path d={svgPaths.p134c0f00} fill="var(--fill-0, white)" id="Arrow - Right 2_2" />
        </g>
      </svg>
    </div>
  );
}

function Iconly2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Iconly">
      <ArrowRight1 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#156fbe] content-stretch flex gap-[16px] h-[48px] items-center justify-end px-[16px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
      <p className="capitalize css-ew64yg font-['Oxygen:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-white">Next</p>
      <Iconly2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
      <Button2 />
      <Button3 />
    </div>
  );
}

export default function EmdCashToClose() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[24px] items-end p-[24px] relative size-full" data-name="EMD & Cash to close">
      <Div />
      <Frame10 />
      <FormSection />
      <Box1 />
      <FormSection1 />
      <Box1 />
      <FormSection2 />
      <Box1 />
      <FormSection3 />
      <Box1 />
      <FormSection4 />
      <Box1 />
      <FormSection5 />
      <Box1 />
      <FormSection6 />
      <Box1 />
      <Box1 />
      <FormSection7 />
      <div className="h-0 relative shrink-0 w-[1152px]" data-name="divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1152 1">
            <line id="divider" stroke="var(--stroke-0, #EEEEEE)" x2="1152" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame2 />
    </div>
  );
}