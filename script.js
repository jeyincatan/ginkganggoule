// Fetch IP and Location Data Using ipinfo.io
fetch('https://ipinfo.io/json?token=YOUR_TOKEN')  // Replace with your own API token
    .then(response => response.json())
    .then(data => {
        // Extracting key pieces of data
        const ipAddress = data.ip;
        const location = `${data.city}, ${data.region}, ${data.country}`;
        const timezone = data.timezone;
        const [latitude, longitude] = data.loc.split(',');
        
        // Display the IP and Location data
        document.getElementById('ip-address').textContent = ipAddress;
        document.getElementById('location').textContent = location;

        // Timezone Handling: Show local time based on timezone data
        const date = new Date();
        const timeOptions = {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        document.getElementById('local-time').textContent = date.toLocaleTimeString([], timeOptions);

        // Fetching and displaying weather information using OpenWeather API
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=YOUR_OPENWEATHER_API_KEY`)
            .then(weatherResponse => weatherResponse.json())
            .then(weatherData => {
                const weather = `
                    <h3>Weather Information</h3>
                    <p><strong>Temperature:</strong> ${weatherData.main.temp}°C</p>
                    <p><strong>Conditions:</strong> ${weatherData.weather[0].description}</p>
                    <p><strong>Wind Speed:</strong> ${weatherData.wind.speed} m/s</p>
                `;
                document.getElementById('weather-info').innerHTML = weather;
            })
            .catch(error => console.error('Error fetching weather data:', error));

        // Language Customization: Adjust content based on country code
        const userCountry = data.country.toUpperCase();
        if (userCountry === 'US') {
            document.getElementById('greeting').textContent = 'Hello! Enjoy our slot games!';
        } else if (userCountry === 'ID') {
            document.getElementById('greeting').textContent = 'Halo! Nikmati permainan slot kami!';
        } else {
            document.getElementById('greeting').textContent = 'Welcome! Try our exciting slot games!';
        }

        // Slot Game Recommendation (Region-Specific)
        let slotGameRecommendation = '';
        if (data.city.toLowerCase() === 'jakarta') {
            slotGameRecommendation = 'We recommend trying "Jackpot Slot" as it’s highly popular in Jakarta!';
        } else if (data.city.toLowerCase() === 'new york') {
            slotGameRecommendation = 'Try "Lucky 7 Slot" – it’s trending in New York!';
        } else {
            slotGameRecommendation = 'Spin the reels in our exclusive slot games and win big!';
        }
        document.getElementById('slot-game-recommendation').textContent = slotGameRecommendation;

        // Pseudo-Greeting based on time of day (for enhanced engagement)
        const hours = new Date().getHours();
        let timeOfDayGreeting = 'Good day!';
        if (hours < 12) {
            timeOfDayGreeting = 'Good morning! Ready to play some slots?';
        } else if (hours >= 18) {
            timeOfDayGreeting = 'Good evening! Spin the reels and win tonight!';
        }
        document.getElementById('greeting').textContent = timeOfDayGreeting;
        
        // Map Display: Show Google Map centered on the user's location
        const mapContainer = document.getElementById('map');
        const mapIframe = document.createElement('iframe');
        mapIframe.src = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
        mapIframe.width = '100%';
        mapIframe.height = '300px';
        mapContainer.appendChild(mapIframe);

    })
    .catch(error => {
        console.error('Error fetching IP data:', error);
        document.getElementById('ip-address').textContent = 'Unable to retrieve IP';
        document.getElementById('location').textContent = 'Unable to retrieve location';
        document.getElementById('local-time').textContent = 'Unable to retrieve time';
    });

// Refresh the user's local time every second for dynamic updates
setInterval(() => {
    fetch('https://ipinfo.io/json?token=YOUR_TOKEN')
        .then(response => response.json())
        .then(data => {
            const date = new Date();
            const timeOptions = {
                timeZone: data.timezone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };
            document.getElementById('local-time').textContent = date.toLocaleTimeString([], timeOptions);
        })
        .catch(error => console.error('Error fetching IP data for time update:', error));
}, 1000);
