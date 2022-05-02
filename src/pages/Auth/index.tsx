import { FormGroup } from '../../components/FormGroup';
import { Input } from '../../components/Input';

import { Container } from './styles';

export function Auth() {
  return (
    <Container>
      <FormGroup label="Connect your wallet">
        <Input />
      </FormGroup>
      <span>or</span>
      <a href="/">Create a new wallet</a>
    </Container>
  );
}
