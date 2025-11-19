// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-zinc-300 bg-zinc-100">
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Fishotgun
        </Link>

        <Link
          href="/login"
          className="rounded-full border border-zinc-300 bg-zinc-100 px-4 py-1 text-xs font-medium shadow-sm hover:bg-zinc-200 transition-colors"
        >
          login
        </Link>
      </div>
    </header>
  );
}
