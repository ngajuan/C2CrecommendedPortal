import { useState } from 'react';
import svgPaths from "@/imports/svg-4ju1a44uaw";

interface FormData {
  accountOffice: string;
  requestType: 'request_payment' | 'send_wiring' | '';
  requestSubType: 'earnest_money' | 'cash_to_close' | 'other' | '';
  genericRequestType: 'send' | 'collect' | 'confirm' | '';
  fileNumber: string;
  recipient: string;
  paymentAmount: string;
  closingDate: string;
  propertyAddress: string;
  apartmentSuite: string;
  city: string;
  state: string;
  zipCode: string;
  underwriter: string;
  customMessage: string;
  bankInfo: string;
  digitalPayment: boolean;
  wireInstructions: boolean;
  wireInstructionsToShare: string;
}

interface NewRecipientData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  recipientType: string;
}

interface NewRequestFormProps {
  onCancel?: () => void;
  initialMode?: 'request_payment' | 'send_wiring';
  entryPoint?: 'send_request' | 'request_payment';
}

export function NewRequestForm({ onCancel, initialMode, entryPoint = 'send_request' }: NewRequestFormProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [showFullForm, setShowFullForm] = useState(true);
  const [showAddRecipient, setShowAddRecipient] = useState(false);
  const [otherPaymentReason, setOtherPaymentReason] = useState('');
  const [paymentAmountError, setPaymentAmountError] = useState('');
  const [newRecipient, setNewRecipient] = useState<NewRecipientData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    recipientType: '',
  });
  
  const [formData, setFormData] = useState<FormData>({
    accountOffice: '',
    requestType: initialMode || 'request_payment',
    requestSubType: '',
    genericRequestType: 'send',
    fileNumber: '',
    recipient: '',
    paymentAmount: '',
    closingDate: '',
    propertyAddress: '',
    apartmentSuite: '',
    city: '',
    state: '',
    zipCode: '',
    underwriter: '',
    customMessage: '',
    bankInfo: '',
    digitalPayment: true,
    wireInstructions: true,
    wireInstructionsToShare: '',
  });

  // Existing clients (these would come from file data)
  const [existingClients, setExistingClients] = useState<string[]>([]);

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const updateNewRecipient = (updates: Partial<NewRecipientData>) => {
    setNewRecipient(prev => ({ ...prev, ...updates }));
  };

  // Format currency input
  const formatCurrency = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');
    if (!digits) return '';
    
    // Convert to number and format
    const number = parseInt(digits, 10);
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  const handlePaymentAmountChange = (value: string) => {
    const formatted = formatCurrency(value);
    // Extract numeric value for validation
    const digits = value.replace(/\D/g, '');
    const numericValue = digits ? parseInt(digits, 10) : 0;
    if (numericValue > 500000) {
      setPaymentAmountError('Payment amount cannot exceed $500,000');
    } else {
      setPaymentAmountError('');
    }
    updateFormData({ paymentAmount: formatted });
  };

  // Auto-fill when file number is "b24"
  const handleFileNumberChange = (value: string) => {
    updateFormData({ fileNumber: value });
    
    if (value.toLowerCase() === 'b24') {
      // Pre-populate from file data
      setExistingClients(['Jessie Owens', 'Raylene Jameson', 'Sime Mortgages LLC']);
      updateFormData({
        fileNumber: value,
        accountOffice: 'Austin Title Office',
        closingDate: '2026-01-29',
        propertyAddress: '1234 Rivers Road',
        apartmentSuite: 'Q200',
        city: 'Buda',
        state: 'Texas',
        zipCode: '78640',
        underwriter: 'Stewart Title',
      });
    }
  };

  const handleRequestTypeClick = (type: typeof formData.requestType) => {
    updateFormData({ requestType: type, requestSubType: '' });
    setOtherPaymentReason('');
    setShowFullForm(true);
  };

  const handleRecipientChange = (value: string) => {
    if (value === 'add_new') {
      setShowAddRecipient(true);
      updateFormData({ recipient: '' });
    } else {
      setShowAddRecipient(false);
      updateFormData({ recipient: value });
    }
  };

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  return (
    <div className="max-w-[1244px] mx-auto">
      <div className="bg-white rounded-[6px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] p-[48px]">
        {/* Header */}
        <div className="mb-[48px]">
          <div className="flex items-center justify-between mb-[48px]">
            <div className="flex items-center gap-[12px]">
              <div className="size-[32px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <path d={svgPaths.p2ff12c80} fill="#156FBE" />
                </svg>
              </div>
              <div className="capitalize font-['Oxygen:Regular',sans-serif] text-[#555] text-[24px]">
                <p className="leading-[1.5]">
                  {formData.requestSubType === 'cash_to_close'
                    ? 'Cash to Close Payment Request'
                    : formData.requestSubType === 'earnest_money'
                    ? 'Earnest Money Payment Request'
                    : 'Send a Request'}
                </p>
              </div>
            </div>
            <button onClick={onCancel} className="text-[#555] text-[18px] opacity-50">✕</button>
          </div>

          {/* Step Indicators */}
          <div className="flex items-start gap-[24px]">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start]">
              <div className="col-1 font-['Oxygen:Regular',sans-serif] ml-0 mt-[12px] row-1 text-[#555] text-[16px] translate-y-[-50%]">
                <p className="leading-[1.5]">1. Request details</p>
              </div>
              <div 
                className={`col-1 h-[4px] ml-0 mt-[29px] rounded-[99999px] row-1 w-[169px] ${
                  currentStep === 1 ? 'bg-[#156fbe]' : 'bg-[#ddd]'
                }`} 
              />
            </div>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start]">
              <div className="col-1 font-['Oxygen:Regular',sans-serif] ml-0 mt-[12px] row-1 text-[#555] text-[16px] translate-y-[-50%]">
                <p className="leading-[1.5]">2. Review and send</p>
              </div>
              <div 
                className={`col-1 h-[4px] ml-0 mt-[29px] rounded-[9999px] row-1 w-[169px] ${
                  currentStep === 2 ? 'bg-[#156fbe]' : 'bg-[#ddd]'
                }`} 
              />
            </div>
          </div>
        </div>

        {/* Content */}
        {currentStep === 1 ? (
          <div className="space-y-[32px]">
            {/* File Number Section - Always visible at top */}
            <div className="flex gap-[80px] items-start w-full">
              <div className="flex-[1_0_0] flex flex-col gap-[4px] items-start min-h-px min-w-px text-[#555]">
                <div className="font-['Oxygen:Bold',sans-serif] text-[20px]">
                  <p className="leading-[1.5]">File number</p>
                </div>
                <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] text-[16px]">
                  Provide the file number associated with the request. <span className="font-['Oxygen:Bold',sans-serif]">For prototype users, enter "b24" to see the form pre-fill happen.</span>
                </p>
              </div>
              <div className="bg-white p-[30px] rounded-[4px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] w-[796px]">
                <div className="flex flex-col gap-[8px]">
                  <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px]">
                    <p className="leading-[1.5]">File number</p>
                  </div>
                  <input
                    type="text"
                    value={formData.fileNumber}
                    onChange={(e) => handleFileNumberChange(e.target.value)}
                    className="bg-white h-[40px] w-full rounded-[6px] border border-[#ddd] px-[12px] font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]"
                  />
                </div>
              </div>
            </div>

            {/* Request Type Section - only shown for "Send Request" entry point */}
            {entryPoint === 'send_request' && (
              <>
                {/* Divider */}
                <div className="h-0 w-full">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1152 1">
                    <line stroke="#EEEEEE" x1="0" x2="1152" y1="0.5" y2="0.5" />
                  </svg>
                </div>

                <div className="flex gap-[80px] items-start w-full">
                  <div className="flex-[1_0_0] flex flex-col gap-[4px] items-start min-h-px min-w-px text-[#555]">
                    <div className="font-['Oxygen:Bold',sans-serif] text-[20px]">
                      <p className="leading-[1.5]">Request type</p>
                    </div>
                    <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] text-[16px]">
                      Select which type of request you would like to send to this recipient.
                    </p>
                    <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] text-[16px] mt-[12px]">
                      Learn more about <a href="#" className="text-[#156fbe] underline">request types</a>.
                    </p>
                  </div>
                  <div className="bg-white p-[30px] rounded-[4px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] w-[796px]">
                    <div className="flex items-start w-full">
                      <div className="relative flex-1 basis-0">
                        <button
                          onClick={() => updateFormData({ genericRequestType: 'send' })}
                          className={`w-full h-[80px] rounded-bl-[6px] rounded-tl-[6px] border border-[#ddd] flex items-center justify-center px-[16px] py-[30px] font-['Oxygen:Bold',sans-serif] text-[16px] text-center ${
                            formData.genericRequestType === 'send' ? 'bg-[#156fbe] text-white' : 'bg-white text-[#555]'
                          }`}
                        >
                          <p className="leading-[1.5]">Send request</p>
                        </button>
                      </div>
                      <div className="relative flex-1 basis-0">
                        <button
                          onClick={() => updateFormData({ genericRequestType: 'collect' })}
                          className={`w-full h-[80px] border-t border-b border-[#ddd] flex items-center justify-center px-[16px] py-[30px] font-['Oxygen:Bold',sans-serif] text-[16px] text-center ${
                            formData.genericRequestType === 'collect' ? 'bg-[#156fbe] text-white' : 'bg-white text-[#555]'
                          }`}
                        >
                          <p className="leading-[1.5]">Collect bank details</p>
                        </button>
                      </div>
                      <div className="relative flex-1 basis-0">
                        <button
                          onClick={() => updateFormData({ genericRequestType: 'confirm' })}
                          className={`w-full h-[80px] rounded-br-[6px] rounded-tr-[6px] border border-[#ddd] flex items-center justify-center px-[16px] py-[30px] font-['Oxygen:Bold',sans-serif] text-[16px] text-center ${
                            formData.genericRequestType === 'confirm' ? 'bg-[#156fbe] text-white' : 'bg-white text-[#555]'
                          }`}
                        >
                          <p className="leading-[1.5]">Confirm bank details</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Divider */}
            <div className="h-0 w-full">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1152 1">
                <line stroke="#EEEEEE" x1="0" x2="1152" y1="0.5" y2="0.5" />
              </svg>
            </div>

            {/* Payment Type Section */}
            <div className="flex gap-[80px] items-start w-full">
              <div className="flex-[1_0_0] flex flex-col gap-[4px] items-start min-h-px min-w-px text-[#555]">
                <div className="font-['Oxygen:Bold',sans-serif] text-[20px]">
                  <p className="leading-[1.5]">Payment type</p>
                </div>
                <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] text-[16px]">
                  Select the type of payment you are requesting.
                </p>
              </div>
              <div className="bg-white p-[30px] rounded-[4px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] w-[796px]">
                <div className="flex flex-col gap-[16px]">
                  <div className="flex items-start w-full">
                    <div className="relative flex-1 basis-0">
                      <button
                        onClick={() => { updateFormData({ requestSubType: 'earnest_money', digitalPayment: false, wireInstructions: true }); setOtherPaymentReason(''); }}
                        className={`w-full h-[80px] rounded-bl-[6px] rounded-tl-[6px] border border-[#ddd] flex items-center justify-center px-[16px] py-[30px] font-['Oxygen:Bold',sans-serif] text-[16px] text-center ${
                          formData.requestSubType === 'earnest_money' ? 'bg-[#156fbe] text-white' : 'bg-white text-[#555]'
                        }`}
                      >
                        <p className="leading-[1.5]">Earnest money</p>
                      </button>
                    </div>
                    <div className="relative flex-1 basis-0">
                      <button
                        onClick={() => { updateFormData({ requestSubType: 'cash_to_close', digitalPayment: true, wireInstructions: true }); setOtherPaymentReason(''); }}
                        className={`w-full h-[80px] border-t border-b border-[#ddd] flex items-center justify-center px-[16px] py-[30px] font-['Oxygen:Bold',sans-serif] text-[16px] text-center ${
                          formData.requestSubType === 'cash_to_close' ? 'bg-[#156fbe] text-white' : 'bg-white text-[#555]'
                        }`}
                      >
                        <p className="leading-[1.5]">Cash to close</p>
                      </button>
                    </div>
                    <div className="relative flex-1 basis-0">
                      <button
                        onClick={() => { updateFormData({ requestSubType: 'other', digitalPayment: false, wireInstructions: true }); }}
                        className={`w-full h-[80px] rounded-br-[6px] rounded-tr-[6px] border border-[#ddd] flex items-center justify-center px-[16px] py-[30px] font-['Oxygen:Bold',sans-serif] text-[16px] text-center ${
                          formData.requestSubType === 'other' ? 'bg-[#156fbe] text-white' : 'bg-white text-[#555]'
                        }`}
                      >
                        <p className="leading-[1.5]">Other</p>
                      </button>
                    </div>
                  </div>

                  {/* Info boxes based on payment type */}
                  {formData.requestSubType === 'earnest_money' && (
                    <div className="bg-[#F0F5FA] rounded-[6px] p-[16px] flex gap-[12px]">
                      <div className="shrink-0 w-[20px] h-[20px] flex items-center justify-center">
                        <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                          <circle cx="10" cy="10" r="9" stroke="#555" strokeWidth="2" fill="none" />
                          <path d="M10 6v4M10 14h.01" stroke="#555" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[14px] leading-[1.5] mb-[4px]">Wire instructions only</p>
                        <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[14px] leading-[1.5]">Your buyer will receive secure wire instructions to complete their earnest money deposit. <span className="font-['Oxygen:Bold',sans-serif] text-[#156fbe]">Digital payment coming soon.</span></p>
                      </div>
                    </div>
                  )}

                  {formData.requestSubType === 'cash_to_close' && (
                    <div className="bg-[#f0f9f4] border border-[#b8e6d0] rounded-[6px] p-[16px] flex gap-[12px]">
                      <div className="shrink-0 w-[20px] h-[20px] flex items-center justify-center">
                        <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                          <circle cx="10" cy="10" r="9" stroke="#31906E" strokeWidth="2" fill="none" />
                          <path d="M6 10l3 3 5-6" stroke="#31906E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[14px] leading-[1.5] mb-[4px]">Digital payment + wire instructions</p>
                        <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[14px] leading-[1.5]">Your buyer will choose between a secure digital payment ($48 fee, next-day delivery) or downloading wire instructions.</p>
                      </div>
                    </div>
                  )}

                  {/* Payment Methods Toggle - Cash to Close */}
                  {formData.requestSubType === 'cash_to_close' && (
                    <div className="border border-[#ddd] rounded-[6px] p-[20px]">
                      <div className="flex items-center justify-between mb-[4px]">
                        <div>
                          <p className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px] leading-[1.5]">Payment methods</p>
                        </div>
                      </div>
                      {/* Wire instructions - always on */}
                      <div className="flex items-center justify-between py-[12px] border-b border-[#eee]">
                        <div className="flex items-center gap-[12px]">
                          <div className="w-[20px] h-[20px] flex items-center justify-center">
                            <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 16 16">
                              <rect x="1" y="1" width="14" height="14" rx="2" stroke="#a0a2a4" strokeWidth="1.5" fill="none" />
                              <path d="M4 8l3 3 5-6" stroke="#00A566" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[14px] leading-[1.5]">Wire instructions</p>
                            <p className="font-['Oxygen:Regular',sans-serif] text-[#a0a2a4] text-[12px] leading-[1.5]">Always included</p>
                          </div>
                        </div>
                        <span className="font-['Oxygen:Regular',sans-serif] text-[#a0a2a4] text-[12px]">Required</span>
                      </div>
                      {/* Digital payment - toggleable */}
                      <div className="flex items-center justify-between py-[12px]">
                        <div className="flex items-center gap-[12px]">
                          <div className="w-[20px] h-[20px] flex items-center justify-center">
                            <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 16 16">
                              <rect x="1" y="1" width="14" height="14" rx="2" stroke={formData.digitalPayment ? '#00A566' : '#a0a2a4'} strokeWidth="1.5" fill="none" />
                              {formData.digitalPayment && <path d="M4 8l3 3 5-6" stroke="#00A566" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
                            </svg>
                          </div>
                          <div>
                            <p className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[14px] leading-[1.5]">Digital payment</p>
                            <p className="font-['Oxygen:Regular',sans-serif] text-[#a0a2a4] text-[12px] leading-[1.5]">$48 fee · Next-day delivery</p>
                          </div>
                        </div>
                        {/* Toggle switch */}
                        <button
                          onClick={() => updateFormData({ digitalPayment: !formData.digitalPayment })}
                          className={`relative w-[44px] h-[24px] rounded-full transition-colors ${
                            formData.digitalPayment ? 'bg-[#00A566]' : 'bg-[#ddd]'
                          }`}
                        >
                          <div className={`absolute top-[2px] w-[20px] h-[20px] rounded-full bg-white shadow transition-transform ${
                            formData.digitalPayment ? 'translate-x-[22px]' : 'translate-x-[2px]'
                          }`} />
                        </button>
                      </div>
                      {/* Summary line */}
                      <div className="mt-[8px] pt-[12px] border-t border-[#eee]">
                        <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[13px] leading-[1.5]">
                          {formData.digitalPayment
                            ? '→ Buyer will choose between digital payment or wire instructions'
                            : '→ Buyer will receive wire instructions only'
                          }
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Payment Methods - Earnest Money (wire only) */}
                  {formData.requestSubType === 'earnest_money' && (
                    <div className="border border-[#ddd] rounded-[6px] p-[20px]">
                      <div className="flex items-center justify-between mb-[4px]">
                        <p className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px] leading-[1.5]">Payment methods</p>
                      </div>
                      {/* Wire instructions - always on */}
                      <div className="flex items-center justify-between py-[12px]">
                        <div className="flex items-center gap-[12px]">
                          <div className="w-[20px] h-[20px] flex items-center justify-center">
                            <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 16 16">
                              <rect x="1" y="1" width="14" height="14" rx="2" stroke="#a0a2a4" strokeWidth="1.5" fill="none" />
                              <path d="M4 8l3 3 5-6" stroke="#00A566" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[14px] leading-[1.5]">Wire instructions only</p>
                            <p className="font-['Oxygen:Regular',sans-serif] text-[#a0a2a4] text-[12px] leading-[1.5]">Always included</p>
                          </div>
                        </div>
                        <span className="font-['Oxygen:Regular',sans-serif] text-[#a0a2a4] text-[12px]">Required</span>
                      </div>
                    </div>
                  )}

                  {formData.requestSubType === 'other' && (
                    <>
                      <div className="bg-[#F0F5FA] rounded-[6px] p-[16px] flex gap-[12px]">
                        <div className="shrink-0 w-[20px] h-[20px] flex items-center justify-center">
                          <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="9" stroke="#555" strokeWidth="2" fill="none" />
                            <path d="M10 6v4M10 14h.01" stroke="#555" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[14px] leading-[1.5] mb-[4px]">Wire instructions only</p>
                          <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[14px] leading-[1.5]">The recipient will receive secure wire instructions via email. Digital payments are available for Cash to Close requests.</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[8px]">
                        <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px]">
                          <p className="leading-[1.5]">What is this for?</p>
                        </div>
                        <div className="relative">
                          <input
                            type="text"
                            value={otherPaymentReason}
                            onChange={(e) => setOtherPaymentReason(e.target.value)}
                            placeholder="e.g. HOA fees, repairs, etc."
                            className="bg-white h-[40px] w-full rounded-[6px] border border-[#ddd] px-[12px] font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]"
                          />
                          <div className="absolute right-[12px] top-1/2 -translate-y-1/2 font-['Oxygen:Bold',sans-serif] text-[#a0a2a4] text-[16px]">
                            Optional
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Remaining sections: show after subtype selected */}
            {formData.requestSubType !== '' && (
              <>
                {/* Divider */}
                <div className="h-0 w-full">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1152 1">
                    <line stroke="#EEEEEE" x1="0" x2="1152" y1="0.5" y2="0.5" />
                  </svg>
                </div>

                {/* Account / Office Section - Now after Request Type */}
                <div className="flex gap-[32px] items-start w-full">
                  <div className="flex-[1_0_0] flex flex-col gap-[4px] items-start min-h-px min-w-px text-[#555]">
                    <div className="font-['Oxygen:Bold',sans-serif] text-[20px]">
                      <p className="leading-[1.5]">Account / Office</p>
                    </div>
                    <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] text-[16px]">
                      Select the account you would like this request to be sent from.
                    </p>
                  </div>
                  <div className="bg-white p-[30px] rounded-[4px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] w-[796px]">
                    <div className="relative">
                      <select 
                        value={formData.accountOffice}
                        onChange={(e) => updateFormData({ accountOffice: e.target.value })}
                        className="bg-white h-[40px] w-full rounded-[6px] border border-[#ddd] px-[12px] font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px] appearance-none cursor-pointer"
                      >
                        <option value="">Select office</option>
                        <option value="Austin Title Office">Austin Title Office</option>
                        <option value="Default office">Default office</option>
                      </select>
                      <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-[6px] h-[10px]" fill="none" viewBox="0 0 6 10">
                          <path d={svgPaths.p1346e080} fill="#555555" />
                          <path d={svgPaths.p94a7000} fill="#555555" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-0 w-full">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1152 1">
                    <line stroke="#EEEEEE" x1="0" x2="1152" y1="0.5" y2="0.5" />
                  </svg>
                </div>

                {/* Recipient Section */}
                <div className="flex gap-[32px] items-start w-full">
                  <div className="flex-[1_0_0] flex flex-col gap-[4px] items-start min-h-px min-w-px text-[#555]">
                    <div className="font-['Oxygen:Bold',sans-serif] text-[20px] w-[155px]">
                      <p className="leading-[1.5]">Recipient</p>
                    </div>
                    <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] text-[16px]">
                      Provide all necessary details for the recipient to receive the request.
                    </p>
                  </div>
                  <div className="bg-white p-[30px] rounded-[4px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] w-[796px]">
                    <div className="flex flex-col gap-[8px]">
                      <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px]">
                        <p className="leading-[1.5]">Recipient</p>
                      </div>
                      <div className="relative">
                        <select
                          value={showAddRecipient ? 'add_new' : formData.recipient}
                          onChange={(e) => handleRecipientChange(e.target.value)}
                          className="bg-white h-[40px] w-full rounded-[6px] border border-[#ddd] px-[12px] font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px] appearance-none cursor-pointer"
                        >
                          <option value="">Select recipient</option>
                          {existingClients.map((client, index) => (
                            <option key={index} value={client}>{client}</option>
                          ))}
                          <option value="add_new">+ Add new recipient</option>
                        </select>
                        <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-[6px] h-[10px]" fill="none" viewBox="0 0 6 10">
                            <path d={svgPaths.p1346e080} fill="#555555" />
                            <path d={svgPaths.p94a7000} fill="#555555" />
                          </svg>
                        </div>
                      </div>

                      {/* Add New Recipient Fields - In same section */}
                      {showAddRecipient && (
                        <div className="flex flex-col gap-[16px] pt-[16px] mt-[8px] border-t border-[#eee]">
                          <div className="grid grid-cols-2 gap-[10px]">
                            <div className="flex flex-col gap-[8px]">
                              <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px]">
                                <p className="leading-[1.5]">First name</p>
                              </div>
                              <input
                                type="text"
                                value={newRecipient.firstName}
                                onChange={(e) => updateNewRecipient({ firstName: e.target.value })}
                                className="bg-white h-[40px] w-full rounded-[6px] border border-[#ddd] px-[12px] font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]"
                              />
                            </div>
                            <div className="flex flex-col gap-[8px]">
                              <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px]">
                                <p className="leading-[1.5]">Last name</p>
                              </div>
                              <input
                                type="text"
                                value={newRecipient.lastName}
                                onChange={(e) => updateNewRecipient({ lastName: e.target.value })}
                                className="bg-white h-[40px] w-full rounded-[6px] border border-[#ddd] px-[12px] font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-[8px]">
                            <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px]">
                              <p className="leading-[1.5]">Email address</p>
                            </div>
                            <input
                              type="email"
                              value={newRecipient.email}
                              onChange={(e) => updateNewRecipient({ email: e.target.value })}
                              className="bg-white h-[40px] w-full rounded-[6px] border border-[#ddd] px-[12px] font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]"
                            />
                          </div>
                          <div className="flex flex-col gap-[8px]">
                            <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px]">
                              <p className="leading-[1.5]">Phone number</p>
                            </div>
                            <input
                              type="tel"
                              value={newRecipient.phone}
                              onChange={(e) => updateNewRecipient({ phone: e.target.value })}
                              className="bg-white h-[40px] w-full rounded-[6px] border border-[#ddd] px-[12px] font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]"
                            />
                          </div>
                          <div className="flex flex-col gap-[8px]">
                            <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px]">
                              <p className="leading-[1.5]">Recipient type</p>
                            </div>
                            <div className="relative">
                              <select
                                value={newRecipient.recipientType}
                                onChange={(e) => updateNewRecipient({ recipientType: e.target.value })}
                                className="bg-white h-[40px] w-full rounded-[6px] border border-[#ddd] px-[12px] font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px] appearance-none cursor-pointer"
                              >
                                <option value="">Select type</option>
                                <option value="Buyer">Buyer</option>
                                <option value="Seller">Seller</option>
                                <option value="Lender">Lender</option>
                                <option value="Agent">Agent</option>
                                <option value="Attorney">Attorney</option>
                              </select>
                              <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg className="w-[6px] h-[10px]" fill="none" viewBox="0 0 6 10">
                                  <path d={svgPaths.p1346e080} fill="#555555" />
                                  <path d={svgPaths.p94a7000} fill="#555555" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-0 w-full">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1152 1">
                    <line stroke="#EEEEEE" x1="0" x2="1152" y1="0.5" y2="0.5" />
                  </svg>
                </div>

                {/* Closing Details Section - Combined Payment, Closing Date, and Property */}
                <div className="flex gap-[32px] items-start w-full">
                  <div className="flex-[1_0_0] flex flex-col gap-[4px] items-start min-h-px min-w-px text-[#555]">
                    <div className="font-['Oxygen:Bold',sans-serif] text-[20px]">
                      <p className="leading-[1.5]">Payment details</p>
                    </div>
                    <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] text-[16px]">Provide details for this payment request.</p>
                  </div>
                  <div className="bg-white p-[30px] rounded-[4px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] w-[796px]">
                    <div className="flex flex-col gap-[16px]">
                      {/* Payment Amount and Closing Date */}
                      <div className="flex gap-[10px]">
                        <div className="flex-[1_0_0] flex flex-col gap-[8px]">
                          <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px]">
                            <p className="leading-[1.5]">Payment amount</p>
                          </div>
                          <div className="relative">
                            <span className="absolute left-[12px] top-1/2 -translate-y-1/2 font-['Oxygen:Regular',sans-serif] text-[#999] text-[16px] pointer-events-none">$</span>
                            <input
                              type="text"
                              value={formData.paymentAmount ? formData.paymentAmount.replace(/^\$/, '') : ''}
                              onChange={(e) => handlePaymentAmountChange(e.target.value)}
                              placeholder="0"
                              className={`bg-white h-[40px] w-full rounded-[6px] border ${paymentAmountError ? 'border-[#E74C3C] focus:ring-[#E74C3C]' : 'border-[#ddd]'} pl-[24px] pr-[12px] font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]`}
                            />
                          </div>
                          {paymentAmountError && (
                            <p className="font-['Oxygen:Regular',sans-serif] text-[#E74C3C] text-[13px] leading-[1.4] mt-[2px]">{paymentAmountError}</p>
                          )}
                        </div>
                        <div className="flex-[1_0_0] flex flex-col gap-[8px]">
                          <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px] flex items-center gap-[6px]">
                            <p className="leading-[1.5]">Closing date</p>
                            {formData.requestSubType === 'cash_to_close' && (
                              <span className="font-['Oxygen:Bold',sans-serif] text-[#E74C3C] text-[14px]">*</span>
                            )}
                          </div>
                          <input
                            type="date"
                            value={formData.closingDate}
                            onChange={(e) => updateFormData({ closingDate: e.target.value })}
                            className="bg-white h-[40px] w-full rounded-[6px] border border-[#ddd] px-[12px] font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]"
                          />
                        </div>
                      </div>

                      {/* Property Address Fields */}
                      <div className="flex flex-col gap-[8px]">
                        <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px]">
                          <p className="leading-[1.5]">Property address</p>
                        </div>
                        <input
                          type="text"
                          value={formData.propertyAddress}
                          onChange={(e) => updateFormData({ propertyAddress: e.target.value })}
                          className="bg-white h-[40px] w-full rounded-[6px] border border-[#ddd] px-[12px] font-['Oxygen:Regular',sans-serif] text-[#2b3034] text-[16px]"
                        />
                      </div>
                      <div className="flex flex-col gap-[8px]">
                        <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px]">
                          <p className="leading-[1.5]">Apartment, suite, etc.</p>
                        </div>
                        <div className="relative">
                          <input
                            type="text"
                            value={formData.apartmentSuite}
                            onChange={(e) => updateFormData({ apartmentSuite: e.target.value })}
                            className="bg-white h-[40px] w-full rounded-[6px] border border-[#ddd] px-[12px] font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]"
                          />
                          <div className="absolute right-[12px] top-1/2 -translate-y-1/2 font-['Oxygen:Bold',sans-serif] text-[#a0a2a4] text-[16px]">
                            Optional
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[8px]">
                        <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px]">
                          <p className="leading-[1.5]">City</p>
                        </div>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => updateFormData({ city: e.target.value })}
                          className="bg-white h-[40px] w-full rounded-[6px] border border-[#ddd] px-[12px] font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]"
                        />
                      </div>
                      <div className="flex gap-[10px]">
                        <div className="flex-[1_0_0] flex flex-col gap-[8px]">
                          <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px]">
                            <p className="leading-[1.5]">State</p>
                          </div>
                          <div className="relative">
                            <select
                              value={formData.state}
                              onChange={(e) => updateFormData({ state: e.target.value })}
                              className="bg-white h-[40px] w-full rounded-[6px] border border-[#ddd] px-[12px] font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px] appearance-none cursor-pointer"
                            >
                              <option value="">Select state</option>
                              <option value="Texas">Texas</option>
                              <option value="California">California</option>
                              <option value="New York">New York</option>
                            </select>
                            <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                              <svg className="w-[6px] h-[10px]" fill="none" viewBox="0 0 6 10">
                                <path d={svgPaths.p1346e080} fill="#555555" />
                                <path d={svgPaths.p94a7000} fill="#555555" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex-[1_0_0] flex flex-col gap-[8px]">
                          <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px]">
                            <p className="leading-[1.5]">Zip code</p>
                          </div>
                          <input
                            type="text"
                            value={formData.zipCode}
                            onChange={(e) => updateFormData({ zipCode: e.target.value })}
                            className="bg-white h-[40px] w-full rounded-[6px] border border-[#ddd] px-[12px] font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bank Information Section */}
                {(formData.requestType === 'request_payment' || formData.requestType === 'send_wiring') && (
                  <>
                    {/* Divider */}
                    <div className="h-0 w-full">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1152 1">
                        <line stroke="#EEEEEE" x1="0" x2="1152" y1="0.5" y2="0.5" />
                      </svg>
                    </div>

                    <div className="flex gap-[80px] items-start w-full">
                      <div className="flex-[1_0_0] flex flex-col gap-[4px] items-start min-h-px min-w-px text-[#555]">
                        <div className="font-['Oxygen:Bold',sans-serif] text-[20px]">
                          <p className="leading-[1.5]">Bank information</p>
                        </div>
                        <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] text-[16px]">
                          Select the appropriate bank information for this recipient.
                        </p>
                      </div>
                      <div className="bg-white p-[30px] rounded-[4px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] w-[796px]">
                        <div className="flex flex-col gap-[8px]">
                          <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px]">
                            <p className="leading-[1.5]">Wire instructions</p>
                          </div>
                          <div className="relative">
                            <select
                              value={formData.bankInfo || formData.wireInstructionsToShare}
                              onChange={(e) => updateFormData({ bankInfo: e.target.value, wireInstructionsToShare: e.target.value })}
                              className="bg-white h-[40px] w-full rounded-[6px] border border-[#ddd] px-[12px] font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px] appearance-none cursor-pointer"
                            >
                              <option value="">Select wire instructions</option>
                              <option value="correspondent_5309">Correspondent ********5309</option>
                              <option value="correspondent_7742">Correspondent ********7742</option>
                              <option value="correspondent_4481">Correspondent ********4481</option>
                              <option value="correspondent_9156">Correspondent ********9156</option>
                            </select>
                            <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                              <svg className="w-[6px] h-[10px]" fill="none" viewBox="0 0 6 10">
                                <path d={svgPaths.p1346e080} fill="#555555" />
                                <path d={svgPaths.p94a7000} fill="#555555" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Divider */}
                <div className="h-0 w-full">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1152 1">
                    <line stroke="#EEEEEE" x1="0" x2="1152" y1="0.5" y2="0.5" />
                  </svg>
                </div>

                {/* Underwriter Section */}
                <div className="flex gap-[32px] items-start w-full">
                  <div className="flex-[1_0_0] flex flex-col gap-[4px] items-start min-h-px min-w-px text-[#555]">
                    <div className="font-['Oxygen:Bold',sans-serif] text-[20px]">
                      <p className="leading-[1.5]">Underwriter</p>
                    </div>
                    <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] text-[16px]">
                      Select an underwriter to take advantage of underwriter partner pricing.
                    </p>
                  </div>
                  <div className="bg-white p-[30px] rounded-[4px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] w-[796px]">
                    <div className="flex flex-col gap-[8px]">
                      <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px]">
                        <p className="leading-[1.5]">Underwriter</p>
                      </div>
                      <div className="relative">
                        <select
                          value={formData.underwriter}
                          onChange={(e) => updateFormData({ underwriter: e.target.value })}
                          className="bg-white h-[40px] w-full rounded-[6px] border border-[#ddd] px-[12px] font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px] appearance-none cursor-pointer"
                        >
                          <option value="">Select</option>
                          <option value="Stewart Title">Stewart Title</option>
                          <option value="Fidelity National">Fidelity National</option>
                        </select>
                        <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-[6px] h-[10px]" fill="none" viewBox="0 0 6 10">
                            <path d={svgPaths.p1346e080} fill="#555555" />
                            <path d={svgPaths.p94a7000} fill="#555555" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-0 w-full">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1152 1">
                    <line stroke="#EEEEEE" x1="0" x2="1152" y1="0.5" y2="0.5" />
                  </svg>
                </div>

                {/* Email Message Section */}
                <div className="flex gap-[32px] items-start w-full">
                  <div className="flex-[1_0_0] flex flex-col gap-[4px] items-start min-h-px min-w-px text-[#555]">
                    <div className="font-['Oxygen:Bold',sans-serif] text-[20px]">
                      <p className="leading-[1.5]">Email message</p>
                    </div>
                    <p className="font-['Oxygen:Regular',sans-serif] leading-[1.5] text-[16px]">
                      This message will be displayed in the email sent to the recipient.
                    </p>
                  </div>
                  <div className="bg-white p-[30px] rounded-[4px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] w-[796px]">
                    <div className="flex flex-col gap-[8px]">
                      <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px]">
                        <p className="leading-[1.5]">Custom message</p>
                      </div>
                      <div className="relative">
                        <textarea
                          value={formData.customMessage}
                          onChange={(e) => updateFormData({ customMessage: e.target.value })}
                          placeholder="Enter your message here."
                          className="bg-white min-h-[120px] w-full rounded-[6px] border border-[#ddd] px-[12px] py-[8px] font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px] resize-none"
                        />
                        <div className="absolute right-[12px] top-[8px] font-['Oxygen:Bold',sans-serif] text-[#a0a2a4] text-[16px]">
                          Optional
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="space-y-[32px]">
            <div className="flex gap-[32px] items-start w-full">
              <div className="flex-[1_0_0]"></div>
              <div className="bg-white p-[30px] rounded-[4px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] w-[796px]">
                <div className="space-y-[24px]">
                  <div>
                    <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px] mb-2">
                      <p className="leading-[1.5]">File number</p>
                    </div>
                    <div className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]">
                      <p className="leading-[1.5]">{formData.fileNumber}</p>
                    </div>
                  </div>
                  <div>
                    <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px] mb-2">
                      <p className="leading-[1.5]">Request type</p>
                    </div>
                    <div className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]">
                      <p className="leading-[1.5]">
                        {formData.requestType === 'request_payment' && formData.requestSubType === 'earnest_money' && 'Request a payment — Earnest Money'}
                        {formData.requestType === 'request_payment' && formData.requestSubType === 'cash_to_close' && 'Request a payment — Cash-to-close'}
                        {formData.requestType === 'request_payment' && formData.requestSubType === 'other' && `Request a payment — Other${otherPaymentReason ? ` (${otherPaymentReason})` : ''}`}
                        {formData.requestType === 'request_payment' && !formData.requestSubType && 'Request a payment'}
                        {formData.requestType === 'send_wiring' && formData.requestSubType === 'earnest_money' && 'Send wiring instructions — Earnest Money'}
                        {formData.requestType === 'send_wiring' && formData.requestSubType === 'cash_to_close' && 'Send wiring instructions — Cash-to-close'}
                        {formData.requestType === 'send_wiring' && formData.requestSubType === 'other' && `Send wiring instructions — Other${otherPaymentReason ? ` (${otherPaymentReason})` : ''}`}
                        {formData.requestType === 'send_wiring' && !formData.requestSubType && 'Send wiring instructions'}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px] mb-2">
                      <p className="leading-[1.5]">Office</p>
                    </div>
                    <div className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]">
                      <p className="leading-[1.5]">{formData.accountOffice}</p>
                    </div>
                  </div>
                  <div>
                    <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px] mb-2">
                      <p className="leading-[1.5]">Recipient</p>
                    </div>
                    <div className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]">
                      <p className="leading-[1.5]">
                        {showAddRecipient 
                          ? `${newRecipient.firstName} ${newRecipient.lastName} (${newRecipient.recipientType})`
                          : formData.recipient
                        }
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px] mb-2">
                      <p className="leading-[1.5]">Payment amount</p>
                    </div>
                    <div className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]">
                      <p className="leading-[1.5]">{formData.paymentAmount}</p>
                    </div>
                  </div>
                  <div>
                    <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px] mb-2">
                      <p className="leading-[1.5]">Closing date</p>
                    </div>
                    <div className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]">
                      <p className="leading-[1.5]">{formData.closingDate}</p>
                    </div>
                  </div>
                  <div>
                    <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px] mb-2">
                      <p className="leading-[1.5]">Property address</p>
                    </div>
                    <div className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]">
                      <p className="leading-[1.5]">
                        {formData.propertyAddress}{formData.apartmentSuite && `, ${formData.apartmentSuite}`}<br />
                        {formData.city}, {formData.state}, {formData.zipCode}
                      </p>
                    </div>
                  </div>
                  {formData.underwriter && (
                    <div>
                      <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px] mb-2">
                        <p className="leading-[1.5]">Underwriter</p>
                      </div>
                      <div className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]">
                        <p className="leading-[1.5]">{formData.underwriter}</p>
                      </div>
                    </div>
                  )}
                  {formData.bankInfo && formData.requestType === 'send_wiring' && (
                    <div>
                      <div className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px] mb-2">
                        <p className="leading-[1.5]">Bank information</p>
                      </div>
                      <div className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]">
                        <p className="leading-[1.5]">
                          {formData.bankInfo === 'correspondent_5309' && 'Correspondent ********5309'}
                          {formData.bankInfo === 'correspondent_7742' && 'Correspondent ********7742'}
                          {formData.bankInfo === 'correspondent_4481' && 'Correspondent ********4481'}
                          {formData.bankInfo === 'correspondent_9156' && 'Correspondent ********9156'}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-[48px] flex items-start justify-between w-full">
          <div></div>
          <div className="flex gap-[16px]">
            {currentStep === 2 && (
              <button
                onClick={handleBack}
                className="bg-white h-[48px] px-[16px] py-[10px] rounded-[6px] border border-[#ddd] font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px] capitalize hover:bg-gray-50"
              >
                Back
              </button>
            )}
            <button
              onClick={onCancel}
              className="bg-white h-[48px] px-[16px] py-[10px] rounded-[6px] border border-[#ddd] font-['Oxygen:Bold',sans-serif] text-[#555] text-[16px] capitalize hover:bg-gray-50"
            >
              Cancel
            </button>
            {showFullForm && (
              <button
                onClick={handleNext}
                className="bg-[#156fbe] h-[48px] px-[16px] py-[10px] rounded-[6px] flex gap-[16px] items-center font-['Oxygen:Bold',sans-serif] text-white text-[16px] capitalize hover:bg-[#124d92]"
              >
                {currentStep === 1 ? 'Next' : 'Send'}
                <div className="size-[24px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 9 16">
                    <path d={svgPaths.p134c0f00} fill="white" />
                  </svg>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}