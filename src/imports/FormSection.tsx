function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[#555]" data-name="Column">
      <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[20px] whitespace-nowrap">
        <p className="leading-[1.5]">Bank information</p>
      </div>
      <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] min-w-full relative shrink-0 text-[16px] w-[min-content]">{`Select the appropriate bank information for this recipient. `}</p>
    </div>
  );
}

function Padding() {
  return (
    <div className="h-[45.59px] relative shrink-0 w-full" data-name="Padding">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11px] items-center p-[12.8px] relative size-full">
          <div className="bg-white relative rounded-[999px] shrink-0 size-[20px]">
            <div aria-hidden="true" className="absolute border-2 border-[#ddd] border-solid inset-[-2px] pointer-events-none rounded-[1001px]" />
          </div>
          <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
            <p className="leading-[1.5] whitespace-pre">{` Correspondent  ********5309  `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <Padding />
      </div>
    </div>
  );
}

function Padding1() {
  return (
    <div className="h-[45.59px] relative shrink-0 w-full" data-name="Padding">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11px] items-center p-[12.8px] relative size-full">
          <div className="bg-white relative rounded-[999px] shrink-0 size-[20px]">
            <div aria-hidden="true" className="absolute border-2 border-[#ddd] border-solid inset-[-2px] pointer-events-none rounded-[1001px]" />
          </div>
          <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
            <p className="leading-[1.5] whitespace-pre">{` Correspondent  ********5309  `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <Padding1 />
      </div>
    </div>
  );
}

function Padding2() {
  return (
    <div className="h-[45.59px] relative shrink-0 w-full" data-name="Padding">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11px] items-center p-[12.8px] relative size-full">
          <div className="bg-white relative rounded-[999px] shrink-0 size-[20px]">
            <div aria-hidden="true" className="absolute border-2 border-[#ddd] border-solid inset-[-2px] pointer-events-none rounded-[1001px]" />
          </div>
          <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
            <p className="leading-[1.5] whitespace-pre">{` Correspondent  ********5309  `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <Padding2 />
      </div>
    </div>
  );
}

function Filled() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Filled">
      <div className="bg-white col-1 ml-0 mt-0 relative rounded-[999px] row-1 size-[20px]">
        <div aria-hidden="true" className="absolute border-2 border-[#156fbe] border-solid inset-[-2px] pointer-events-none rounded-[1001px]" />
      </div>
      <div className="bg-[#156fbe] col-1 ml-[5px] mt-[5px] rounded-[999px] row-1 size-[10px]" />
    </div>
  );
}

function Padding3() {
  return (
    <div className="h-[45.59px] relative shrink-0 w-full" data-name="Padding">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11px] items-center leading-[0] p-[12.8px] relative size-full">
          <Filled />
          <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
            <p className="leading-[1.5] whitespace-pre">{` Correspondent  ********5309  `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <Padding3 />
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-[#ddd] content-stretch flex flex-col items-start relative rounded-[6px] shrink-0 w-full" data-name="Buttons">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="bg-white content-stretch flex flex-col items-start justify-center relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-full" data-name="Check Button">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b border-solid inset-0 pointer-events-none rounded-tl-[6px] rounded-tr-[6px]" />
        <Button />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Check Button">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b border-solid inset-0 pointer-events-none" />
        <Button1 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Check Button">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b border-solid inset-0 pointer-events-none" />
        <Button2 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start justify-center relative rounded-bl-[6px] rounded-br-[6px] shrink-0 w-full" data-name="Check Button">
        <Button3 />
      </div>
    </div>
  );
}

function Box() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[30px] relative rounded-[4px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] shrink-0 w-[796px]" data-name="Box">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative rounded-[6px] shrink-0 w-full" data-name="Check Group">
        <Buttons />
      </div>
    </div>
  );
}

export default function FormSection() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative size-full" data-name="Form Section">
      <Column />
      <Box />
    </div>
  );
}