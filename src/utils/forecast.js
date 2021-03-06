const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7f6283aefb90be37c3733caeb74ccb19&query=' + latitude + ',' + longitude
    
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            // console.log(body)
            callback(undefined, "Current Temperature is " + body.current.temperature + "°C", "Current humidity is " + body.current.humidity + "%")
        }
    })
}

module.exports = forecast
