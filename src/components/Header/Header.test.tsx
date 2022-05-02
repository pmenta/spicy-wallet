import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Header } from './index';

import DefaultTheme from '../../assets/styles/themes/default';

function ThemedHeader() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Header />
    </ThemeProvider>
  );
}

test('should render header', () => {
  const { getByText } = render(<ThemedHeader />);

  expect(getByText('spicy')).toBeTruthy();
});
