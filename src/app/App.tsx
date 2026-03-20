import { useState } from 'react';
import { PaymentsPage } from '@/app/components/PaymentsPage';
import { NewRequestForm } from '@/app/components/NewRequestForm';
import { RequestsPage } from '@/app/components/RequestsPage';
import { FilesPage } from '@/app/components/FilesPage';
import { PaymentRequestDetail } from '@/app/components/PaymentRequestDetail';
import { GenericRequestDetail } from '@/app/components/GenericRequestDetail';
import { AnyRequest, isGenericRequest, getAnyDetailHostTab, PaymentRequest, StatusDirection, EntryPoint } from '@/app/components/mockData';

type View = 'payments' | 'requests' | 'files' | 'request_payment' | 'send_wiring' | 'detail';
type SidebarSection = 'files' | 'requests' | 'payments';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('payments');
  const [activeSidebar, setActiveSidebar] = useState<SidebarSection>('payments');
  const [selectedRequest, setSelectedRequest] = useState<AnyRequest | null>(null);
  const [previousView, setPreviousView] = useState<View>('payments');
  const [previousSidebar, setPreviousSidebar] = useState<SidebarSection>('payments');
  const [statusDirection, setStatusDirection] = useState<StatusDirection>(1);
  const [entryPoint, setEntryPoint] = useState<EntryPoint>('send_request');

  const handleNavTo = (section: SidebarSection) => {
    setActiveSidebar(section);
    setCurrentView(section);
    setSelectedRequest(null);
  };

  const handleSelectRequest = (req: AnyRequest) => {
    setSelectedRequest(req);
    setPreviousView(currentView);
    setPreviousSidebar(activeSidebar);
    setCurrentView('detail');
    const hostTab = getAnyDetailHostTab(req);
    setActiveSidebar(hostTab);
  };

  const handleBackFromDetail = () => {
    setSelectedRequest(null);
    setCurrentView(previousView);
    setActiveSidebar(previousSidebar);
  };

  const handleBackFromForm = () => {
    setCurrentView(activeSidebar);
  };

  if (currentView === 'request_payment' || currentView === 'send_wiring') {
    return (
      <div className="min-h-screen bg-[#f5f5f5] p-8">
        <NewRequestForm
          onCancel={handleBackFromForm}
          initialMode={currentView === 'send_wiring' ? 'send_wiring' : 'request_payment'}
          entryPoint={entryPoint}
        />
      </div>
    );
  }

  return (
    <>
      <PaymentsPage
        onRequestPayment={() => setCurrentView('request_payment')}
        onSendWiring={() => setCurrentView('send_wiring')}
        activeSidebar={activeSidebar}
        onNavTo={handleNavTo}
        currentView={currentView}
        onSelectRequest={handleSelectRequest}
        selectedRequest={selectedRequest}
        onBackFromDetail={handleBackFromDetail}
        statusDirection={statusDirection}
        entryPoint={entryPoint}
      />
      {/* Toggle Bars - Fixed bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#102754] shadow-[0px_-2px_12px_rgba(0,0,0,0.15)]">
        {/* Entry Points Toggle */}
        <div className="flex items-center justify-center gap-[16px] px-[24px] pt-[12px] pb-[8px] border-b border-[rgba(255,255,255,0.1)]">
          <span className="font-['Oxygen:Bold',sans-serif] text-white text-[13px] uppercase tracking-[1px]">Entry Points:</span>
          <div className="flex bg-[rgba(255,255,255,0.1)] rounded-[6px] p-[3px]">
            <button
              onClick={() => setEntryPoint('send_request')}
              className={`px-[16px] py-[8px] rounded-[4px] font-['Oxygen:Bold',sans-serif] text-[13px] transition-all ${
                entryPoint === 'send_request'
                  ? 'bg-[#156fbe] text-white shadow-[0px_1px_3px_rgba(0,0,0,0.2)]'
                  : 'text-[#b7deff] hover:text-white'
              }`}
            >
              Send Request
            </button>
            <button
              onClick={() => setEntryPoint('request_payment')}
              className={`px-[16px] py-[8px] rounded-[4px] font-['Oxygen:Bold',sans-serif] text-[13px] transition-all ${
                entryPoint === 'request_payment'
                  ? 'bg-[#156fbe] text-white shadow-[0px_1px_3px_rgba(0,0,0,0.2)]'
                  : 'text-[#b7deff] hover:text-white'
              }`}
            >
              Request Payment
            </button>
          </div>
        </div>
        {/* Status Direction Toggle */}
        <div className="flex items-center justify-center gap-[16px] px-[24px] pt-[8px] pb-[12px]">
          <span className="font-['Oxygen:Bold',sans-serif] text-white text-[13px] uppercase tracking-[1px]">Status Direction:</span>
          <div className="flex bg-[rgba(255,255,255,0.1)] rounded-[6px] p-[3px]">
            <button
              onClick={() => setStatusDirection(1)}
              className={`px-[16px] py-[8px] rounded-[4px] font-['Oxygen:Bold',sans-serif] text-[13px] transition-all ${
                statusDirection === 1
                  ? 'bg-[#156fbe] text-white shadow-[0px_1px_3px_rgba(0,0,0,0.2)]'
                  : 'text-[#b7deff] hover:text-white'
              }`}
            >
              Option 1 — Payment Submitted (terminal)
            </button>
            <button
              onClick={() => setStatusDirection(2)}
              className={`px-[16px] py-[8px] rounded-[4px] font-['Oxygen:Bold',sans-serif] text-[13px] transition-all ${
                statusDirection === 2
                  ? 'bg-[#156fbe] text-white shadow-[0px_1px_3px_rgba(0,0,0,0.2)]'
                  : 'text-[#b7deff] hover:text-white'
              }`}
            >
              Option 2 — Pending / Completed (in requests)
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
