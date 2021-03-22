import React from 'react'

class TextareaValue extends React.Component {
    constructor(props) {
        super(props);
        this.textareaRef = React.createRef();
        this.state = {curText : ""}
    }

    copySelected() {
        this.setState({curText : window.getSelection().toString()})
    }
    
    render() {
        return (
            <div>
                <p>dlfhjdlfldjflkdjsflkdsjfkl</p>
                <textarea ref={this.textareaRef}></textarea>
                <br/>
                <button onClick={() => this.copySelected()}>copy</button>
                <div>{this.state.curText}</div>
            </div>
        )
    }
}

export default TextareaValue;