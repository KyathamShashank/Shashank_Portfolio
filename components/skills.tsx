'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      category: 'Languages & Backend',
      skills: ['Java (8+)', 'Spring Boot', 'REST APIs', 'JDBC', 'JPA'],
      proficiency: 'Advanced',
    },
    {
      category: 'Databases',
      skills: ['MySQL (schema design, query optimization)', 'Oracle (SQL, PL/SQL)'],
      proficiency: 'Advanced',
    },
    {
      category: 'Messaging & Caching',
      skills: ['RabbitMQ (async workflows)', 'Redis (application caching)'],
      proficiency: 'Intermediate',
    },
    {
      category: 'Testing & Quality',
      skills: ['JUnit', 'Mockito', 'SonarQube'],
      proficiency: 'Intermediate',
    },
    {
      category: 'Tools & Practices',
      skills: ['Git', 'Log4j', 'JMeter'],
      proficiency: 'Advanced',
    },
    {
      category: 'Web (Supporting)',
      skills: ['HTML', 'CSS', 'JavaScript'],
      proficiency: 'Basic',
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-12 ${
            isVisible ? 'skills-animate' : 'opacity-0 translate-y-8'
          }`}>
          <div>
            <h2 className="text-4xl font-bold">Skills & Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:shadow-lg transition-shadow stagger-item"
                style={{
                  animationDelay: isVisible ? `${index * 0.1}s` : '0s',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-primary">{category.category}</h3>
                    <Badge variant="outline">{category.proficiency}</Badge>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
