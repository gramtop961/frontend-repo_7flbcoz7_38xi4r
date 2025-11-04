import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DashboardPreview from './components/DashboardPreview';
import SignUpModal from './components/SignUpModal';

function App() {
  const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Navbar onOpenSignUp={() => setOpenSignUp(true)} />
      <main>
        <HeroSection onOpenSignUp={() => setOpenSignUp(true)} />
        <DashboardPreview />
        <section id="features" className="py-20 bg-neutral-50/60 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Verified Badge', desc: 'Get a glowing blue check to stand out and build trust.' },
              { title: 'Custom Themes', desc: 'Iridescent gradients, rounded buttons, and more.' },
              { title: 'Analytics', desc: 'Track clicks and engagement across all your links.' },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h4 className="font-semibold mb-2">{f.title}</h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="py-10 text-center text-sm text-neutral-500 border-t border-neutral-200 dark:border-neutral-800">
        © {new Date().getFullYear()} holo.bio — Not affiliated with guns.lol or fakecrime.bio
      </footer>

      <SignUpModal open={openSignUp} onClose={() => setOpenSignUp(false)} />
    </div>
  );
}

export default App;
