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

class App extends React.Component {
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
      //       <StyledApp>
      //         <MyButton onClick={this.handleClick} show={this.state.showComp} />
      // {/*         
      //         <CSSTransition
      //           in={this.state.showComp}
      //           timeout={600}
      //           classNames="fade"
      //           mountOnEnter
      //           unmountOnExit
      //         > */}
      //           <VCard employee="2" />
      //         {/* </CSSTransition> */}
      //         {/* <p className='hint'>
      //           {this.state.showComp ? 'Click on the back or right side to flip card': ''}
      //         </p>
      //         <p className='hint'>
      //           {this.state.showComp ? 'Click on the Name to download VCard' : ''} */}
      //         {/* </p> */}

      //       </StyledApp>
      <VCard employee="2" />
    );
  }
}

render(<App />, document.getElementById("root"));
