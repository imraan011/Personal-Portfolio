import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function CertificationCard({ title, issuer, period, credentialId, credentialUrl }) {
  return (
    <motion.div
      variants={cardVariants}
      className="premium-card rounded-[4px] p-6 flex flex-col justify-between h-full"
    >
      <div className="flex flex-col justify-between h-full flex-grow">
        <div>
          <div className="flex items-center justify-between gap-3 mb-6">
            <span className="text-xs font-mono text-text-muted border border-surface-3 px-2.5 py-1 rounded-[3px]">
              {period}
            </span>
          </div>

          <h3 className="font-display font-medium text-lg text-text leading-snug mb-1">
            {title}
          </h3>
          <p className="text-primary text-sm font-medium mb-4">{issuer}</p>

          {credentialId && (
            <p className="text-[11px] text-text-muted/60 mb-6 font-mono">
              ID: <span className="text-text/75">{credentialId}</span>
            </p>
          )}
        </div>

        {credentialUrl && (
          <div className="pt-4 border-t border-surface-3 mt-auto">
            <a
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-mono text-text-muted hover:text-primary hover-underline transition-colors duration-200"
              aria-label={`Verify ${title}`}
            >
              Verify Credential
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

CertificationCard.propTypes = {
  title: PropTypes.string.isRequired,
  issuer: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  credentialId: PropTypes.string,
  credentialUrl: PropTypes.string,
};
