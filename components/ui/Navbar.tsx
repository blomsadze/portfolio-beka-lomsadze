import Link from "next/link";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <nav className="flex gap-6 py-4 px-8 bg-fwhite shadow-md">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            scroll={false}
            className="lg:hover:opacity-90 lg:transition-opacity"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export { Navbar };
