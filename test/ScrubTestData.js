import dummyData from '../dummyData.js'

const scrubTestData = (data) => {
  const tenDayArray = [];
  const sevenHourArray = [];

  for (let i = 0; i < 7; i++) {
    sevenHourArray.push({ hour: data.hourly_forecast[i].FCTTIME.civil,
    temp: data.hourly_forecast[i].temp.english, condition: data.hourly_forecast[i].condition });
  }

  for (let i = 0; i < 10; i++) {
    tenDayArray.push({ dayName: data.forecast.simpleforecast.forecastday[i].date.weekday,
      high: data.forecast.simpleforecast.forecastday[i].high.fahrenheit,
      low: data.forecast.simpleforecast.forecastday[i].low.fahrenheit,
      condition: data.forecast.simpleforecast.forecastday[i].conditions });
  }

  const scrubbedData = {
    currentWeather: {
      location: data.current_observation.display_location.full,
      temp: data.current_observation.temp_f,
      condition: data.current_observation.weather,
      high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      summary: data.forecast.txt_forecast.forecastday[0].fcttext,
    },
    sevenHour: sevenHourArray,
    tenDay: tenDayArray,
  };

  return scrubbedData;
}

export default scrubTestData
