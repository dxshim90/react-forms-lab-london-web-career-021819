import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  onChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        {this.props.maxChars - this.state.value.length}
        <input
          maxLength={this.props.maxChars}
          type="text"
          name="message"
          id="message"
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default TwitterMessage;
