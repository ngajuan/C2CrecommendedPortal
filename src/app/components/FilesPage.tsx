import { useState } from 'react';
import { fileRecords, FileRecord, PaymentRequest, paymentRequests, AnyRequest, genericRequests } from './mockData';
import svgPaths from '@/imports/svg-qfkwezagl1';
import searchSvg from '@/imports/svg-8lob6ng13t';

interface FilesPageProps {
  onSelectRequest: (req: AnyRequest) => void;
}

function StatusBadge({ status, color }: { status: string; color: string }) {
  return (
    <div className="flex items-center gap-[4px]">
      <svg className="w-[16px] h-[16px] shrink-0" fill="none" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="7" stroke={color} />
        {(status === 'CERTIFID' || status === 'COMPLETED') && (
          <path d="M5 8L7 10L11 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        )}
        {(status === 'SENT' || status === 'OPENED') && (
          <circle cx="8" cy="8" r="3" fill={color} />
        )}
        {(status === 'PENDING' || status === 'PROCESSING' || status === 'DEBITING' || status === 'CREDITING') && (
          <>
            <circle cx="8" cy="8" r="3" fill={color} />
          </>
        )}
      </svg>
      <span className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[14px] tracking-[1px] uppercase">{status}</span>
    </div>
  );
}

function FileDetailView({ file, onBack, onSelectRequest }: { file: FileRecord; onBack: () => void; onSelectRequest: (req: AnyRequest) => void }) {
  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* Page Header */}
      <div className="bg-[#283c65] flex flex-col gap-[8px] px-[24px] py-[24px] shrink-0">
        <button onClick={onBack} className="flex items-center gap-[4px] cursor-pointer self-start">
          <svg className="w-[6px] h-[12px]" fill="none" viewBox="0 0 6.75 12">
            <path d="M6.56558 0.180798C6.78912 0.399948 6.80944 0.742881 6.62654 0.984536L6.56558 1.05377L1.51994 6L6.56558 10.9462C6.78912 11.1654 6.80944 11.5083 6.62654 11.75L6.56558 11.8192C6.34203 12.0384 5.99222 12.0583 5.74572 11.879L5.6751 11.8192L0.184424 6.43649C-0.0391203 6.21734 -0.0594426 5.8744 0.123458 5.63275L0.184424 5.56351L5.6751 0.180798C5.921 -0.0602661 6.31968 -0.0602661 6.56558 0.180798Z" fill="#B7DEFF" />
          </svg>
          <span className="font-['Oxygen:Bold',sans-serif] text-[#b7deff] text-[12px] uppercase leading-[1.5]">Back</span>
        </button>
        <h1 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-[48px] leading-[1.2]">
          File #{file.fileNumber}
        </h1>
        <p className="font-['Oxygen:Regular',sans-serif] text-[#b7deff] text-[16px] leading-[1.5]">
          {file.propertyAddress}
        </p>
        <div className="bg-[#156fbe] h-px w-[20px]" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto bg-white">
        <div className="px-[24px] py-[24px]">
          <div className="bg-white rounded-[6px] overflow-hidden shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)]">
            {/* Column Headers */}
            <div className="overflow-x-auto scrollbar-hide">
            <div className="min-w-[800px]">
            <div className="flex bg-[#f3f3f3]">
              <div className="w-[160px] shrink-0 p-[16px]"><p className="font-['Oxygen:Bold',sans-serif] text-[#156fbe] text-[16px] tracking-[1px] uppercase">Type</p></div>
              <div className="w-[160px] shrink-0 p-[16px]"><p className="font-['Oxygen:Bold',sans-serif] text-[#156fbe] text-[16px] tracking-[1px] uppercase">Status</p></div>
              <div className="w-[180px] shrink-0 p-[16px]"><p className="font-['Oxygen:Bold',sans-serif] text-[#156fbe] text-[16px] tracking-[1px] uppercase">Client</p></div>
              <div className="w-[160px] shrink-0 p-[16px]"><p className="font-['Oxygen:Bold',sans-serif] text-[#156fbe] text-[16px] tracking-[1px] uppercase">Initiated by</p></div>
              <div className="flex-1 p-[16px]"><p className="font-['Oxygen:Bold',sans-serif] text-[#156fbe] text-[16px] tracking-[1px] uppercase">Last updated</p></div>
              <div className="w-[48px] shrink-0" />
            </div>

            {/* Rows */}
            {file.items.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  if (item.linkedRequestId) {
                    const req = paymentRequests.find(r => r.id === item.linkedRequestId);
                    if (req) onSelectRequest(req);
                  }
                }}
                className={`flex h-[80px] border-b border-[#eee] ${item.linkedRequestId ? 'cursor-pointer hover:bg-[#f9fbfd]' : ''} transition-colors`}
              >
                {/* Type */}
                <div className="w-[160px] shrink-0 flex flex-col justify-center px-[16px]">
                  <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]">{item.type}</p>
                  {item.purpose && (
                    <p className="font-['Oxygen:Regular',sans-serif] text-[#a0a2a4] text-[14px]">{item.purpose}</p>
                  )}
                </div>
                {/* Status */}
                <div className="w-[160px] shrink-0 flex flex-col justify-center px-[16px]">
                  <StatusBadge status={item.status} color={item.statusColor} />
                  {item.status === 'PENDING' && (
                    <p className="font-['Oxygen:Regular',sans-serif] text-[#a0a2a4] text-[14px] mt-[2px]">Est arrival Jan 16</p>
                  )}
                </div>
                {/* Client */}
                <div className="w-[180px] shrink-0 flex flex-col justify-center px-[16px] overflow-hidden">
                  <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px] truncate">{item.client}</p>
                  <p className="font-['Oxygen:Regular',sans-serif] text-[#a0a2a4] text-[14px]">{item.clientRole}</p>
                </div>
                {/* Initiated by */}
                <div className="w-[160px] shrink-0 flex items-center px-[16px]">
                  <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]">{item.initiatedBy}</p>
                </div>
                {/* Last updated */}
                <div className="flex-1 flex items-center px-[16px]">
                  <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]">{item.lastUpdated}</p>
                </div>
                {/* Actions */}
                <div className="w-[48px] shrink-0 flex items-center justify-center">
                  <button onClick={(e) => e.stopPropagation()} className="bg-white h-[24px] px-[8px] rounded-[6px] border border-[#ddd] flex items-center justify-center">
                    <svg className="w-[16px] h-[4px]" fill="none" viewBox="0 0 15.5625 3.9375">
                      <path d={svgPaths.p34e4c00} fill="#555" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FilesPage({ onSelectRequest }: FilesPageProps) {
  const [selectedFile, setSelectedFile] = useState<FileRecord | null>(null);

  if (selectedFile) {
    return (
      <FileDetailView
        file={selectedFile}
        onBack={() => setSelectedFile(null)}
        onSelectRequest={onSelectRequest}
      />
    );
  }

  return (
    <div className="flex-1 flex flex-col min-w-0 bg-[#f5f5f5]">
      {/* Page Header */}
      <div className="bg-[#283c65] flex items-center justify-between px-[24px] pt-[24px] pb-[64px] shrink-0">
        <div className="flex flex-col gap-[12px]">
          <h1 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-[48px] leading-[1.5]">Files</h1>
          <div className="bg-[#156fbe] h-px w-[20px]" />
        </div>
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
            placeholder="Search files..."
            className="flex-1 font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px] outline-none bg-transparent placeholder:text-[#a0a2a4]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto relative z-10 -mt-[40px]">
        <div className="px-[24px] pb-[24px]">
          <div className="bg-white rounded-[6px] overflow-hidden shadow-[0px_3px_10.25px_0px_rgba(16,39,84,0.1)]">
            {/* Column Headers */}
            <div className="overflow-x-auto scrollbar-hide">
            <div className="min-w-[850px]">
            <div className="flex bg-[#f3f3f3]">
              <div className="w-[200px] shrink-0 p-[16px]"><p className="font-['Oxygen:Bold',sans-serif] text-[#156fbe] text-[16px] tracking-[1px] uppercase">File Number</p></div>
              <div className="w-[240px] shrink-0 p-[16px]"><p className="font-['Oxygen:Bold',sans-serif] text-[#156fbe] text-[16px] tracking-[1px] uppercase">Property</p></div>
              <div className="w-[200px] shrink-0 p-[16px]"><p className="font-['Oxygen:Bold',sans-serif] text-[#156fbe] text-[16px] tracking-[1px] uppercase">Initiated by</p></div>
              <div className="flex-1 p-[16px]"><p className="font-['Oxygen:Bold',sans-serif] text-[#156fbe] text-[16px] tracking-[1px] uppercase">Date Started</p></div>
              <div className="flex items-center gap-[16px] px-[16px] shrink-0">
                <button className="w-[24px] h-[24px] bg-white rounded-[6px] border border-[#ddd] flex items-center justify-center">
                  <svg className="w-[6px] h-[11px]" fill="none" viewBox="0 0 6 10.6667">
                    <path d={svgPaths.p3f3d4080} fill="#555" />
                  </svg>
                </button>
                <p className="font-['Oxygen:Bold',sans-serif] text-[#555] text-[14px]">1/{Math.ceil(fileRecords.length / 15)}</p>
                <button className="w-[24px] h-[24px] bg-white rounded-[6px] border border-[#ddd] flex items-center justify-center">
                  <svg className="w-[6px] h-[11px]" fill="none" viewBox="0 0 6 10.6667">
                    <path d={svgPaths.p1930a500} fill="#555" />
                  </svg>
                </button>
              </div>
            </div>

            {/* File Rows */}
            {fileRecords.map(file => (
              <div
                key={file.id}
                onClick={() => setSelectedFile(file)}
                className="flex h-[64px] border-b border-[#eee] cursor-pointer hover:bg-[#f9fbfd] transition-colors"
              >
                <div className="w-[200px] shrink-0 flex items-center px-[16px]">
                  <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]">{file.fileNumber}</p>
                </div>
                <div className="w-[240px] shrink-0 flex items-center px-[16px] overflow-hidden">
                  <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px] truncate">{file.propertyAddress || ''}</p>
                </div>
                <div className="w-[200px] shrink-0 flex flex-col justify-center px-[16px]">
                  <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]">{file.initiatedBy}</p>
                  <p className="font-['Oxygen:Regular',sans-serif] text-[#a0a2a4] text-[14px]">CertifID</p>
                </div>
                <div className="flex-1 flex items-center px-[16px]">
                  <p className="font-['Oxygen:Regular',sans-serif] text-[#555] text-[16px]">{file.dateStarted}</p>
                </div>
                <div className="w-[48px] shrink-0" />
              </div>
            ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}