import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { Notifications } from '@mantine/notifications';

import './App.scss';
import Routes from './routes';

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          colorScheme,
          loader: 'dots',
          colors: {
            brand: [
              '#F1F3F5',
              '#B8B8B8',
              '#A0A0A0',
              '#909090',
              '#686868',
              '#484848',
              '#141414',
              '#454545',
              '#141414',
              '#525252',
            ],
            dark: [
              '#C1C2C5',
              '#A6A7AB',
              '#909296',
              '#5C5F66',
              '#373A40',
              '#2C2E33',
              '#1E1E1E',
              '#2C2C2C',
              '#141517',
              '#101113',
            ],
          },
          primaryColor: 'brand',
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Notifications position="top-right" zIndex={2077} limit={10} autoClose={4000} />
        <Routes />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
