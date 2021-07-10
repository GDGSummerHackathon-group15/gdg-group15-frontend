import styled from '@emotion/styled';
import SubDropDown from './SubDropDown';


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


export interface Ihash {
    [title: string] : string[];
}

function SecondPage() {
    const area = ["벡엔드", "프론트엔드"]
    
    // const menuItems = [{"벡엔드": ["프레임워크", "데이터베이스"]}, 
    //                    {"프론트엔드": ["html", "css"]}]

    let menuItems: Ihash = {};
    
    menuItems["벡엔드"] =  ["프레임워크", "데이터베이스", "설계/ 아키텍쳐", "NoSql", "메세지 브로커", "API 설계", "기타등등등", "등등등기타"]
    menuItems["프론트엔드"] = ["html", "css", "js", "네트워크", "보안", "웹 어셈블리", "등등등"]

    const SubDropDowns = []

    for(const name of area) {
        SubDropDowns.push(<SubDropDown menuItems={menuItems[name]} title={name}></SubDropDown>)
    }
        

    return (
    <Wrapper>
        <div>
            
             {SubDropDowns}
        </div>
    </Wrapper>
    );
  }
  
  export default SecondPage;
  