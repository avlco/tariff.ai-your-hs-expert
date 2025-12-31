import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from '../LanguageContext';
import { base44 } from '@/api/base44Client';

export default function ContactSection() {
  const { t, isRTL } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await base44.functions.invoke('submitContactForm', {
        full_name: formState.name,
        email: formState.email,
        company: formState.company,
        subject: formState.subject,
        message: formState.message
      });

      if (response.data.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', company: '', subject: '', message: '' });
        setError('');
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (err) {
      setError(isRTL ? 'שגיאה בשליחת הטופס' : 'Form submission failed');
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-[#f8fafa] to-white dark:from-[#0d1f35] dark:to-[#0a1628] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#42C0B9]/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#42C0B9]/10 border border-[#42C0B9]/20 mb-6"
          >
            <MessageSquare className="w-4 h-4 text-[#42C0B9]" />
            <span className="text-sm font-medium text-[#42C0B9]">{t.contact.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-[#114B5F] dark:text-white mb-6"
          >
            {t.contact.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-[#114B5F]/70 dark:text-gray-400"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={isRTL ? 'lg:order-2' : ''}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder={t.contact.form.name}
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="py-6 rounded-xl border-[#114B5F]/20 dark:border-white/20 bg-white dark:bg-[#1a2d42]"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={t.contact.form.email}
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="py-6 rounded-xl border-[#114B5F]/20 dark:border-white/20 bg-white dark:bg-[#1a2d42]"
                  />
                </div>
              </div>
              <Input
                placeholder={t.contact.form.company}
                value={formState.company}
                onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                className="py-6 rounded-xl border-[#114B5F]/20 dark:border-white/20 bg-white dark:bg-[#1a2d42]"
              />
              <select
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                required
                className="py-6 px-4 rounded-xl border-[#114B5F]/20 dark:border-white/20 bg-white dark:bg-[#1a2d42] text-[#114B5F] dark:text-white focus:ring-2 focus:ring-[#42C0B9] focus:border-transparent"
              >
                <option value="">{t.contact.form.subject || 'Select Subject'}</option>
                <option value="general">General Inquiry</option>
                <option value="enterprise">Enterprise Solution</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="other">Other</option>
              </select>
              <Textarea
                placeholder={t.contact.form.message}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                rows={5}
                className="rounded-xl border-[#114B5F]/20 dark:border-white/20 bg-white dark:bg-[#1a2d42]"
              />
              {error && (
                <p className="text-sm text-red-500">{error}</p>
              )}
              <Button
                type="submit"
                size="lg"
                disabled={submitted}
                className="w-full py-6 rounded-xl bg-gradient-to-r from-[#42C0B9] to-[#114B5F] hover:from-[#3ab0a9] hover:to-[#0d3a4a] text-white font-medium shadow-lg shadow-[#42C0B9]/25"
              >
                {submitted ? '✓ Sent!' : (
                  <>
                    {t.contact.form.submit}
                    <Send className={`w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`space-y-6 ${isRTL ? 'lg:order-1' : ''}`}
          >
            {/* Email Card */}
            <motion.a
              href={`mailto:${t.contact.info.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, x: isRTL ? -5 : 5 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white dark:bg-[#1a2d42] border border-[#114B5F]/10 dark:border-white/10 shadow-lg shadow-black/5 cursor-pointer hover:border-[#42C0B9]/30 transition-all"
            >
              <div className="p-4 rounded-xl bg-gradient-to-br from-[#42C0B9]/20 to-[#114B5F]/10">
                <Mail className="w-6 h-6 text-[#42C0B9]" />
              </div>
              <div>
                <div className="text-sm text-[#114B5F]/60 dark:text-gray-400">Email</div>
                <div className="text-lg font-medium text-[#114B5F] dark:text-white">{t.contact.info.email}</div>
              </div>
            </motion.a>

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[#42C0B9]/10 to-[#114B5F]/10 border border-[#114B5F]/10 dark:border-white/10"
            >
              <h4 className="text-xl font-bold text-[#114B5F] dark:text-white mb-4">
                {isRTL ? 'זמני תגובה' : 'Response Time'}
              </h4>
              <p className="text-[#114B5F]/70 dark:text-gray-400 mb-4">
                {isRTL 
                  ? 'אנו מחזירים תשובה תוך 24 שעות בימי עסקים. לפניות דחופות, נא לציין זאת בהודעה.' 
                  : 'We respond within 24 hours on business days. For urgent inquiries, please mention it in your message.'}
              </p>
              <div className="flex items-center gap-2 text-sm text-[#42C0B9]">
                <div className="w-2 h-2 rounded-full bg-[#42C0B9] animate-pulse" />
                {isRTL ? 'זמין עכשיו' : 'Available now'}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}