import React from 'react'
import Checkbox from './Checkbox.component'

class CheckboxList extends React.Component {
  render(){
    return(
    <div>
      <Checkbox init={true} text="10 hits on Egept" />
      <Checkbox init={true} text="Going out of Egept" />
      <Checkbox
        init={false}
        text="Pass the red sea"
      />
      <Checkbox init={false} text="Give the Torah in Sinai mount" />
    </div>
    // document.getElementById("root")
    )
  }
}

export default CheckboxList;