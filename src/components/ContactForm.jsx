/**
 * @component ContactForm
 * @description EmailJS contact form with premium modular fields and spring animations.
 */
import { Send, CheckCircle, AlertCircle, Loader, User, Mail, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContactForm } from '../hooks/useContactForm';
import InputField from './InputField';

export default function ContactForm() {
  const { formData, status, error, handleChange, handleSubmit, resetStatus } = useContactForm();

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      noValidate 
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
      }}
      className="lg:col-span-3 glass-card rounded-2xl p-8 flex flex-col gap-6 shadow-2xl border border-glass-border relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

      <AnimatePresence mode="wait">
        {error && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
            <div className="flex items-center gap-2 text-xs text-red-400 border border-red-500/20 bg-red-500/5 px-4 py-3 rounded-xl">
              <AlertCircle size={14} className="shrink-0" />
              <span>{error}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="contact-name" label="Name *" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required icon={User} />
        <InputField id="contact-email" label="Email *" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required icon={Mail} />
      </div>

      <InputField id="contact-message" label="Message *" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project or idea..." required icon={MessageSquare} isTextArea />

      <motion.button 
        type="submit" 
        disabled={status === 'loading' || status === 'success'} 
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        className={`relative overflow-hidden flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 disabled:cursor-not-allowed shadow-xl cursor-pointer ${
          status === 'success' ? 'bg-green-600 hover:bg-green-500 text-white shadow-green-500/10' : status === 'error' ? 'bg-red-600 hover:bg-red-500 text-white shadow-red-500/10' : 'bg-gradient-to-r from-primary to-accent hover:from-primary-light hover:to-accent-light text-white shadow-primary/10 hover:shadow-primary/25'
        }`}
      >
        {status === 'loading' && <><Loader size={16} className="animate-spin" /><span>Sending...</span></>}
        {status === 'success' && <><CheckCircle size={16} className="animate-pulse" /><span>Message Sent!</span></>}
        {status === 'error' && <><AlertCircle size={16} /><span>Failed — try again</span></>}
        {status === 'idle' && (
          <>
            <motion.div variants={{ hover: { x: 4, y: -2, rotate: -15, scale: 1.1 } }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
              <Send size={15} />
            </motion.div>
            <span>Send Message</span>
          </>
        )}
      </motion.button>

      {status === 'error' && (
        <button type="button" onClick={resetStatus} className="text-xs text-text-muted hover:text-text text-center transition-colors cursor-pointer mt-1">
          Reset form
        </button>
      )}
    </motion.form>
  );
}
