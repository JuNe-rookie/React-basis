import React from 'react'

/**
 * 目标：B组件中的数据传给A
 * 技术方案：先把B中的数据传给父组件（App），再把App接受到的数据传给B组件
 * @returns 
 */

function SonA(props) {
  const {sendAMsg} = props
  return (
    <div>
      这是SonA&nbsp;&nbsp;
      {sendAMsg}
    </div>
  )
}

function SonB(props) {
  const BMessage = "这是来自于B组件的消息"
  const {getBMessage} = props
  // 按钮的回调函数
  const sendMessage = () => {
    getBMessage(BMessage)
  }
  return (
    <div>
      这是SonB&nbsp;&nbsp;
      <button onClick={sendMessage}>发送数据</button>
    </div>
  )
}

class App extends React.Component {
  state = {
    sendAMsg: ""
  }
  // 声明一个传给B组件的方法
  getBMessage = (msg) => {
    // 把message交给state.sendAMsg
    this.setState({
      sendAMsg: msg
    })
  }
  render() {
    return (
      <>
        <SonA sendAMsg={this.state.sendAMsg}/>
        <SonB getBMessage={this.getBMessage}/>
      </>
    )
  }

}

export default App