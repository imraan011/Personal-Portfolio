import { useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
const INITIAL_FORM = { name: '', email: '', message: '' };

export function useContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    setStatus('loading');
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { name, email, message }, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setFormData(INITIAL_FORM);
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch(() => {
        setStatus('error');
      });
  };

  const resetStatus = () => setStatus('idle');

  return {
    formData,
    status,
    error,
    handleChange,
    handleSubmit,
    resetStatus,
  };
}
