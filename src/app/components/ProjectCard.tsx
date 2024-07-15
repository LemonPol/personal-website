import React from 'react';

interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, imageAlt, title, subtitle, description, tags }) => (
  <div className="card card-compact bg-gray-100 w-96 shadow-xl carousel-item">
    <figure>
      <img src={imageSrc} alt={imageAlt} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        {title}
        {subtitle && <div className="badge badge-secondary">{subtitle}</div>}
      </h2>
      <p className="text-left">{description}</p>
      <div className="card-actions justify-end">
        {tags.map((tag, index) => (
          <div key={index} className="badge badge-outline">{tag}</div>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;