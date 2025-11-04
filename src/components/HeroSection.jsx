import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSection({ onOpenSignUp }) {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/90 dark:from-neutral-900/70 dark:via-neutral-900/40 dark:to-neutral-900/90 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-neutral-900 dark:text-white">
            Build a holographic link-in-bio
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500"> like guns.lol</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300">
            Create a stunning, streamlined profile with badges, buttons and an iridescent vibe. Launch in minutes.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenSignUp}
              className="px-6 py-3 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition shadow-lg shadow-blue-500/10"
            >
              Get started — it’s free
            </button>
            <a href="#dashboard" className="px-6 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition">
              View dashboard preview
            </a>
          </div>
          <div className="mt-10 text-sm text-neutral-500 dark:text-neutral-400">
            No coding needed • Custom domains • Verified badge • Analytics
          </div>
        </div>
      </div>
    </section>
  );
}
