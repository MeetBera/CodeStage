const Navbar = () => {
  return (
    <nav className="bg-cyan-600 fixed top-0 w-full text-white px-6 py-4 shadow-md z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <img
            className="w-16 absolute left-16"
            src="/Untitled5_20250410194628.png"
            alt="CodeStage Logo"
          />
          <h1 className="text-3xl font-extrabold tracking-wide">CodeStage</h1>
        </div>
        <div className="space-x-4 flex">
          {[
            { label: 'Home', href: '/' },
            { label: 'Contests', href: '/contest' },
            { label: 'Problems', href: '/problems' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Login', href: '/login' },
            { label: 'Interviews', href: '/interview/:roomId' },
            { label: 'Performance', href: '#' },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="relative group text-cyan-200 px-2 hover:text-white transition-all duration-300 ease-in-out"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              <span className="block group-hover:scale-105 transition-transform duration-300"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
