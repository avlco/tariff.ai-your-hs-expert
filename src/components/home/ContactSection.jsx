import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Clock, CheckCircle, Send } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export default function ContactSection({ theme }) {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className={`py-24 ${
      theme === 'dark' ? 'bg-[#0F172A]' : 'bg-white'
    }`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-semibold tracking-wider uppercase ${
            theme === 'dark' ? 'text-[#E5A840]' : 'text-[#C28E36]'
          }`}>
            {t('contact.badge')}
          </span>
          <h2 className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
          }`}>
            {t('contact.title')}
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
          }`}>
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={isRTL ? 'lg:order-2' : ''}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
                  }`}>
                    {t('contact.form.name')}
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`h-12 rounded-xl ${
                      theme === 'dark' 
                        ? 'bg-[#1E293B] border-white/20 text-white placeholder:text-gray-500'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
                  }`}>
                    {t('contact.form.email')}
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`h-12 rounded-xl ${
                      theme === 'dark' 
                        ? 'bg-[#1E293B] border-white/20 text-white placeholder:text-gray-500'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
                  }`}>
                    {t('contact.form.company')}
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`h-12 rounded-xl ${
                      theme === 'dark' 
                        ? 'bg-[#1E293B] border-white/20 text-white placeholder:text-gray-500'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
                  }`}>
                    {t('contact.form.subject')}
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`h-12 rounded-xl ${
                      theme === 'dark' 
                        ? 'bg-[#1E293B] border-white/20 text-white placeholder:text-gray-500'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
                }`}>
                  {t('contact.form.message')}
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`rounded-xl resize-none ${
                    theme === 'dark' 
                      ? 'bg-[#1E293B] border-white/20 text-white placeholder:text-gray-500'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                />
              </div>

              <Button 
                type="submit"
                className="w-full h-14 rounded-full bg-[#E5A840] hover:bg-[#C28E36] text-[#0F172A] font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#E5A840]/25"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    {t('contact.form.success')}
                  </>
                ) : (
                  <>
                    <Send className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {t('contact.form.send')}
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`space-y-8 ${isRTL ? 'lg:order-1' : ''}`}
          >
            <div className={`rounded-3xl p-8 ${
              theme === 'dark' 
                ? 'bg-[#1E293B]/50 border border-white/10'
                : 'bg-slate-50 border border-slate-200'
            }`}>
              <div className={`inline-flex p-4 rounded-2xl mb-6 ${
                theme === 'dark' ? 'bg-[#E5A840]/20' : 'bg-[#E5A840]/10'
              }`}>
                <Mail className="w-7 h-7 text-[#E5A840]" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
              }`}>
                {t('contact.info.email')}
              </h3>
              <a 
                href="mailto:hello@tariff.ai" 
                className={`text-lg hover:text-[#E5A840] transition-colors ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                }`}
              >
                hello@tariff.ai
              </a>
            </div>

            <div className={`rounded-3xl p-8 ${
              theme === 'dark' 
                ? 'bg-[#1E293B]/50 border border-white/10'
                : 'bg-slate-50 border border-slate-200'
            }`}>
              <div className={`inline-flex p-4 rounded-2xl mb-6 ${
                theme === 'dark' ? 'bg-[#E5A840]/20' : 'bg-[#E5A840]/10'
              }`}>
                <Clock className="w-7 h-7 text-[#E5A840]" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
              }`}>
                {t('contact.info.responseTime')}
              </h3>
              <p className={`${
                theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
              }`}>
                {t('contact.info.responseTimeDesc')}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping" />
              </div>
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}>
                {t('contact.info.status')}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
