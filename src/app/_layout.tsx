
import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider
      value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <StackLayout />
    </ThemeProvider>
  );
}

function StackLayout() {
  const { Stack } = require('expo-router');

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
