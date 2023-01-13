window.addEventListener('load' ,() =>{
    let lon
    let lat

    let ubicacion = document.getElementById('ubicacion')

    let temperaruraValor = document.getElementById('temperarura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

    let iconoAnimado = document.getElementById('icono-animado')

    let vientoVelocidad = document.getElementById('viento-velocidad')

    let presion = document.getElementById('presion')

    let humedad = document.getElementById('humedad')

    let tempMax = document.getElementById('temp_max')

    let tempMin = document.getElementById('temp_min')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion =>{
            //console.log(posicion)
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=244337e0301d76c4e7a92aa270dd0e2a&lang=es`
           // console.log(url)

            fetch (url)
            .then( respone => { return respone.json()})
            .then( data => {
               
                //console.log(data.main.temp)
                let temp = (data.main.temp)
                temperaruraValor.textContent =`${temp} °C`
                

                let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc.toUpperCase()
                console.log(data.name)

                ubicacion.textContent = `Su ubicación: ${data.name}`

                vientoVelocidad.textContent = `La velocidad del viento : ${data.wind.speed} m/seg`

                presion.textContent = `La presión atmosférica : ${data.main.pressure} hPa`

                humedad.textContent = `La humedad actual : ${data.main.humidity} %`

                tempMax.textContent = `Temperatura máxima ${data.main.temp_max} °C`

                tempMin.textContent = `Temperatura mínima ${data.main.temp_min} °C`
                
                

                // Iconos animados
                console.log(data.weather[0].main)
                switch (data.weather[0].icon){
                    case '01n' :
                        iconoAnimado.src = 'animated/night.svg'
                        console.log('Despejado')
                        break;

                    case '01d':
                        iconoAnimado.src = 'animated/day.svg'
                        console.log('Despejado')
                        break;
                        
                    case '02d':
                        iconoAnimado.src = 'animated/cloudy-day-2.svg'
                        console.log('Nubes')
                        break;
                
                    case '02n':
                        iconoAnimado.src = 'animated/cloudy-night-2.svg'
                        console.log('nublado')
                        break;

                    case '03d':
                        iconoAnimado.src = 'animated/cloudy.svg'
                        console.log('nublado')
                        break;

                    case '03n':
                        iconoAnimado.src = 'animated/cloudy.svg'
                        console.log('nublado')
                        break;

                        
                    case '13d':
                        iconoAnimado.src = 'animated/snowy-6.svg'
                        console.log('Nieve')
                        break;
                        
                    case '09d':
                        iconoAnimado.src = 'animated/rainy-7.svg'
                        console.log('Noche despejada')
                        break;
                            
                    case '11d':
                        iconoAnimado.src = 'animated/thunder.svg'
                        console.log('Atmosfera')
                        break;

                    case '10d':
                        iconoAnimado.src = 'animated/rainy-7.svg'
                        console.log('Atmosfera')
                        break;

                    case '04d':
                        iconoAnimado.src = 'animated/cloudy-day-3.svg'
                        console.log('Atmosfera')
                        break;
                     
                    case '04n':
                        iconoAnimado.src = 'animated/cloudy-night-3.svg'
                        console.log('Atmosfera')
                        break;
                     
                            
                }
                
               
            })
            .catch (error =>{
                console.log(error)
            })

        })
          
    }
     
})


function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    //Add a zero in front of numbers<10
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML ="Hora actual:"  + " " + hr + " : " + min + " : " + sec;
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
