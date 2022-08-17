import './app.css'
import avatar from './images/avatar.png'
import React from 'react'

class Bilibili extends React.Component {
  // 依赖的数据
  state = {
    // hot: 热度排序  time: 时间排序
    tabs: [
      {
        id: 1,
        name: '热度',
        type: 'hot',
      },
      {
        id: 2,
        name: '时间',
        type: 'time',
      },
    ],
    active: 'hot', // 控制tab激活的关键状态
    list: [
      {
        id: 1,
        author: '刘德华',
        comment: '给我一杯忘情水',
        time: new Date('2021-10-10 09:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 1,
      },
      {
        id: 2,
        author: '周杰伦',
        comment: '哎哟，不错哦',
        time: new Date('2021-10-11 09:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 0,
      },
      {
        id: 3,
        author: '五月天',
        comment: '不打扰，是我的温柔',
        time: new Date('2021-10-11 10:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: -1,
      },
    ],
    comment: '', // 评论框中的内容
  }
  // 初始化时间
  formatTime = (time) => {
    return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`
  }

  // tab切换回调
  switchTab = (type) => {
    // 思路：点击谁，就给谁的type属性交给state中的active
    this.setState({
      active: type,
    })
  }
  // 受控组件textarea的回调事件
  textareaChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }
  // 发表评论按钮回调函数
  submitComment = () => {
    // 在 state.list后面添加一项新的
    this.setState({
      list: [
        ...this.state.list,
        {
          id: this.state.list.length + 1,
          author: '刘cp',
          comment: this.state.comment,
          time: new Date(),
          // 1: 点赞 0：无态度 -1:踩
          attitude: 1,
        },
      ],
      // 提交后把输入框置空
      comment: ""
    })
  }
  // 删除按钮回调函数
  deleteComment = (id) => {
    // 使用fliter：filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    })
  }
  render() {
    return (
      <div className="App">
        <div className="comment-container">
          {/* 评论数 */}
          <div className="comment-head">
            <span>{this.state.list.length} 评论</span>
          </div>
          {/* 排序 */}
          <div className="tabs-order">
            <ul className="sort-container">
              {/* tab切换 */}
              {this.state.tabs.map((tab) => (
                <li
                  onClick={() => this.switchTab(tab.type)}
                  key={tab.id}
                  className={tab.type === this.state.active ? 'on' : ''}>
                  按{tab.name}排序
                </li>
              ))}
            </ul>
          </div>
          {/* 添加评论 */}
          <div className="comment-send">
            <div className="user-face">
              <img className="user-head" src={avatar} alt="" />
            </div>
            <div className="textarea-container">
              {/* 输入框 受控组件*/}
              <textarea
                cols="80"
                rows="5"
                placeholder="发条友善的评论"
                className="ipt-txt"
                value={this.state.comment}
                onChange={this.textareaChange}
              />
              <button className="comment-submit" onClick={this.submitComment}>发表评论</button>
            </div>
            <div className="comment-emoji">
              <i className="face"></i>
              <span className="text">表情</span>
            </div>
          </div>

          {/* 评论列表 */}
          <div className="comment-list">
            {this.state.list.map((item) => (
              <div className="list-item" key={item.id}>
                <div className="user-face">
                  <img className="user-head" src={avatar} alt="" />
                </div>
                <div className="comment">
                  <div className="user">{item.author}</div>
                  <p className="text">{item.comment}</p>
                  <div className="info">
                    <span className="time">{this.formatTime(item.time)}</span>
                    <span className={item.attitude === 1 ? 'like liked' : 'like'}>
                      <i className="icon" />
                    </span>
                    <span
                      className={item.attitude === -1 ? 'hate hated' : 'hate'}>
                      <i className="icon" />
                    </span>
                    <span className="reply btn-hover" onClick={() => this.deleteComment(item.id)}>删除</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Bilibili />
    </div>
  )
}

export default App
