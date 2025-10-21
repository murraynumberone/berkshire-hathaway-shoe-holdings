"use client";

import { useEffect, useState } from "react";

const navigation = [
  { name: "Brands", href: "#brands" },
  { name: "Retail", href: "#retail" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Check initial scroll position on mount
    setIsScrolled(window.scrollY > 0);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="bg-primary absolute inset-0" />
      </div>

      <div className="from-primary pointer-events-none absolute inset-0 bg-gradient-to-b to-transparent" />

      <nav
        aria-label="Global"
        className={`relative mx-auto max-w-7xl transition-all duration-300 ${
          isScrolled ? "p-2 lg:p-6" : "p-6 lg:p-10"
        }`}
      >
        <div className="flex items-center justify-center lg:justify-between">
          <a href="/" aria-label="Berkshire Hathaway Shoe Holdings home">
            <img
              src="https://bhsh.widen.net/content/qrkmvotxt2/svg/BHSH-logo-white-3.svg"
              alt="Berkshire Hathaway Shoe Holdings"
              className={`w-auto transition-all duration-300 ${
                isScrolled ? "h-8 lg:h-12" : "h-10 md:h-20"
              }`}
            />
          </a>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-4 font-extrabold tracking-wider text-white uppercase text-shadow-lg"
              >
                <span className="bg-accent size-5" aria-hidden="true" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
