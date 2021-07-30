import styled from 'styled-components';
import { Grid, GridProps } from '@material-ui/core';

export const Container = styled.div`
  background: ${props => props.theme.background_secondary};
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
`;

export const GridMap = styled(Grid).attrs<GridProps>({})`
  min-height: 400px;
`;
