import { useState, useRef, useEffect } from 'react';
import svgPaths from "@/imports/svg-qfkwezagl1";
import sideNavSvg from "@/imports/svg-1e69ejdqp8";
import menuSvg from "@/imports/svg-nybjvt0u9j";
import figmaMenuSvg from "@/imports/svg-cc1rap5s1n";
import navSvg from "@/imports/svg-wssfqyiyh6";
import searchSvg from "@/imports/svg-8lob6ng13t";
import { RequestsPage } from './RequestsPage';
import { FilesPage } from './FilesPage';
import { PaymentRequestDetail } from './PaymentRequestDetail';
import { GenericRequestDetail } from './GenericRequestDetail';
import { PaymentRequest, AnyRequest, isGenericRequest, isPaymentRequest, getPaymentsTableEntries, getDisplayStatus, StatusDirection, EntryPoint } from './mockData';

type SidebarSection = 'files' | 'requests' | 'payments';
type View = 'payments' | 'requests' | 'files' | 'request_payment' | 'send_wiring' | 'detail';

interface PaymentsPageProps {
  onRequestPayment: () => void;
  onSendWiring: () => void;
  activeSidebar: SidebarSection;
  onNavTo: (section: SidebarSection) => void;
  currentView: View;
  onSelectRequest: (req: AnyRequest) => void;
  selectedRequest: AnyRequest | null;
  onBackFromDetail: () => void;
  statusDirection: StatusDirection;
  entryPoint: EntryPoint;
}

const tabs = ['All', 'Pending', 'Failed', 'Completed', 'Unable to Process', 'Canceled'];

function getPaymentTableStatus(req: PaymentRequest): { status: string; statusColor: string; subtitle: string } {
  const ds = getDisplayStatus(req);
  let status = ds.label.toUpperCase();
  let statusColor = ds.color;
  let subtitle = '';
  
  if (ds.sub) {
    subtitle = ds.sub === 'Deposited' ? '' : `Estimated arrival ${req.estimatedArrival || ''}`;
  }
  
  if (status === 'COMPLETED') statusColor = '#61D690';
  if (status === 'CANCELED') statusColor = '#555';
  
  return { status, statusColor, subtitle };
}

function StatusIcon({ status, color }: { status: string; color: string }) {
  if (status === 'COMPLETED') {
    return (
      <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
        <path clipRule="evenodd" d={svgPaths.p16f36b00} fill={color} fillRule="evenodd" />
        <path d={svgPaths.p2b428d00} fill={color} />
      </svg>
    );
  }
  if (status === 'CANCELED') {
    return (
      <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
        <path clipRule="evenodd" d={svgPaths.p16f36b00} fill="#555" fillRule="evenodd" />
        <path d={svgPaths.p296fa900} fill="#555" />
      </svg>
    );
  }
  if (status === 'FAILED' || status === 'UNABLE TO PROCESS') {
    return (
      <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
        <path clipRule="evenodd" d={svgPaths.p16f36b00} fill={color} fillRule="evenodd" />
        <path d={svgPaths.p296fa900} fill={color} />
      </svg>
    );
  }
  // PENDING
  return (
    <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
      <path d={svgPaths.p62ebf00} fill={color} />
      <path clipRule="evenodd" d={svgPaths.p2d751f00} fill={color} fillRule="evenodd" />
    </svg>
  );
}

