import React from 'react'

class Checkbox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        init: this.props.init,
      };
      this.onChange = this.onChange.bind(this);
    }
  
    onChange(event) {
      this.setState({ init: event.target.checked });
    }
  
    render() {
      return (
        <div>
          <input
            type="checkbox"
            onChange={this.onChange}
            checked={this.state.init}
          />
          <label>{this.props.text}</label>
        </div>
      );
    }
  }
  
export default Checkbox;