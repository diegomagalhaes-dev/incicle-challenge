import styled from "styled-components";

interface PhotoUserProps {
  sizeImage: number;
}

export const PhotoUser = styled.div<PhotoUserProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: blue;
  padding: 2px;
  img {
      width: ${(props) => props.sizeImage}px;
    height: ${(props) => props.sizeImage}px;
    object-fit: cover;
    border-radius: 50%;
    background-color: #fff;
    padding: 3px;
    border: 3px solid blue;
  }
`;
