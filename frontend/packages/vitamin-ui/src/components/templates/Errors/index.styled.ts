import { Typography } from 'antd';
import { styled } from 'styled-components';

export const ErrorMainContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto; /* 타이틀, 이미지, 콘텐츠 */
  grid-template-columns: 1fr 1fr; /* 두 열 구성 */
  gap: 2rem; /* 각 행 간격 */
  max-width: 800px; /* 최대 너비 */
  margin: 2.5rem auto; /* mt-10 및 가운데 정렬 */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 작은 화면에서는 한 열로 변경 */
    grid-template-rows: auto auto auto auto; /* 세로로 정렬 */
    text-align: center;
    gap: 1rem;
  }
`;

export const TypographyTitle = styled(Typography.Title)`
  grid-column: span 2; /* 두 열을 차지 */
  text-align: left;
`;

export const BugFixingWrapper = styled.div`
  grid-column: span 2; /* 두 열을 차지 */
  justify-self: center; /* 그리드에서 중앙 정렬 */
  width: 30%; /* 부모 요소 너비에 맞춤 */
  & svg {
    width: 100%; /* 부모 요소 너비에 맞춤 */
    height: auto; /* 비율 유지 */
    margin-bottom: 2rem; /* 이미지 하단 간격 추가 */
  }
`;

export const ErrorBox = styled.div`
  width: calc(100% - 2rem); /* 양쪽 여백 추가 */
  max-height: 250px;
  overflow-y: auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    max-height: auto;
    font-size: 0.875rem; /* 텍스트 크기 축소 */
    text-align: center;
    margin-bottom: 1rem; /* 박스 하단 간격 추가 */
    width: calc(100% - 4rem); /* 모바일에서 박스 너비 조정 */
    margin-left: auto;
    margin-right: auto;
  }
`;

// 좌측 에러 메시지 박스
export const LeftErrorBox = styled(ErrorBox)`
  grid-column: span 1; /* 첫 번째 열 */

  @media (max-width: 768px) {
    grid-column: span 1; /* 한 열로 변경되므로 기본 설정 유지 */
    order: -1; /* 필요 시 순서를 조정 가능 (예시) */
  }
`;

// 우측 에러 스택 박스
export const RightErrorBox = styled(ErrorBox)`
  grid-column: span 1; /* 두 번째 열 */

  @media (max-width: 768px) {
    grid-column: span 1; /* 한 열로 변경되므로 기본 설정 유지 */
    order: -1; /* 필요 시 순서를 조정 가능 (예시) */
  }
`;

// 오류 메시지 박스 래퍼
export const ErrorContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* 메시지와 스택 간 간격 */

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    gap: 0.5rem;
  }
`;

export const TypographyParagraph = styled(Typography.Paragraph)`
  text-align: left;
  color: ${(props) =>
    props.type === 'danger'
      ? 'red' // danger 타입일 때
      : props.type === 'warning'
        ? 'orange' // warning 타입일 때
        : 'inherit'}; /* 타입에 따라 색상 변경 */
`;

export const CenterWrapper = styled.div`
  grid-column: span 2; /* 두 열을 차지 */
  justify-self: center; /* 중앙 정렬 */
  margin-top: 2rem; /* 버튼 상단 간격 추가 */

  @media (max-width: 768px) {
    grid-column: span 1; /* 작은 화면에서는 한 열로 변경 */
    margin-top: 1rem; /* 상단 간격 줄이기 */
  }
`;

// 버튼 스타일
export const CenterButtonWrapper = styled(CenterWrapper)`
  button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;

    @media (max-width: 768px) {
      width: auto;
      font-size: 0.875rem;
    }
  }
`;