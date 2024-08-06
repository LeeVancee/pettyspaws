import { ReactNode } from 'react';
// Supports weights 100-900
import '@fontsource-variable/noto-sans-sc';

import '@fontsource/poppins';
import './globals.css';

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children;
}
