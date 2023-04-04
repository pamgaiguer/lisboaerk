import { Flex, MediaQuery } from '@mantine/core';
import { Outlet } from 'react-router-dom';
// import { menuHeader } from '../../../../utils';
// import Footer from '../../../admin/components/footer/Footer';
// import HeaderTop from '../HeaderTop';

export default function PublicLayout() {
  return (
    <>
      {/* <HeaderTop links={menuHeader} /> */}
      <MediaQuery largerThan="md" styles={{ padding: 5 }}>
        <Flex direction="column" style={{ flexGrow: 1 }}>
          <Outlet />
        </Flex>
      </MediaQuery>
      {/* <Footer /> */}
    </>
  );
}
