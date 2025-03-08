import styled from 'styled-components';
export const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.signin.container.background};
  color: ${(props) => props.theme.signin.container.color};
`;

export const SignInWrapper = styled.div`
  width: 350px;
  height: 290px;
  padding: 30px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.signin.wrapper.background};
`;
