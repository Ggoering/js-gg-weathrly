
const dummyData = {
  "response": {
  "version":"0.1",
  "termsofService":"http://www.wunderground.com/weather/api/d/terms.html",
  "features": {
  "conditions": 1
  ,
  "hourly": 1
  ,
  "forecast10day": 1
  }
	}
  ,	"current_observation": {
		"image": {
		"url":"http://icons.wxug.com/graphics/wu2/logo_130x80.png",
		"title":"Weather Underground",
		"link":"http://www.wunderground.com"
		},
		"display_location": {
		"full":"San Francisco, CA",
		"city":"San Francisco",
		"state":"CA",
		"state_name":"California",
		"country":"US",
		"country_iso3166":"US",
		"zip":"94102",
		"magic":"1",
		"wmo":"99999",
		"latitude":"37.77999878",
		"longitude":"-122.41999817",
		"elevation":"60.0"
		},
		"observation_location": {
		"full":"SOMA, San Francisco, California",
		"city":"SOMA, San Francisco",
		"state":"California",
		"country":"US",
		"country_iso3166":"US",
		"latitude":"37.778488",
		"longitude":"-122.408005",
		"elevation":"23 ft"
		},
		"estimated": {
		},
		"station_id":"KCASANFR131",
		"observation_time":"Last Updated on May 31, 1:10 PM PDT",
		"observation_time_rfc822":"Wed, 31 May 2017 13:10:38 -0700",
		"observation_epoch":"1496261438",
		"local_time_rfc822":"Wed, 31 May 2017 13:10:48 -0700",
		"local_epoch":"1496261448",
		"local_tz_short":"PDT",
		"local_tz_long":"America/Los_Angeles",
		"local_tz_offset":"-0700",
		"weather":"Clear",
		"temperature_string":"64.9 F (18.3 C)",
		"temp_f":64.9,
		"temp_c":18.3,
		"relative_humidity":"67%",
		"wind_string":"From the SW at 5.0 MPH Gusting to 11.0 MPH",
		"wind_dir":"SW",
		"wind_degrees":221,
		"wind_mph":5.0,
		"wind_gust_mph":"11.0",
		"wind_kph":8.0,
		"wind_gust_kph":"17.7",
		"pressure_mb":"1015",
		"pressure_in":"29.98",
		"pressure_trend":"+",
		"dewpoint_string":"54 F (12 C)",
		"dewpoint_f":54,
		"dewpoint_c":12,
		"heat_index_string":"NA",
		"heat_index_f":"NA",
		"heat_index_c":"NA",
		"windchill_string":"NA",
		"windchill_f":"NA",
		"windchill_c":"NA",
		"feelslike_string":"64.9 F (18.3 C)",
		"feelslike_f":"64.9",
		"feelslike_c":"18.3",
		"visibility_mi":"10.0",
		"visibility_km":"16.1",
		"solarradiation":"912",
		"UV":"7.4","precip_1hr_string":"0.00 in ( 0 mm)",
		"precip_1hr_in":"0.00",
		"precip_1hr_metric":" 0",
		"precip_today_string":"0.00 in (0 mm)",
		"precip_today_in":"0.00",
		"precip_today_metric":"0",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"forecast_url":"http://www.wunderground.com/US/CA/San_Francisco.html",
		"history_url":"http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KCASANFR131",
		"ob_url":"http://www.wunderground.com/cgi-bin/findweather/getForecast?query=37.778488,-122.408005",
		"nowcast":""
	}
		,
	"forecast":{
		"txt_forecast": {
		"date":"11:54 AM PDT",
		"forecastday": [
		{
		"period":0,
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"title":"Wednesday",
		"fcttext":"Windy with a mix of clouds and sun. Slight chance of a rain shower. High 67F. Winds W at 20 to 30 mph.",
		"fcttext_metric":"Windy with a mix of clouds and sun. Slight chance of a rain shower. High 18C. Winds W at 30 to 50 km/h.",
		"pop":"0"
		}
		,
		{
		"period":1,
		"icon":"nt_fog",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_fog.gif",
		"title":"Wednesday Night",
		"fcttext":"Partly cloudy this evening. Fog developing late. Low around 55F. Winds W at 15 to 25 mph.",
		"fcttext_metric":"Partly cloudy skies during the evening will give way to considerable cloudiness and fog after midnight. Low 13C. Winds W at 25 to 40 km/h.",
		"pop":"20"
		}
		,
		{
		"period":2,
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"title":"Thursday",
		"fcttext":"Becoming partly cloudy and windy. High near 65F. Winds W at 20 to 30 mph.",
		"fcttext_metric":"Mostly cloudy in the morning followed by partly cloudy skies and gusty winds during the afternoon. High 18C. Winds W at 30 to 50 km/h.",
		"pop":"20"
		}
		,
		{
		"period":3,
		"icon":"nt_clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"title":"Thursday Night",
		"fcttext":"Clear skies. Low 53F. Winds W at 15 to 25 mph.",
		"fcttext_metric":"A mostly clear sky. Low 11C. Winds W at 25 to 40 km/h.",
		"pop":"10"
		}
		,
		{
		"period":4,
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"title":"Friday",
		"fcttext":"Sunny. High 67F. WSW winds at 5 to 10 mph, increasing to 15 to 25 mph.",
		"fcttext_metric":"Sunny. High 19C. WSW winds at 10 to 15 km/h, increasing to 25 to 40 km/h.",
		"pop":"10"
		}
		,
		{
		"period":5,
		"icon":"nt_clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"title":"Friday Night",
		"fcttext":"Mainly clear skies. Low 53F. Winds W at 10 to 20 mph.",
		"fcttext_metric":"Generally fair. Low 11C. Winds W at 15 to 30 km/h.",
		"pop":"10"
		}
		,
		{
		"period":6,
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"title":"Saturday",
		"fcttext":"A few passing clouds, otherwise generally sunny. High 64F. Winds WSW at 15 to 25 mph.",
		"fcttext_metric":"A few clouds early, otherwise mostly sunny. High 17C. Winds WSW at 25 to 40 km/h.",
		"pop":"10"
		}
		,
		{
		"period":7,
		"icon":"nt_clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"title":"Saturday Night",
		"fcttext":"A mostly clear sky. Low 52F. Winds W at 15 to 25 mph.",
		"fcttext_metric":"Clear skies. Low 11C. Winds W at 25 to 40 km/h.",
		"pop":"10"
		}
		,
		{
		"period":8,
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"title":"Sunday",
		"fcttext":"Sunny. Becoming windy late. High around 65F. Winds W at 20 to 30 mph.",
		"fcttext_metric":"Sunny with gusty winds. High 18C. Winds W at 30 to 50 km/h.",
		"pop":"10"
		}
		,
		{
		"period":9,
		"icon":"nt_partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"title":"Sunday Night",
		"fcttext":"Clear skies. Gusty winds early. Low 52F. WNW winds at 20 to 30 mph, decreasing to 5 to 10 mph.",
		"fcttext_metric":"Clear. Windy early. Low 11C. WNW winds at 30 to 50 km/h, decreasing to 10 to 15 km/h.",
		"pop":"10"
		}
		,
		{
		"period":10,
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"title":"Monday",
		"fcttext":"Sunny skies. High 69F. Winds W at 15 to 25 mph.",
		"fcttext_metric":"A mainly sunny sky. High around 20C. Winds W at 25 to 40 km/h.",
		"pop":"10"
		}
		,
		{
		"period":11,
		"icon":"nt_clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"title":"Monday Night",
		"fcttext":"A mostly clear sky. Low 53F. Winds WSW at 10 to 20 mph.",
		"fcttext_metric":"Clear. Low 11C. Winds WSW at 15 to 30 km/h.",
		"pop":"10"
		}
		,
		{
		"period":12,
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"title":"Tuesday",
		"fcttext":"Mainly sunny. High 67F. Winds WSW at 15 to 25 mph.",
		"fcttext_metric":"Sunny. High 19C. Winds WSW at 15 to 30 km/h.",
		"pop":"10"
		}
		,
		{
		"period":13,
		"icon":"nt_clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"title":"Tuesday Night",
		"fcttext":"A few clouds overnight. Low 53F. Winds WSW at 10 to 20 mph.",
		"fcttext_metric":"Mainly clear early, then a few clouds later on. Low 11C. Winds WSW at 15 to 30 km/h.",
		"pop":"10"
		}
		,
		{
		"period":14,
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"title":"Wednesday",
		"fcttext":"Partly cloudy. High 64F. Winds WSW at 15 to 25 mph.",
		"fcttext_metric":"Partly cloudy skies. High 17C. Winds WSW at 15 to 30 km/h.",
		"pop":"10"
		}
		,
		{
		"period":15,
		"icon":"nt_partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"title":"Wednesday Night",
		"fcttext":"A few clouds. Low 54F. Winds WSW at 10 to 20 mph.",
		"fcttext_metric":"A few clouds from time to time. Low 12C. Winds WSW at 15 to 30 km/h.",
		"pop":"10"
		}
		,
		{
		"period":16,
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"title":"Thursday",
		"fcttext":"Partly cloudy. High 63F. Winds WSW at 15 to 25 mph.",
		"fcttext_metric":"Partly cloudy. High 17C. Winds WSW at 25 to 40 km/h.",
		"pop":"10"
		}
		,
		{
		"period":17,
		"icon":"nt_clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"title":"Thursday Night",
		"fcttext":"Mostly clear. Low 54F. Winds W at 15 to 25 mph.",
		"fcttext_metric":"Mostly clear. Low 12C. Winds W at 15 to 30 km/h.",
		"pop":"10"
		}
		,
		{
		"period":18,
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"title":"Friday",
		"fcttext":"Generally sunny despite a few afternoon clouds. High 66F. Winds W at 15 to 25 mph.",
		"fcttext_metric":"Sunny along with a few clouds. High 18C. Winds W at 25 to 40 km/h.",
		"pop":"10"
		}
		,
		{
		"period":19,
		"icon":"nt_partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"title":"Friday Night",
		"fcttext":"A few clouds from time to time. Low 53F. Winds W at 10 to 20 mph.",
		"fcttext_metric":"A few clouds from time to time. Low 11C. Winds WNW at 15 to 30 km/h.",
		"pop":"10"
		}
		]
		},
		"simpleforecast": {
		"forecastday": [
		{"date":{
	"epoch":"1496282400",
	"pretty":"7:00 PM PDT on May 31, 2017",
	"day":31,
	"month":5,
	"year":2017,
	"yday":150,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"May",
	"monthname_short":"May",
	"weekday_short":"Wed",
	"weekday":"Wednesday",
	"ampm":"PM",
	"tz_short":"PDT",
	"tz_long":"America/Los_Angeles"
},
		"period":1,
		"high": {
		"fahrenheit":"67",
		"celsius":"19"
		},
		"low": {
		"fahrenheit":"55",
		"celsius":"13"
		},
		"conditions":"Partly Cloudy",
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"skyicon":"",
		"pop":0,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 30,
		"kph": 48,
		"dir": "W",
		"degrees": 264
		},
		"avewind": {
		"mph": 21,
		"kph": 34,
		"dir": "W",
		"degrees": 264
		},
		"avehumidity": 74,
		"maxhumidity": 87,
		"minhumidity": 63
		}
		,
		{"date":{
	"epoch":"1496368800",
	"pretty":"7:00 PM PDT on June 01, 2017",
	"day":1,
	"month":6,
	"year":2017,
	"yday":151,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"June",
	"monthname_short":"Jun",
	"weekday_short":"Thu",
	"weekday":"Thursday",
	"ampm":"PM",
	"tz_short":"PDT",
	"tz_long":"America/Los_Angeles"
},
		"period":2,
		"high": {
		"fahrenheit":"65",
		"celsius":"18"
		},
		"low": {
		"fahrenheit":"53",
		"celsius":"12"
		},
		"conditions":"Partly Cloudy",
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"skyicon":"",
		"pop":20,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 30,
		"kph": 48,
		"dir": "W",
		"degrees": 262
		},
		"avewind": {
		"mph": 20,
		"kph": 32,
		"dir": "W",
		"degrees": 262
		},
		"avehumidity": 81,
		"maxhumidity": 90,
		"minhumidity": 68
		}
		,
		{"date":{
	"epoch":"1496455200",
	"pretty":"7:00 PM PDT on June 02, 2017",
	"day":2,
	"month":6,
	"year":2017,
	"yday":152,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"June",
	"monthname_short":"Jun",
	"weekday_short":"Fri",
	"weekday":"Friday",
	"ampm":"PM",
	"tz_short":"PDT",
	"tz_long":"America/Los_Angeles"
},
		"period":3,
		"high": {
		"fahrenheit":"67",
		"celsius":"19"
		},
		"low": {
		"fahrenheit":"53",
		"celsius":"12"
		},
		"conditions":"Clear",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"skyicon":"",
		"pop":10,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 25,
		"kph": 40,
		"dir": "WSW",
		"degrees": 257
		},
		"avewind": {
		"mph": 18,
		"kph": 29,
		"dir": "WSW",
		"degrees": 257
		},
		"avehumidity": 75,
		"maxhumidity": 85,
		"minhumidity": 60
		}
		,
		{"date":{
	"epoch":"1496541600",
	"pretty":"7:00 PM PDT on June 03, 2017",
	"day":3,
	"month":6,
	"year":2017,
	"yday":153,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"June",
	"monthname_short":"Jun",
	"weekday_short":"Sat",
	"weekday":"Saturday",
	"ampm":"PM",
	"tz_short":"PDT",
	"tz_long":"America/Los_Angeles"
},
		"period":4,
		"high": {
		"fahrenheit":"64",
		"celsius":"18"
		},
		"low": {
		"fahrenheit":"52",
		"celsius":"11"
		},
		"conditions":"Clear",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"skyicon":"",
		"pop":10,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 25,
		"kph": 40,
		"dir": "WSW",
		"degrees": 256
		},
		"avewind": {
		"mph": 18,
		"kph": 29,
		"dir": "WSW",
		"degrees": 256
		},
		"avehumidity": 81,
		"maxhumidity": 89,
		"minhumidity": 69
		}
		,
		{"date":{
	"epoch":"1496628000",
	"pretty":"7:00 PM PDT on June 04, 2017",
	"day":4,
	"month":6,
	"year":2017,
	"yday":154,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"June",
	"monthname_short":"Jun",
	"weekday_short":"Sun",
	"weekday":"Sunday",
	"ampm":"PM",
	"tz_short":"PDT",
	"tz_long":"America/Los_Angeles"
},
		"period":5,
		"high": {
		"fahrenheit":"65",
		"celsius":"18"
		},
		"low": {
		"fahrenheit":"52",
		"celsius":"11"
		},
		"conditions":"Partly Cloudy",
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"skyicon":"",
		"pop":10,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 30,
		"kph": 48,
		"dir": "W",
		"degrees": 278
		},
		"avewind": {
		"mph": 24,
		"kph": 39,
		"dir": "W",
		"degrees": 278
		},
		"avehumidity": 73,
		"maxhumidity": 87,
		"minhumidity": 57
		}
		,
		{"date":{
	"epoch":"1496714400",
	"pretty":"7:00 PM PDT on June 05, 2017",
	"day":5,
	"month":6,
	"year":2017,
	"yday":155,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"June",
	"monthname_short":"Jun",
	"weekday_short":"Mon",
	"weekday":"Monday",
	"ampm":"PM",
	"tz_short":"PDT",
	"tz_long":"America/Los_Angeles"
},
		"period":6,
		"high": {
		"fahrenheit":"69",
		"celsius":"21"
		},
		"low": {
		"fahrenheit":"53",
		"celsius":"12"
		},
		"conditions":"Clear",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"skyicon":"",
		"pop":10,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 25,
		"kph": 40,
		"dir": "W",
		"degrees": 273
		},
		"avewind": {
		"mph": 18,
		"kph": 29,
		"dir": "W",
		"degrees": 273
		},
		"avehumidity": 69,
		"maxhumidity": 82,
		"minhumidity": 52
		}
		,
		{"date":{
	"epoch":"1496800800",
	"pretty":"7:00 PM PDT on June 06, 2017",
	"day":6,
	"month":6,
	"year":2017,
	"yday":156,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"June",
	"monthname_short":"Jun",
	"weekday_short":"Tue",
	"weekday":"Tuesday",
	"ampm":"PM",
	"tz_short":"PDT",
	"tz_long":"America/Los_Angeles"
},
		"period":7,
		"high": {
		"fahrenheit":"67",
		"celsius":"19"
		},
		"low": {
		"fahrenheit":"53",
		"celsius":"12"
		},
		"conditions":"Clear",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"skyicon":"",
		"pop":10,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 25,
		"kph": 40,
		"dir": "WSW",
		"degrees": 251
		},
		"avewind": {
		"mph": 17,
		"kph": 27,
		"dir": "WSW",
		"degrees": 251
		},
		"avehumidity": 74,
		"maxhumidity": 84,
		"minhumidity": 58
		}
		,
		{"date":{
	"epoch":"1496887200",
	"pretty":"7:00 PM PDT on June 07, 2017",
	"day":7,
	"month":6,
	"year":2017,
	"yday":157,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"June",
	"monthname_short":"Jun",
	"weekday_short":"Wed",
	"weekday":"Wednesday",
	"ampm":"PM",
	"tz_short":"PDT",
	"tz_long":"America/Los_Angeles"
},
		"period":8,
		"high": {
		"fahrenheit":"64",
		"celsius":"18"
		},
		"low": {
		"fahrenheit":"54",
		"celsius":"12"
		},
		"conditions":"Partly Cloudy",
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"skyicon":"",
		"pop":10,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 25,
		"kph": 40,
		"dir": "WSW",
		"degrees": 240
		},
		"avewind": {
		"mph": 17,
		"kph": 27,
		"dir": "WSW",
		"degrees": 240
		},
		"avehumidity": 80,
		"maxhumidity": 90,
		"minhumidity": 69
		}
		,
		{"date":{
	"epoch":"1496973600",
	"pretty":"7:00 PM PDT on June 08, 2017",
	"day":8,
	"month":6,
	"year":2017,
	"yday":158,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"June",
	"monthname_short":"Jun",
	"weekday_short":"Thu",
	"weekday":"Thursday",
	"ampm":"PM",
	"tz_short":"PDT",
	"tz_long":"America/Los_Angeles"
},
		"period":9,
		"high": {
		"fahrenheit":"63",
		"celsius":"17"
		},
		"low": {
		"fahrenheit":"54",
		"celsius":"12"
		},
		"conditions":"Partly Cloudy",
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"skyicon":"",
		"pop":10,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 25,
		"kph": 40,
		"dir": "WSW",
		"degrees": 245
		},
		"avewind": {
		"mph": 17,
		"kph": 27,
		"dir": "WSW",
		"degrees": 245
		},
		"avehumidity": 81,
		"maxhumidity": 90,
		"minhumidity": 71
		}
		,
		{"date":{
	"epoch":"1497060000",
	"pretty":"7:00 PM PDT on June 09, 2017",
	"day":9,
	"month":6,
	"year":2017,
	"yday":159,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"June",
	"monthname_short":"Jun",
	"weekday_short":"Fri",
	"weekday":"Friday",
	"ampm":"PM",
	"tz_short":"PDT",
	"tz_long":"America/Los_Angeles"
},
		"period":10,
		"high": {
		"fahrenheit":"66",
		"celsius":"19"
		},
		"low": {
		"fahrenheit":"53",
		"celsius":"12"
		},
		"conditions":"Clear",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"skyicon":"",
		"pop":10,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 25,
		"kph": 40,
		"dir": "W",
		"degrees": 267
		},
		"avewind": {
		"mph": 18,
		"kph": 29,
		"dir": "W",
		"degrees": 267
		},
		"avehumidity": 82,
		"maxhumidity": 92,
		"minhumidity": 69
		}
		]
		}
	}
		,
	"hourly_forecast": [
		{
		"FCTTIME": {
		"hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "31","mday_padded": "31","yday": "150","isdst": "1","epoch": "1496264400","pretty": "2:00 PM PDT on May 31, 2017","civil": "2:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "64", "metric": "18"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "15",
		"wspd": {"english": "20", "metric": "32"},
		"wdir": {"dir": "W", "degrees": "263"},
		"wx": "Sunny/Wind",
		"uvi": "9",
		"humidity": "63",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "64", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "31","mday_padded": "31","yday": "150","isdst": "1","epoch": "1496268000","pretty": "3:00 PM PDT on May 31, 2017","civil": "3:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "65", "metric": "18"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "13",
		"wspd": {"english": "21", "metric": "34"},
		"wdir": {"dir": "W", "degrees": "264"},
		"wx": "Sunny/Wind",
		"uvi": "7",
		"humidity": "63",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "65", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "31","mday_padded": "31","yday": "150","isdst": "1","epoch": "1496271600","pretty": "4:00 PM PDT on May 31, 2017","civil": "4:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "64", "metric": "18"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "13",
		"wspd": {"english": "22", "metric": "35"},
		"wdir": {"dir": "W", "degrees": "264"},
		"wx": "Sunny/Wind",
		"uvi": "5",
		"humidity": "67",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "64", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "31","mday_padded": "31","yday": "150","isdst": "1","epoch": "1496275200","pretty": "5:00 PM PDT on May 31, 2017","civil": "5:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "64", "metric": "18"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "13",
		"wspd": {"english": "20", "metric": "32"},
		"wdir": {"dir": "W", "degrees": "264"},
		"wx": "Sunny/Wind",
		"uvi": "3",
		"humidity": "70",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "64", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "31","mday_padded": "31","yday": "150","isdst": "1","epoch": "1496278800","pretty": "6:00 PM PDT on May 31, 2017","civil": "6:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "62", "metric": "17"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "20",
		"wspd": {"english": "19", "metric": "31"},
		"wdir": {"dir": "W", "degrees": "265"},
		"wx": "Mostly Sunny",
		"uvi": "1",
		"humidity": "74",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "62", "metric": "17"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "31","mday_padded": "31","yday": "150","isdst": "1","epoch": "1496282400","pretty": "7:00 PM PDT on May 31, 2017","civil": "7:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "60", "metric": "16"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "30",
		"wspd": {"english": "18", "metric": "29"},
		"wdir": {"dir": "W", "degrees": "267"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "79",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "60", "metric": "16"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "8",
		"mslp": {"english": "29.93", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "31","mday_padded": "31","yday": "150","isdst": "1","epoch": "1496286000","pretty": "8:00 PM PDT on May 31, 2017","civil": "8:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "59", "metric": "15"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "30",
		"wspd": {"english": "16", "metric": "26"},
		"wdir": {"dir": "W", "degrees": "268"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "82",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "59", "metric": "15"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "8",
		"mslp": {"english": "29.93", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "31","mday_padded": "31","yday": "150","isdst": "1","epoch": "1496289600","pretty": "9:00 PM PDT on May 31, 2017","civil": "9:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "58", "metric": "14"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "44",
		"wspd": {"english": "15", "metric": "24"},
		"wdir": {"dir": "W", "degrees": "266"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "86",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "58", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "10",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "31","mday_padded": "31","yday": "150","isdst": "1","epoch": "1496293200","pretty": "10:00 PM PDT on May 31, 2017","civil": "10:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "57", "metric": "14"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "50",
		"wspd": {"english": "14", "metric": "23"},
		"wdir": {"dir": "W", "degrees": "265"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "87",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "57", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "12",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "31","mday_padded": "31","yday": "150","isdst": "1","epoch": "1496296800","pretty": "11:00 PM PDT on May 31, 2017","civil": "11:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "57", "metric": "14"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "56",
		"wspd": {"english": "14", "metric": "23"},
		"wdir": {"dir": "W", "degrees": "263"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "87",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "57", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "13",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496300400","pretty": "12:00 AM PDT on June 01, 2017","civil": "12:00 AM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "57", "metric": "14"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "58",
		"wspd": {"english": "13", "metric": "21"},
		"wdir": {"dir": "W", "degrees": "261"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "86",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "57", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496304000","pretty": "1:00 AM PDT on June 01, 2017","civil": "1:00 AM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "57", "metric": "14"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
		"fctcode": "3",
		"sky": "60",
		"wspd": {"english": "13", "metric": "21"},
		"wdir": {"dir": "W", "degrees": "263"},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "87",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "57", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "19",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496307600","pretty": "2:00 AM PDT on June 01, 2017","civil": "2:00 AM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "57", "metric": "14"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Fog",
		"icon": "fog",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_fog.gif",
		"fctcode": "6",
		"sky": "100",
		"wspd": {"english": "12", "metric": "19"},
		"wdir": {"dir": "W", "degrees": "262"},
		"wx": "Foggy",
		"uvi": "0",
		"humidity": "87",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "57", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "19",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496311200","pretty": "3:00 AM PDT on June 01, 2017","civil": "3:00 AM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "57", "metric": "14"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Fog",
		"icon": "fog",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_fog.gif",
		"fctcode": "6",
		"sky": "100",
		"wspd": {"english": "12", "metric": "19"},
		"wdir": {"dir": "W", "degrees": "262"},
		"wx": "Foggy",
		"uvi": "0",
		"humidity": "88",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "57", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "23",
		"mslp": {"english": "29.93", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496314800","pretty": "4:00 AM PDT on June 01, 2017","civil": "4:00 AM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "57", "metric": "14"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Fog",
		"icon": "fog",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_fog.gif",
		"fctcode": "6",
		"sky": "100",
		"wspd": {"english": "11", "metric": "18"},
		"wdir": {"dir": "W", "degrees": "261"},
		"wx": "Foggy",
		"uvi": "0",
		"humidity": "88",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "57", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "21",
		"mslp": {"english": "29.93", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496318400","pretty": "5:00 AM PDT on June 01, 2017","civil": "5:00 AM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "57", "metric": "14"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Fog",
		"icon": "fog",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_fog.gif",
		"fctcode": "6",
		"sky": "100",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "W", "degrees": "259"},
		"wx": "Foggy",
		"uvi": "0",
		"humidity": "88",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "57", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "16",
		"mslp": {"english": "29.93", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496322000","pretty": "6:00 AM PDT on June 01, 2017","civil": "6:00 AM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "56", "metric": "13"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Fog",
		"icon": "fog",
		"icon_url":"http://icons.wxug.com/i/c/k/fog.gif",
		"fctcode": "6",
		"sky": "100",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "W", "degrees": "261"},
		"wx": "Foggy",
		"uvi": "0",
		"humidity": "88",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "56", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496325600","pretty": "7:00 AM PDT on June 01, 2017","civil": "7:00 AM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "57", "metric": "14"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
		"fctcode": "3",
		"sky": "74",
		"wspd": {"english": "11", "metric": "18"},
		"wdir": {"dir": "W", "degrees": "260"},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "90",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "57", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "13",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496329200","pretty": "8:00 AM PDT on June 01, 2017","civil": "8:00 AM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "57", "metric": "14"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
		"fctcode": "3",
		"sky": "76",
		"wspd": {"english": "12", "metric": "19"},
		"wdir": {"dir": "W", "degrees": "263"},
		"wx": "Mostly Cloudy",
		"uvi": "1",
		"humidity": "89",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "57", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "9",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496332800","pretty": "9:00 AM PDT on June 01, 2017","civil": "9:00 AM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "57", "metric": "14"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
		"fctcode": "3",
		"sky": "75",
		"wspd": {"english": "12", "metric": "19"},
		"wdir": {"dir": "W", "degrees": "261"},
		"wx": "Mostly Cloudy",
		"uvi": "2",
		"humidity": "87",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "57", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "16",
		"mslp": {"english": "29.97", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496336400","pretty": "10:00 AM PDT on June 01, 2017","civil": "10:00 AM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "58", "metric": "14"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
		"fctcode": "3",
		"sky": "68",
		"wspd": {"english": "13", "metric": "21"},
		"wdir": {"dir": "W", "degrees": "260"},
		"wx": "Mostly Cloudy",
		"uvi": "4",
		"humidity": "84",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "58", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "11",
		"mslp": {"english": "29.97", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496340000","pretty": "11:00 AM PDT on June 01, 2017","civil": "11:00 AM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "60", "metric": "16"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
		"fctcode": "3",
		"sky": "60",
		"wspd": {"english": "14", "metric": "23"},
		"wdir": {"dir": "WSW", "degrees": "259"},
		"wx": "Mostly Cloudy",
		"uvi": "6",
		"humidity": "79",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "60", "metric": "16"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "10",
		"mslp": {"english": "29.98", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496343600","pretty": "12:00 PM PDT on June 01, 2017","civil": "12:00 PM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "61", "metric": "16"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "53",
		"wspd": {"english": "16", "metric": "26"},
		"wdir": {"dir": "WSW", "degrees": "259"},
		"wx": "Partly Cloudy",
		"uvi": "8",
		"humidity": "78",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "61", "metric": "16"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.98", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496347200","pretty": "1:00 PM PDT on June 01, 2017","civil": "1:00 PM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "63", "metric": "17"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "50",
		"wspd": {"english": "17", "metric": "27"},
		"wdir": {"dir": "W", "degrees": "262"},
		"wx": "Partly Cloudy",
		"uvi": "10",
		"humidity": "74",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "63", "metric": "17"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "29.97", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496350800","pretty": "2:00 PM PDT on June 01, 2017","civil": "2:00 PM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "64", "metric": "18"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "42",
		"wspd": {"english": "19", "metric": "31"},
		"wdir": {"dir": "W", "degrees": "263"},
		"wx": "Partly Cloudy",
		"uvi": "9",
		"humidity": "70",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "64", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "29.97", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496354400","pretty": "3:00 PM PDT on June 01, 2017","civil": "3:00 PM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "64", "metric": "18"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "36",
		"wspd": {"english": "21", "metric": "34"},
		"wdir": {"dir": "W", "degrees": "264"},
		"wx": "Partly Cloudy/Wind",
		"uvi": "7",
		"humidity": "68",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "64", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496358000","pretty": "4:00 PM PDT on June 01, 2017","civil": "4:00 PM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "64", "metric": "18"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "32",
		"wspd": {"english": "21", "metric": "34"},
		"wdir": {"dir": "W", "degrees": "264"},
		"wx": "Partly Cloudy/Wind",
		"uvi": "5",
		"humidity": "69",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "64", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496361600","pretty": "5:00 PM PDT on June 01, 2017","civil": "5:00 PM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "63", "metric": "17"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "28",
		"wspd": {"english": "21", "metric": "34"},
		"wdir": {"dir": "W", "degrees": "264"},
		"wx": "Mostly Sunny/Wind",
		"uvi": "3",
		"humidity": "70",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "63", "metric": "17"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496365200","pretty": "6:00 PM PDT on June 01, 2017","civil": "6:00 PM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "61", "metric": "16"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "20",
		"wspd": {"english": "20", "metric": "32"},
		"wdir": {"dir": "W", "degrees": "265"},
		"wx": "Mostly Sunny/Wind",
		"uvi": "1",
		"humidity": "72",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "61", "metric": "16"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496368800","pretty": "7:00 PM PDT on June 01, 2017","civil": "7:00 PM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "59", "metric": "15"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "19",
		"wspd": {"english": "19", "metric": "31"},
		"wdir": {"dir": "W", "degrees": "266"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "76",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "59", "metric": "15"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496372400","pretty": "8:00 PM PDT on June 01, 2017","civil": "8:00 PM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "58", "metric": "14"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "21",
		"wspd": {"english": "17", "metric": "27"},
		"wdir": {"dir": "W", "degrees": "269"},
		"wx": "Mostly Sunny",
		"uvi": "0",
		"humidity": "79",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "58", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496376000","pretty": "9:00 PM PDT on June 01, 2017","civil": "9:00 PM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "56", "metric": "13"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "19",
		"wspd": {"english": "15", "metric": "24"},
		"wdir": {"dir": "W", "degrees": "268"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "83",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "56", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496379600","pretty": "10:00 PM PDT on June 01, 2017","civil": "10:00 PM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "56", "metric": "13"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "16",
		"wspd": {"english": "13", "metric": "21"},
		"wdir": {"dir": "W", "degrees": "267"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "84",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "56", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "1","mday_padded": "01","yday": "151","isdst": "1","epoch": "1496383200","pretty": "11:00 PM PDT on June 01, 2017","civil": "11:00 PM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "56", "metric": "13"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "14",
		"wspd": {"english": "12", "metric": "19"},
		"wdir": {"dir": "W", "degrees": "262"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "84",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "56", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "2","mday_padded": "02","yday": "152","isdst": "1","epoch": "1496386800","pretty": "12:00 AM PDT on June 02, 2017","civil": "12:00 AM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "56", "metric": "13"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "7",
		"wspd": {"english": "11", "metric": "18"},
		"wdir": {"dir": "W", "degrees": "260"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "84",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "56", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "6","mon_padded": "06","mon_abbrev": "Jun","mday": "2","mday_padded": "02","yday": "152","isdst": "1","epoch": "1496390400","pretty": "1:00 AM PDT on June 02, 2017","civil": "1:00 AM","month_name": "June","month_name_abbrev": "Jun","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "55", "metric": "13"},
		"dewpoint": {"english": "50", "metric": "10"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "10",
		"wspd": {"english": "11", "metric": "18"},
		"wdir": {"dir": "W", "degrees": "264"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "84",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "55", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "8",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
	]
}

export default dummyData
