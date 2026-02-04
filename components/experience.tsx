'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      title: 'Java Developer',
      company: 'Cyepro Solutions Pvt Ltd',
      period: 'Oct 2024 - Present',
      duration: '1 year 6 months',
      description: 'Backend developer contributing to a production Automobile CRM system supporting sales and customer lifecycle operations',
      skills: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'JPA', 'RabbitMQ', 'Redis'],
      highlights: [
        'Designed and implemented Spring Boot REST APIs with proper validation, error handling, and layered architecture',
        'Developed complex business logic for lead management, follow-ups, and workflow state transitions',
        'Optimized MySQL database queries to improve response time and ensure data consistency',
        'Integrated RabbitMQ for asynchronous processing and decoupling time-consuming backend operations',
        'Implemented Redis caching for frequently accessed data, reducing database load and improving API performance',
        'Actively involved in production issue analysis, bug fixes, and code refactoring',
        'Ensured code quality by addressing SonarQube issues and following clean coding practices',
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 bg-secondary/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-12 ${
            isVisible ? 'experience-animate' : 'opacity-0 translate-y-8'
          }`}>
          <div>
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:shadow-lg transition-shadow stagger-item"
                style={{
                  animationDelay: isVisible ? `${index * 0.15}s` : '0s',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                      <p className="text-lg text-muted-foreground">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">{exp.period}</p>
                      <p className="text-sm text-muted-foreground">{exp.duration}</p>
                    </div>
                  </div>

                  <p className="text-foreground">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-2 text-muted-foreground">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
