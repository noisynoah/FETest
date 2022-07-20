import React from "react";
import styled from "styled-components";
const BlockpoolMarketMarkingServices1 = () => {
  return (
    <BlockpoolMarketMarkingServicesRoot>
      <Element1 src={`https://file.rendit.io/n/QSQHuXz1FtzidIZcsdDR.png`} />
      <FeaturesSection>
        <Container gap={`32px`}>
          <Content>
            <FlexColumn>
              <HeadingAndSubheading>
                <Heading>Our services</Heading>
              </HeadingAndSubheading>
              <SupportingText>
                Transparency, Trustworthy, and Skillfull
              </SupportingText>
            </FlexColumn>
          </Content>
        </Container>
        <Container gap={`64px`}>
          <Content1>
            <FeatureText>
              <FeaturedIcon>
                <Messagechatcircle
                  src={`https://file.rendit.io/n/22xDNZCOFtAKpkz0jIPR.svg`}
                />
              </FeaturedIcon>
              <FlexColumn1>
                <Text1>TRANSPARENCY</Text1>
                <SupportingText1>
                  We provide clients dashboard to asset their fund and to engage
                  in proprietary trading with us.
                </SupportingText1>
              </FlexColumn1>
            </FeatureText>
            <FeatureText>
              <FeaturedIcon>
                <Messagechatcircle
                  src={`https://file.rendit.io/n/5oC2pRYPfyezEQTcYnhe.svg`}
                />
              </FeaturedIcon>
              <FlexColumn1>
                <Text1>INCUBATION</Text1>
                <SupportingText1>
                  We introduce clients to the first-class exchanges, capitals,
                  media, etc.
                </SupportingText1>
              </FlexColumn1>
            </FeatureText>
            <FeatureText>
              <FeaturedIcon>
                <Messagechatcircle
                  src={`https://file.rendit.io/n/7XNFNc9QsgcoLzjtuPQ7.svg`}
                />
              </FeaturedIcon>
              <FlexColumn1>
                <Text1>REALTIME</Text1>
                <SupportingText1>
                  Realtime managing your token performance via telegram chat bot
                  and dashboard. We monitor project’s community and communicate
                  with clients.
                </SupportingText1>
              </FlexColumn1>
            </FeatureText>
            <FeatureText>
              <FeaturedIcon>
                <Messagechatcircle
                  src={`https://file.rendit.io/n/7XNFNc9QsgcoLzjtuPQ7.svg`}
                />
              </FeaturedIcon>
              <FlexColumn1>
                <Text1>EXPERIENCE TEAM</Text1>
                <SupportingText1>
                  Our team graduated from the world’s top universities and are
                  experts in all process blockchain project strategies.
                </SupportingText1>
              </FlexColumn1>
            </FeatureText>
          </Content1>
        </Container>
      </FeaturesSection>
      <Footer>
        <Container gap={`32px`}>
          <Content2>
            <SocialIcons>
              {[
                {
                  src: `https://file.rendit.io/n/dSB7BKhfu8ADLsREMVAx.svg`,
                },
                {
                  src: `https://file.rendit.io/n/LeT8Nw89iJBOtODxmTC5.svg`,
                },
                {
                  src: `https://file.rendit.io/n/BBQ1suTmdp9KnNiLb5fh.svg`,
                },
                {
                  src: `https://file.rendit.io/n/HCvQ2PncetuuTDnbYHSd.svg`,
                },
              ].map((data) => (
                <Messagechatcircle src={data.src} />
              ))}
            </SocialIcons>
            <LogoTrue>
              <Logotype
                src={`https://file.rendit.io/n/g4r2Ps8WhTNQRHzDbw5T.svg`}
              />
            </LogoTrue>
            <FooterText>© 2077 Untitled UI. All rights reserved.</FooterText>
          </Content2>
        </Container>
      </Footer>
      <FlexColumn5>
        <Text8>BLOCKPOOL</Text8>
        <Text9>Market Marking Services</Text9>
        <Text10>Clear & Clean</Text10>
      </FlexColumn5>
      <LightAccent src={`https://file.rendit.io/n/guyQXdX5qQQhvUr61a4n.png`} />
      <LightAccent1 src={`https://file.rendit.io/n/h8BeuLhBRiD8apjwbeSR.png`} />
      <HeaderNavigation>
        <Container3>
          <Content6 gap={`16px`}>
            <LogoTrue />
            <Content6 gap={`4px`}>
              <NavItemBase backgroundColor={`transparent`}>
                <Text5 color={`#e9e9fd`}>Home</Text5>
              </NavItemBase>
              <NavItemBase backgroundColor={`rgba(74, 71, 191, 0.3)`}>
                <Text5 color={`#ffffff`}>News</Text5>
              </NavItemBase>
              <NavItemBase backgroundColor={`transparent`}>
                <Text5 color={`#e9e9fd`}>Pitchdesk</Text5>
              </NavItemBase>
            </Content6>
          </Content6>
        </Container3>
      </HeaderNavigation>
    </BlockpoolMarketMarkingServicesRoot>
  );
};
export default BlockpoolMarketMarkingServices1;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 32px;
  gap: ${(props) => props.gap};
