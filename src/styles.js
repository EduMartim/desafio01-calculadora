import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #cacaca;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  background-color: #fafafa;
  width: 20%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  flex: 1;
  gap: 5px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
