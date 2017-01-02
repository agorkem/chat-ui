import React, { Component, PropTypes } from 'react';
import styles from './MessageForm.scss';
import Textarea from '../Textarea';
import Button from '../Button';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleSubmit() {
    this.props.onSubmit(this.state.text);

    this.setState({
      text: '',
    });
  }

  handleChange(text) {
    this.setState({
      text,
    });
  }

  render() {
    return (
      <div className={styles['message-form']}>
        <Textarea
          autoFocus
          onSubmit={::this.handleSubmit}
          onChange={::this.handleChange}
          value={this.state.text}
        />
        <Button onClick={::this.handleSubmit}>
          <span className="icon-paperplane" />
        </Button>
      </div>
    );
  }
}

MessageForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default MessageForm;
