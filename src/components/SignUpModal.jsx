import React, { useState } from 'react';

export default function SignUpModal({ open, onClose }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    console.log({ email, username });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden">
        <div className="absolute -inset-0.5 bg-gradient-to-tr from-cyan-500 via-blue-500 to-fuchsia-500 blur opacity-50" aria-hidden="true" />
        <div className="relative bg-white dark:bg-neutral-900 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Create your account</h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Start crafting your holographic profile in minutes.</p>

          <form onSubmit={submit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm mb-1 text-neutral-700 dark:text-neutral-300">Email</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 outline-none focus:ring-2 ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm mb-1 text-neutral-700 dark:text-neutral-300">Username</label>
              <input required value={username} onChange={e => setUsername(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 outline-none focus:ring-2 ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm mb-1 text-neutral-700 dark:text-neutral-300">Password</label>
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 outline-none focus:ring-2 ring-blue-500" />
            </div>

            <button type="submit" className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition">
              Create account
            </button>
          </form>

          <button onClick={onClose} className="mt-4 w-full text-sm text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300">Maybe later</button>
        </div>
      </div>
    </div>
  );
}
