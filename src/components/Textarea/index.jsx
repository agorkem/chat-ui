import React, { Component, PropTypes } from 'react';
import styles from './Textarea.scss';

class Textarea extends Component {
  componentDidMount() {
    if (this.props.autoFocus) {
      this.textarea.focus();
    }
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.onSubmit();
    }
  }

  render() {
    return (
      <textarea
        ref={(el) => { this.textarea = el; }}
        className={styles.textarea}
        onChange={(e) => { this.props.onChange(e.target.value); }}
        onKeyDown={::this.handleKeyDown}
        value={this.props.value}
        placeholder="Message"
      />
    );
  }
}

Textarea.defaultProps = {
  autoFocus: false,
};

Textarea.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
};

export default Textarea;