`;
const FeatureText = styled.div`
  height: 130px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
`;
const FeaturedIcon = styled.div`
  border-color: #3532ae;
  border-style: solid;
  height: 40px;
  background-color: #4947bf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
  padding: 0px 8px;
  border-width: 8px;
`;
const Messagechatcircle = styled.img`
  width: 24px;
  height: 24px;
`;
const FlexColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  min-width: 280px;
`;
const Text1 = styled.div`
  text-align: center;
  font-size: 20px;
  font-family: Inter;
  font-weight: 500;
  line-height: 30px;
  color: #ffffff;
  align-self: stretch;
  min-width: 280px;
`;
const SupportingText1 = styled.div`
  text-align: center;
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
  color: #d1d0f5;
  height: 24px;
  align-self: stretch;
  min-width: 280px;
`;
const LogoTrue = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Content6 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const NavItemBase = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 6px;
  padding: 8px 12px;
  background-color: ${(props) => props.backgroundColor};
`;
const Text5 = styled.div`
  display: flex;
  font-size: 16px;
  font-family: Inter;
  font-weight: 500;
  line-height: 24px;
  flex-direction: row;
  gap: 12px;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => props.color};
`;
const BlockpoolMarketMarkingServicesRoot = styled.div`
  width: 1440px;
  height: 1447px;
  background-color: #000000;
  overflow: hidden;
  position: relative;
`;
const Element1 = styled.img`
  width: 907px;
  height: 1219px;
  position: absolute;
  left: 533px;
`;
const FeaturesSection = styled.div`
  width: 1440px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 64px;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 624px;
  padding: 96px 0px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  min-width: 1216px;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
`;
const HeadingAndSubheading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 768px;
`;
const Heading = styled.div`
  text-align: center;
  font-size: 36px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: -0.72px;
  line-height: 44px;
  color: #ffffff;
  align-self: stretch;
  min-width: 768px;
`;
const SupportingText = styled.div`
  text-align: center;
  width: 768px;
  font-size: 20px;
  font-family: Inter;
  line-height: 30px;
  color: #d1d0f5;
`;
const Content1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 1216px;
`;
const Footer = styled.div`
  width: 1440px;
  background-color: rgba(29, 41, 57, 0.2);
  display: flex;
  flex-direction: column;
  gap: 64px;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 1319px;
  padding: 48px 0px;
`;
const Content2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  min-width: 1216px;
`;
const SocialIcons = styled.div`
  width: 320px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: flex-start;
  align-items: center;
`;
const Logotype = styled.img`
  width: 100px;
  height: 32px;
`;
const FooterText = styled.div`
  text-align: right;
  width: 320px;
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
  color: #98a1b2;
`;
const FlexColumn5 = styled.div`
  display: flex;
  position: absolute;
  top: 287px;
  left: 125px;
  flex-direction: column;
  gap: 21px;
  justify-content: space-between;
  align-items: center;
`;
const Text8 = styled.div`
  text-align: center;
  width: 1190px;
  height: 147px;
  display: flex;
  font-size: 128px;
  font-family: Jura;
  font-weight: 700;
  letter-spacing: 33.92px;
  line-height: 30px;
  color: #f6f6f6;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Text9 = styled.div`
  text-align: center;
  font-size: 20px;
  font-family: Inter;
  font-weight: 500;
  letter-spacing: 19.6px;
  line-height: 30px;
  color: #f6f6f6;
`;
const Text10 = styled.div`
  text-align: center;
  font-size: 16px;
  font-family: Inter;
  font-weight: 500;
  line-height: 24px;
  color: #f6f6f6;
`;
const LightAccent = styled.img`
  width: 926px;
  height: 720px;
  mix-blend-mode: screen;
  position: absolute;
  left: 514px;
`;
const LightAccent1 = styled.img`
  width: 990.49px;
  height: 720px;
  mix-blend-mode: screen;
  position: absolute;
  top: 630.7px;
  left: 449.51px;
`;
const HeaderNavigation = styled.div`
  border-color: rgba(74, 71, 191, 0.74);
  border-style: solid;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 1440px;
  background-color: rgba(54, 50, 174, 0.28);
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  border-width: 0px 0px 1px 0px;
`;
const Container3 = styled.div`
  width: 1216px;
  height: 71px;
  display: flex;
  flex-direction: row;
  gap: 738px;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 32px;
`;
