import React from 'react';
import $ from 'jquery'

class TextBoxField extends React.Component {
	constructor(props) {
        super(props);
        this.setInputValue = this.setInputValue.bind(this);
	}
    componentDidMount() {
		this.setInputValue(this.props.value);
	}
	componentWillReceiveProps(nextProps) {
        this.setInputValue(nextProps.value);
    }
    setInputValue(value) {
		if (!isNaN(value) || value) {
			$('#'+this.props.id).val(value).change();
		}
	}
    render() {
        return (
            <input type="text"
                id={this.props.id}
                minLength= {this.props.minLength}
                maxLength={this.props.maxLength}
                className={this.props.className}
                onChange={this.props.onChange}
            />
        );
    }
}

export default TextBoxField;