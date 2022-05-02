import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { FormGroup } from './index';

import { Input } from '../Input';

import DefaultTheme from '../../assets/styles/themes/default';

function ThemedFormGroup() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <FormGroup label="Testing form group" error="Error">
        <Input data-testid="input" />
      </FormGroup>
    </ThemeProvider>
  );
}

describe('should render form group', () => {
  it('should render label', () => {
    const { getByText } = render(<ThemedFormGroup />);

    expect(getByText('Testing form group')).toBeInTheDocument();
  });

  it('should render input', () => {
    const { getByTestId } = render(<ThemedFormGroup />);

    expect(getByTestId('input')).toBeInTheDocument();
  });

  it('should render error', () => {
    const { getByText } = render(<ThemedFormGroup />);

    expect(getByText('Error')).toBeInTheDocument();
  });
});
