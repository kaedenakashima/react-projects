import styled from 'styled-components';
import { elevation, transition } from 'Utilities';

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;
  ${elevation[4]};
  ${transition({})};
  &:hover {
    ${elevation[5]};
  }
`;
