import About from '@/components/about/About';
import Container from '@/components/container';
import React from 'react';

export default function AboutPage() {
  return (
    <Container className="flex flex-col items-center justify-center">
      <About />
    </Container>
  );
}
