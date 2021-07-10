import {DropdownButton, Dropdown} from 'react-bootstrap';
import React, {Component} from 'react';

function SelectItem(eventKey: any) {

}

type SubProps = {
    menuItems: string[]
};

type SubState = {

};

class SubDropDown extends React.Component<SubProps, SubState>  {
    render(){
        const dropDowns = []

        for(const value of this.props.menuItems) {
            dropDowns.push( <Dropdown.Item eventKey={value}>{value}</Dropdown.Item>)
        }
        return (
            <div>
                <DropdownButton id="dropdown-basic-button" title="벡엔드" onSelect = {SelectItem}>
                   {dropDowns}
                </DropdownButton>
            </div>
        );
    }
}





export default SubDropDown;