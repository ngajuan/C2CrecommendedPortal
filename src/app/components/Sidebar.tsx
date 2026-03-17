import svgPaths from "@/imports/svg-uqkle3eu8r";

export function Sidebar() {
  const menuItems = [
    { name: 'Files', icon: 'files' },
    { name: 'Requests', icon: 'requests' },
    { name: 'Payoffs', icon: 'payoffs' },
    { name: 'Businesses', icon: 'businesses' },
    { name: 'Identities', icon: 'identities' },
    { name: 'Payments', icon: 'payments' },
  ];

  return (
    <div className="w-[167px] bg-[#1e3a5f] flex flex-col">
      {/* Logo */}
      <div className="p-6 flex items-center gap-2">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="#156fbe" strokeWidth="2" fill="none"/>
          <path d="M8 12h8M12 8v8" stroke="#156fbe" strokeWidth="2"/>
        </svg>
        <span className="text-white text-[18px] font-medium">CERTIFID</span>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col mt-4">
        {menuItems.map((item, index) => (
          <div
            key={item.name}
            className={`flex items-center gap-3 px-6 py-3 text-[#8fa5bf] hover:bg-[#2a4a6f] cursor-pointer transition-colors ${
              index === 1 ? 'bg-[#2a4a6f] text-white border-l-2 border-[#156fbe]' : ''
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
              <rect width="18" height="18" x="3" y="3" stroke="currentColor" strokeWidth="1.5" rx="2"/>
            </svg>
            <span className="text-[14px]">{item.name}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}
