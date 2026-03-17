import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FormData } from '@/app/components/NewRequestModal';

interface RequestDetailsStepProps {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
}

export function RequestDetailsStep({ formData, updateFormData }: RequestDetailsStepProps) {
  const [showRecipientDropdown, setShowRecipientDropdown] = useState(false);

  const recipients = [
    { name: 'Jessie Owens', role: 'Buyer', email: 'janedoe@email.com', phone: '(516) 123-4567' },
    { name: 'Raylene Jameson', role: 'Seller' },
    { name: 'Sime Mortgages LLC', role: 'Lender' },
  ];

  const handleRequestTypeSelect = (type: typeof formData.requestType) => {
    updateFormData({ requestType: type, requestSubType: '' });
  };

  const handleRequestSubTypeSelect = (subType: typeof formData.requestSubType) => {
    updateFormData({ requestSubType: subType });
  };

  const handleRecipientSelect = (recipient: typeof recipients[0]) => {
    updateFormData({ 
      recipient: recipient.name,
      recipientDetails: recipient
    });
    setShowRecipientDropdown(false);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Account / Office */}
      <div>
        <label className="block text-[14px] text-gray-800 mb-2">Account / Office</label>
        <p className="text-[12px] text-gray-600 mb-3">
          Select the account you would like this request to be sent from.
        </p>
        <div className="relative">
          <select 
            value={formData.accountOffice}
            onChange={(e) => updateFormData({ accountOffice: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-[14px] appearance-none cursor-pointer"
          >
            <option>Default office</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
      </div>

      {/* Request Type */}
      <div>
        <label className="block text-[14px] text-gray-800 mb-2">Request type</label>
        <p className="text-[12px] text-gray-600 mb-3">
          Select which type of request you would like to send to this recipient.
        </p>
        <p className="text-[12px] text-gray-600 mb-3">
          Learn more about <a href="#" className="text-[#156fbe] hover:underline">request types</a>.
        </p>
        
        <div className="grid grid-cols-3 gap-3 mb-4">
          <button
            onClick={() => handleRequestTypeSelect('send_request')}
            className={`px-4 py-3 text-[14px] border rounded transition-colors ${
              formData.requestType === 'send_request'
                ? 'bg-[#156fbe] text-white border-[#156fbe]'
                : 'bg-white text-gray-700 border-gray-300 hover:border-[#156fbe]'
            }`}
          >
            Send request
          </button>
          <button
            onClick={() => handleRequestTypeSelect('collect_bank')}
            className={`px-4 py-3 text-[14px] border rounded transition-colors ${
              formData.requestType === 'collect_bank'
                ? 'bg-[#156fbe] text-white border-[#156fbe]'
                : 'bg-white text-gray-700 border-gray-300 hover:border-[#156fbe]'
            }`}
          >
            Collect bank details
          </button>
          <button
            onClick={() => handleRequestTypeSelect('confirm_bank')}
            className={`px-4 py-3 text-[14px] border rounded transition-colors ${
              formData.requestType === 'confirm_bank'
                ? 'bg-[#156fbe] text-white border-[#156fbe]'
                : 'bg-white text-gray-700 border-gray-300 hover:border-[#156fbe]'
            }`}
          >
            Confirm bank details
          </button>
        </div>

        {/* Sub-type selection for Send Request */}
        {formData.requestType === 'send_request' && (
          <div className="space-y-3">
            <p className="text-[12px] text-gray-700">I'm sending a request for</p>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleRequestSubTypeSelect('earnest_money')}
                className={`px-4 py-3 text-[14px] border rounded transition-colors ${
                  formData.requestSubType === 'earnest_money'
                    ? 'bg-[#156fbe] text-white border-[#156fbe]'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-[#156fbe]'
                }`}
              >
                Earnest money
              </button>
              <button
                onClick={() => handleRequestSubTypeSelect('cash_to_close')}
                className={`px-4 py-3 text-[14px] border rounded transition-colors ${
                  formData.requestSubType === 'cash_to_close'
                    ? 'bg-[#156fbe] text-white border-[#156fbe]'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-[#156fbe]'
                }`}
              >
                Cash to close
              </button>
              <button
                onClick={() => handleRequestSubTypeSelect('other')}
                className={`px-4 py-3 text-[14px] border rounded transition-colors ${
                  formData.requestSubType === 'other'
                    ? 'bg-[#156fbe] text-white border-[#156fbe]'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-[#156fbe]'
                }`}
              >
                Other
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Conditional fields when request type is selected */}
      {formData.requestType === 'send_request' && formData.requestSubType && (
        <>
          {/* File Number */}
          <div>
            <label className="block text-[14px] text-gray-800 mb-2">File number</label>
            <p className="text-[12px] text-gray-600 mb-3">
              Provide the file number associated with this escrow or verification.
            </p>
            <input
              type="text"
              value={formData.fileNumber}
              onChange={(e) => updateFormData({ fileNumber: e.target.value })}
              placeholder="File number"
              className="w-full px-3 py-2 border border-gray-300 rounded text-[14px]"
            />
          </div>

          {/* Recipient */}
          <div>
            <label className="block text-[14px] text-gray-800 mb-2">Recipient</label>
            <p className="text-[12px] text-gray-600 mb-3">
              Provide all necessary details for the recipient to receive the request.
            </p>
            <div className="relative">
              <button
                onClick={() => setShowRecipientDropdown(!showRecipientDropdown)}
                className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-[14px] text-left flex items-center justify-between"
              >
                <span className={formData.recipient || 'text-gray-500'}>
                  {formData.recipient || 'Select'}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
              
              {showRecipientDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg">
                  {recipients.map((recipient, index) => (
                    <button
                      key={index}
                      onClick={() => handleRecipientSelect(recipient)}
                      className="w-full px-3 py-2 text-left hover:bg-gray-50 text-[14px] border-b last:border-b-0"
                    >
                      <div className="font-medium text-[#156fbe]">{recipient.name}</div>
                      <div className="text-[12px] text-gray-600">{recipient.role}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {formData.recipient && (
              <div className="mt-2 text-right">
                <button className="text-[12px] text-[#156fbe] hover:underline">
                  + Add new recipient
                </button>
              </div>
            )}
          </div>

          {/* Closing Details */}
          <div>
            <label className="block text-[14px] text-gray-800 mb-2">Closing details</label>
            <p className="text-[12px] text-gray-600 mb-3">
              Closing details will not be shared with the recipient but will help to improve their experience.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[12px] text-gray-700 mb-1">Payment amount</label>
                <input
                  type="text"
                  value={formData.paymentAmount}
                  onChange={(e) => updateFormData({ paymentAmount: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-[14px]"
                />
              </div>
              <div>
                <label className="block text-[12px] text-gray-700 mb-1">Closing date</label>
                <input
                  type="text"
                  value={formData.closingDate}
                  onChange={(e) => updateFormData({ closingDate: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-[14px]"
                />
              </div>
            </div>
          </div>

          {/* Property Address */}
          <div>
            <label className="block text-[14px] text-gray-800 mb-2">Property address</label>
            <p className="text-[12px] text-gray-600 mb-3">
              Provide an address to help identify this request.
            </p>
            <div className="space-y-3">
              <input
                type="text"
                value={formData.propertyAddress}
                onChange={(e) => updateFormData({ propertyAddress: e.target.value })}
                placeholder="Property address"
                className="w-full px-3 py-2 border border-gray-300 rounded text-[14px]"
              />
              <input
                type="text"
                value={formData.apartmentSuite}
                onChange={(e) => updateFormData({ apartmentSuite: e.target.value })}
                placeholder="Apartment, suite, etc."
                className="w-full px-3 py-2 border border-gray-300 rounded text-[14px]"
              />
              <input
                type="text"
                value={formData.city}
                onChange={(e) => updateFormData({ city: e.target.value })}
                placeholder="City"
                className="w-full px-3 py-2 border border-gray-300 rounded text-[14px]"
              />
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <select
                    value={formData.state}
                    onChange={(e) => updateFormData({ state: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-[14px] appearance-none cursor-pointer"
                  >
                    <option value="">Select</option>
                    <option value="TX">Texas</option>
                    <option value="CA">California</option>
                    <option value="NY">New York</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
                <input
                  type="text"
                  value={formData.zipCode}
                  onChange={(e) => updateFormData({ zipCode: e.target.value })}
                  placeholder="Zip code"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-[14px]"
                />
              </div>
            </div>
          </div>

          {/* Underwriter */}
          <div>
            <label className="block text-[14px] text-gray-800 mb-2">Underwriter</label>
            <p className="text-[12px] text-gray-600 mb-3">
              Select an underwriter to take advantage of underwriter partner pricing.
            </p>
            <div className="relative">
              <select
                value={formData.underwriter}
                onChange={(e) => updateFormData({ underwriter: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-[14px] appearance-none cursor-pointer"
              >
                <option value="">Select</option>
                <option value="stewart">Stewart Title</option>
                <option value="fidelity">Fidelity National</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Email Message */}
          <div>
            <label className="block text-[14px] text-gray-800 mb-2">Email message</label>
            <p className="text-[12px] text-gray-600 mb-3">
              This message will be displayed in the email sent to the recipient.
            </p>
            <div className="relative">
              <textarea
                value={formData.customMessage}
                onChange={(e) => updateFormData({ customMessage: e.target.value })}
                placeholder="Enter your message here."
                className="w-full px-3 py-2 border border-gray-300 rounded text-[14px] resize-none"
                rows={4}
              />
              <div className="absolute bottom-2 right-2 text-[12px] text-gray-400">
                0/500
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
