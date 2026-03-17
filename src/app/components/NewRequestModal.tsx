import { useState } from 'react';
import { X, Send, ChevronRight } from 'lucide-react';
import { RequestDetailsStep } from '@/app/components/RequestDetailsStep';
import { ReviewStep } from '@/app/components/ReviewStep';

interface NewRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface FormData {
  accountOffice: string;
  requestType: 'send_request' | 'collect_bank' | 'confirm_bank' | '';
  requestSubType: 'earnest_money' | 'cash_to_close' | 'other' | '';
  fileNumber: string;
  recipient: string;
  recipientDetails: {
    name: string;
    role: string;
    email: string;
    phone: string;
  };
  paymentAmount: string;
  closingDate: string;
  propertyAddress: string;
  apartmentSuite: string;
  city: string;
  state: string;
  zipCode: string;
  underwriter: string;
  customMessage: string;
}

export function NewRequestModal({ isOpen, onClose }: NewRequestModalProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<FormData>({
    accountOffice: 'Default office',
    requestType: '',
    requestSubType: '',
    fileNumber: '',
    recipient: '',
    recipientDetails: {
      name: '',
      role: '',
      email: '',
      phone: '',
    },
    paymentAmount: '',
    closingDate: '',
    propertyAddress: '',
    apartmentSuite: '',
    city: '',
    state: '',
    zipCode: '',
    underwriter: '',
    customMessage: '',
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      // Handle send
      console.log('Sending request:', formData);
      onClose();
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-[640px] max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Send className="w-5 h-5 text-[#156fbe]" />
              <h2 className="text-[18px] text-gray-800">New Request</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Step Indicators */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className={`text-[14px] ${currentStep === 1 ? 'text-[#156fbe]' : 'text-gray-600'}`}>
                1. Request details
              </span>
              {currentStep === 1 && (
                <div className="h-[2px] w-full bg-[#156fbe] absolute bottom-0 left-0" style={{ width: '140px' }} />
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[14px] ${currentStep === 2 ? 'text-[#156fbe]' : 'text-gray-600'}`}>
                2. Review and send
              </span>
            </div>
          </div>
          <div className="h-[2px] bg-gray-200 mt-2 -mb-6 mx-[-24px]">
            <div 
              className="h-full bg-[#156fbe] transition-all duration-300"
              style={{ width: currentStep === 1 ? '50%' : '100%' }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {currentStep === 1 ? (
            <RequestDetailsStep formData={formData} updateFormData={updateFormData} />
          ) : (
            <ReviewStep formData={formData} />
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
          {currentStep === 2 && (
            <button
              onClick={handleBack}
              className="px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-100 rounded transition-colors"
            >
              Back
            </button>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-100 rounded transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 text-[14px] bg-[#156fbe] text-white rounded hover:bg-[#124d92] transition-colors flex items-center gap-1"
          >
            {currentStep === 1 ? 'Next' : 'Send'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
