import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { FormGroup } from './index';

import { Input } from '../Input';

import DefaultTheme from '../../assets/styles/themes/default';

interface IThemedFormGroupProps {
  error?: string
}

function ThemedFormGroup({ error = undefined }: IThemedFormGroupProps) {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <FormGroup label="Testing form group" error={error}>
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
    const { getByText } = render(<ThemedFormGroup error="Error" />);

    expect(getByText('Error')).toBeInTheDocument();
  });

  it('should not render error', () => {
    const { queryByText } = render(<ThemedFormGroup />);

    expect(queryByText('Error')).not.toBeInTheDocument();
  });
});
