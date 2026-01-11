'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Project } from '@/data/projects';

interface GalleryItemProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export function GalleryItem({ project, index, onClick }: GalleryItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        onClick={onClick}
        className="group block w-full text-left relative overflow-hidden rounded-sm aspect-[4/3] bg-stone-200"
      >
        {/* Real Project Image */}
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-brass-500/90 text-white text-xs tracking-wider uppercase rounded-sm">
            {project.category === 'podlahy' ? 'Podlahy' : 'Rekonstrukce'}
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-[var(--font-playfair)] text-lg text-white mb-1 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-stone-300 text-sm flex items-center gap-1">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
            </svg>
            {project.location}
          </p>
        </div>

        {/* Hover icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <svg
              className="w-6 h-6 text-charcoal-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
          </div>
        </div>
      </button>
    </motion.div>
  );
}
