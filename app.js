const url = "https://api.memegen.link/templates/";

const memeGeneratebtn = document.querySelector('button');
const memeImg = document.querySelector('img');
const memeTitle = document.querySelector('h2');

const updateDetails = (url, name) => {
    memeImg.setAttribute("src", url);
    memeTitle.innerHTML = name;
    if(name !== 'Loading..'){
        memeTitle.classList.remove('text-muted')
        memeTitle.classList.add('text-white')
    }
}

const memeGenerate = () => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const randomNum = Math.floor((Math.random()) * (data.length))
            updateDetails(data[randomNum].example.url, data[randomNum].name)
        })
}
memeGeneratebtn.addEventListener("click", memeGenerate);
