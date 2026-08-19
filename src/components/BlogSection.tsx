import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost, PageType } from '../types';
import { Clock, ArrowRight, X, Sparkles, BookOpen, Share2, Tag } from 'lucide-react';

interface BlogSectionProps {
  setActivePage: (page: PageType) => void;
  isDarkMode: boolean;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  setActivePage,
  isDarkMode,
}) => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section id="blog-section" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Growth Intelligence & CRO Insights</span>
          </div>
          <h2 className={`font-heading font-black text-3xl sm:text-5xl tracking-tight leading-tight ${
            isDarkMode ? 'text-white' : 'text-slate-950'
          }`}>
            Articles on Web Strategy & Conversion
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            In-depth teardowns, case studies, and actionable frameworks to turn your business website into a 24/7 client generator.
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setActivePost(post)}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-2 group ${
                isDarkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-blue-500/40 hover:bg-slate-900/90 shadow-xl'
                  : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-2xl'
              }`}
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-slate-950">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md text-cyan-400 border border-slate-700">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span>{post.publishedDate}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className={`font-heading font-extrabold text-lg sm:text-xl tracking-tight leading-snug mb-3 group-hover:text-blue-400 transition-colors ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {post.title}
                  </h3>

                  <p className={`text-xs sm:text-sm line-clamp-2 leading-relaxed mb-6 ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-800/50 mt-auto">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-7 h-7 rounded-full object-cover border border-slate-700"
                  />
                  <span className="text-xs font-semibold text-slate-300">
                    {post.author.name}
                  </span>
                </div>

                <span className="text-xs font-bold text-blue-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className={`relative w-full max-w-3xl rounded-3xl border p-6 sm:p-10 max-h-[90vh] overflow-y-auto ${
            isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-2">
              {activePost.category} • {activePost.readTime}
            </span>

            <h3 className="font-heading font-black text-2xl sm:text-4xl mb-4 leading-tight">
              {activePost.title}
            </h3>

            <div className="flex items-center gap-3 pb-6 border-b border-slate-800 mb-6">
              <img
                src={activePost.author.avatar}
                alt={activePost.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-bold text-sm">{activePost.author.name}</div>
                <div className="text-xs text-slate-400">{activePost.author.role}</div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden mb-6">
              <img
                src={activePost.coverImage}
                alt={activePost.title}
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="prose prose-invert max-w-none text-sm sm:text-base leading-relaxed text-slate-300 space-y-4 whitespace-pre-line mb-8">
              {activePost.content}
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {activePost.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  setActivePost(null);
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md"
              >
                Apply These Strategies to My Website
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
