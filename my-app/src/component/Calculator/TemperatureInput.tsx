import React from "react";

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

class TemperatureInput extends React.Component {
    props: {scale: 'c' | 'f', temperature: string, onTemperatureChange: (temperature: string) => void}
    constructor(props: {scale: 'c' | 'f', temperature: string, onTemperatureChange: (temperature: string) => void}) {
      super(props);
      this.props = props
    }
  
    handleChange = (event: React.FormEvent<HTMLInputElement>) => {
      this.props.onTemperatureChange(event.currentTarget.value)
    }
  
    render() {
      const temperature = this.props.temperature;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[this.props.scale]}</legend>
          <input value={temperature} onChange={this.handleChange} />
        </fieldset>
      );
    }
}

export default TemperatureInput