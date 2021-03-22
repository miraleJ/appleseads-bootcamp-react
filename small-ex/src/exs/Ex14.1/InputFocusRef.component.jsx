import React from 'react'

class InputFocusRef extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    
    componentDidMount() {
        console.log(this.inputRef.current);
        this.inputRef.current.focus()
    }

    render() {
        return(
            <div>
                <input ref={this.inputRef}></input>
            </div>
        )
    }
}

export default InputFocusRef;