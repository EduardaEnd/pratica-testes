const API_KEY = '10b8506bd000d5f23e2894b06b8e6ced'

function getData(local) {
  const route = `https://api.openweathermap.org/data/2.5/weather?q=${local}&lang=pt_br&units=metric&appid=${API_KEY}`
  return fetch(route).then(response => response.json())
}
  document.querySelector('form').addEventListener('submit', function(){
    const value = document.querySelector('[name="local"]').value
  })
