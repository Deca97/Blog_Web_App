// script.js

// Funzione per mostrare la sezione corrispondente al tab cliccato
function showTabContent(tabId) {
    // Nascondi tutte le sezioni
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    // Mostra la sezione corrispondente al tab
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.style.display = 'block';
    }
}

// Imposta i listener di evento sui link dei tab
document.getElementById('home-tab').addEventListener('click', (e) => {
    e.preventDefault();
    showTabContent('home');
});

document.getElementById('articles-tab').addEventListener('click', (e) => {
    e.preventDefault();
    showTabContent('articles');
});

document.getElementById('about-tab').addEventListener('click', (e) => {
    e.preventDefault();
    showTabContent('about');
});

document.getElementById('contact-tab').addEventListener('click', (e) => {
    e.preventDefault();
    showTabContent('contact');
});

// Mostra la sezione "Home" per default al caricamento della pagina
window.addEventListener('load', () => {
    showTabContent('home');
});
