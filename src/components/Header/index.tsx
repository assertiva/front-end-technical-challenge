import React from 'react';

import { Container } from './styles';

export default function Header(): JSX.Element {
  return (
    <Container>
      <img
        src="https://assertivasolucoes.com.br/assets/img/assertiva-icon.svg"
        alt="assertiva"
      />
      <span>Desempenho das lojas</span>
    </Container>
  );
}
