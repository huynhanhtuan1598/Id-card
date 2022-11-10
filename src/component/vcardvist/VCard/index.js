import React from "react";
import VCardFileCreator from '../vcradcreator/index';
import employees from "./employees.json";
// import { StyledContainer, StyledVCardFront, StyledVCardBack } from './styles';

class VCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeID: this.props.employee,
      employee: employees.filter(employee => {
        return employee.employeeID === this.props.employee;
      })[0],
      isFrontSide: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.employee !== this.state.employeeID) {
      this.setState({
        employeeID: nextProps.employee,
        employee: employees.filter(employee => {
          return employee.employeeID === nextProps.employee;
        })[0]
      });
    }
  }
  handleClick() {
    this.setState(() => ({
      isFrontSide: !this.state.isFrontSide
    }));
  }

  render() {
    return (
      <div className="left-half">
        <VCardFileCreator employee={this.state.employee} className='name' />
      </div>
    );
  }
}

export default VCard;
