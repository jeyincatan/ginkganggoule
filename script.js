function searchGames() {
    let input = document.querySelector('.search-bar').value.toLowerCase(); // Mendapatkan nilai input
    let gameItems = document.querySelectorAll('.game-item'); // Memilih semua elemen game

    gameItems.forEach(game => {
        let gameTitle = game.querySelector('h3').innerText.toLowerCase(); // Mendapatkan judul game

        // Jika input cocok dengan judul game, tampilkan, jika tidak, sembunyikan
        if (gameTitle.includes(input)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
}

// Menambahkan event listener pada input untuk memicu pencarian saat mengetik
document.querySelector('.search-bar').addEventListener('keyup', searchGames);
