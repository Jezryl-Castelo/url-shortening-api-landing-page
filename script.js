const inputForm = document.querySelector('form');
const result = document.querySelector('.resultDiv');
const input = document.querySelector('.shorten-input');
const load = document.getElementById('urlInput').placeholder;

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    result.innerHTML = '<h1>Loading...</h1>';
    load.placeholder='Loading...'

    populateURL(e);
});

async function populateURL(link) {
    const data = await urlAPI(link);
    generateHTML(data);
}

async function urlAPI() {
    const APP_Base = 'https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html';
    const response = await fetch(APP_Base);
    console.log(response);//test to return a promise
    //need data
    const data = await response.json(); //returns a promise
    console.log(data);//should return results
    return data;
}

function generateHTML(data) {
    const html =
  `<p class="result-original">${input.value}</p>
   <p class="result-new">${data.result.short_link}</p>
    <a class="result-btn" href="#">COPY</a>`;
    result.innerHTML = html; //append to div
    result.style.backgroundColor = '#ffffff';
}

//validate Url

