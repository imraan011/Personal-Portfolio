/**
 * @component ThemeSwitcher
 * @description Theme selector widget featuring Light/Dark toggle and color palette picker dropdown.
 */
import { useState, useEffect } from 'react';
import { Sun, Moon, Palette } from 'lucide-react';

const ACCENTS = [
  { id: 'midnight-indigo', name: 'Midnight Indigo', color: 'bg-indigo-500' },
  { id: 'forest-mint',      name: 'Forest Mint',      color: 'bg-emerald-500' },
  { id: 'cyber-orange',     name: 'Cyber Orange',     color: 'bg-orange-500' },
  { id: 'rose-gold',        name: 'Rose Gold',        color: 'bg-rose-500' }
];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [accent, setAccent] = useState(() => {
    return localStorage.getItem('accent') || 'midnight-indigo';
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-accent', accent);
  }, [theme, accent]);

  const handleThemeToggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
  };

  const handleAccentChange = (id) => {
    setAccent(id);
    localStorage.setItem('accent', id);
    setOpen(false);
  };

  return (
    <div className="flex items-center gap-1">
      {/* Light/Dark Toggle */}
      <button
        onClick={handleThemeToggle}
        className="p-2 rounded-xl text-text-muted hover:text-text hover:bg-text-muted/10 transition-all duration-200 cursor-pointer"
        aria-label="Toggle light/dark mode"
      >
        {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
      </button>

      {/* Color Palette Switcher */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-xl text-text-muted hover:text-text hover:bg-text-muted/10 transition-all duration-200 cursor-pointer"
          aria-label="Change color palette"
        >
          <Palette size={15} />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-48 rounded-xl border border-surface-3 bg-surface-2 p-1.5 shadow-2xl z-50 backdrop-blur-md">
            {ACCENTS.map((acc) => (
              <button
                key={acc.id}
                onClick={() => handleAccentChange(acc.id)}
                className={`flex items-center gap-2.5 w-full px-3 py-2 text-left rounded-lg text-xs font-semibold
                           transition-colors cursor-pointer ${
                  accent === acc.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-text-muted hover:text-text hover:bg-text-muted/5'
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${acc.color}`} />
                {acc.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
