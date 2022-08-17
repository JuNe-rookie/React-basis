import React from 'react'


class Counter extends React.Component {
  state = {
    message: "this is message"
  }
  changeInput = (e) => {
    console.log("change事件触发",e)
    // 拿到事件e中的target下的value重新赋值给message
    this.setState({
      message: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.message} onChange={this.changeInput} />
      </div>
    )
  }
}

export {
  Counter
}