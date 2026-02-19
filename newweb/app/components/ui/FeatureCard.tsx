import React from 'react';
import { Card } from './Card';

interface FeatureCardProps {
  icon: string | React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = '',
}) => {
  return (
    <Card variant="default" hover className={`p-6 ${className}`}>
      <div className="text-3xl mb-3">
        {typeof icon === 'string' ? <span>{icon}</span> : icon}
      </div>
      <h3 className="font-bold text-lg text-dark mb-2">{title}</h3>
      <p className="text-dark/70 text-sm">{description}</p>
    </Card>
  );
};
