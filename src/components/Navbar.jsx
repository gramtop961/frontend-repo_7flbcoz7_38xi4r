import React from 'react';
import { Rocket, User } from 'lucide-react';

export default function Navbar({ onOpenSignUp }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200/60 dark:border-neutral-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <span className="p-2 rounded-lg bg-gradient-to-tr from-cyan-500 via-blue-500 to-fuchsia-500 text-white shadow">
            <Rocket size={18} />
          </span>
          <span className="tracking-tight">holo.bio</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition">Features</a>
          <a href="#dashboard" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition">Dashboard</a>
          <button
            onClick={onOpenSignUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition"
          >
            <User size={18} />
            Sign up
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={onOpenSignUp}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition"
          >
            <User size={18} />
            Join
          </button>
        </div>
      </nav>
    </header>
  );
}
