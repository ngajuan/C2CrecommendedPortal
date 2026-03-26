import { useState, useRef, useEffect } from 'react';
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
  const [showControls, setShowControls] = useState(false);
  const controlsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (controlsRef.current && !controlsRef.current.contains(e.target as Node)) {
        setShowControls(false);
      }
    };
    if (showControls) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showControls]);

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

  const controlsMenu = (
    <div ref={controlsRef} className="fixed right-[16px] bottom-[16px] z-[9999]">
      {showControls && (
        <div className="absolute bottom-[48px] right-0 bg-[#102754] rounded-[10px] shadow-[0px_4px_20px_rgba(0,0,0,0.3)] p-[16px] w-[340px]">
          <p className="font-['Oxygen:Bold',sans-serif] text-white text-[11px] uppercase tracking-[1.5px] mb-[12px]">Prototype Controls</p>
          {/* Entry Points */}
          <div className="mb-[12px]">
            <p className="font-['Oxygen:Regular',sans-serif] text-[#b7deff] text-[11px] uppercase tracking-[1px] mb-[6px]">Entry Points</p>
            <div className="flex bg-[rgba(255,255,255,0.1)] rounded-[6px] p-[3px]">
              <button
                onClick={() => setEntryPoint('send_request')}
                className={`flex-1 px-[12px] py-[7px] rounded-[4px] font-['Oxygen:Bold',sans-serif] text-[12px] transition-all ${
                  entryPoint === 'send_request'
                    ? 'bg-[#156fbe] text-white shadow-[0px_1px_3px_rgba(0,0,0,0.2)]'
                    : 'text-[#b7deff] hover:text-white'
                }`}
              >
                Send Request
              </button>
              <button
                onClick={() => setEntryPoint('request_payment')}
                className={`flex-1 px-[12px] py-[7px] rounded-[4px] font-['Oxygen:Bold',sans-serif] text-[12px] transition-all ${
                  entryPoint === 'request_payment'
                    ? 'bg-[#156fbe] text-white shadow-[0px_1px_3px_rgba(0,0,0,0.2)]'
                    : 'text-[#b7deff] hover:text-white'
                }`}
              >
                Request Payment
              </button>
            </div>
          </div>
          {/* Status Direction */}
          <div>
            <p className="font-['Oxygen:Regular',sans-serif] text-[#b7deff] text-[11px] uppercase tracking-[1px] mb-[6px]">Status Direction</p>
            <div className="flex flex-col bg-[rgba(255,255,255,0.1)] rounded-[6px] p-[3px] gap-[2px]">
              <button
                onClick={() => setStatusDirection(1)}
                className={`px-[12px] py-[7px] rounded-[4px] font-['Oxygen:Bold',sans-serif] text-[12px] transition-all text-left ${
                  statusDirection === 1
                    ? 'bg-[#156fbe] text-white shadow-[0px_1px_3px_rgba(0,0,0,0.2)]'
                    : 'text-[#b7deff] hover:text-white'
                }`}
              >
                Option 1 — Payment Submitted (terminal)
              </button>
              <button
                onClick={() => setStatusDirection(2)}
                className={`px-[12px] py-[7px] rounded-[4px] font-['Oxygen:Bold',sans-serif] text-[12px] transition-all text-left ${
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
      )}
      {/* Floating menu button */}
      <button
        onClick={() => setShowControls(!showControls)}
        className={`w-[40px] h-[40px] rounded-[10px] flex items-center justify-center transition-all shadow-[0px_2px_10px_rgba(0,0,0,0.2)] ${
          showControls ? 'bg-[#156fbe]' : 'bg-[#102754] hover:bg-[#1a3570]'
        }`}
      >
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
          <rect y="0" width="18" height="2" rx="1" fill="white" />
          <rect y="6" width="18" height="2" rx="1" fill="white" />
          <rect y="12" width="18" height="2" rx="1" fill="white" />
        </svg>
      </button>
    </div>
  );

  if (currentView === 'request_payment' || currentView === 'send_wiring') {
    return (
      <div className="min-h-screen bg-[#f5f5f5] p-8">
        <NewRequestForm
          onCancel={handleBackFromForm}
          initialMode={currentView === 'send_wiring' ? 'send_wiring' : 'request_payment'}
          entryPoint={entryPoint}
        />
        {controlsMenu}
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
      {controlsMenu}
    </>
  );
}
