import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "@components/layout/footer/Footer";

const DefaultLayout = () => {
  const location = useLocation();

  const isRoot = location.pathname === "/";

  return (
    <>
      <Wrapper>
        <Outlet />
        {!isRoot && <Footer />}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  flex-grow: 1;
  min-height: 100vh;
`;

export default DefaultLayout;
