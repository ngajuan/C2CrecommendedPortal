import { useState } from 'react';
import { getAllRequests, getAnyRequestTableStatus, getAnyRequestType, getAnyRequestSubtype, isGenericRequest, isPaymentRequest, AnyRequest, StatusDirection } from './mockData';
import svgPaths from '@/imports/svg-qfkwezagl1';
import searchSvg from '@/imports/svg-8lob6ng13t';

interface RequestsPageProps {
  onSelectRequest: (req: AnyRequest) => void;
  statusDirection: StatusDirection;
}

const tabsOption1 = ['All', 'Sent', 'Started', 'Payment Submitted', 'Complete', 'CertifID', 'Cancelled'];
const tabsOption2 = ['All', 'Sent', 'Started', 'Pending', 'Completed', 'Complete', 'CertifID', 'Cancelled'];

function StatusIcon({ status }: { status: string }) {
  const color = status === 'CERTIFID' || status === 'COMPLETE' || status === 'COMPLETED' ? '#00A566'
    : status === 'CANCELLED' ? '#555'
    : status === 'HIGH RISK' ? '#E74C3C'
    : '#102754';

  // Clock icon for PENDING and PAYMENT SUBMITTED
  if (status === 'PENDING' || status === 'PAYMENT SUBMITTED') {
    return (
      <svg className="w-[20px] h-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
        <path d={svgPaths.p62ebf00} fill="#102754" />
        <path clipRule="evenodd" d={svgPaths.p2d751f00} fill="#102754" fillRule="evenodd" />
      </svg>
    );
  }

  // Checkmark for COMPLETE, COMPLETED
  if (status === 'COMPLETE' || status === 'COMPLETED') {
    return (
      <svg className="w-[20px] h-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
        <path clipRule="evenodd" d={svgPaths.p16f36b00} fill={color} fillRule="evenodd" />
        <path d={svgPaths.p2b428d00} fill={color} />
      </svg>
    );
  }

  return (
    <svg className="w-[20px] h-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
      <path clipRule="evenodd" d={svgPaths.p16f36b00} fill={color} fillRule="evenodd" />
      {status === 'CERTIFID' && <path d={svgPaths.p2b428d00} fill={color} />}
      {(status === 'SENT' || status === 'STARTED') && (
        <path d={svgPaths.p62ebf00} fill={color} />
      )}
      {(status === 'SENT' || status === 'STARTED') && (
        <path clipRule="evenodd" d={svgPaths.p2d751f00} fill={color} fillRule="evenodd" />
      )}
    </svg>
  );
}

