import React, { useState } from "react";
import "../styles/styles.css";


function App() {
    // Stato per gestire il tab attivo
    const [activeTab, setActiveTab] = useState("home");

    return (
        <div>
            {/* Intestazione */}
            <header>
                <h1>Il Mio Blog</h1>
            </header>

            {/* Navigazione */}
            <nav>
                <button onClick={() => setActiveTab("home")}>Home</button>
                <button onClick={() => setActiveTab("articles")}>Articoli</button>
                <button onClick={() => setActiveTab("about")}>Chi Siamo</button>
                <button onClick={() => setActiveTab("contact")}>Contatti</button>
            </nav>

            {/* Contenuto dinamico */}
            <div className="container">
                {activeTab === "home" && <Home />}
                {activeTab === "articles" && <Articles />}
                {activeTab === "about" && <About />}
                {activeTab === "contact" && <Contact />}
            </div>

            {/* Footer */}
            <footer>
                <p>&copy; 2025 - Il Mio Blog | Tutti i diritti riservati</p>
            </footer>
        </div>
    );
}

// Componenti per le sezioni della pagina
function Home() {
    return (
        <div>
            <h2>Benvenuto nel Mio Blog</h2>
            <p>Qui trovi tutti gli ultimi articoli e aggiornamenti.</p>
        </div>
    );
}

function Articles() {
    return (
        <div>
            <h2>Articoli Recenti</h2>
            <p>Scopri gli ultimi articoli scritti per il nostro blog!</p>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>Chi Siamo</h2>
            <p>Questa è una sezione dedicata alla nostra storia e missione.</p>
        </div>
    );
}

function Contact() {
    return (
        <div>
            <h2>Contattaci</h2>
            <p>Hai domande? Scrivici subito!</p>
        </div>
    );
}

export default App;
