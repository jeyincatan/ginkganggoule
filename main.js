// Fetch IP and location data using ipinfo API
fetch('https://ipinfo.io/json?token=3fd54c71b8b846e')  // Ganti dengan token API yang benar
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
    })
    .catch(error => console.error('Error fetching IP info:', error));
