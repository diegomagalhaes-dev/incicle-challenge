import styled from "styled-components";

export const Post = styled.main`
  border-radius: 12px;
  width: 100%;
  z-index: 20;
  background-color: #fff;

  display: flex;
  justify-content: center;
  flex-direction: column;

  position: relative;
  z-index: 20;
  h3 {
    color: #17c0c3;
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 0.3rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem 1rem;
  }
  span {
    display: flex;
    gap: 0.2rem;
    font-size: 12px;
    color: #353839;
    align-items: center;
    justify-content: center;
  }

  blockquote {
    font-size: 14px;
    font-weight: 300;

    padding: 0.5rem 1rem;
    color: #353839;
  }

  aside {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.4rem 1rem;
  }

  aside > div {
    display: flex;
    column-gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 1rem;
    padding: 0.3rem 0;
    gap: 15px;
    border-top: solid 1px rgba(53, 56, 57, 0.3);
    border-bottom: solid 1px rgba(53, 56, 57, 0.3);
  }
  footer > div {
    display: flex;
    flex: 33.33%;
    width: 33.33%;
    gap: 0.5rem;
    padding: 0.5rem 1.2rem;
    background: #e9ecf7;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    color: #050607;
    font-size: 14px;
    font-weight: 400;
    width: 100%;
  }
  .content {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .personData {
    display: flex;
    flex-direction: column;
    padding-left: 0.4rem;
  }

  .personData section {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 450px) {
    footer > div {
      font-size: 0;
      gap: 0;
    }
  }
`;
