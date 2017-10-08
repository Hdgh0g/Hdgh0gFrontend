import React, {Component} from 'react'
import "./LabeledInput.css"

class LabeledInput extends Component {
  render() {
    return (
      <div className="labeled-input">
        <label>{this.props.label}</label>
        <input type="text"
               onChange={(e) => this.updateText(e)}
               onKeyUp={(key) => this.handleInputKeyUp(key)}/>
      </div>
    );
  }

  updateText(evt) {
    this.props.onChange(evt.target.value);
  }

  handleInputKeyUp(key) {
    if (key.key === "Enter") {
      this.props.onEnter();
    }
  }
}

export default LabeledInput
