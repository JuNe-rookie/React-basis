import { Input, Table, Space, Popconfirm } from 'antd'
import React from 'react'
import './App.css'
import { getJsonData, deleteJsonData, searchJsonData } from './api/index'

const { Search } = Input

class App extends React.Component {
	state = {
		// 列表数据
		list: [],
		// 表头
		columns: [
			{
				title: '任务编号',
				dataIndex: 'id',
				key: 'id',
			},
			{
				title: '任务名称',
				dataIndex: 'name',
				key: 'name',
			},
			{
				title: '任务描述',
				dataIndex: 'des',
				key: 'des',
			},
			{
				title: '操作',
				dataIndex: 'do',
				key: 'do',
				render: (_, record) => (
					<Space size="middle">
						<Popconfirm title="确定要删除吗?"
							onConfirm={() => this.handleDelete(record)} key={record.id}>
							<a href="#">删除</a>
						</Popconfirm>
					</Space>
				),
			},
		],
	}

	// 搜索
	onSearch = (value) => {
		searchJsonData(value).then(res => {
			console.log(res);
			this.setState({
				list: res
			})
		})
	}
	// 删除
	handleDelete = (record) => {
		deleteJsonData(record.id)
		this.loadList()
	}
	// 加载列表
	loadList =() => {
		getJsonData().then(res => {
			this.setState({
				list: res
			})
		})
	}

	// 在componentDidMount生命周期里面发送请求
	componentDidMount() {
		this.loadList()
	}
	render() {
		return (
			<div className="container">
				<div className="search-box">
					{/* onSearch是点击搜索图标、清除图标，或按下回车键时的回调函数 */}
					<Search
						placeholder="请输入关键词"
						allowClear
						enterButton="搜索"
						size="large"
						onChange={this.inputChange}
						value={this.state.keyword}
						onSearch={this.onSearch}
					/>
				</div>
				<Table bordered dataSource={this.state.list} columns={this.state.columns} pagination={false} />
			</div>
		)
	}
}

export default App
