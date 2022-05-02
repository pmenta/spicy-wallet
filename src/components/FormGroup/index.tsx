/* eslint-disable jsx-a11y/label-has-associated-control */
import { ReactNode } from 'react';

import { Container } from './styles';

interface IFormGroupProps {
  children: ReactNode
  error?: string
  label: string
}

export function FormGroup({ children, error, label }: IFormGroupProps) {
  return (
    <Container>
      <label>
        {label}
        {children}
      </label>
      {error && <small>{error}</small>}
    </Container>
  );
}
