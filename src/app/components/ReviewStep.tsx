import { FormData } from '@/app/components/NewRequestModal';

interface ReviewStepProps {
  formData: FormData;
}

export function ReviewStep({ formData }: ReviewStepProps) {
  const getRequestTypeLabel = () => {
    if (formData.requestType === 'send_request' && formData.requestSubType === 'earnest_money') {
      return 'Send request for earnest money';
    }
    return 'Send request';
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h3 className="text-[16px] text-gray-800 mb-2">Review</h3>
        <p className="text-[12px] text-gray-600">
          Please double check that this information is correct. Errors in the contact information will prevent CertifID from validating identity.
        </p>
      </div>

      <div className="space-y-6 bg-white border border-gray-200 rounded p-6">
        {/* Office */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-[12px] text-gray-600 mb-1">Office</div>
            <div className="text-[14px] text-gray-800">{formData.accountOffice || 'CertifID'}</div>
          </div>
        </div>

        {/* Request Type */}
        <div>
          <div className="text-[12px] text-gray-600 mb-1">Request type</div>
          <div className="text-[14px] text-gray-800">{getRequestTypeLabel()}</div>
        </div>

        {/* File Number */}
        {formData.fileNumber && (
          <div>
            <div className="text-[12px] text-gray-600 mb-1">File number</div>
            <div className="text-[14px] text-gray-800">{formData.fileNumber}</div>
          </div>
        )}

        {/* Recipient */}
        {formData.recipient && (
          <div>
            <div className="text-[12px] text-gray-600 mb-1">Recipient</div>
            <div className="text-[14px] text-gray-800">
              <div>{formData.recipientDetails.role}</div>
              <div>{formData.recipientDetails.name}</div>
              {formData.recipientDetails.email && (
                <div>{formData.recipientDetails.email}</div>
              )}
              {formData.recipientDetails.phone && (
                <div>{formData.recipientDetails.phone}</div>
              )}
            </div>
          </div>
        )}

        {/* Payment Amount */}
        {formData.paymentAmount && (
          <div>
            <div className="text-[12px] text-gray-600 mb-1">Payment amount</div>
            <div className="text-[14px] text-gray-800">${formData.paymentAmount}</div>
          </div>
        )}

        {/* Closing Date */}
        {formData.closingDate && (
          <div>
            <div className="text-[12px] text-gray-600 mb-1">Closing date</div>
            <div className="text-[14px] text-gray-800">{formData.closingDate}</div>
          </div>
        )}

        {/* Property Address */}
        {formData.propertyAddress && (
          <div>
            <div className="text-[12px] text-gray-600 mb-1">Property Address</div>
            <div className="text-[14px] text-gray-800">
              {formData.propertyAddress}
              {formData.apartmentSuite && `, ${formData.apartmentSuite}`}
              {formData.city && formData.state && formData.zipCode && (
                <div>{formData.city}, {formData.state}, {formData.zipCode}</div>
              )}
            </div>
          </div>
        )}

        {/* Underwriter */}
        {formData.underwriter && (
          <div>
            <div className="text-[12px] text-gray-600 mb-1">Underwriter</div>
            <div className="text-[14px] text-gray-800">{formData.underwriter}</div>
          </div>
        )}

        {/* Email Message */}
        {formData.customMessage && (
          <div>
            <div className="text-[12px] text-gray-600 mb-1">Email message</div>
            <div className="text-[14px] text-gray-800">{formData.customMessage}</div>
          </div>
        )}

        {/* Download Preview PDF */}
        <div>
          <a href="#" className="text-[14px] text-[#156fbe] hover:underline">
            Download Preview PDF
          </a>
        </div>
      </div>
    </div>
  );
}
