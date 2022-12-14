const params = new URLSearchParams(window.location.search);
error = params.get('error');
document.querySelector('p').innerHTML = `L'erreur suivante est survenue: ${error}`;
