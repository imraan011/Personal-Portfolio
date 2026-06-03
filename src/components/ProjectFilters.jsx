/**
 * @component ProjectFilters
 * @description Tab filter list for selecting project categories.
 */
import PropTypes from 'prop-types';

export default function ProjectFilters({ categories, activeFilter, onFilterChange }) {
  return (
    <div
      className="flex flex-wrap gap-2 mb-10"
      role="tablist"
      aria-label="Filter projects by category"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={activeFilter === cat}
          onClick={() => onFilterChange(cat)}
          className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider
                      transition-all duration-200 cursor-pointer ${
            activeFilter === cat
              ? 'bg-primary text-white shadow-md shadow-primary/20'
              : 'border border-surface-3 text-text-muted hover:border-primary/50 hover:text-text'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

ProjectFilters.propTypes = {
  categories:     PropTypes.arrayOf(PropTypes.string).isRequired,
  activeFilter:   PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
