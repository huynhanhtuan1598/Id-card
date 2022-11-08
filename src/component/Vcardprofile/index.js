import React from "react";
import { render } from "react-dom";
import { CSSTransition } from "react-transition-group";
import VCard from "./components/VCard";
import { StyledApp, StyledButton } from './styles';


const MyButton = props => (
  <StyledButton onClick={props.onClick}>
    {props.show ? `Hide ` : `Show `} VCard
  </StyledButton>
);

class index extends React.Component {
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

      <VCard employee="2" />
    );
  }
}

render(<index />, document.getElementById("root"));
