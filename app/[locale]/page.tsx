import React from 'react';
import Hero from '@/components/Hero';
import Container from '@/components/container';

export default function Home() {
  return (
    <Container className="flex flex-col items-center justify-center">
      <Hero />
    </Container>
  );
}
