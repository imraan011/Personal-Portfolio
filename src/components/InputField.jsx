/**
 * @component InputField
 * @description Styled form input field with left-aligned icons, focus glows, and custom hover transitions.
 */
import PropTypes from 'prop-types';

export default function InputField({
  id,
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  required = false,
  icon: Icon,
  isTextArea = false,
  rows = 5,
}) {
  const WRAPPER_CLS = 'relative group flex flex-col w-full';
  const INPUT_CLS = `w-full pl-11 pr-4 py-3 rounded-xl text-sm text-text bg-surface-2/40 border border-surface-3/70
    placeholder-text-muted/40 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/10
    transition-all duration-300 hover:border-surface-3`;
  const ICON_CLS = `absolute left-4 text-text-muted/50 group-focus-within:text-primary transition-colors duration-300 pointer-events-none`;

  return (
    <div className={WRAPPER_CLS}>
      <label htmlFor={id} className="text-[10px] font-bold uppercase tracking-wider text-text-muted/65 mb-1.5 ml-1">
        {label}
      </label>
      <div className="relative">
        {isTextArea ? (
          <>
            <Icon size={16} className={`${ICON_CLS} top-4 self-start`} />
            <textarea
              id={id}
              name={name}
              rows={rows}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              required={required}
              className={`${INPUT_CLS} pl-11 pt-3.5 resize-none`}
            />
          </>
        ) : (
          <>
            <Icon size={16} className={`${ICON_CLS} top-3.5`} />
            <input
              id={id}
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              required={required}
              className={INPUT_CLS}
            />
          </>
        )}
      </div>
    </div>
  );
}

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  icon: PropTypes.elementType.isRequired,
  isTextArea: PropTypes.bool,
  rows: PropTypes.number,
};
