import GlobalStyles from '@components/GlobalStyles';
import SideBar from '@components/SideBar';
import MobileSideBar from '@components/SideBar/MobileSideBar';
import { PC, Mobile } from '@utils/MediaQuery';
import React, { FC } from 'react';
import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: #1f1d2b;
  height: 90%;
  display: flex;
  overflow: hidden;
  width: 80%;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 500;
  box-shadow: 0 20px 50px rgb(0 0 0 / 30%);
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

const AppLayout: FC<{}> = ({ children }) => {
  return (
    <>
      <PC>
        <MainContainer>
          <SideBar />
          {children}
          <GlobalStyles />
        </MainContainer>
      </PC>
      <Mobile>
        <MainContainer>
          <MobileSideBar />
          {children}
          <GlobalStyles />
        </MainContainer>
      </Mobile>
    </>
  );
};
export default AppLayout;
