import styled from "styled-components";

export const StyHome = styled.main`
  display: flex;
  margin: 0 auto;
  max-width: 1240px;
  width: 100%;

  gap: 20px;

  flex-wrap: wrap;

  margin-top: 12px;

  .profile {
    flex: 20%;
    width: 20%;
  }

  .publication {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 40%;
    width: 40%;
    max-width: 50vw;
  }

  #write-post {
    display: flex;
    flex-direction: column;

    background-color: #fff;
    border-radius: 8px;
  }

  #write-post form {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem;
    margin-top: 8px;
    margin-bottom: 8px;
    width: 100%;
  }

  #write-post input {
    display: flex;
    padding: 1rem;
    border: none;
    width: 100%;
  }

  #write-post > header {
    background-color: #e9ecf7;
    padding: 0.8rem;
    color: #353839;
    font-size: 14px;
    font-weight: 500;
    border-radius: 12px;
  }

  .scores {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 18%;
    width: 18%;
    max-width: 25vw;
  }

  #eficience {
    background-color: #fff;
    border-radius: 12px;
    width: 100%;
  }

  #eficience > header {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    width: 100%;
    border-bottom: solid 5px rgba(53, 56, 57, 0.2);
    h1 {
      font-size: 16px;
      font-weight: 400;
      color: #17c0c2;
    }
  }

  #eficience > article {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 5px;
    padding: 0.8rem;
    h2 {
      font-size: 12px;
      font-weight: 500;
      color: #000;
    }

    div {
      border-radius: 5px;
      flex: 40%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem;

      h2 {
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        margin-bottom: 4px;
      }
      aside {
        font-size: 18px;
        font-weight: 400;
        color: #fff;
      }
    }
  }

  #eficience footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    color: #353839;
    font-size: 12px;
    padding: 1rem;
    h3 {
      font-size: 14px;
      font-weight: 500;
      padding-bottom: 5px;
      line-height: 1rem;
      color: #000;
    }

    div {
      border: 2px solid;
      flex: 33.33%;
      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      border-radius: 5px;
      padding: 0.5rem 0;
    }
  }
  #eficience > article div:nth-child(1) {
    background-color: darkcyan;
  }
  #eficience > article div:nth-child(2) {
    background-color: green;
  }
  #eficience > article div:nth-child(3) {
    background-color: orange;
  }

  #eficience > footer div:nth-child(1) {
    border-color: darkcyan;
  }
  #eficience > footer div:nth-child(2) {
    border-color: green;
  }
  #eficience > footer div:nth-child(3) {
    border-color: orange;
  }
  #birthdays {
    display: flex;
    flex-direction: column;

    background-color: #fff;
    border-radius: 12px;
  }
  #birthdays > header {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    width: 100%;
    border-bottom: solid 5px rgba(53, 56, 57, 0.2);
    h1 {
      font-size: 16px;
      font-weight: 400;
      color: #17c0c2;
    }
  }
  #birthdays p,
  #pendencies p {
    font-size: 14px;
    margin: 0 auto;
    font-weight: 400;
    width: 100%;
    padding: 0.5rem 1.5rem;
    color: #353839;
    text-align: center;
  }

  #pendencies {
    display: flex;
    flex-direction: column;

    background-color: #fff;
    border-radius: 12px;
  }

  #pendencies > header {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 16px;
      font-weight: 400;
      color: #17c0c2;
      margin-left: 0.2rem;
    }
  }

  #pendencies span {
    background-color: rgba(53, 56, 57, 0.2);
    padding: 0.4rem;
    width: 100%;
    font-size: 12px;
    color: #353839;
    font-weight: 500;
    margin-top: 5px;
  }
`;

export const Media = styled.div`
  @media (max-width: 920px) {
    .main {
      flex-direction: column;
      margin-top: 0;
    }
    .profile,
    .publication,
    .scores {
      flex: 100%;
      width: 100%;
      max-width: 100%;
    }
  }
`;
