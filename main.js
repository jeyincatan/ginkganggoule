// Fetch IP and location data using ipinfo API
fetch('https://ipinfo.io/json?token=3fd54c71b8b846e') // Ganti dengan token API yang benar
    .then(response => response.json())
    .then(data => {
        // Display the IP information in the HTML
        document.getElementById("ip-info").innerHTML = `
            <h2>Informasi Pengunjung</h2>
            <p><strong>IP Address:</strong> ${data.ip}</p>
            <p><strong>Kota:</strong> ${data.city}</p>
            <p><strong>Region:</strong> ${data.region}</p>
            <p><strong>Negara:</strong> ${data.country}</p>
            <p><strong>Lokasi Koordinat:</strong> ${data.loc}</p>
            <p><strong>Organisasi:</strong> ${data.org}</p>
            <p><strong>Zona Waktu:</strong> ${data.timezone}</p>
        `;

        // Extract latitude and longitude from 'loc'
        const [latitude, longitude] = data.loc.split(',');

        // Fetch weather data based on user's location
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=YOUR_OPENWEATHER_API_KEY`)
            .then(weatherResponse => weatherResponse.json())
            .then(weatherData => {
                // Display weather information
                const weatherInfo = `
                    <h3>Informasi Cuaca</h3>
                    <p><strong>Suhu:</strong> ${weatherData.main.temp}°C</p>
                    <p><strong>Kondisi:</strong> ${weatherData.weather[0].description}</p>
                    <p><strong>Kecepatan Angin:</strong> ${weatherData.wind.speed} m/s</p>
                `;
                document.getElementById("weather-info").innerHTML = weatherInfo;
            })
            .catch(error => console.error('Error fetching weather info:', error));

        // Provide personalized greeting based on time of day
        const currentHour = new Date().getHours();
        let greeting;
        if (currentHour < 12) {
            greeting = "Selamat Pagi";
        } else if (currentHour < 18) {
            greeting = "Selamat Siang";
        } else {
            greeting = "Selamat Malam";
        }
        document.getElementById("greeting").innerText = `${greeting}, pengguna dari ${data.city}!`;

        // Load a map with user's location (using Google Maps)
        const mapContainer = document.getElementById("map");
        const mapIframe = document.createElement("iframe");
        mapIframe.src = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
        mapIframe.style.border = "none";
        mapIframe.width = "100%";
        mapIframe.height = "300px";
        mapContainer.appendChild(mapIframe);
    })
    .catch(error => console.error('Error fetching IP info:', error));
