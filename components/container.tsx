import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string; // Optional className prop to pass additional classes
}

const Container = ({ children, className }: ContainerProps) => {
  return <div className={`mx-auto min-w-screen-2xl min-h-[calc(100vh-7.5rem-1px)] ${className}`}>{children}</div>;
};

export default Container;
