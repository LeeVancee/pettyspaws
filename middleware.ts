import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';
export default createMiddleware({
  defaultLocale: 'en',
  localePrefix,
  locales,
  localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh-CN|zh-TW|en)/:path*'],
};
