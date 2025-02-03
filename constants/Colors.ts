/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const primaryColor = '#0a7ea4';  // Azul da logo
const secondaryColor = '#fff';   // Branco
const accentColor = '#2ecc71';   // Verde para status positivos
const backgroundColor = '#1a2c3d'; // Fundo escuro
const cardBackground = '#1e3a4f'; // Cards escuros
const errorColor = '#e74c3c';    // Vermelho para erros

export const Colors = {
  light: {
    text: '#2c3e50',
    background: backgroundColor,
    tint: primaryColor,
    icon: '#7f8c8d',
    tabIconDefault: '#95a5a6',
    tabIconSelected: primaryColor,
    cardBackground: '#ffffff',
    border: '#ecf0f1',
    success: accentColor,
    error: errorColor,
  },
  dark: {
    text: '#ffffff',
    textSecondary: '#9ba5ae',
    background: backgroundColor,
    tint: primaryColor,
    icon: '#bdc3c7',
    tabIconDefault: '#95a5a6',
    tabIconSelected: primaryColor,
    cardBackground: cardBackground,
    border: '#2c3e50',
    success: accentColor,
    error: errorColor,
  },
};
