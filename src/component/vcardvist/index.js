import React, { Component } from 'react'
import { render } from "react-dom";
import { CSSTransition } from "react-transition-group";
import VCard from "../vcardvist/vcard/";
import { StyledApp, StyledButton } from './styles';

const MyButton = props => (
    <StyledButton onClick={props.onClick}>
      {props.show ? `Hide ` : `Show `} VCard
    </StyledButton>
  );

export default class index extends Component {
    constructor() {
        super();
        this.state = {
          showComp: false
        };
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick() {
        this.setState({
          showComp: !this.state.showComp
        });
      }
  render() {
    return (
      <div>
        <VCard employee="2" />
      </div>
    )
  }
}





