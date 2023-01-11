const headline = document.querySelector('h1');

function changeHeadline() {
    headline.classList.add('headlineStyles')
}

function resetHeadline() {
    headline.classList.remove('headlineStyles');
}