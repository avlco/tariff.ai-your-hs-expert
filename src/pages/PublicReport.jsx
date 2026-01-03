import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { AlertTriangle, Calendar, Globe, Box, CheckCircle, ShieldCheck, Download, Printer } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { format } from 'date-fns';
import { useLanguage } from '@/components/LanguageContext';

export default function PublicReport() {
    const { t } = useLanguage();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [report, setReport] = useState(null);
    const [meta, setMeta] = useState(null);

    useEffect(() => {
        const fetchReport = async () => {
            try {
                const urlParams = new URLSearchParams(window.location.search);
                const token = urlParams.get('token');

                if (!token) {
                    setError('Missing access token');
                    setLoading(false);
                    return;
                }

                const response = await base44.functions.invoke('getPublicSharedReportData', { token });
                
                if (response.data.error) {
                    setError(response.data.error);
                } else {
                    setReport(response.data.data);
                    setMeta(response.data.meta);
                }
            } catch (err) {
                setError('Failed to load report. It may have expired or does not exist.');
            } finally {
                setLoading(false);
            }
        };

        fetchReport();
    }, []);

    const handlePrint = () => {
        window.print();
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#F4F6F8] dark:bg-[#0B2C36] flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#42C0B9]"></div>
                <p className="mt-4 text-[#114B5F] dark:text-[#A8C5E0] font-medium">{t('publicReport.loading')}</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-[#F4F6F8] dark:bg-[#0B2C36] flex items-center justify-center p-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-md w-full bg-white dark:bg-[#1B2A49] rounded-2xl shadow-xl p-8 text-center"
                >
                    <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertTriangle className="w-8 h-8 text-red-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#114B5F] dark:text-white mb-2">{t('publicReport.accessDenied')}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{error}</p>
                    <Button 
                        onClick={() => window.location.href = '/'}
                        className="bg-[#114B5F] hover:bg-[#0d3a4a] text-white w-full"
                    >
                        {t('publicReport.returnHome')}
                    </Button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F4F6F8] dark:bg-[#0B2C36] py-12 px-4 sm:px-6 lg:px-8 print:bg-white print:p-0">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-8 print:hidden">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#42C0B9] to-[#114B5F] rounded-xl flex items-center justify-center text-white font-bold">
                            T
                        </div>
                        <span className="text-xl font-bold text-[#114B5F] dark:text-white">tariff.ai</span>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" onClick={handlePrint} className="gap-2">
                            <Printer className="w-4 h-4" /> {t('publicReport.print')}
                        </Button>
                        <Button className="bg-[#F9C42F] hover:bg-[#e0b02a] text-[#114B5F] font-bold gap-2">
                            <Download className="w-4 h-4" /> {t('publicReport.exportPdf')}
                        </Button>
                    </div>
                </div>

                {/* Report Card */}
                <div className="bg-white dark:bg-[#1B2A49] rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-[#36454F] print:shadow-none print:border-none">
                    {/* Status Bar */}
                    <div className="bg-[#114B5F] text-white p-6 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-[#42C0B9]" />
                            <span className="font-medium text-sm tracking-wide uppercase opacity-90">{t('publicReport.verifiedReport')}</span>
                        </div>
                        <div className="text-sm opacity-75">
                            ID: {report?.report_id || 'N/A'}
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        {/* Main Info Grid */}
                        <div className="grid md:grid-cols-2 gap-12 mb-12">
                            <div>
                                <h1 className="text-3xl font-bold text-[#114B5F] dark:text-white mb-2">
                                    {report?.product_description || report?.product_name || 'Product Analysis'}
                                </h1>
                                <p className="text-gray-500 dark:text-[#A8C5E0] flex items-center gap-2 mb-6">
                                    <Calendar className="w-4 h-4" />
                                    {t('publicReport.generated')} {format(new Date(meta?.created_at || new Date()), 'PPP')}
                                </p>

                                <div className="space-y-4">
                                    <div className="p-4 rounded-xl bg-[#F4F6F8] dark:bg-[#0B2C36] border border-gray-200 dark:border-[#36454F]">
                                        <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{t('publicReport.hsCode')}</label>
                                        <div className="text-3xl font-mono font-bold text-[#114B5F] dark:text-[#42C0B9] mt-1">
                                            {report?.hs_code || '---'}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#E3F2FD] dark:bg-[#1B2A49] flex items-center justify-center flex-shrink-0">
                                        <Globe className="w-5 h-5 text-[#114B5F] dark:text-[#A8C5E0]" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('publicReport.tradeRoute')}</label>
                                        <div className="text-lg font-semibold text-[#114B5F] dark:text-white">
                                            {report?.origin_country || 'Unknown'} 
                                            <span className="mx-2 text-gray-400">→</span> 
                                            {report?.destination_country || 'Unknown'}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#E3F2FD] dark:bg-[#1B2A49] flex items-center justify-center flex-shrink-0">
                                        <Box className="w-5 h-5 text-[#114B5F] dark:text-[#A8C5E0]" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('publicReport.category')}</label>
                                        <div className="text-lg font-semibold text-[#114B5F] dark:text-white">
                                            {report?.category || 'General Merchandise'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-100 dark:border-[#36454F] my-8" />

                        {/* Detailed Data */}
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 space-y-6">
                                <h3 className="text-xl font-bold text-[#114B5F] dark:text-white mb-4">{t('publicReport.analysisDetails')}</h3>
                                <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                                    <p>{report?.explanation || report?.analysis_text || 'No detailed explanation available for this report.'}</p>
                                </div>
                                
                                {report?.duties_and_taxes && (
                                    <div className="mt-8">
                                        <h4 className="font-semibold text-[#114B5F] dark:text-white mb-4">{t('publicReport.dutiesAndTaxes')}</h4>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                            {Object.entries(report.duties_and_taxes).map(([key, value]) => (
                                                <div key={key} className="bg-[#F4F6F8] dark:bg-[#0B2C36] p-4 rounded-xl">
                                                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase">{key.replace(/_/g, ' ')}</div>
                                                    <div className="font-bold text-[#114B5F] dark:text-white mt-1">{value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="bg-[#F9FAFB] dark:bg-[#0B2C36]/50 p-6 rounded-2xl h-fit">
                                <h3 className="text-lg font-bold text-[#114B5F] dark:text-white mb-4">{t('publicReport.complianceCheck')}</h3>
                                <ul className="space-y-4">
                                    {[
                                        { label: t('publicReport.importLicense'), status: report?.requires_license ? t('publicReport.required') : t('publicReport.notRequired'), check: !report?.requires_license },
                                        { label: t('publicReport.prohibited'), status: report?.is_prohibited ? t('publicReport.yes') : t('publicReport.no'), check: !report?.is_prohibited },
                                        { label: t('publicReport.restricted'), status: report?.is_restricted ? t('publicReport.yes') : t('publicReport.no'), check: !report?.is_restricted },
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600 dark:text-gray-300">{item.label}</span>
                                            <span className={`text-sm font-medium flex items-center gap-1 ${item.check ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'}`}>
                                                {item.status}
                                                {item.check ? <CheckCircle className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    {/* Footer */}
                    <div className="bg-[#F4F6F8] dark:bg-[#0B2C36] p-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-[#36454F]">
                        <p>{t('publicReport.validUntil')} {format(new Date(meta?.expires_at || new Date()), 'PPP')}</p>
                        <p className="mt-1">Generated by tariff.ai • AI-Powered Trade Intelligence</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
