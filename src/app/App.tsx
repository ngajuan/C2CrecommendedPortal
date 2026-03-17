import { useState } from 'react';
import { PaymentsPage } from '@/app/components/PaymentsPage';
import { NewRequestForm } from '@/app/components/NewRequestForm';
import { RequestsPage } from '@/app/components/RequestsPage';
import { FilesPage } from '@/app/components/FilesPage';
import { PaymentRequestDetail } from '@/app/components/PaymentRequestDetail';
import { GenericRequestDetail } from '@/app/components/GenericRequestDetail';
import { AnyRequest, isGenericRequest, getAnyDetailHostTab, PaymentRequest } from '@/app/components/mockData';

type View = 'payments' | 'requests' | 'files' | 'request_payment' | 'send_wiring' | 'detail';
type SidebarSection = 'files' | 'requests' | 'payments';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('payments');
  const [activeSidebar, setActiveSidebar] = useState<SidebarSection>('payments');
  const [selectedRequest, setSelectedRequest] = useState<AnyRequest | null>(null);
  const [previousView, setPreviousView] = useState<View>('payments');
  const [previousSidebar, setPreviousSidebar] = useState<SidebarSection>('payments');

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
        />
      </div>
    );
  }

  return (
    <PaymentsPage
      onRequestPayment={() => setCurrentView('request_payment')}
      onSendWiring={() => setCurrentView('send_wiring')}
      activeSidebar={activeSidebar}
      onNavTo={handleNavTo}
      currentView={currentView}
      onSelectRequest={handleSelectRequest}
      selectedRequest={selectedRequest}
      onBackFromDetail={handleBackFromDetail}
    />
  );
}
