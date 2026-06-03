/**
 * @component CertificationCard
 * @description Renders a single certification card with details and external verification link.
 */
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function CertificationCard({ title, issuer, period, credentialId, credentialUrl }) {
  return (
    <motion.div
      variants={cardVariants}
      className="glass-card rounded-2xl p-6 flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20" aria-hidden="true">
            <Award size={20} />
          </span>
          <span className="text-xs font-semibold text-text-muted border border-surface-3 px-2.5 py-1 rounded-lg">
            {period}
          </span>
        </div>

        <h3 className="font-display font-bold text-lg text-text leading-snug mb-1">
          {title}
        </h3>
        <p className="text-primary text-sm font-medium mb-3">{issuer}</p>

        {credentialId && (
          <p className="text-xs text-text-muted mb-4 font-mono">
            ID: <span className="text-text/75">{credentialId}</span>
          </p>
        )}
      </div>

      {credentialUrl && (
        <div className="pt-2 border-t border-surface-3/50 mt-auto">
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-text-muted hover:text-primary transition-colors duration-200"
            aria-label={`Verify ${title}`}
          >
            Verify Credential
            <ExternalLink size={12} />
          </a>
        </div>
      )}
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
