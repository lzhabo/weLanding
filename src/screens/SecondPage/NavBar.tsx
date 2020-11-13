import styled from "@emotion/styled";
import React from "react";
import Title from "@components/Title";
import { FlexContainer } from "@components/FlexContaner";
import guy1 from "../../assets/guy1.svg";
import guy2 from "../../assets/guy2.svg";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0 50px;
`;
const Text = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #6a7076;
  padding: 5px;
`;

const NavBar: React.FC<IProps> = () => {
  return (
    <Root>
      <FlexContainer>
        <Title
          style={{ fontSize: "20px", lineHeight: "28px", textAlign: "left" }}
        >
          The biggest design community on Instagram. <br />
          By designers, for designers.
        </Title>
        <img src={guy1} />
        <img src={guy2} />
        <FlexContainer flexDirection={"column"}>
          <Text style={{ color: "#a9abac" }}>SITEMAP</Text>
          <Text>Share your work</Text>
          <Text>Resources</Text>
          <Text>About us</Text>
          <Text>FAQ</Text>
          <Text>Submit</Text>
        </FlexContainer>
        <FlexContainer flexDirection={"column"}>
          <Text style={{ color: "#a9abac" }}>LEGAL</Text>
          <Text>Privacy Policy</Text>
          <Text>Terms and conditions</Text>
        </FlexContainer>
      </FlexContainer>
    </Root>
  );
};
export default NavBar;
