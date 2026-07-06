"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/Button";

const navItems = [
  { label: "Inicio", href: "#" },
  { label: "Serviços", href: "#servicos" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Nossos Trabalhos", href: "#nossos-trabalhos" },
  { label: "Vantagens", href: "#vantagens" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black-secondary/10 bg-white/95 backdrop-blur">
      <nav className="relative mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="LimaMix"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-black-secondary transition-colors hover:text-orange"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Button
          href="#whatsapp"
          className="hidden gap-2 md:inline-flex"
        >
          <Image
            src="/whatsapp-logo.svg"
            alt="WhatsApp Logo"
            width={18}
            height={18}
            className="size-5 object-contain"
          />
          WhatsApp
        </Button>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-black-secondary/10 text-black transition-colors hover:border-orange hover:text-orange md:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {isMenuOpen && (
          <div className="absolute right-4 top-full mt-3 w-64 rounded-md border border-black-secondary/10 bg-white p-3 shadow-lg md:hidden">
            <div className="flex flex-col items-end gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="w-full rounded-md px-3 py-2 text-right text-sm font-semibold text-black-secondary transition-colors hover:bg-white-secondary hover:text-orange"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <Button
                href="#whatsapp"
                className="mt-2 w-full gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image
                  src="/whatsapp-logo.svg"
                  alt="WhatsApp Logo"
                  width={18}
                  height={18}
                  className="size-5 object-contain"
                />
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
