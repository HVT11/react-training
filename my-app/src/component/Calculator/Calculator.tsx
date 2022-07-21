import React from "react";
import TemperatureInput from "./TemperatureInput";
import {toCelsius, toFahrenheit, tryConvert} from "./convert"

interface Temperature {
    temperature: string,
    scale: 'c' | 'f'
}

function BoilingVerdict(props: {celsius: number}) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
    state: Readonly<Temperature>;
    constructor(props: {}) {
        super(props)
        this.state = {
            temperature: '',
            scale: 'c'
        }
    }

    handleCelsiusChange = (temperature: string) => {
        this.setState({scale: 'c', temperature: temperature})
    }

    handleFahrenheitChange = (temperature: string) => {
        this.setState({scale: 'f', temperature: temperature})
    }

    render(): React.ReactNode {
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict celsius={parseFloat(celsius)}/>
            </div>
        )
    }
}

export default Calculator