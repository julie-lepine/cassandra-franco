var f = document.getElementById('form');
var q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'google.com';
//'https://www.instagram.com/cassandra.naturo/?hl=fr';

function submitted(event) {
    event.preventDefault();
    const url = google + site + '+' + q.value;
    const win = window.open(url, '_blank');
    win.focus();
}

f.addEventListener('submit', submitted);