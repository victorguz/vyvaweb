import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'gradient';
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  id,
}) => {
  const backgrounds = {
    white: 'bg-white',
    light: 'bg-light',
    gradient: 'bg-gradient-to-b from-primary-soft to-white',
  };

  return (
    <section
      id={id}
      className={`py-20 sm:py-24 px-6 ${backgrounds[background]} ${className}`}
    >
      <div className="container-custom">{children}</div>
    </section>
  );
};
