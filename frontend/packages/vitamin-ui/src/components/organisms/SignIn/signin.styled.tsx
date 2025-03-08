import styled from 'styled-components';

export const SignInWrapper = styled.div`
  width: 300px;
  height: 290px;
  padding: 30px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.signin.wrapper.background};
`;
