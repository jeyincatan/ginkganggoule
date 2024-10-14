<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IP & Lokasi Pengunjung</title>
</head>
<body>

    <h1>IP dan Lokasi Pengunjung</h1>
    <div id="visitor-info">
        <p><strong>IP Address:</strong> <span id="ip-address">Memuat...</span></p>
        <p><strong>Lokasi:</strong> <span id="location">Memuat...</span></p>
    </div>

    <script>
        // Mengambil IP dan Lokasi Pengunjung Menggunakan ipinfo.io
        fetch('https://ipinfo.io/json?token=YOUR_TOKEN') // Gantilah YOUR_TOKEN dengan token dari ipinfo.io
            .then(response => response.json())
            .then(data => {
                // Memasukkan Data ke Elemen HTML
                document.getElementById('ip-address').textContent = data.ip;
                document.getElementById('location').textContent = `${data.city}, ${data.region}, ${data.country}`;
            })
            .catch(error => {
                console.error('Error fetching IP data:', error);
                document.getElementById('ip-address').textContent = 'Tidak bisa mendapatkan IP';
                document.getElementById('location').textContent = 'Tidak bisa mendapatkan lokasi';
            });
    </script>
</body>
</html>
