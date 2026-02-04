'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: 'Automobile CRM Platform',
      description: 'Production-grade backend system supporting sales and customer lifecycle operations with lead management, follow-ups, and workflow state transitions.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'RabbitMQ', 'Redis'],
      features: [
        'REST API development with proper validation and error handling',
        'Complex business logic for lead management and workflow transitions',
        'Asynchronous processing with RabbitMQ integration',
        'Redis caching for performance optimization',
      ],
      link: '#',
      github: '#',
    },
    {
      title: 'Social Media Application',
      description: 'Academic project demonstrating full-stack request-response flow with CRUD operations and database persistence.',
      technologies: ['Java', 'Oracle Database', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'Complete CRUD functionality for user interactions',
        'Backend persistence logic with relational database design',
        'Basic UI interactions and user experience',
        'Clean data storage and retrieval mechanisms',
      ],
      link: '#',
      github: '#',
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-secondary/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-12 ${
            isVisible ? 'projects-animate' : 'opacity-0 translate-y-8'
          }`}>
          <div>
            <h2 className="text-4xl font-bold">Projects</h2>
            <p className="text-lg text-muted-foreground mt-2">
              Professional and academic projects showcasing backend development expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:shadow-lg transition-shadow flex flex-col stagger-item"
                style={{
                  animationDelay: isVisible ? `${index * 0.1}s` : '0s',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Key Features:</p>
                      <ul className="space-y-1">
                        {project.features.slice(0, 2).map((feature, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <div className="flex gap-3 mt-6 pt-6 border-t border-border">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 gap-2 bg-transparent"
                    onClick={() => window.open(project.link)}
                  >
                    <ExternalLink size={16} />
                    View Project
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 gap-2 bg-transparent"
                    onClick={() => window.open(project.github)}
                  >
                    <Github size={16} />
                    Code
                  </Button>
                </div> */}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
