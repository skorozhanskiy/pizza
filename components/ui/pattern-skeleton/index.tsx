import React from 'react';

interface Props {
  className?: string;
}

export const PatternSkeleton: React.FC<Props> = ({ className }) => {
  return <div className={className}></div>;
};
