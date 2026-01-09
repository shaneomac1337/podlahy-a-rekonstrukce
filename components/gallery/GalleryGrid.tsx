'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, type Project } from '@/data/projects';
import { GalleryItem } from './GalleryItem';
import { Lightbox } from './Lightbox';

type FilterCategory = 'vse' | 'podlahy' | 'rekonstrukce';

export function GalleryGrid() {
  const [filter, setFilter] = useState<FilterCategory>('vse');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === 'vse'
      ? projects
      : projects.filter((p) => p.category === filter);

  const filters: { value: FilterCategory; label: string }[] = [
    { value: 'vse', label: 'Vše' },
    { value: 'podlahy', label: 'Podlahy' },
    { value: 'rekonstrukce', label: 'Rekonstrukce' },
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setLightboxOpen(true);
  };

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-6 py-2 text-sm tracking-wide transition-all duration-300 rounded-sm ${
              filter === f.value
                ? 'bg-brass-500 text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <GalleryItem
              key={project.id}
              project={project}
              index={index}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <Lightbox
        project={selectedProject}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
