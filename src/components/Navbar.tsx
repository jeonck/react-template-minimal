import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'react-feather';

interface MenuItem {
  title: string;
  to: string;
}

interface MenuItems {
  [key: string]: MenuItem[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: MenuItems = {
    'Technology': [
      { title: 'IoT (Sensors/Edge)', to: '/technology/iot' },
      { title: 'Servers & Cloud', to: '/technology/servers-cloud' },
      { title: 'Connectivity (5G)', to: '/technology/connectivity' },
    ],
    'Data & Analysis': [
      { title: 'Big Data & Analytics', to: '/data/big-data' },
      { title: 'AI & Machine Learning', to: '/data/ai-ml' },
      { title: 'Data Integration', to: '/data/integration' },
    ],
    'Modeling & Simulation': [
      { title: '3D/2D Modeling', to: '/modeling/3d-2d' },
      { title: 'Real-time Synchronization', to: '/modeling/synchronization' },
    ],
    'Software & Systems': [
      { title: 'System Architecture', to: '/software/architecture' },
      { title: 'Application Development', to: '/software/applications' },
    ],
    'Interfaces': [
        { title: 'UI/UX Design', to: '/interfaces/ui-ux' },
        { title: 'AR/VR/MR', to: '/interfaces/ar-vr-mr' },
    ],
  };

  return (
    <nav className="fixed w-full z-30 top-0 bg-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              <span className="text-indigo-500">D</span>igital<span className="text-indigo-500">T</span>win <span className="text-indigo-500">H</span>ub
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/">Home</NavLink>
            {Object.keys(menuItems).map((title) => (
              <Dropdown key={title} title={title} items={menuItems[title]} />
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-gray-200 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            {Object.keys(menuItems).map((title) => (
              <div key={title} className="py-1">
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">{title}</h3>
                {menuItems[title].map((item) => (
                  <MobileNavLink key={item.title} to={item.to} onClick={() => setIsOpen(false)}>{item.title}</MobileNavLink>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="px-3 py-2 rounded-md text-sm lg:text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
  >
    {children}
  </Link>
);

const Dropdown = ({ title, items }: { title: string; items: MenuItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (node.current && !node.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={node} className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-2 rounded-md text-sm lg:text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300 flex items-center"
      >
        {title}
        <ChevronDown size={16} className={`ml-1 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 py-1">
          {items.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
