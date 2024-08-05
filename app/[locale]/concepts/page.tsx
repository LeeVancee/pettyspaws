import Concepts from '@/components/concepts/Concepts';
import Container from '@/components/container';
import React from 'react';

export default function ConceptsPage() {
  return (
    <Container className="flex flex-col items-center justify-center">
      <Concepts />
    </Container>
  );
}
