import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export default function BlogSection({ theme }) {
  const { t, isRTL } = useLanguage();

  const articlesData = t('blog.articles') || [];
  const articleImages = [
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
  ];

  const articles = articlesData.map((article, index) => ({
    ...article,
    date: 'Jan 15, 2024',
    image: articleImages[index] || ''
  }));

  const categoryColors = {
    'Industry News': 'bg-blue-500/20 text-blue-400',
    'חדשות תעשייה': 'bg-blue-500/20 text-blue-400',
    'Guide': 'bg-green-500/20 text-green-400',
    'מדריך': 'bg-green-500/20 text-green-400',
    'Technology': 'bg-purple-500/20 text-purple-400',
    'טכנולוגיה': 'bg-purple-500/20 text-purple-400',
  };

  return (
    <section id="blog" className={`py-24 ${
      theme === 'dark' ? 'bg-[#0F172A]' : 'bg-[#F1F5F9]'
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
            {t('blog.badge')}
          </span>
          <h2 className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
          }`}>
            {t('blog.title')}
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
          }`}>
            {t('blog.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group rounded-3xl overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-[#1E293B]/50 border border-white/10 hover:border-[#E5A840]/30'
                  : 'bg-white border border-slate-200 hover:shadow-xl'
              } transition-all duration-500`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${
                  theme === 'dark' ? 'bg-black/40' : 'bg-black/20'
                } group-hover:bg-transparent transition-colors duration-300`} />
                <Badge className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} ${categoryColors[article.category] || 'bg-gray-500/20'}`}>
                  {article.category}
                </Badge>
              </div>

              <div className="p-6">
                <div className={`flex items-center gap-2 text-sm mb-3 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
                }`}>
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
                <h3 className={`text-xl font-bold mb-2 group-hover:text-[#E5A840] transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
                }`}>
                  {article.title}
                </h3>
                <p className={`mb-4 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                }`}>
                  {article.desc}
                </p>
                <a 
                  href="#" 
                  className={`inline-flex items-center gap-2 font-medium ${
                    theme === 'dark' ? 'text-[#E5A840]' : 'text-[#C28E36]'
                  } hover:gap-3 transition-all`}
                >
                  {t('common.readMore')}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline"
            className={`px-8 rounded-full ${
              theme === 'dark' 
                ? 'border-white/20 text-white hover:bg-white/10'
                : 'border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {t('common.viewAll')}
            <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
