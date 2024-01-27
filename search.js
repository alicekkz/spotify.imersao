const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlist");

function requestApi(searchTerm) {
    const url = `"htpp://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResult(result));
}

function displayResult(result) {
    hidePlaylist();
    const artistImage = document.getElementById("artist-img");
    const artistName = document.getElementById("artist-name");


    result.forEach(element => {
       artistImage.src = element.urlImg;
       artistName.innerText = element.name; 
    });
    resultArtist.classList.remove("hidden");
    
}

function hidePlaylist() {
    playlistContainer.classList.add("hidden");
}

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') { 
        resultPlaylist.classList.add("hidden");
        resultArtist.classList.remove("hidden");
        return;
    }
    requestApi(searchTerm);
})
