import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, User, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { base44 } from '@/api/base44Client';
import { useLanguage } from './LanguageContext';

export default function DataRequestForm() {
  const { isRTL } = useLanguage();
  const [step, setStep] = useState(1); // 1: form, 2: verification, 3: success
  const [requestId, setRequestId] = useState('');
  const [formData, setFormData] = useState({
    request_type: 'access',
    requester_email: '',
    requester_name: '',
    request_details: '',
    verification_code: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await base44.functions.invoke('submitDataRequest', {
        request_type: formData.request_type,
        requester_email: formData.requester_email,
        requester_name: formData.requester_name,
        request_details: formData.request_details
      });

      if (response.data.success) {
        setRequestId(response.data.request_id);
        setStep(2);
      }
    } catch (err) {
      setError(err.response?.data?.error || (isRTL ? 'שגיאה בשליחת הבקשה' : 'Failed to submit request'));
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await base44.functions.invoke('verifyDataRequest', {
        request_id: requestId,
        verification_code: formData.verification_code
      });

      if (response.data.success) {
        setStep(3);
      }
    } catch (err) {
      setError(err.response?.data?.error || (isRTL ? 'קוד אימות שגוי' : 'Invalid verification code'));
    } finally {
      setLoading(false);
    }
  };

  const requestTypes = {
    access: isRTL ? 'גישה לנתונים האישיים שלי' : 'Access my personal data',
    rectification: isRTL ? 'תיקון נתונים שגויים' : 'Correct inaccurate data',
    erasure: isRTL ? 'מחיקת הנתונים שלי (הזכות להישכח)' : 'Delete my data (Right to be Forgotten)',
    restriction: isRTL ? 'הגבלת עיבוד נתונים' : 'Restrict data processing',
    portability: isRTL ? 'ניוד נתונים' : 'Data portability',
    objection: isRTL ? 'התנגדות לעיבוד נתונים' : 'Object to data processing'
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Step 1: Request Form */}
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 sm:p-8 rounded-2xl"
        >
          <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="p-3 rounded-xl bg-[#42C0B9]/10">
              <Shield className="w-6 h-6 text-[#42C0B9]" />
            </div>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <h3 className="text-xl font-bold text-[#114B5F] dark:text-white">
                {isRTL ? 'בקשת נתונים אישיים' : 'Personal Data Request'}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {isRTL ? 'מימוש זכויותיך לפי GDPR ו-LGPD' : 'Exercise your GDPR & LGPD rights'}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                {isRTL ? 'סוג הבקשה' : 'Request Type'}
              </label>
              <select
                value={formData.request_type}
                onChange={(e) => setFormData({ ...formData, request_type: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-[#114B5F] dark:text-white focus:ring-2 focus:ring-[#42C0B9]"
                required
              >
                {Object.entries(requestTypes).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                {isRTL ? 'שם מלא' : 'Full Name'}
              </label>
              <div className="relative">
                <User className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-3' : 'left-3'} w-5 h-5 text-gray-400`} />
                <Input
                  type="text"
                  value={formData.requester_name}
                  onChange={(e) => setFormData({ ...formData, requester_name: e.target.value })}
                  placeholder={isRTL ? 'הזן את שמך המלא' : 'Enter your full name'}
                  className={`${isRTL ? 'pr-10 text-right' : 'pl-10'}`}
                  required
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                {isRTL ? 'כתובת דוא"ל' : 'Email Address'}
              </label>
              <div className="relative">
                <Mail className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-3' : 'left-3'} w-5 h-5 text-gray-400`} />
                <Input
                  type="email"
                  value={formData.requester_email}
                  onChange={(e) => setFormData({ ...formData, requester_email: e.target.value })}
                  placeholder={isRTL ? 'your@email.com' : 'your@email.com'}
                  className={`${isRTL ? 'pr-10 text-right' : 'pl-10'}`}
                  required
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                {isRTL ? 'פרטים נוספים (אופציונלי)' : 'Additional Details (Optional)'}
              </label>
              <Textarea
                value={formData.request_details}
                onChange={(e) => setFormData({ ...formData, request_details: e.target.value })}
                placeholder={isRTL ? 'הוסף פרטים נוספים על הבקשה שלך...' : 'Add any additional details about your request...'}
                rows={4}
                className={isRTL ? 'text-right' : ''}
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400">
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#42C0B9] to-[#114B5F] hover:from-[#3ab0a9] hover:to-[#0d3a4a] text-white py-6"
            >
              {loading ? (isRTL ? 'שולח...' : 'Submitting...') : (isRTL ? 'שלח בקשה' : 'Submit Request')}
            </Button>
          </form>
        </motion.div>
      )}

      {/* Step 2: Verification */}
      {step === 2 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 sm:p-8 rounded-2xl text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#42C0B9]/10 flex items-center justify-center">
            <Mail className="w-8 h-8 text-[#42C0B9]" />
          </div>
          
          <h3 className="text-xl font-bold mb-2 text-[#114B5F] dark:text-white">
            {isRTL ? 'בדוק את הדוא"ל שלך' : 'Check Your Email'}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {isRTL 
              ? 'שלחנו קוד אימות לכתובת הדוא"ל שלך. הזן אותו למטה כדי לאמת את הבקשה שלך.'
              : 'We sent a verification code to your email. Enter it below to verify your request.'}
          </p>

          <form onSubmit={handleVerify} className="space-y-4">
            <Input
              type="text"
              value={formData.verification_code}
              onChange={(e) => setFormData({ ...formData, verification_code: e.target.value })}
              placeholder={isRTL ? 'הזן קוד אימות' : 'Enter verification code'}
              className="text-center text-lg tracking-widest uppercase"
              maxLength={6}
              required
            />

            {error && (
              <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400">
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#42C0B9] to-[#114B5F] hover:from-[#3ab0a9] hover:to-[#0d3a4a] text-white py-6"
            >
              {loading ? (isRTL ? 'מאמת...' : 'Verifying...') : (isRTL ? 'אמת' : 'Verify')}
            </Button>
          </form>
        </motion.div>
      )}

      {/* Step 3: Success */}
      {step === 3 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-6 sm:p-8 rounded-2xl text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          
          <h3 className="text-xl font-bold mb-2 text-[#114B5F] dark:text-white">
            {isRTL ? 'הבקשה אומתה בהצלחה!' : 'Request Verified Successfully!'}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {isRTL 
              ? 'נטפל בבקשה שלך תוך 30 יום. תקבל אימייל עם עדכונים.'
              : 'We will process your request within 30 days. You will receive email updates.'}
          </p>
        </motion.div>
      )}
    </div>
  );
}