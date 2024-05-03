"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteHeaderLinks } from "@/config/nav-links";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background text-text-default">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 hover:text-primary">
            INC
          </Link>
        </div>
        <div className={`lg:hidden ${mobileMenuOpen ? "hidden" : "flex"}`}>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-grey-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Homepage Link</span>
            <Menu size={24} />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {siteHeaderLinks.map((link) => (
            <Link
              key={link.link}
              href={link.link}
              className="-m-1.5 p-1.5 hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto text-text-default bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-1.5 p-1.5 text-primary"
            >
              <span className="sr-only">Homepage Link</span>
              INC
            </Link>
            <button
              type="button"
              className="block -m-2.5 rounded-md p-2.5 text-grey-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X size={24} />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {siteHeaderLinks.map((link) => (
                  <Link
                    key={link.link}
                    href={link.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
