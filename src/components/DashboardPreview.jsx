import React, { useMemo, useState } from 'react';
import { Link as LinkIcon, Palette, BadgeCheck, Plus, GripVertical, Settings } from 'lucide-react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const SWATCHES = [
  { name: 'Holo', from: 'from-cyan-500', via: 'via-blue-500', to: 'to-fuchsia-500' },
  { name: 'Aurora', from: 'from-emerald-400', via: 'via-teal-500', to: 'to-cyan-500' },
  { name: 'Sunset', from: 'from-rose-500', via: 'via-amber-500', to: 'to-pink-500' },
  { name: 'Noir', from: 'from-neutral-800', via: 'via-neutral-700', to: 'to-neutral-600' },
];

export default function DashboardPreview() {
  const [username, setUsername] = useState('holo');
  const [bio, setBio] = useState('Futuristic designer • Verified human');
  const [theme, setTheme] = useState(SWATCHES[0]);
  const [rounded, setRounded] = useState(true);
  const [links, setLinks] = useState([
    { title: 'Website', url: 'https://example.com' },
    { title: 'Twitter', url: 'https://x.com/yourname' },
  ]);

  const gradient = useMemo(() => `bg-gradient-to-tr ${theme.from} ${theme.via} ${theme.to}`,[theme]);

  const addLink = () => setLinks(l => [...l, { title: 'New link', url: 'https://'}]);

  return (
    <section id="dashboard" className="relative py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8 text-neutral-700 dark:text-neutral-300">
          <Settings size={18} />
          <span className="uppercase tracking-wider text-xs">Dashboard preview</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Controls */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Palette className="text-neutral-500" size={18} />
              <h3 className="font-semibold text-neutral-900 dark:text-white">Customize your profile</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Username</label>
                <input value={username} onChange={e => setUsername(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 outline-none focus:ring-2 ring-blue-500" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Bio</label>
                <textarea value={bio} onChange={e => setBio(e.target.value)} rows={3} className="w-full px-3 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 outline-none focus:ring-2 ring-blue-500" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Theme</label>
                <div className="grid grid-cols-4 gap-3">
                  {SWATCHES.map((s) => (
                    <button key={s.name} onClick={() => setTheme(s)} className={classNames('h-12 rounded-xl border border-neutral-200 dark:border-neutral-700', `bg-gradient-to-tr ${s.from} ${s.via} ${s.to}`, theme.name === s.name ? 'ring-2 ring-offset-2 ring-blue-500 dark:ring-offset-neutral-900' : '')} aria-label={s.name} />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input id="rounded" type="checkbox" checked={rounded} onChange={e => setRounded(e.target.checked)} className="h-4 w-4 text-blue-600 rounded border-neutral-300" />
                <label htmlFor="rounded" className="text-sm text-neutral-700 dark:text-neutral-300">Rounded buttons</label>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Links</label>
                  <button onClick={addLink} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition text-sm">
                    <Plus size={16} /> Add link
                  </button>
                </div>
                <div className="space-y-2">
                  {links.map((link, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-2">
                      <GripVertical className="text-neutral-400" size={18} />
                      <input value={link.title} onChange={e => setLinks(prev => prev.map((l, i) => i === idx ? { ...l, title: e.target.value } : l))} className="flex-1 px-2 py-1 rounded bg-transparent text-neutral-900 dark:text-neutral-100 outline-none" placeholder="Title" />
                      <input value={link.url} onChange={e => setLinks(prev => prev.map((l, i) => i === idx ? { ...l, url: e.target.value } : l))} className="flex-[2] px-2 py-1 rounded bg-transparent text-neutral-900 dark:text-neutral-100 outline-none" placeholder="https://" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 flex items-center justify-center">
            <div className="w-full max-w-sm">
              <div className={classNames('relative p-6 shadow-2xl', rounded ? 'rounded-3xl' : 'rounded-xl', gradient)}>
                <div className="absolute inset-0 rounded-[inherit] bg-white/10 backdrop-blur-sm border border-white/20" />
                <div className="relative text-white">
                  <div className="flex items-center gap-3">
                    <div className="h-14 w-14 rounded-2xl bg-white/20 flex items-center justify-center ring-1 ring-white/30">
                      <BadgeCheck className="text-cyan-200" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-lg font-semibold">
                        @{username}
                        <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-white/20 ring-1 ring-white/30">Verified</span>
                      </div>
                      <p className="text-white/80 text-sm">{bio}</p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {links.map((l, i) => (
                      <a key={i} href={l.url} className={classNames('group flex items-center gap-3 w-full px-4 py-3 bg-white/15 ring-1 ring-white/25 hover:bg-white/20 transition', rounded ? 'rounded-2xl' : 'rounded-lg')}>
                        <span className="h-8 w-8 rounded-lg bg-white/20 flex items-center justify-center">
                          <LinkIcon size={18} />
                        </span>
                        <div className="flex-1">
                          <div className="font-medium leading-none">{l.title}</div>
                          <div className="text-xs text-white/70 truncate">{l.url}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center text-xs text-neutral-500">Preview of your public profile</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
