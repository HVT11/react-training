const toCelsius = (fahrenheit: number) => {
    return (fahrenheit - 32) * 5 /9
}

const toFahrenheit = (celsius: number) => {
    return (celsius * 9 / 5) + 32
}

const tryConvert = (temperature: string, convert: (input: number) => number) => {
    const input = parseFloat(temperature)
    if(Number.isNaN(input)) {
        return ''
    }
    else {
        return (Math.round(convert(input) * 1000) / 1000).toString()
    }
}

export {
    toCelsius,
    toFahrenheit,
    tryConvert
}