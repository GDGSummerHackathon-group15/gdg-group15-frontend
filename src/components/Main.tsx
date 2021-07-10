import styled from '@emotion/styled';
import GithubLogin from './GithubLogin';

const BackGround = styled.div`
position: relative;
width: 1440px;
height: 947px;
left: 0%;
right: 0%;
top: 0px;
bottom: 145px;
background: linear-gradient(180deg, #FFD7CA 6.25%, #D1F1F8 53.12%);
border: 1px solid #000000;
box-sizing: border-box;
mix-blend-mode: normal;
opacity: 0.44;
backdrop-filter: blur(4px);

border-radius: 5px;`;

const Title = styled.div`
width: 800px
Height: 0px
font-size: 26px
text-align: center
line-height: 35px

width: 127px;
height: 35px;
left: 656px;
top: 43px;

/* Head */

font-family: Noto Sans;
font-style: normal;
font-weight: 800;
font-size: 26px;
line-height: 35px;
margin-left: 550px;
color: #000000;
`;


const InBackground = styled.div`
position: absolute;
left: 9.65%;
right: 9.65%;
top: 170px;
bottom: 145px;
background: #FFFFFF;
mix-blend-mode: normal;
opacity: 0.44;
backdrop-filter: blur(4px);
border-radius: 5px`;

const SubTitle =  styled.div`
position: absolute;
width: 825px;
height: 54px;
left: 22px;
top: 100px;

font-family: Noto Sans;
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 54px;

/* Primary_dark */

color: #203241
opacity: 0.7;
`;

const FrontEndButton = styled.button`
    
position: absolute;
width: 325px;
height: 173px;
left: 217px;
top: 330px;

background: rgba(242, 239, 237, 0.99);
opacity: 0.83;
/* Shadow_button */

box-shadow: 1px 8px 20px -3px rgba(32, 50, 65, 0.5), inset 3px 1px 20px 1px rgba(0, 0, 0, 0.25);
border-radius: 10px;
font-family: Noto Sans;
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 41px;
/* identical to box height */


color: #203241;
`;

const BackEndButton = styled.button`
    
position: absolute;
width: 325px;
height: 173px;
left: 556px;
top: 330px;

background: #28628B;
/* Shadow_hover */

box-shadow: 2px 4px 9px 4px rgba(0, 0, 0, 0.25), inset 13px 14px 22px -3px rgba(32, 50, 65, 0.5);
border-radius: 10px;
font-family: Noto Sans;
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 41px;
/* identical to box height */


color: #FFFFFF;
`;



function Main() {
        return(
            <BackGround>
                <div>
                    <Title>서비스 이름</Title>
                </div>
                <InBackground>
                    <SubTitle>당신이 공부하고 싶고 관심있는 분야를 선택하세요</SubTitle>
                    <FrontEndButton>
                    프론트엔드 <br></br>
                    frontEnd
                    </FrontEndButton>
                    
                    <BackEndButton>
                    벡엔드 <br></br>
                    BackEnd
                    </BackEndButton>
                </InBackground>
            </BackGround>
        );
  }




  export default Main;

