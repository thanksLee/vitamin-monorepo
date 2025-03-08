import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  width: 95vw;
  position: relative;
  background-color: ${(props) => props.theme.signin.container.background};
  color: ${(props) => props.theme.signin.container.color};
`;

export const SignInHeader = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  gap: 10px; /* 버튼 간의 간격 */
  align-items: center; /* 세로 중앙 정렬 */
`;
