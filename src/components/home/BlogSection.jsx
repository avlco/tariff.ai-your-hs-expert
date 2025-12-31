import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '../LanguageContext';

export default function BlogSection() {
  const { t, isRTL } = useLanguage();

  const images = [
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80',
  ];

  return (
    <section id="blog" className="relative py-24 bg-white dark:bg-[#0a1628] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#42C0B9]/10 border border-[#42C0B9]/20 mb-6"
          >
            <BookOpen className="w-4 h-4 text-[#42C0B9]" />
            <span className="text-sm font-medium text-[#42C0B9]">{t.blog.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-[#114B5F] dark:text-white mb-6"
          >
            {t.blog.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-[#114B5F]/70 dark:text-gray-400"
          >
            {t.blog.subtitle}
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {t.blog.posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <motion.img
                  src={images[index]}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#114B5F]/60 to-transparent" />
                <div className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'}`}>
                  <span className="px-3 py-1 rounded-full bg-[#42C0B9] text-white text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-[#114B5F]/60 dark:text-gray-400 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#114B5F] dark:text-white mb-2 group-hover:text-[#42C0B9] transition-colors">
                {post.title}
              </h3>

              <p className="text-[#114B5F]/60 dark:text-gray-400 mb-4">
                {post.excerpt}
              </p>

              <span className={`inline-flex items-center gap-2 text-[#42C0B9] font-medium group-hover:gap-3 transition-all`}>
                {t.blog.readMore}
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </span>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 rounded-xl font-medium border-2 border-[#114B5F]/20 dark:border-white/20 text-[#114B5F] dark:text-white hover:bg-[#114B5F]/5 dark:hover:bg-white/5"
          >
            {t.blog.viewAll}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}