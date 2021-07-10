import styled from '@emotion/styled';


const Wrapper = styled.section`
  
position: relative;
width: 1440px;
height: 947px;
overflow-y: scroll;

/* Beige */

background: #FFFAF7;

`;

const BackEnd = styled.div`
position: absolute;
width: 125px;
height: 49px;
left: 107px;
top: 131px;

font-family: Noto Sans;
font-style: normal;
font-weight: 600;

font-size: ${props => (props.selected ? "36px": "25px")};
line-height: ${props.selected ? "49px": "34px"};
opacity: ${props.selected ? 1: 0.33}



/* identical to box height */


color: #203241;


`;


const FrontEnd = styled.div`
position: absolute;
width: 144px;
height: 31px;
left: 273px;
top: 149px;

font-family: Noto Sans;
font-style: normal;
font-weight: 600;
// differnece
font-size: 25px;
line-height: 34px;

color: #203241;

opacity: 0.33;



`;


function SecondPage() {
    return (
    <Wrapper>
        <div>
            <BackEnd> 벡엔드 </BackEnd>
            <FrontEnd>프론트엔드</FrontEnd>
        </div>
    </Wrapper>
    );
  }
  
  export default SecondPage;
  