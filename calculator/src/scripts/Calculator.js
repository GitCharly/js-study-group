import React from 'react/addons';
import ButtonsContainer from './ButtonsContainer';
import OutputView from './OutputView';

var Calculator = React.createClass({
  getInitialState (){
    var value,
        nextValue,
        operation,
        result,
        numbersEntered,
        valueToDisplay;

    return{
      value: null,
      nextValue:  null,
      operation: null,
      result: null,
      numbersEntered: null,
      valueToDisplay: 0
    };
  },
  add (value, nextValue){
    var result = this.state.result;
    return result = value + nextValue;
  },
  subtract (value, nextValue){
    var result = this.state.result;
    return result = value - nextValue;
  },
  divide (value, nextValue){
    var result = this.state.result;
    return result = value / nextValue;
  },
  multiply (value, nextValue){
    var result = this.state.result;
    return result = value * nextValue;
  },
  setNumbersEntered (numberEntered){
    var numbersEntered = this.state.numbersEntered;
    var valueToDisplay = this.state.valueToDisplay;
    var value = this.state.value;
    var nextValue = this.state.value;
    var operation = this.state.operation;

    if (numbersEntered === null) {
      numbersEntered = numberEntered.toString();
    }
    else {
      numbersEntered = numbersEntered.toString() + numberEntered.toString();
    }

    if (operation === null){
      this.setState({numbersEntered: numbersEntered, value: numbersEntered, valueToDisplay: numbersEntered})
    }
    else {
      this.setState({numbersEntered: numbersEntered, nextValue: numbersEntered, valueToDisplay: numbersEntered})
    }
  },
  setOperation (operation){
    var numbersEntered = this.state.numbersEntered;
    if (operation != "AC"){
      this.setState({operation: operation, numbersEntered: null});
    }
    else {
      this.replaceState(this.getInitialState());
    }
  },
  getResult (value, nextValue, operation){
    var value = this.state.value,
        nextValue = this.state.nextValue,
        operation = this.state.operation,
        result = this.state.result,
        numbersEntered = this.state.numbersEntered,
        valueToDisplay = this.state.valueToDisplay;

    value = parseFloat(value);
    nextValue = parseFloat(nextValue);

    switch(operation) {
        case "+":
            result = this.add(value, nextValue);
            this.setState({result: result, valueToDisplay: result});
            break;
        case "-":
            result = this.subtract(value, nextValue);
            this.setState({result: result, valueToDisplay: result});
            break;
        case "/":
            result = this.divide(value, nextValue);
            this.setState({result: result, valueToDisplay: result});
            break;
        case "x":
            result = this.multiply(value, nextValue);
            this.setState({result: result, valueToDisplay: result});
            break;
    }
  },
  render (){
    var nextValue = this.state.nextValue;
    var numbersEntered = this.state.numbersEntered;
    var result = this.state.result;
    var value = this.state.value;
    var valueToDisplay = this.state.valueToDisplay;

    return (
      <div className="calculator">
          <OutputView
            value={value}
            nextValue={nextValue}
            result={result}
            getResult={this.getResult}
            setValue={this.setValue}
            setNextValue={this.setNextValue}
            setOperation={this.setOperation}
            valueToDisplay={valueToDisplay}/>

          <ButtonsContainer
            value={value}
            nextValue={nextValue}
            result={result}
            valueToDisplay={valueToDisplay}
            numbersEntered={numbersEntered}
            getResult={this.getResult}
            setValue={this.setValue}
            setNextValue={this.setNextValue}
            setOperation={this.setOperation}
            setNumbersEntered={this.setNumbersEntered}/>
      </div>
    )
  }
});

module.exports = Calculator;


