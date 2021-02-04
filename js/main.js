
// BTC TRACKER
// document.addEventListener('DOMContentLoaded', function(){
// 	setInterval(currentBtcPrice, 20000)
// })

// function currentBtcPrice(){
// 	fetch(`https://api.coindesk.com/v1/bpi/currentprice/BTC.json`)
// 	.then(res => res.json())
// 	.then(data =>{
// 		console.log(data)
// 		let btcData = data.bpi.USD.rate_float
// 		let btcResult = parseInt(btcData)
	


// 		document.querySelector('.BTCPRICE').innerText = "The current BTC price is"+ " "+btcResult+"$"

// 	})
// }

// window.onload = currentBtcPrice



// WEATHER APP
let weather = {
	weatherapiKey: "c9eb346b814af2d646c89bc9c8eef6b6",
	APIKEY: "K5WRWVW5QSPG",
	fetchWeather: function(city){
		fetch("https://api.openweathermap.org/data/2.5/weather?q="
			+city 
			+"&units=metric&appid="
			+this.weatherapiKey
		)
		.then(res=> res.json())
		.then(data=>{
		console.log(data)
		let latcord = data.coord.lat
		let lngcord = data.coord.lon
		this.displayWeather(data)

		fetch("https://api.timezonedb.com/v2.1/get-time-zone?key=K5WRWVW5QSPG&format=json&by=position"
			+"&lat="+latcord
			+"&lng="+lngcord)
		.then(res=> res.json())
		.then(data=>{
			console.log(data)
			document.querySelector(".localTime").innerText = "Local time is"+data.formatted.slice(10)
			
		})

			
			

			// document.querySelector('.city').innerText = data.name
			// document.querySelector('.temp').innerText = data.main.temp
			// document.querySelector('.description').innerText = data.weather[0].description
			// document.querySelector('.humidity').innerText = data.main.humidity + "%"
			// document.querySelector('.wind').innerText = "Wind speed" + " " +data.wind.speed
		})
	},
	displayWeather: function(data){
		const { name } = data
		const { icon, description} = data.weather[0]
		const { temp, humidity} = data.main
		const { speed } = data.wind
		
	
		
		
		document.querySelector('.city').innerText = "Weather in" + " " +name
		document.querySelector('.icon').src = "https://openweathermap.org/img/wn/"+icon+"@2x.png"
		document.querySelector('.temp').innerText = Math.round(temp) + "°C"
		document.querySelector('.description').innerText = description
		document.querySelector('.humidity').innerText = "Humidity" + " " +humidity + "%"
		document.querySelector('.wind').innerText = "Wind speed" + " " +speed +"km/h"
		document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" +name+"')"

		// if(description.includes("clouds"||"cloud")){
		// 	document.body.style.background = 'pink'
		// }

	},


	search: function(){
		this.fetchWeather(document.querySelector(".searchbar").value)
	},

// 	APIKEY: "K5WRWVW5QSPG",
// 	fetchLocalTime: function(){
// 		fetch("http://api.timezonedb.com/v2.1/get-time-zone?key=K5WRWVW5QSPG&format=json&by=position"
// 			+"&lat="+this.lat
// 			+"&lng="+this.lon)
// 		.then(res=> res.json())
// 		.then(data=>{
// 			console.log(data)
			
	
		
// 			document.querySelector(".localTime").innerText = "Local time is"+data.formatted.slice(10)
			
// 		})
// }




}

// search helpers
document.querySelector('.searchButton').addEventListener('click', function(){
	weather.search()
})


document.querySelector('.searchbar').addEventListener('keyup', function(event){
 	if(event.key == "Enter"){
 		weather.search()
 	}
})

weather.fetchWeather('coffs harbour')




//local time

// apikey K5WRWVW5QSPG

// let localTimeFinder = {

// 	APIKEY: "K5WRWVW5QSPG",
// 	fetchLocalTime: function(coords){
// 		fetch("http://api.timezonedb.com/v2.1/get-time-zone?key=K5WRWVW5QSPG&format=json&by=position&"
// 			+"lat=-33.8679"
// 			+"&lng=151.2073")
// 		.then(res=> res.json())
// 		.then(data=>{
// 			console.log(data)
// 			console.log(data.formatted)
// 			document.querySelector(".localTime").innerText = "Local time is"+data.formatted.slice(10)
			
// 		})
// }}

