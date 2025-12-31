import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar } from 'lucide-react';

export default function BlogSection({ theme, language }) {
  const isRTL = language === 'he';

  const articles = [
    {
      category: language === 'en' ? 'Industry News' : 'חדשות תעשייה',
      date: 'Jan 15, 2024',
      title: language === 'en' 
        ? '2024 Tariff Changes: What Importers Need to Know'
        : 'שינויי מכס 2024: מה יבואנים צריכים לדעת',
      description: language === 'en'
        ? 'A comprehensive guide to the latest tariff updates affecting key industries...'
        : 'מדריך מקיף לעדכוני המכס האחרונים המשפיעים על תעשיות מפתח...',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    },
    {
      category: language === 'en' ? 'Guide' : 'מדריך',
      date: 'Jan 10, 2024',
      title: language === 'en' 
        ? 'How to Leverage Free Trade Agreements'
        : 'איך לנצל הסכמי סחר חופשי',
      description: language === 'en'
        ? 'Maximize your savings by understanding and utilizing FTA benefits...'
        : 'מקסמו את החיסכון על ידי הבנה וניצול הטבות FTA...',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
    },
    {
      category: language === 'en' ? 'Technology' : 'טכנולוגיה',
      date: 'Jan 5, 2024',
      title: language === 'en' 
        ? 'AI in Trade Compliance: The Future is Here'
        : 'AI בציות סחר: העתיד כבר כאן',
      description: language === 'en'
        ? 'Exploring how artificial intelligence is revolutionizing customs and compliance...'
        : 'חקירת איך בינה מלאכותית מחוללת מהפכה במכס ובציות...',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
    },
  ];

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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-semibold tracking-wider uppercase ${
            theme === 'dark' ? 'text-[#E5A840]' : 'text-[#C28E36]'
          }`}>
            {language === 'en' ? 'Insights' : 'תובנות'}
          </span>
          <h2 className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
          }`}>
            {language === 'en' ? 'From Our Blog' : 'מהבלוג שלנו'}
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
          }`}>
            {language === 'en' 
              ? 'Expert analysis, industry news, and practical guides for global trade'
              : 'ניתוח מומחים, חדשות תעשייה ומדריכים מעשיים לסחר גלובלי'}
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
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
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${
                  theme === 'dark' ? 'bg-black/40' : 'bg-black/20'
                } group-hover:bg-transparent transition-colors duration-300`} />
                <Badge className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} ${categoryColors[article.category]}`}>
                  {article.category}
                </Badge>
              </div>

              {/* Content */}
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
                  {article.description}
                </p>
                <a 
                  href="#" 
                  className={`inline-flex items-center gap-2 font-medium ${
                    theme === 'dark' ? 'text-[#E5A840]' : 'text-[#C28E36]'
                  } hover:gap-3 transition-all`}
                >
                  {language === 'en' ? 'Read More' : 'קרא עוד'}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
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
            {language === 'en' ? 'View All Articles' : 'צפו בכל המאמרים'}
            <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}