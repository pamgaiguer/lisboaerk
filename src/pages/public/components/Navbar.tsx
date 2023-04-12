// import { Navbar, useMantineColorScheme } from '@mantine/core';
// // import NavbarContent from './NavbarContent';

// export default function AppNavbar({ closeMenu }: { closeMenu: () => void }) {
//   const { colorScheme } = useMantineColorScheme();

//   return (
//     <Navbar
//       fixed={true}
//       width={{ md: 260 }}
//       hiddenBreakpoint="md"
//       hidden={true}
//       px="md"
//       style={{
//         borderRightColor: 'transparent',
//         boxShadow:
//           colorScheme === 'light'
//             ? '3px 0px 15px -1px #E2E2E2'
//             : '3px 0px 15px -1px #1D1C1C',
//       }}
//     >
//       <NavbarContent closeMenu={closeMenu} />
//     </Navbar>
//   );
// }
export default function AppNavbar() {
  return (
    <>
      <p>Navbar</p>
    </>
  );
}
