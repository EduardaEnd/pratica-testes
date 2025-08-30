const API_KEY = '10b8506bd000d5f23e2894b06b8e6ced'

const elIconWeather = document.getElementById('icon-weather')
const elTemperature = document.getElementById('temperature')
const elLocal = document.getElementById('local')
const elHumidity = document.getElementById('humidity')
const elSpeedWind = document.getElementById('speed-wind')
const elCard = document.querySelector('card')



function getData(local) {
  const route = `https://api.openweathermap.org/data/2.5/weather?q=${local}&lang=pt_br&units=metric&appid=${API_KEY}`
  return fetch(route).then(response => response.json())
}

function handleSubmit(event){
    event.preventDefault()

    const value = document.querySelector('[name="local"]').value

    getData(value).then(data => {
      console.log(data)
      elTemperature.innerHTML = Math.floor(data.main.temp) + '°C'
      elLocal.innerHTML = data.name
      elHumidity.innerHTML = data.main.humidity + '%'
      elSpeedWind.innerHTML = data.wind.speed + ' Km/h'

      const icon = data.weather[0].main.toLocaleLowerCase()
      const src = `assets/icons/${icon}.png`
      elIconWeather.setAttribute('src', src)
    })
  }

/*function fadeOut(){
  const timeline = gsap.timeline()

  timeline.to('footer', { y: 51, duration: 1, opacity: 0.5})
}

function fadein(){
  const timeline = gsap.timeline()

  timeline.to('footer', { y: 51, duration: 1})
}
*/
  document.querySelector('form').addEventListener('submit', handleSubmit)
