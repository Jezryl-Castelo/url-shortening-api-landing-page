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
    //console.log(response);
    const data = await response.json(); 
    //returns a promise
    //console.log(data);should return results
    return data;
}

function generateHTML(data) {
    const html =
   `<p class="result-original">${input.value}</p>
    <p class="result-new" id="test-copy">${data.result.short_link}</p>
    <a class="result-btn" id="resultBTN" href="#">COPY</a>`
    //append to div
    result.innerHTML = html; 
    result.style.backgroundColor = '#ffffff'; 
    let copyBtn = document.getElementById("resultBTN");
    copyBtn.addEventListener('click', copyText);
}

function copyText(e) {
    e.preventDefault();
    let copyText = document.getElementById("test-copy").innerText;
    let elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = copyText;
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem); 
}






