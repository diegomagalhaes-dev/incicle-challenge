import styled from "styled-components";
import Background from "../../Assets/background-card-profile.png";

export const StyCardProfile = styled.article`
  width: 100%;
  max-height: 50vh;
  height: 100%;
  position: relative;

  background-image: url(${Background});

  display: flex;
  flex-direction: column;

  border-radius: 12px;

  .photo {
    position: absolute;
    z-index: 10;
    top: 7rem;
    right: 30%;
  }
`;

export const SecondCard = styled.div`
  margin-top: 65%;

  background-color: #fff;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 25px 0px 11px 11px;

  h2 {
    padding-top: 4rem;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: capitalize;

    color: cyan;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.05rem;

    color: #050607;
  }

  span {
    line-height: 1.4rem;
    font-size: 0.8rem;
    font-weight: 400;

    text-transform: capitalize;
    color: #353839;
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;

    padding: 10px 0px 20px 10px;

    column-gap: 50px;
    row-gap: 5px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1rem;
    font-weight: 200;

    color: #353839;
  }
`;
