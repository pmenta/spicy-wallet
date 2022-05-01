import styled from 'styled-components';

export const HeaderContainer = styled.header`
  margin-top: 74px;
  margin-bottom: 48px;

  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;
