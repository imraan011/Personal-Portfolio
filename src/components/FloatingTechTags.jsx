/**
 * @component FloatingTechTags
 * @description Floating tech badges displayed on the right column of the Hero section.
 */

const TECH_TAGS = [
  { text: '⚛ React', className: 'translate-x-0 tag-float-1' },
  { text: '🟢 Node.js', className: '-translate-x-12 tag-float-2' },
  { text: '⚡ Vite', className: 'translate-x-8 tag-float-3' },
  { text: '🎨 Tailwind', className: '-translate-x-4 tag-float-4' },
  { text: '🧠 DSA', className: 'translate-x-12 tag-float-5' }
];

export default function FloatingTechTags() {
  return (
    <div 
      className="absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 select-none z-20 pointer-events-none"
      aria-hidden="true"
    >
      {TECH_TAGS.map((tag, i) => (
        <div
          key={i}
          className={`pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border bg-surface-2/40
                     border-text-muted/10 backdrop-blur-md text-text-muted hover:border-primary/50 hover:text-primary
                     hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-default select-none ${tag.className}`}
        >
          {tag.text}
        </div>
      ))}
    </div>
  );
}
