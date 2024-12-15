// Tunggu sampai seluruh halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    console.log("Situs Mandiri888 telah dimuat sepenuhnya!");

    // Efek hover pada game item untuk interaksi visual
    const gameItems = document.querySelectorAll('.game-item');
    gameItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });

        item.addEventListener('mouseout', function() {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });

    // Menampilkan popup atau notifikasi ketika tombol CTA diklik
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert("Terima kasih telah mengunjungi Mandiri888! Selamat bermain!");
        });
    }

    // Animasi fade-in untuk banner saat halaman dimuat
    const bannerContent = document.querySelector('.banner-content');
    if (bannerContent) {
        bannerContent.style.opacity = 0;
        bannerContent.style.transition = 'opacity 1s';
        setTimeout(() => {
            bannerContent.style.opacity = 1;
        }, 300);
    }

    // Smooth scrolling untuk navigasi antar bagian halaman
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1); // Ambil ID tujuan
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Sesuaikan posisi header
                behavior: 'smooth'
            });
        });
    });

    // Validasi form untuk memastikan input email dan pesan tidak kosong
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const emailField = document.querySelector('input[name="email"]');
            const messageField = document.querySelector('textarea[name="message"]');
            if (!emailField.value || !messageField.value) {
                e.preventDefault();
                alert('Silakan isi semua kolom sebelum mengirim pesan!');
            }
        });
    }

    // Mengelola login atau registrasi dengan menggunakan LocalStorage untuk menyimpan status login
    const loginButton = document.querySelector('.login-button');
    const logoutButton = document.querySelector('.logout-button');
    const userStatus = document.querySelector('.user-status');

    // Cek apakah pengguna sudah login
    if (localStorage.getItem('userLoggedIn') === 'true') {
        userStatus.textContent = "Anda telah login!";
        loginButton.style.display = 'none';
        logoutButton.style.display = 'inline-block';
    }

    // Ketika tombol login ditekan
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            localStorage.setItem('userLoggedIn', 'true');
            userStatus.textContent = "Anda telah login!";
            loginButton.style.display = 'none';
            logoutButton.style.display = 'inline-block';
        });
    }

    // Ketika tombol logout ditekan
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            localStorage.removeItem('userLoggedIn');
            userStatus.textContent = "Anda belum login.";
            logoutButton.style.display = 'none';
            loginButton.style.display = 'inline-block';
        });
    }

    // Menambahkan efek animasi untuk tombol utama pada halaman
    const mainButton = document.querySelector('.cta-button');
    if (mainButton) {
        mainButton.addEventListener('mouseenter', function() {
            mainButton.style.backgroundColor = '#ffcc00'; // Warna saat hover
            mainButton.style.transform = 'scale(1.1)';
        });

        mainButton.addEventListener('mouseleave', function() {
            mainButton.style.backgroundColor = '#ffd700';
            mainButton.style.transform = 'scale(1)';
        });
    }
});