export function RequestsPage({ onSelectRequest, statusDirection }: RequestsPageProps) {
  const [activeTab, setActiveTab] = useState('All');
  const allRequests = getAllRequests();
  const tabs = statusDirection === 1 ? tabsOption1 : tabsOption2;

  const filteredRequests = allRequests.filter(req => {
    if (activeTab === 'All') return true;
    const tableStatus = getAnyRequestTableStatus(req, statusDirection);
    if (activeTab === 'Sent') return tableStatus === 'SENT';
    if (activeTab === 'Started') return tableStatus === 'STARTED';
    // Option 1 tabs
    if (activeTab === 'Payment Submitted') return tableStatus === 'PAYMENT SUBMITTED';
    // Option 2 tabs
    if (activeTab === 'Pending') return tableStatus === 'PENDING';
    if (activeTab === 'Completed') return tableStatus === 'COMPLETED';
    if (activeTab === 'Complete') return tableStatus === 'COMPLETE';
    if (activeTab === 'CertifID') return tableStatus === 'CERTIFID';
    return true;
  });

  return (
    <div className="flex-1 flex flex-col min-w-0 bg-[#f5f5f5]">
      {/* Page Header */}
      <div className="bg-[#283c65] flex items-center justify-between px-[24px] pt-[24px] pb-[64px] shrink-0">
        <div className="flex flex-col gap-[12px]">
          <h1 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-[48px] leading-[1.5]">Requests</h1>
          <div className="bg-[#156fbe] h-px w-[20px]" />
        </div>
        <div className="flex gap-[16px] items-center">
          {/* Select Sender dropdown */}
          <div className="bg-white flex items-center h-[48px] px-[12px] rounded-[6px] border border-[#ddd] w-[160px]">
            <select className="flex-1 font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px] outline-none bg-transparent appearance-none cursor-pointer">
              <option>Select Sender</option>
              <option>Laura Adams</option>
              <option>Ramon Susa</option>
            </select>
          </div>
          {/* Search */}
          <div className="bg-white flex items-center gap-[16px] h-[48px] px-[11px] py-[7px] rounded-[6px] w-[240px] border border-[#ddd] relative">
            <div className="shrink-0 size-[16px] relative">
              <div className="absolute inset-[8.33%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                  <path clipRule="evenodd" d={searchSvg.p21c7d400} fill="#A0A2A4" fillRule="evenodd" />
                </svg>
              </div>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px] outline-none bg-transparent placeholder:text-[#a0a2a4]"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto relative z-10 -mt-[40px]">
        <div className="px-[24px] pb-[24px]">
          <div className="bg-white rounded-[6px] overflow-hidden shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)]">
            {/* Tabs */}
            <div className="flex items-center border-b border-[#ddd]">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-[20px] py-[16px] font-['Oxygen:Regular',sans-serif] text-[16px] relative whitespace-nowrap ${
                    activeTab === tab ? "font-['Oxygen:Bold',sans-serif] text-[#156fbe]" : 'text-[#555]'
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
            <div className="min-w-[1000px]">
            <div className="flex bg-[#f3f3f3]">
              <div className="w-[210px] shrink-0 p-[16px]"><p className="font-['Oxygen:Bold',sans-serif] text-[#156fbe] text-[16px] tracking-[1px] uppercase">Status</p></div>
              <div className="w-[155px] shrink-0 p-[16px]"><p className="font-['Oxygen:Bold',sans-serif] text-[#156fbe] text-[16px] tracking-[1px] uppercase">Type</p></div>
              <div className="w-[120px] shrink-0 p-[16px]"><p className="font-['Oxygen:Bold',sans-serif] text-[#156fbe] text-[16px] tracking-[1px] uppercase">Sent</p></div>
              <div className="w-[120px] shrink-0 p-[16px]"><p className="font-['Oxygen:Bold',sans-serif] text-[#156fbe] text-[16px] tracking-[1px] uppercase">File #</p></div>
              <div className="w-[240px] shrink-0 p-[16px]"><p className="font-['Oxygen:Bold',sans-serif] text-[#156fbe] text-[16px] tracking-[1px] uppercase">Recipient</p></div>
              <div className="flex-1 min-w-[100px] shrink-0 p-[16px]"><p className="font-['Oxygen:Bold',sans-serif] text-[#156fbe] text-[16px] tracking-[1px] uppercase">Sender</p></div>
              <div className="flex items-center gap-[16px] px-[16px] shrink-0">
                <button className="w-[24px] h-[24px] bg-white rounded-[6px] border border-[#ddd] flex items-center justify-center">
                  <svg className="w-[6px] h-[11px]" fill="none" viewBox="0 0 6 10.6667">
                    <path d={svgPaths.p3f3d4080} fill="#555" />
                  </svg>
                </button>
                <p className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[14px]">1/1</p>
                <button className="w-[24px] h-[24px] bg-white rounded-[6px] border border-[#ddd] flex items-center justify-center">
                  <svg className="w-[6px] h-[11px]" fill="none" viewBox="0 0 6 10.6667">
                    <path d={svgPaths.p1930a500} fill="#555" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Rows */}
            {filteredRequests.map(req => {
              const tableStatus = getAnyRequestTableStatus(req, statusDirection);
              const typeLabel = getAnyRequestType(req);
              const subtype = getAnyRequestSubtype(req);
              const isGeneric = isGenericRequest(req);
              const recipientAddress = isGeneric ? (req.address || '') : req.propertyAddress;
              const recipientRole = isGeneric ? req.clientRole : 'Buyer';

              return (
                <div
                  key={req.id}
                  onClick={() => onSelectRequest(req)}
                  className="flex h-[80px] border-b border-[#eee] cursor-pointer hover:bg-[#f9fbfd] transition-colors"
                >
                  {/* Status */}
                  <div className="w-[210px] shrink-0 flex flex-col justify-center px-[16px]">
                    <div className="flex items-center gap-[6px]">
                      <StatusIcon status={tableStatus} />
                      <p className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[14px] tracking-[1px] uppercase whitespace-nowrap">{tableStatus}</p>
                    </div>
                    {(tableStatus === 'PENDING' || tableStatus === 'PAYMENT SUBMITTED') && isPaymentRequest(req) && req.estimatedArrival && (
                      <p className="font-['Oxygen:Regular',sans-serif] text-[#a0a2a4] text-[14px] mt-[2px]">
                        {`Estimated arrival ${req.estimatedArrival}`.replace(/January|February|March|April|May|June|July|August|September|October|November|December/g, m => m.slice(0, 3))}
                      </p>
                    )}
                  </div>
                  {/* Type */}
                  <div className="w-[155px] shrink-0 flex flex-col justify-center px-[16px]">
                    <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px] whitespace-nowrap">{typeLabel}</p>
                    <p className="font-['Oxygen:Regular',sans-serif] text-[#a0a2a4] text-[14px] whitespace-nowrap">
                      {subtype}
                    </p>
                  </div>
                  {/* Sent */}
                  <div className="w-[120px] shrink-0 flex items-center px-[16px]">
                    <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]">{req.sentDate}</p>
                  </div>
                  {/* File # */}
                  <div className="w-[120px] shrink-0 flex items-center px-[16px]">
                    <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]">{req.fileNumber}</p>
                  </div>
                  {/* Recipient */}
                  <div className="w-[240px] shrink-0 flex flex-col justify-center px-[16px] overflow-hidden">
                    <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px] truncate">{req.clientName}</p>
                    <p className="font-['Oxygen:Regular',sans-serif] text-[#a0a2a4] text-[14px] truncate">{recipientRole} | {recipientAddress}</p>
                  </div>
                  {/* Sender */}
                  <div className="flex-1 min-w-[100px] shrink-0 flex flex-col justify-center px-[16px] overflow-hidden">
                    <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px] truncate">{req.sentBy}</p>
                    <p className="font-['Oxygen:Regular',sans-serif] text-[#a0a2a4] text-[14px] truncate">Pinpoint Title</p>
                  </div>
                  {/* Actions */}
                  <div className="shrink-0 flex items-center px-[16px]">
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
  );
}