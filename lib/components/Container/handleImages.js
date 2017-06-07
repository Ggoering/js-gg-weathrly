

function handleImages(condition) {
  switch (condition) {
    case 'Chance of Flurries':
      condition = 'Assets/snowing.svg';
      break;
    case 'Chance of Rain':
      condition = 'Assets/raining.svg';
      break;
    case 'Chance of Sleet':
      condition = 'Assets/raining.svg';
      break;
    case 'Chance of Snow':
      condition = 'Assets/snowflake.svg';
      break;
    case 'Chance of a Thunderstorm':
      condition = 'Assets/storm.svg';
      break;
    case 'Clear':
      condition = 'Assets/sunny.svg';
      break;
    case 'Cloudy':
      condition = 'Assets/clouds.svg';
      break;
    case 'Flurries':
      condition = 'Assets/snowflake.svg';
      break;
    case 'Mostly Cloudy':
      condition = 'Assets/clouds.svg';
      break;
    case 'Mostly Sunny':
      condition = 'Assets/clouds-and-sun.svg';
      break;
    case 'Rain':
      condition = 'Assets/raining.svg';
      break;
    case 'Sleet':
      condition = 'Assets/raining.svg';
      break;
    case 'Snow':
      condition = 'Assets/snowing.svg';
      break;
    case 'Sunny':
      condition = 'Assets/sunny.svg';
      break;
    case 'Hazy':
      condition = 'Assets/storm.svg';
      break;
    case 'Partly Cloudy':
      condition = 'Assets/clouds-and-sun.svg';
      break;
    case 'Mostly Sunny':
      condition = 'Assets/storm.svg';
      break;
    case 'Partly Sunny':
      condition = 'Assets/clouds-and-sun.svg';
      break;
    case 'Mostly Cloudy':
      condition = 'Assets/clouds-and-sun.svg';
      break;
    case 'Fog':
      condition = 'Assets/storm.svg';
      break;
    default:
      break;
  }
  return condition
}

export default handleImages
