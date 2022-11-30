import React from 'react';
import Controls from 'components/Counter/Controls';
import './Counter.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };
  hendleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.hendleDecrement}
        />
        {/* <div className="Counter__conrtols">
          <button tytpe="button" onClick={this.handleIncrement}>
            Збільшити на 1
          </button>
          <button tytpe="button" onClick={this.hendleDecrement}>
            Зменшити на 1
          </button>
        </div> */}
      </div>
    );
  }
}
export default Counter;
