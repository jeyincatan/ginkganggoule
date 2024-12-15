// Menunggu halaman sepenuhnya dimuat
document.addEventListener('DOMContentLoaded', function() {
    console.log("Situs Mandiri888 telah dimuat!");

    // Efek Hover untuk Game List
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

    // Menampilkan popup atau alert ketika pengguna mengklik tombol CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert("Terima kasih telah mengunjungi Mandiri888! Selamat bermain!");
        });
    }

    // Menambahkan animasi tampilan saat halaman dimuat
    const bannerContent = document.querySelector('.banner-content');
    if (bannerContent) {
        bannerContent.style.opacity = 0;
        bannerContent.style.transition = 'opacity 1s';
        setTimeout(() => {
            bannerContent.style.opacity = 1;
        }, 300);
    }

    // Efek scrolling smooth untuk navigasi
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for header
                behavior: 'smooth'
            });
        });
    });

    // Menambahkan validasi formulir (misalnya, form kontak)
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
});
