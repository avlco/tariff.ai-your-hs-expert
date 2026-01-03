import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, CheckCircle2, ShieldAlert } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '@/components/LanguageContext';

export default function DataRequestForm({ theme }) {
  const { t, isRTL } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    request_type: '',
    requester_name: '',
    requester_email: '',
    request_details: ''
  });

  const requestTypes = [
    { value: 'access', label: t('dataRequest.form.types.access') },
    { value: 'rectification', label: t('dataRequest.form.types.rectification') },
    { value: 'erasure', label: t('dataRequest.form.types.erasure') },
    { value: 'restriction', label: t('dataRequest.form.types.restriction') },
    { value: 'portability', label: t('dataRequest.form.types.portability') },
    { value: 'objection', label: t('dataRequest.form.types.objection') }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await base44.entities.DataRequest.create({
        ...formData,
        request_status: 'submitted',
        verification_status: 'pending'
      });
      setSuccess(true);
      toast.success(t('dataRequest.messages.success'));
    } catch (error) {
      console.error('Error submitting request:', error);
      toast.error(t('dataRequest.messages.error'));
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className={`rounded-2xl p-8 text-center border ${
        theme === 'dark' ? 'bg-[#1E293B]/50 border-white/10' : 'bg-green-50 border-green-200'
      }`}>
        <div className="flex justify-center mb-4">
          <CheckCircle2 className={`w-12 h-12 ${theme === 'dark' ? 'text-[#42C0B9]' : 'text-green-600'}`} />
        </div>
        <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {t('dataRequest.success.title')}
        </h3>
        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          {t('dataRequest.success.desc')}
        </p>
        <Button 
          variant="outline" 
          className="mt-6"
          onClick={() => {
            setSuccess(false);
            setFormData({ request_type: '', requester_name: '', requester_email: '', request_details: '' });
          }}
        >
          {t('dataRequest.form.submitAnother')}
        </Button>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl p-6 sm:p-8 border ${
      theme === 'dark' ? 'bg-[#1E293B]/50 border-white/10' : 'bg-white border-slate-200 shadow-sm'
    }`}>
      <div className="flex items-start gap-4 mb-6">
        <div className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-[#E5A840]/20' : 'bg-[#E5A840]/10'}`}>
          <ShieldAlert className="w-6 h-6 text-[#E5A840]" />
        </div>
        <div>
          <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
            {t('dataRequest.title')}
          </h2>
          <p className={`mt-1 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
            {t('dataRequest.subtitle')}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="space-y-2">
          <label className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-slate-700'}`}>
            {t('dataRequest.form.requestType')}
          </label>
          <Select 
            value={formData.request_type} 
            onValueChange={(value) => setFormData({...formData, request_type: value})}
            required
          >
            <SelectTrigger className={theme === 'dark' ? 'bg-[#0F172A] border-white/20 text-white' : ''}>
              <SelectValue placeholder={t('dataRequest.form.requestTypePlaceholder')} />
            </SelectTrigger>
            <SelectContent>
              {requestTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-slate-700'}`}>
              {t('dataRequest.form.fullName')}
            </label>
            <Input
              required
              placeholder={t('dataRequest.form.fullNamePlaceholder')}
              value={formData.requester_name}
              onChange={(e) => setFormData({...formData, requester_name: e.target.value})}
              className={theme === 'dark' ? 'bg-[#0F172A] border-white/20 text-white' : ''}
            />
          </div>

          <div className="space-y-2">
            <label className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-slate-700'}`}>
              {t('dataRequest.form.email')}
            </label>
            <Input
              required
              type="email"
              placeholder={t('dataRequest.form.emailPlaceholder')}
              value={formData.requester_email}
              onChange={(e) => setFormData({...formData, requester_email: e.target.value})}
              className={theme === 'dark' ? 'bg-[#0F172A] border-white/20 text-white' : ''}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-slate-700'}`}>
            {t('dataRequest.form.details')}
          </label>
          <Textarea
            placeholder={t('dataRequest.form.detailsPlaceholder')}
            value={formData.request_details}
            onChange={(e) => setFormData({...formData, request_details: e.target.value})}
            className={`min-h-[100px] ${theme === 'dark' ? 'bg-[#0F172A] border-white/20 text-white' : ''}`}
          />
        </div>

        <Button 
          type="submit" 
          disabled={loading}
          className="w-full sm:w-auto bg-[#E5A840] hover:bg-[#C28E36] text-[#0F172A] font-semibold"
        >
          {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
          {t('dataRequest.form.submit')}
        </Button>
      </form>
    </div>
  );
}
