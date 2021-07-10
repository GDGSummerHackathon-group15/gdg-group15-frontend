import {DropdownButton, Dropdown} from 'react-bootstrap';
import styled from '@emotion/styled';
import React, {Component} from 'react';
import CSS from 'csstype';

function SelectItem(eventKey: any) {

}

type SubProps = {
    menuItems: string[],
    title: string
};



const TurnPaperToLeft = styled.button`
position: absolute;
width: 11px;
height: 38px;
left: 243px;
top: 241px;
border: 4px solid #28628B;
transform: rotate(90deg);
`;

const TurnPaperToRight = styled.button`
position: absolute;
width: 56px;
height: 56px;
left: 1227px;
top: 571px;
transform: matrix(1, 0, 0, -1, 0, 0);

`;


const subButton: CSS.Properties = {
    // position: 'absolute',
    // width: "144px",
    // height: "31px",
    // left: "273px",
    // top: "149px",
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "25px",
    lineHeight: "34px",
    color: "#203241",
    opacity: 0.33
    }

const SubMenu: CSS.Properties = {
    
/* Beige */
background: "#FFFAF7",
borderRadius: "5px"
}

type SubState = {
    dropDowns: any[]
};

const SubMenuText: CSS.Properties = {
background: "#FED1D1",
mixBlendMode: "multiply"
}

class SubDropDown extends React.Component<SubProps, SubState>  {

    constructor(props: any) {
        super(props);
        
      
    }

    makeLeft() {
        
    }

    render() {
        const dropDowns = []

        for(const value of this.props.menuItems) {
            dropDowns.push( <div style={SubMenu}>
                         <Dropdown.Item eventKey={value} style={SubMenuText}>{value}</Dropdown.Item>
                          </div>)
        }
        return (
            <div>

                <DropdownButton id="dropdown-basic-button" title={this.props.title} onSelect = {SelectItem} style={subButton}>
                    <div> 
                        {dropDowns}
                    </div>
              
                </DropdownButton>
            </div>
        );
    }
    
}





export default SubDropDown;