export function PaymentsPage({ onRequestPayment, onSendWiring, activeSidebar, onNavTo, currentView, onSelectRequest, selectedRequest, onBackFromDetail, statusDirection, entryPoint }: PaymentsPageProps) {
  const [activeTab, setActiveTab] = useState('All');
  const [showNewMenu, setShowNewMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowNewMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuAction = (action: string) => {
    setShowNewMenu(false);
    if (action === 'request_payment') {
      onRequestPayment();
    }
    if (action === 'send_wiring') {
      onSendWiring();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#f5f5f5] overflow-hidden pb-[96px]">
      {/* Top Navigation Bar - Full width */}
      <div className="bg-white relative shadow-[0px_1px_3px_0px_rgba(16,39,84,0.1)] h-[65px] shrink-0 z-[40]">
        {/* Company Logo - CERTIFID wordmark */}
        <div className="absolute h-[37px] left-[24px] top-[14px] w-[190.711px]">
          <div className="absolute inset-[71.53%_89.26%_0_5.22%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5242 10.5323">
              <path d={navSvg.p12a56800} fill="#2B3034" />
            </svg>
          </div>
          <div className="absolute inset-[0_80.64%_29.5%_0]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.914 26.0866">
              <path d={navSvg.p1f8eae00} fill="#156FBE" />
            </svg>
          </div>
          <div className="absolute inset-[14.11%_65.6%_33.51%_25.46%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0632 19.3816">
              <path d={navSvg.p261e9840} fill="#2B3034" />
            </svg>
          </div>
          <div className="absolute inset-[15.06%_55.28%_34.45%_37.28%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1903 18.6832">
              <path d={navSvg.p20ff6900} fill="#2B3034" />
            </svg>
          </div>
          <div className="absolute inset-[15.06%_43.82%_34.45%_47.73%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1056 18.6832">
              <path d={navSvg.p1442a3c0} fill="#2B3034" />
            </svg>
          </div>
          <div className="absolute inset-[15.06%_33.64%_34.45%_58.28%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4091 18.6832">
              <path d={navSvg.p2e82ef0} fill="#2B3034" />
            </svg>
          </div>
          <div className="absolute inset-[15.06%_28.62%_34.45%_69.23%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.0917 18.6832">
              <path d={navSvg.p2ccf6100} fill="#2B3034" />
            </svg>
          </div>
          <div className="absolute inset-[15.06%_17.62%_34.45%_74.94%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1904 18.6832">
              <path d={navSvg.p3bba83f0} fill="#2B3034" />
            </svg>
          </div>
          <div className="absolute inset-[15.06%_12.55%_34.45%_85.3%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.09169 18.6832">
              <path d={navSvg.p8197000} fill="#156FBE" />
            </svg>
          </div>
          <div className="absolute inset-[15.06%_0_34.45%_91.01%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1503 18.6832">
              <path d={navSvg.p165b9000} fill="#156FBE" />
            </svg>
          </div>
        </div>
        {/* Vertical divider after logo */}
        <div className="-translate-y-1/2 absolute flex h-[65px] items-center justify-center left-[240px] top-1/2 w-0">
          <div className="-rotate-90 flex-none">
            <div className="h-0 relative w-[65px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 1">
                  <line stroke="#F3F3F3" x2="65" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Company Name */}
        <div className="-translate-y-1/2 absolute flex flex-col font-['Oxygen:Regular',sans-serif] justify-center leading-[0] left-[264px] not-italic text-[#555] text-[16px] top-1/2 whitespace-nowrap">
          <p className="leading-[1.5]">Pinpoint Title</p>
        </div>
        {/* Actions */}
        <div className="absolute content-stretch flex gap-[16px] items-center right-[24px] top-0 h-[65px] z-[50]" ref={menuRef}>
          <button
            onClick={() => setShowNewMenu(!showNewMenu)}
            className="bg-[#156fbe] content-stretch flex gap-[16px] h-[48px] items-center justify-center px-[16px] py-[10px] rounded-[6px] shrink-0 hover:bg-[#124d92] transition-colors"
          >
            <p className="font-['Oxygen:Bold',sans-serif] leading-none not-italic shrink-0 text-[16px] text-white whitespace-nowrap">New</p>
            <div className="relative shrink-0 size-[24px]">
              <div className="absolute inset-[8.33%_14.37%_8.9%_14.58%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0518 19.8643">
                  <path d={navSvg.p312cd700} fill="white" />
                </svg>
              </div>
            </div>
          </button>
          {/* Dropdown Menu */}
          {showNewMenu && entryPoint === 'request_payment' && (
            <div className="absolute top-[60px] right-0 bg-white rounded-[6px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] z-[9999] flex gap-[8px] p-[8px]">
              {/* Left column */}
              <div className="content-stretch flex flex-col gap-[8px] items-start shrink-0">
                <button onClick={() => handleMenuAction('request_payment')} className="content-stretch flex gap-[16px] items-start p-[8px] rounded-[6px] hover:bg-[#f5f7fa] transition-colors text-left w-[226px]">
                  <div className="bg-[#e2f2ff] overflow-clip relative rounded-[6px] shrink-0 size-[40px]">
                    <div className="absolute inset-[20%]"><div className="absolute inset-[9.37%_9.37%_9.38%_9.38%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5013 19.501"><path d={figmaMenuSvg.p6fae580} fill="#156FBE" /></svg>
                    </div></div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic">
                    <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center shrink-0 text-[#156fbe] text-[14px] w-[154px]"><p className="leading-[1.5]">Request a payment</p></div>
                    <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center shrink-0 text-[#555] text-[12px] w-[154px]"><p className="leading-[1.5]">Send wire instructions or request digital payment</p></div>
                  </div>
                </button>
                <button onClick={() => handleMenuAction('collect_bank_details')} className="content-stretch flex gap-[16px] items-start p-[8px] rounded-[6px] hover:bg-[#f5f7fa] transition-colors text-left w-[226px]">
                  <div className="bg-[#e2f2ff] overflow-clip relative rounded-[6px] shrink-0 size-[40px]">
                    <div className="absolute inset-[20%]"><div className="absolute inset-[9.37%_9.37%_9.38%_9.38%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5013 19.501"><path d={figmaMenuSvg.p6fae580} fill="#156FBE" /></svg>
                    </div></div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic">
                    <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center shrink-0 text-[#156fbe] text-[14px] w-[154px]"><p className="leading-[1.5]">Collect or confirm bank details</p></div>
                    <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center shrink-0 text-[#555] text-[12px] w-[154px]"><p className="leading-[1.5]">Collect or confirm bank details for payment</p></div>
                  </div>
                </button>
                <button onClick={() => handleMenuAction('validate_payoff')} className="content-stretch flex gap-[16px] items-start p-[8px] rounded-[6px] hover:bg-[#f5f7fa] transition-colors text-left w-[226px]">
                  <div className="bg-[#e2f2ff] overflow-clip relative rounded-[6px] shrink-0 size-[40px]">
                    <div className="absolute inset-[20%]"><div className="absolute inset-[8.33%_14.37%_8.9%_14.58%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.052 19.8647"><g><path d={figmaMenuSvg.p501f100} fill="#156FBE" /><path d={figmaMenuSvg.p2e138a00} fill="#156FBE" /><path clipRule="evenodd" d={figmaMenuSvg.p175ef600} fill="#156FBE" fillRule="evenodd" /></g></svg>
                    </div></div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic">
                    <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center shrink-0 text-[#156fbe] text-[14px] w-[154px]"><p className="leading-[1.5]">Validate a payoff</p></div>
                    <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center shrink-0 text-[#555] text-[12px] w-[154px]"><p className="leading-[1.5]">Validate wiring instructions for a lender payoff</p></div>
                  </div>
                </button>
                <button onClick={() => handleMenuAction('order_payoff')} className="content-stretch flex gap-[16px] items-start p-[8px] rounded-[6px] hover:bg-[#f5f7fa] transition-colors text-left w-[226px]">
                  <div className="bg-[#e2f2ff] overflow-clip relative rounded-[6px] shrink-0 size-[40px]">
                    <div className="absolute inset-[20%]"><div className="absolute inset-[8.33%_14.37%_8.9%_14.58%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.052 19.8647"><g><path d={figmaMenuSvg.p135cf540} fill="#156FBE" /><path clipRule="evenodd" d={figmaMenuSvg.p3ca7f200} fill="#156FBE" fillRule="evenodd" /></g></svg>
                    </div></div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic">
                    <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center shrink-0 text-[#156fbe] text-[14px] w-[154px]"><p className="leading-[1.5]">Order a payoff</p></div>
                    <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center shrink-0 text-[#555] text-[12px] w-[154px]"><p className="leading-[1.5]">Order mortgage payoff statements</p></div>
                  </div>
                </button>
              </div>
              {/* Right column */}
              <div className="content-stretch flex flex-col gap-[8px] items-start shrink-0">
                <button onClick={() => handleMenuAction('verify_business')} className="content-stretch flex gap-[16px] items-start p-[8px] rounded-[6px] hover:bg-[#f5f7fa] transition-colors text-left w-[226px]">
                  <div className="bg-[#e2f2ff] overflow-clip relative rounded-[6px] shrink-0 size-[40px]">
                    <div className="absolute inset-[20%]"><div className="-translate-x-1/2 -translate-y-1/2 absolute h-[18.52px] left-[calc(50%+0.7px)] top-[calc(50%-0.03px)] w-[19.5px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4996 18.5199"><g><path d={figmaMenuSvg.p2ddc3a30} fill="#156FBE" /><path d={figmaMenuSvg.p15b00080} fill="#156FBE" /><path d={figmaMenuSvg.p1c0add0} fill="#156FBE" /><path d={figmaMenuSvg.p33e7cf80} fill="#156FBE" /><path d={figmaMenuSvg.p274ef400} fill="#156FBE" /><path d={figmaMenuSvg.ped09b00} fill="#156FBE" /><path d={figmaMenuSvg.p34371500} fill="#156FBE" /></g></svg>
                    </div></div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic">
                    <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center shrink-0 text-[#156fbe] text-[14px] w-[154px]"><p className="leading-[1.5]">Verify a business</p></div>
                    <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center shrink-0 text-[#555] text-[12px] w-[154px]"><p className="leading-[1.5]">Verify wiring instructions for a business</p></div>
                  </div>
                </button>
                <button onClick={() => handleMenuAction('verify_identity')} className="content-stretch flex gap-[16px] items-start p-[8px] rounded-[6px] hover:bg-[#f5f7fa] transition-colors text-left w-[226px]">
                  <div className="bg-[#e2f2ff] overflow-clip relative rounded-[6px] shrink-0 size-[40px]">
                    <div className="absolute inset-[20%]"><div className="absolute inset-[12.5%_4.17%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18"><g><path d={figmaMenuSvg.p27a988f0} fill="#156FBE" /><path d={figmaMenuSvg.p2a86f900} fill="#156FBE" /><path d={figmaMenuSvg.p3dec1880} fill="#156FBE" /></g></svg>
                    </div></div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic">
                    <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center shrink-0 text-[#156fbe] text-[14px] w-[154px]"><p className="leading-[1.5]">Verify an identity</p></div>
                    <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center shrink-0 text-[#555] text-[12px] w-[154px]"><p className="leading-[1.5]">Ask a customer to verify their identity</p></div>
                  </div>
                </button>
                <button onClick={() => handleMenuAction('request_esignature')} className="content-stretch flex gap-[16px] items-start p-[8px] rounded-[6px] hover:bg-[#f5f7fa] transition-colors text-left">
                  <div className="bg-[#e2f2ff] overflow-clip relative rounded-[6px] shrink-0 size-[40px]">
                    <div className="absolute inset-[20%]"><div className="absolute inset-[8.33%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0001 20"><path d={figmaMenuSvg.p3db23b00} fill="#156FBE" /></svg>
                    </div></div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic shrink-0 w-[154px]">
                    <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center shrink-0 text-[#156fbe] text-[14px] whitespace-nowrap"><p className="leading-[1.5]">Request an eSignature</p></div>
                    <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center shrink-0 text-[#555] text-[12px] w-[154px]"><p className="leading-[1.5]">Request a secure virtual signature from customers</p></div>
                  </div>
                </button>
              </div>
            </div>
          )}
          {showNewMenu && entryPoint === 'send_request' && (
            <div className="absolute top-[60px] right-0 bg-white rounded-[6px] shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)] z-[9999] flex gap-[8px] p-[8px]">
              {/* Left column */}
              <div className="content-stretch flex flex-col gap-[8px] items-start shrink-0">
                <button onClick={() => handleMenuAction('request_payment')} className="content-stretch flex gap-[16px] items-start p-[8px] rounded-[6px] hover:bg-[#f5f7fa] transition-colors text-left w-[226px]">
                  <div className="bg-[#e2f2ff] overflow-clip relative rounded-[6px] shrink-0 size-[40px]">
                    <div className="absolute inset-[20%]"><div className="absolute inset-[9.37%_9.37%_9.38%_9.38%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5013 19.501"><path d={figmaMenuSvg.p6fae580} fill="#156FBE" /></svg>
                    </div></div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic">
                    <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center shrink-0 text-[#156fbe] text-[14px] w-[154px]"><p className="leading-[1.5]">Send a request</p></div>
                    <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center shrink-0 text-[#555] text-[12px] w-[154px]"><p className="leading-[1.5]">Create and send a Send, Confirm, Collect request</p></div>
                  </div>
                </button>
                <button onClick={() => handleMenuAction('validate_payoff')} className="content-stretch flex gap-[16px] items-start p-[8px] rounded-[6px] hover:bg-[#f5f7fa] transition-colors text-left w-[226px]">
                  <div className="bg-[#e2f2ff] overflow-clip relative rounded-[6px] shrink-0 size-[40px]">
                    <div className="absolute inset-[20%]"><div className="absolute inset-[8.33%_14.37%_8.9%_14.58%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.052 19.8647"><g><path d={figmaMenuSvg.p501f100} fill="#156FBE" /><path d={figmaMenuSvg.p2e138a00} fill="#156FBE" /><path clipRule="evenodd" d={figmaMenuSvg.p175ef600} fill="#156FBE" fillRule="evenodd" /></g></svg>
                    </div></div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic">
                    <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center shrink-0 text-[#156fbe] text-[14px] w-[154px]"><p className="leading-[1.5]">Validate a payoff</p></div>
                    <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center shrink-0 text-[#555] text-[12px] w-[154px]"><p className="leading-[1.5]">Validate wiring instructions for a lender payoff</p></div>
                  </div>
                </button>
                <button onClick={() => handleMenuAction('order_payoff')} className="content-stretch flex gap-[16px] items-start p-[8px] rounded-[6px] hover:bg-[#f5f7fa] transition-colors text-left w-[226px]">
                  <div className="bg-[#e2f2ff] overflow-clip relative rounded-[6px] shrink-0 size-[40px]">
                    <div className="absolute inset-[20%]"><div className="absolute inset-[8.33%_14.37%_8.9%_14.58%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.052 19.8647"><g><path d={figmaMenuSvg.p135cf540} fill="#156FBE" /><path clipRule="evenodd" d={figmaMenuSvg.p3ca7f200} fill="#156FBE" fillRule="evenodd" /></g></svg>
                    </div></div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic">
                    <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center shrink-0 text-[#156fbe] text-[14px] w-[154px]"><p className="leading-[1.5]">Order a payoff</p></div>
                    <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center shrink-0 text-[#555] text-[12px] w-[154px]"><p className="leading-[1.5]">Order mortgage payoff statements</p></div>
                  </div>
                </button>
              </div>
              {/* Right column */}
              <div className="content-stretch flex flex-col gap-[8px] items-start shrink-0">
                <button onClick={() => handleMenuAction('verify_business')} className="content-stretch flex gap-[16px] items-start p-[8px] rounded-[6px] hover:bg-[#f5f7fa] transition-colors text-left w-[226px]">
                  <div className="bg-[#e2f2ff] overflow-clip relative rounded-[6px] shrink-0 size-[40px]">
                    <div className="absolute inset-[20%]"><div className="-translate-x-1/2 -translate-y-1/2 absolute h-[18.52px] left-[calc(50%+0.7px)] top-[calc(50%-0.03px)] w-[19.5px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4996 18.5199"><g><path d={figmaMenuSvg.p2ddc3a30} fill="#156FBE" /><path d={figmaMenuSvg.p15b00080} fill="#156FBE" /><path d={figmaMenuSvg.p1c0add0} fill="#156FBE" /><path d={figmaMenuSvg.p33e7cf80} fill="#156FBE" /><path d={figmaMenuSvg.p274ef400} fill="#156FBE" /><path d={figmaMenuSvg.ped09b00} fill="#156FBE" /><path d={figmaMenuSvg.p34371500} fill="#156FBE" /></g></svg>
                    </div></div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic">
                    <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center shrink-0 text-[#156fbe] text-[14px] w-[154px]"><p className="leading-[1.5]">Verify a business</p></div>
                    <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center shrink-0 text-[#555] text-[12px] w-[154px]"><p className="leading-[1.5]">Verify wiring instructions for a business</p></div>
                  </div>
                </button>
                <button onClick={() => handleMenuAction('verify_identity')} className="content-stretch flex gap-[16px] items-start p-[8px] rounded-[6px] hover:bg-[#f5f7fa] transition-colors text-left w-[226px]">
                  <div className="bg-[#e2f2ff] overflow-clip relative rounded-[6px] shrink-0 size-[40px]">
                    <div className="absolute inset-[20%]"><div className="absolute inset-[12.5%_4.17%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18"><g><path d={figmaMenuSvg.p27a988f0} fill="#156FBE" /><path d={figmaMenuSvg.p2a86f900} fill="#156FBE" /><path d={figmaMenuSvg.p3dec1880} fill="#156FBE" /></g></svg>
                    </div></div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic">
                    <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center shrink-0 text-[#156fbe] text-[14px] w-[154px]"><p className="leading-[1.5]">Verify an identity</p></div>
                    <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center shrink-0 text-[#555] text-[12px] w-[154px]"><p className="leading-[1.5]">Ask a customer to verify their identity</p></div>
                  </div>
                </button>
                <button onClick={() => handleMenuAction('request_esignature')} className="content-stretch flex gap-[16px] items-start p-[8px] rounded-[6px] hover:bg-[#f5f7fa] transition-colors text-left">
                  <div className="bg-[#e2f2ff] overflow-clip relative rounded-[6px] shrink-0 size-[40px]">
                    <div className="absolute inset-[20%]"><div className="absolute inset-[8.33%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0001 20"><path d={figmaMenuSvg.p3db23b00} fill="#156FBE" /></svg>
                    </div></div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic shrink-0 w-[154px]">
                    <div className="flex flex-col font-['Oxygen:Bold',sans-serif] justify-center shrink-0 text-[#156fbe] text-[14px] whitespace-nowrap"><p className="leading-[1.5]">Request an eSignature</p></div>
                    <div className="flex flex-col font-['Oxygen:Regular',sans-serif] justify-center shrink-0 text-[#555] text-[12px] w-[154px]"><p className="leading-[1.5]">Request a secure virtual signature from customers</p></div>
                  </div>
                </button>
              </div>
            </div>
          )}
          {/* Vertical divider */}
          <div className="flex h-[64px] items-center justify-center shrink-0 w-0">
            <div className="-rotate-90 flex-none">
              <div className="h-0 relative w-[64px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 1">
                    <line stroke="#F3F3F3" x2="64" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Notification bell */}
          <div className="bg-[#eee] overflow-clip relative rounded-[99999px] shrink-0 size-[32px]">
            <div className="-translate-y-1/2 absolute left-[6px] size-[20px] top-1/2">
              <div className="absolute inset-[8.33%_14.58%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1668 16.6669">
                  <path d={navSvg.p364b6580} fill="#102754" />
                </svg>
              </div>
            </div>
          </div>
          {/* Avatar */}
          <div className="relative shrink-0 size-[32px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <circle cx="16" cy="16" fill="#102754" r="16" />
            </svg>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute capitalize flex flex-col font-['Oxygen:Bold',sans-serif] h-[19.613px] justify-center leading-[0] left-[16px] not-italic text-[14px] text-center text-white top-[15.81px] w-[32px]">
              <p className="leading-[1.5]">WF</p>
            </div>
          </div>
        </div>
      </div>

      {/* Body: Sidebar + Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="bg-[#102754] content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[16px] shrink-0 w-[240px]">
          {/* Files */}
          <button onClick={() => onNavTo('files')} className={`${activeSidebar === 'files' ? 'bg-[rgba(255,255,255,0.15)]' : 'bg-[rgba(255,255,255,0.05)]'} content-stretch flex gap-[8px] h-[48px] items-center overflow-clip pl-[12px] pr-[8px] rounded-[6px] shrink-0 w-full cursor-pointer`}>
            <div className="relative shrink-0 size-[24px]">
              <div className="absolute inset-[8.33%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={sideNavSvg.p29ae6a80} fill={activeSidebar === 'files' ? '#B7DEFF' : 'white'} />
                  <path clipRule="evenodd" d={sideNavSvg.p9dff840} fill={activeSidebar === 'files' ? '#B7DEFF' : 'white'} fillRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px text-[16px] text-white">
              <p className="leading-none text-left">Files</p>
            </div>
          </button>

          {/* Requests */}
          <button onClick={() => onNavTo('requests')} className={`${activeSidebar === 'requests' ? 'bg-[rgba(255,255,255,0.15)]' : 'bg-[rgba(255,255,255,0.05)]'} content-stretch flex gap-[8px] h-[48px] items-center overflow-clip pl-[12px] pr-[8px] rounded-[6px] shrink-0 w-full cursor-pointer`}>
            <div className="relative shrink-0 size-[24px]">
              <div className="absolute inset-[9.37%_9.37%_9.37%_9.38%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5013 19.5013">
                  <path clipRule="evenodd" d={sideNavSvg.p2ccfd200} fill={activeSidebar === 'requests' ? '#B7DEFF' : 'white'} fillRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px text-[16px] text-white">
              <p className="leading-none text-left">Requests</p>
            </div>
          </button>

          {/* Payoffs */}
          <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] h-[48px] items-center overflow-clip pl-[12px] pr-[8px] rounded-[6px] shrink-0 w-full">
            <div className="relative shrink-0 size-[24px]">
              <div className="absolute inset-[8.33%_14.37%_8.9%_14.58%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.052 19.8647">
                  <path d={sideNavSvg.p501f100} fill="white" />
                  <path d={sideNavSvg.p2e138a00} fill="white" />
                  <path clipRule="evenodd" d={sideNavSvg.p175ef600} fill="white" fillRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px text-[16px] text-white">
              <p className="leading-none">Payoffs</p>
            </div>
          </div>

          {/* Businesses */}
          <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] h-[48px] items-center overflow-clip pl-[12px] pr-[8px] rounded-[6px] shrink-0 w-full">
            <div className="relative shrink-0 size-[24px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[18.52px] left-[calc(50%+0.7px)] top-[calc(50%-0.03px)] w-[19.5px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4996 18.5199">
                  <path d={sideNavSvg.p2ddc3a30} fill="white" />
                  <path d={sideNavSvg.p15b00080} fill="white" />
                  <path d={sideNavSvg.p1c0add0} fill="white" />
                  <path d={sideNavSvg.p33e7cf80} fill="white" />
                  <path d={sideNavSvg.p274ef400} fill="white" />
                  <path d={sideNavSvg.ped09b00} fill="white" />
                  <path d={sideNavSvg.p34371500} fill="white" />
                </svg>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px text-[16px] text-white">
              <p className="leading-none">Businesses</p>
            </div>
          </div>

          {/* Identities */}
          <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] h-[48px] items-center overflow-clip pl-[12px] pr-[8px] rounded-[6px] shrink-0 w-full">
            <div className="relative shrink-0 size-[24px]">
              <div className="absolute inset-[12.5%_4.17%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
                  <path d={sideNavSvg.p27a988f0} fill="white" />
                  <path d={sideNavSvg.p2a86f900} fill="white" />
                  <path d={sideNavSvg.p3dec1880} fill="white" />
                </svg>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px text-[16px] text-white">
              <p className="leading-none">Identities</p>
            </div>
          </div>

          {/* Payments - Active item with chevron */}
          <button onClick={() => onNavTo('payments')} className={`${activeSidebar === 'payments' ? 'bg-[rgba(255,255,255,0.15)]' : 'bg-[rgba(255,255,255,0.05)]'} content-stretch flex gap-[8px] h-[48px] items-center overflow-clip pl-[12px] pr-[8px] rounded-[6px] shrink-0 w-full cursor-pointer`}>
            <div className="relative shrink-0 size-[24px]">
              <div className="absolute inset-[7.83%_8.7%_7.83%_8.67%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8307 20.2403">
                  <path clipRule="evenodd" d={sideNavSvg.p15c2c880} fill={activeSidebar === 'payments' ? '#B7DEFF' : 'white'} fillRule="evenodd" />
                  <path d={sideNavSvg.p268b8d00} fill={activeSidebar === 'payments' ? '#B7DEFF' : 'white'} />
                  <path d={sideNavSvg.p319f1700} fill={activeSidebar === 'payments' ? '#B7DEFF' : 'white'} />
                  <path d={sideNavSvg.p3e06bef0} fill={activeSidebar === 'payments' ? '#B7DEFF' : 'white'} />
                  <path d={sideNavSvg.pcaa1180} fill={activeSidebar === 'payments' ? '#B7DEFF' : 'white'} />
                  <path clipRule="evenodd" d={sideNavSvg.p6f61eb0} fill={activeSidebar === 'payments' ? '#B7DEFF' : 'white'} fillRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px text-[16px] text-white">
              <p className="leading-none text-left">Payments</p>
            </div>
            {/* Chevron caret */}
            <div className="relative shrink-0 size-[24px]">
              <div className="absolute inset-[31.25%_16.67%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9">
                  <path d={sideNavSvg.p1351800} fill="white" />
                </svg>
              </div>
            </div>
          </button>

          {/* Incoming / Outgoing sub-items */}
          <div className="content-stretch flex flex-col gap-[16px] pl-[24px] relative shrink-0 w-full">
            <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] h-[48px] items-center overflow-clip pl-[12px] pr-[8px] relative rounded-[6px] shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
                <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
                  <p className="leading-none">Incoming</p>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] h-[48px] items-center overflow-clip pl-[12px] pr-[8px] relative rounded-[6px] shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
                <div className="flex flex-[1_0_0] flex-col font-['Oxygen:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
                  <p className="leading-none">Outgoing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        {currentView === 'detail' && selectedRequest ? (
          isGenericRequest(selectedRequest) ? (
            <GenericRequestDetail request={selectedRequest} onBack={onBackFromDetail} />
          ) : (
            <PaymentRequestDetail request={selectedRequest as PaymentRequest} onBack={onBackFromDetail} />
          )
        ) : currentView === 'requests' ? (
          <RequestsPage onSelectRequest={onSelectRequest} statusDirection={statusDirection} />
        ) : currentView === 'files' ? (
          <FilesPage onSelectRequest={onSelectRequest} />
        ) : (
        <div className="flex-1 flex flex-col min-w-0 bg-[#f5f5f5]">
          {/* Dark navy page header - sits behind content */}
          <div className="bg-[#283c65] flex items-center justify-between px-[24px] pt-[24px] pb-[64px] shrink-0">
            <div className="flex flex-col gap-[12px]">
              <h1 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-[48px] leading-[1.5]">Payments</h1>
              <div className="bg-[#156fbe] h-px w-[20px]" />
            </div>
            <div className="bg-white content-stretch flex gap-[16px] items-center px-[11px] py-[7px] rounded-[6px] w-[240px] h-[48px] relative">
              <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <div className="content-stretch flex flex-[1_0_0] gap-[16px] h-full items-center min-h-px min-w-px overflow-clip relative">
                <div className="relative shrink-0 size-[16px]">
                  <div className="absolute inset-[8.33%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                      <path clipRule="evenodd" d={searchSvg.p21c7d400} fill="#A0A2A4" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Search payments..."
                  className="flex-[1_0_0] min-w-0 font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px] outline-none bg-transparent placeholder:text-[#a0a2a4]"
                />
              </div>
              <div className="relative shrink-0 size-[20px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g transform="translate(1.667 1.667)">
                    <path d={searchSvg.p311ef780} fill="#156FBE" />
                    <path d={searchSvg.p50ac400} fill="#156FBE" />
                    <path clipRule="evenodd" d={searchSvg.p23b70f00} fill="#156FBE" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* White background content area with table */}
          <div className="flex-1 overflow-auto relative z-10 -mt-[40px]">
            <div className="px-[24px] pb-[24px]">
              {/* Table area */}
              <div className="bg-white rounded-[6px] overflow-hidden shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)]">
                {/* Tabs */}
                <div className="flex items-center border-b border-[#ddd]">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-[20px] py-[16px] font-['Oxygen:Regular',sans-serif] text-[16px] relative whitespace-nowrap ${
                        activeTab === tab
                          ? "font-['Oxygen:Bold',sans-serif] text-[#156fbe]"
                          : 'text-[#555]'
                      }`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#156fbe] rounded-t-[2px]" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Column Headers */}
                <div className="overflow-x-auto scrollbar-hide">
                <div className="min-w-[1100px]">
                <div className="flex bg-[#f3f3f3]">
                  <div className="w-[215px] shrink-0 p-[16px]"><p className="font-['Oxygen:Bold',sans-serif] text-[#156fbe] text-[16px] tracking-[1px] uppercase">Status</p></div>
                  <div className="w-[108px] shrink-0 p-[16px]"><p className="font-['Oxygen:Bold',sans-serif] text-[#156fbe] text-[16px] tracking-[1px] uppercase">Amount</p></div>
                  <div className="w-[108px] shrink-0 p-[16px]"><p className="font-['Oxygen:Bold',sans-serif] text-[#156fbe] text-[16px] tracking-[1px] uppercase">File #</p></div>
                  <div className="w-[200px] shrink-0 p-[16px]"><p className="font-['Oxygen:Bold',sans-serif] text-[#156fbe] text-[16px] tracking-[1px] uppercase">Client</p></div>
                  <div className="w-[171px] shrink-0 p-[16px]"><p className="font-['Oxygen:Bold',sans-serif] text-[#156fbe] text-[16px] tracking-[1px] uppercase">Purpose</p></div>
                  <div className="w-[155px] shrink-0 p-[16px]"><p className="font-['Oxygen:Bold',sans-serif] text-[#156fbe] text-[16px] tracking-[1px] uppercase">Destination</p></div>
                  <div className="p-[16px] shrink-0"><p className="font-['Oxygen:Bold',sans-serif] text-[#156fbe] text-[16px] tracking-[1px] uppercase">Last updated</p></div>
                  <div className="flex-1 bg-[#f3f3f3]" />
                  <div className="flex items-center gap-[16px] px-[16px] shrink-0">
                    <button className="w-[24px] h-[24px] bg-white rounded-[6px] border border-[#ddd] flex items-center justify-center">
                      <svg className="w-[6px] h-[11px]" fill="none" viewBox="0 0 6 10.6667">
                        <path d={svgPaths.p3f3d4080} fill="#555" />
                      </svg>
                    </button>
                    <p className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[14px]">1/4</p>
                    <button className="w-[24px] h-[24px] bg-white rounded-[6px] border border-[#ddd] flex items-center justify-center">
                      <svg className="w-[6px] h-[11px]" fill="none" viewBox="0 0 6 10.6667">
                        <path d={svgPaths.p1930a500} fill="#555" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Rows */}
                {getPaymentsTableEntries().map((req, idx) => {
                  const { status, statusColor, subtitle } = getPaymentTableStatus(req);
                  return (
                    <div
                      key={req.id}
                      onClick={() => onSelectRequest(req)}
                      className="flex h-[80px] border-b border-[#eee] cursor-pointer hover:bg-[#f9fbfd] transition-colors"
                    >
                      {/* Status */}
                      <div className="w-[215px] shrink-0 flex flex-col justify-center px-[16px]">
                        <div className="flex items-center gap-[4px]">
                          <StatusIcon status={status} color={statusColor} />
                          <p className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[14px] tracking-[1px] uppercase">{status}</p>
                        </div>
                        {subtitle && (
                          <p className="font-['Oxygen:Regular',sans-serif] text-[#a0a2a4] text-[14px] mt-[2px]">{subtitle.replace(/January|February|March|April|May|June|July|August|September|October|November|December/g, m => m.slice(0, 3))}</p>
                        )}
                      </div>
                      {/* Amount */}
                      <div className="w-[108px] shrink-0 flex items-center px-[16px]">
                        <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]">{req.amount}</p>
                      </div>
                      {/* File # */}
                      <div className="w-[108px] shrink-0 flex items-center px-[16px]">
                        <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]">{req.fileNumber}</p>
                      </div>
                      {/* Client */}
                      <div className="w-[200px] shrink-0 flex flex-col justify-center px-[16px] overflow-hidden">
                        <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px] truncate">{req.clientName}</p>
                        <p className="font-['Oxygen:Regular',sans-serif] text-[#a0a2a4] text-[14px] truncate">{req.propertyAddress}</p>
                      </div>
                      {/* Purpose */}
                      <div className="w-[171px] shrink-0 flex items-center px-[16px]">
                        <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]">{req.purpose === 'cash_to_close' ? 'Cash to close' : 'Earnest money'}</p>
                      </div>
                      {/* Destination */}
                      <div className="w-[155px] shrink-0 flex flex-col justify-center px-[16px] overflow-hidden">
                        <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px] truncate">{req.destinationAccount || '—'}</p>
                        <p className="font-['Oxygen:Regular',sans-serif] text-[#a0a2a4] text-[14px] truncate">{req.office}</p>
                      </div>
                      {/* Last updated */}
                      <div className="shrink-0 flex items-center px-[16px]">
                        <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]">{req.lastUpdated}</p>
                      </div>
                      {/* Actions */}
                      <div className="flex-1 flex items-center justify-end px-[16px] shrink-0">
                        <button onClick={(e) => e.stopPropagation()} className="bg-white h-[24px] px-[12px] rounded-[6px] border border-[#ddd] flex items-center justify-center">
                          <svg className="w-[16px] h-[4px]" fill="none" viewBox="0 0 15.5625 3.9375">
                            <path d={svgPaths.p34e4c00} fill="#555" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  );
                })}
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}