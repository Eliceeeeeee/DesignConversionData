import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import TextBoxField from './components/TextBoxField';
import PersonCardList from './components/PersonCardList';
import $ from 'jquery'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			show: false,
			page: 1,
			totalPage: 0,
			pageSize: 0,
			personCardList: [],
			previousButtonShow: false,
			nextButtonShow: true,
			errorMessage : ""
		}
		this.createNewPersonCardList = this.createNewPersonCardList.bind(this);
		this.getPersonCardList = this.getPersonCardList.bind(this);
		this.onChangeTextField = this.onChangeTextField.bind(this);
		this.changePaging = this.changePaging.bind(this);
	}
	createNewPersonCardList(){
		const _this = this;
		_this.setState({ show : true, },() => { _this.getPersonCardList() });
	}
	getPersonCardList(){
		const _this = this;
		const url = "https://reqres.in/api/users?page="+ _this.state.page;
		
		$.get(url, function (response) {
			_this.setState({
				page : _this.state.page ? _this.state.page : 1, 
				totalPage: response ? response.total_pages : 0,
				pageSize : response ? response.per_page : 0,
				previousButtonShow : response ? (_this.state.page > 1 ? true : false) : false,
				nextButtonShow : response ? (response.total_pages <=  _this.state.page ? false : true) : true,
				personCardList: response ? response.data : [],
				errorMessage: ""
			});
		}).fail(function () {
			_this.setState({
				errorMessage: "Something went wrong on the API url"
			});
		});
	}
	onChangeTextField(e){
		const _this = this;
		let newPageNo = e.target.value;
		
		if (isNaN(newPageNo)){
			_this.setState({ errorMessage: "Please enter a valid number" });
		}
		// eslint-disable-next-line
		else if(parseInt(newPageNo) === 0)
		{
			_this.setState({ errorMessage: "Page no. cannot less than 1" });
		}
		// eslint-disable-next-line
		else if(parseInt(newPageNo) > parseInt(_this.state.totalPage))
		{
			_this.setState({ errorMessage: "Page no. cannot less more than the total page :" + this.state.totalPage });
		}
		else{
			_this.setState({ page : newPageNo , errorMessage: "" });
		}
	}
	changePaging(nextOrPrevious){
		const _this = this;

		// eslint-disable-next-line
		let newPageNo = nextOrPrevious === "next" ? parseInt(_this.state.page)  + parseInt(1):  parseInt(_this.state.page) - parseInt(1);
		
		// eslint-disable-next-line
		if(parseInt(newPageNo) === 0)
		{
			_this.setState({
				errorMessage: "Page no. cannot less than 1",
			});
		}
		else{
			_this.setState({
				page : newPageNo, 
			}, () => { _this.getPersonCardList() });
		}
	}
  	render() {
		const previousButtonClassName = this.state.previousButtonShow ? "": "hidden ";
		const nextButtonClassName = this.state.nextButtonShow ? "": "hidden ";
    	return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to UI Developer Task – Design Conversion / Data</h1>
				</header>
				<div className="container">
					<Button buttonClassName="main-btn" textValue= "+ Create new" onClick ={this.createNewPersonCardList}/>
				</div>
				<div className={this.state.show ? "": "hidden"}>
					<p className="color-red">{this.state.errorMessage}</p>
					<Button buttonClassName={previousButtonClassName + "paging-btn"}
						textValue= "<" onClick={() => { this.changePaging("previous") }}/>
					<Button buttonClassName="paging-btn" textValue= "Get People" onClick ={this.getPersonCardList}/>
					<TextBoxField className="input-text-field" value={this.state.page} id="input-paging-no"
                		minLength="1" maxLength="2" onChange ={this.onChangeTextField}/>
					<Button buttonClassName={nextButtonClassName + "paging-btn"}
						textValue= ">" onClick={() => { this.changePaging("next") }}/>
					<PersonCardList dataList={this.state.personCardList}/>
				</div>
			</div>
		);
  	}
}

export default App;
