const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6%] py-[22px] bg-paper/85 backdrop-blur-md border-b border-forest/[0.08]">
      <div className="flex items-center gap-2.5 font-bold text-[1.15rem] font-display">
        <span className="w-3 h-3 rounded-full bg-green" />
        Velazquez Lawn Service
      </div>
      <ul className="hidden md:flex gap-9">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-ink no-underline text-[0.92rem] font-medium hover:text-green transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="tel:+12813549580"
        className="bg-forest text-white px-[22px] py-2.5 rounded-full font-semibold text-[0.88rem] whitespace-nowrap hover:-translate-y-0.5 transition-transform"
      >
        (281) 354-9580
      </a>
    </nav>
  );
}
