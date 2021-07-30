import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: #FFF;
  background: #f5f5f5;
}

body, input, button, textarea {
  font: 500 14px Roboto, sans-serif;
}
`;
