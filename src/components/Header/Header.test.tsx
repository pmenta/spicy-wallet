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

describe('should render header', () => {
  it('should render title', () => {
    const { getByText } = render(<ThemedHeader />);

    expect(getByText('spicy')).toBeInTheDocument();
    expect(getByText('Wallet')).toBeInTheDocument();
  });
});
