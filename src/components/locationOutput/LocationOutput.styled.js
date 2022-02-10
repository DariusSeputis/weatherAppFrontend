import styled from 'styled-components';

export const StyledUl = styled.ul`
  list-style: none;

  margin-top: 3rem;

  li {
    color: var(--blue-color);

    cursor: pointer;

    font-size: 1.3em;
    font-weight: 600;

    padding: 0.5em;

    @media screen and (min-width: 768px) {
      font-size: 1.6em;
    }

    div {
      margin: 0 auto;
      width: 90%;
      @media screen and (min-width: 300px) {
        width: 75%;
      }
      @media screen and (min-width: 400px) {
        width: 20rem;
      }
    }
  }
  li:nth-child(2n-1) {
    background-color: var(--lightGreen-color);
    opacity: 0.9;
  }
  li:nth-child(2n) {
    background-color: var(--green-color);
    opacity: 0.9;
  }
`;
