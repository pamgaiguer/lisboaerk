import * as Router from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Center, Loader } from '@mantine/core';
import { lazy, Suspense } from 'react';
import PublicLayout from '../pages/public/components/layout/PublicLayout';
import Home from '../pages/public/Home';

const Error404 = lazy(() => import('../pages/Error404'));

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
          {/* <Route path="galharufa" element={<Galharufa />} /> */}
        </Route>

        {/* Not found */}
        <Route path="*" element={<Error404 />} />
      </Router.Routes>
    </Suspense>
  );
}
