import React, { Component, PropTypes } from 'react';
import styles from './Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  componentDidMount() {
    this.input.focus();
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state.text);

    this.setState({
      text: '',
    });
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    return (
      <form className={styles.form} onSubmit={::this.handleSubmit}>
        <input
          ref={(el) => { this.input = el; }}
          value={this.state.text}
          onChange={::this.handleChange}
          type="text"
          className={styles['form-name']}
          placeholder={this.props.inputPlaceholder}
        />
        <button type="submit" className={`${styles['form-button']}`} />
      </form>
    );
  }

}

Form.propTypes = {
  onSubmit: PropTypes.func,
  inputPlaceholder: PropTypes.string,
};

export default Form;
