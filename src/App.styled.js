import styled from 'styled-components';

export const StyledTitle = styled.h1`
  color: var(--blue-color);

  font-weight: 300;

  margin-top: 2rem;

  text-align: center;
  span {
    font-weight: 800;
  }
  @media screen and (min-width: 768px) {
    font-size: 2.7em;

    margin-top: 5rem;
  }
`;
