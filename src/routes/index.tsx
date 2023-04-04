import * as Router from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Center, Loader } from '@mantine/core';
import { lazy, Suspense } from 'react';
import PublicLayout from '../pages/public/components/layout/PublicLayout';

const Error404 = lazy(() => import('../pages/Error404'));
const Home = lazy(() => import('../pages/public/Home'));
const Biography = lazy(() => import('../pages/public/Biography'));
const Portfolio = lazy(() => import('../pages/public/Portfolio'));
const Resume = lazy(() => import('../pages/public/Resume'));

export default function Routes() {
  return (
    <Suspense
      fallback={
        <Center h={'100vh'}>
          <Loader size={'lg'} />
        </Center>
      }
    >
      <Router.Routes>
        {/* Public */}
        <Route path="/" element={<PublicLayout />}>
          <Route path="" element={<Home />} />
          <Route path="bio" element={<Biography />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="resume" element={<Resume />} />
        </Route>

        {/* Not found */}
        <Route path="*" element={<Error404 />} />
      </Router.Routes>
    </Suspense>
  );
}
