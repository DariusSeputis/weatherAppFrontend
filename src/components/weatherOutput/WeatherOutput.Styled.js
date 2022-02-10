import styled from 'styled-components';

// Current weather output

export const StyledWeatherOutputWrap = styled.div`
  margin-top: 4rem;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin-top: 10rem;
  }
`;
export const StyledCurrentWeatherOutputWrap = styled.div`
  position: relative;
  margin: 0 auto;
  width: 90%;
  @media screen and (min-width: 300px) {
    width: 85%;
  }
  @media screen and (min-width: 400px) {
    width: 20rem;
  }
  @media screen and (min-width: 480px) {
    width: 25rem;
  }
  @media screen and (min-width: 600px) {
    width: 33rem;
  }
  @media screen and (min-width: 768px) {
    width: 15rem;
    margin: 0;
  }
  button {
    border: 2px solid var(--blue-color);
    border-radius: 5px;

    background-color: var(--blue-color);

    color: var(--sand-color);

    position: absolute;

    font-size: 1.5em;
    font-weight: 800;

    right: 0;
    top: -3rem;
    /* display: block; */
    /* margin-left: auto; */

    padding: 0.5rem;

    @media screen and (min-width: 768px) {
      width: 15rem;
      margin: 0;

      left: 0;
    }
  }
`;

export const StyledCurrentWeatherOutput = styled.div`
  border: 2px solid var(--blue-color);
  border-radius: 5px;

  display: flex;
  justify-content: space-between;
  background-color: rgba(55, 150, 131, 0.7);
  padding: 1rem;
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`;
export const StyledSpanWrap = styled.div`
  color: var(--blue-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledWeekDay = styled.span`
  font-size: 1.6em;
  font-weight: 600;

  margin-bottom: 3rem;

  @media screen and (min-width: 400px) {
    font-size: 2em;
  }
  @media screen and (min-width: 480px) {
    font-size: 2.5em;
  }
  @media screen and (min-width: 600px) {
    font-size: 3.5em;
    margin-bottom: 4rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 2.8em;
    margin-bottom: 0rem;
  }
`;
export const StyledMonthDay = styled.span`
  font-size: 1.2em;
  font-weight: 600;

  margin-bottom: 0.3rem;

  @media screen and (min-width: 400px) {
    font-size: 1.5em;
  }
  @media screen and (min-width: 480px) {
    font-size: 2em;
  }
  @media screen and (min-width: 600px) {
    font-size: 2.5em;
  }
  @media screen and (min-width: 600px) {
    font-size: 2.5em;
  }
  @media screen and (min-width: 768px) {
    font-size: 2em;
  }
`;
export const StyledLocation = styled.span`
  font-size: 1.2em;
  font-weight: 600;
  @media screen and (min-width: 400px) {
    font-size: 1.4em;
  }
  @media screen and (min-width: 480px) {
    font-size: 1.8em;
  }
  @media screen and (min-width: 600px) {
    font-size: 2.3em;
  }
`;

export const StyledTemp = styled.span`
  font-size: 1.6em;
  font-weight: 600;

  margin-bottom: 0.3rem;
  text-align: right;

  @media screen and (min-width: 400px) {
    font-size: 2em;
  }
  @media screen and (min-width: 480px) {
    font-size: 2.5em;
  }
  @media screen and (min-width: 600px) {
    font-size: 3.5em;
  }
  @media screen and (min-width: 768px) {
    margin-top: 0.6rem;
    text-align: left;
  }
`;
export const StyledPhrase = styled.span`
  font-size: 0.9em;
  font-weight: 600;

  /* text-align: right; */

  @media screen and (min-width: 400px) {
    font-size: 1.4em;
  }
  @media screen and (min-width: 480px) {
    font-size: 1.8em;
  }
  @media screen and (min-width: 600px) {
    font-size: 2.3em;
  }
  @media screen and (min-width: 768px) {
    font-size: 2.5em;
    margin-top: 0.6rem;
  }
`;

// Daily weather output

export const StyledDailyWeatherOutputWrap = styled.div`
  border: 2px solid var(--blue-color);
  border-radius: 5px;

  display: grid;
  grid-template-rows: repeat(7, 1fr);

  margin: 0 auto;

  overflow: hidden;

  width: 90%;

  @media screen and (min-width: 300px) {
    width: 85%;
  }
  @media screen and (min-width: 400px) {
    width: 20rem;
  }
  @media screen and (min-width: 480px) {
    width: 25rem;
  }
  @media screen and (min-width: 600px) {
    width: 33rem;
  }
  @media screen and (min-width: 768px) {
    grid-template-rows: auto;
    grid-template-columns: repeat(7, 1fr);
    margin: 0;
    width: min-content;
  }
`;
export const StyledImg = styled.img`
  width: 1.7rem;
  @media screen and (min-width: 400px) {
    width: 2.2rem;
  }
  @media screen and (min-width: 480px) {
    width: 2.7rem;
  }
  @media screen and (min-width: 600px) {
    width: 3.5rem;
  }
  @media screen and (min-width: 768px) {
    width: 2.5rem;
  }
`;

export const StyledSingleDayWrap = styled.div`
  background-color: var(--blue-color);
  color: var(--sand-color);

  display: flex;
  justify-content: space-around;

  padding: 1rem;

  font-size: 1em;
  font-weight: 600;
  @media screen and (min-width: 400px) {
    font-size: 1.3em;
  }
  @media screen and (min-width: 480px) {
    font-size: 1.6em;
  }
  @media screen and (min-width: 600px) {
    font-size: 1.8em;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.4em;
    flex-direction: column;

    padding: 0.6rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1.8em;
    flex-direction: column;

    padding: 1rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 2em;
    flex-direction: column;

    padding: 1.2rem;
  }
`;
