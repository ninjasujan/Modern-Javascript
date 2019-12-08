

const form = document.querySelector('form');
const card = document.querySelector('.card');
const detail = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const forecast = new Forecast();

console.log(forecast);



const updateUI = (data) => {

    // const cityDets = data.cityDetail;
    // const weather = data.weather;

    // destructuring
    const {cityDets, weather} = data;

    
    
    // update details
    detail.innerHTML = `
                <h5 class="my-3">${cityDets.EnglishName}</h5>
                <div class="my-3">${weather[0].WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather[0].Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                </div>`

    // update night and date images
    let timeSrc = weather[0].IsDayTime ? 'img/day.svg' : 'img/night.svg';

    time.setAttribute('src', timeSrc);

    // update Icon
    const iconSrc = `img/icons/${weather[0].WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    if(card.classList.contains('d-none'))
        card.classList.remove('d-none');
}

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const city = form.city.value.trim();
    form.reset();
    // update ui with a city
    // forecast.updateCity(city).then(data => updateUI(data))
    forecast.updateCity(city).then(data => {
        console.log('Update method finals list', data);
        updateUI(data)
    })
    .catch(err => console.log(err));
    localStorage.setItem('city', city);

});

if(localStorage.getItem('city')) {
    forecast.updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => console.log(err));
    form.city.value = localStorage.getItem('city');
}
    


// updateUI(data)

