'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Card } from '@/components/ui/card';

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  const highlights = [
    {
      title: 'Current Role',
      description: 'Java Backend Developer at Cyepro Solutions Pvt Ltd',
    },
    {
      title: 'Experience',
      description: '1 year 6 months of professional backend development',
    },
    {
      title: 'Primary Tech',
      description: 'Java Spring Boot - 1.5+ years of hands-on experience',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-12 ${
            isVisible ? 'about-animate' : 'opacity-0 translate-y-8'
          }`}>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
             Results-oriented Java Backend Developer with hands-on experience in designing, developing, and maintaining scalable backend systems using Spring Boot. Strong expertise in RESTful API development, clean business logic implementation, and relational database design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
             Proven experience working on a production-grade Automobile CRM platform, leveraging MySQL, RabbitMQ, and Redis to deliver reliable and high-performance backend services. Seeking a challenging Spring Boot / Java Backend Developer role where strong engineering practices and ownership are valued.
           </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:shadow-lg transition-shadow stagger-item"
                style={{
                  animationDelay: isVisible ? `${index * 0.1}s` : '0s',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
