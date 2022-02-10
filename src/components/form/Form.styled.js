import styled from 'styled-components';

export const StyledForm = styled.form``;

export const StyledSearch = styled.input`
  border: 3px solid var(--blue-color);
  border-radius: 5px;

  background-color: var(--sand-color);
  color: var(--blue-color);

  display: block;
  font-size: 1.5em;
  margin: 2rem auto 0 auto;

  padding: 0.5rem;

  width: 90%;
  @media screen and (min-width: 300px) {
    width: 75%;
  }
  @media screen and (min-width: 400px) {
    width: 20rem;
  }
`;

export const StyledSubmit = styled.input`
  border: 2px solid var(--blue-color);
  border-radius: 5px;

  color: var(--sand-color);

  background-color: var(--blue-color);

  display: block;
  font-size: 1.5em;
  font-weight: 800;

  letter-spacing: 0.5em;

  margin: 1rem auto;

  padding: 0.5rem;

  width: 90%;
  @media screen and (min-width: 300px) {
    width: 75%;
  }
  @media screen and (min-width: 400px) {
    width: 20rem;
  }
`;

export const StyledErrMessage = styled.p`
  color: red;

  font-size: 1.3em;
  font-weight: 800;

  margin-top: 1rem;

  text-align: center;
`;
