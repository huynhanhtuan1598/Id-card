import React from "react";
import FileSaver from "file-saver";

class VCardFileCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.employee.firstName,
      lastName: props.employee.lastName,
      title: props.employee.title,
      email: props.employee.email,
      mobile: props.employee.mobile,
      work: props.employee.work,
      location: props.employee.location,
      image: props.employee.image,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    var file = new Blob(
      [
        `BEGIN:VCARD
VERSION:3.0
IMG:${this.state.image};
N:${this.state.lastName};${this.state.firstName};;;
FN:${this.state.firstName} ${this.state.lastName}
TITLE:${this.state.title};
EMAIL;type=INTERNET;type=pref:${this.state.email}
TEL;type=MAIN:${this.state.work}
TEL;type=CELL;type=VOICE;type=pref:${this.state.mobile}
ADR;type=WORK;type=pref:;;;${this.state.location};;;
END:VCARD
`
      ],
      { type: "text/vcard;charset=utf-8" }
    );
    FileSaver.saveAs(
      file,
      `${this.state.firstName}${this.state.lastName}.vcf`,
      true
    );
  }
  render() {
    return (
      <a href="" onClick={this.handleClick} className={this.props.className}>
        {this.state.firstName} {this.state.lastName}
      </a>
    );
  }
}

export default VCardFileCreator;
