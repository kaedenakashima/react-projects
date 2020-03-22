import styled from 'styled-components';
import { elevation, transition, black } from 'Utilities';

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;
  width: 300px;
  margin: 0 auto;
  color: ${black};
  ${elevation[4]};
  ${transition({
    property: 'box-shadow'
  })};
  &:hover {
    ${elevation[5]};
  }
`;
