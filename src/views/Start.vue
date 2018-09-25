<template>
    <div>
        <h2>
            Witajcie! 
        </h2>
        <img src="./../assets/my.jpg" alt="my" class="we">
        <h2>Przedstawiamy Wam grę </h2>
        <h1 class="title">e-Podchody</h1>
        
        <p>Na początek kilka zasad:</p>
        <ol>
            <li>Gra sprawdza głównie Waszą umiejętność wyszukiwania - korzystajcie z internetu do woli!</li>
            <li>Kiedy odkryjecie odpowiedź wpiszcie ją jako element URL. </li>
            <li>Używajcie '_' zamiast znaku spacji</li>
            <li>Nie używajcie polskich znaków ani wielkich liter.</li>
            <li>Jeśli bardzo utkniecie, zapytajcie o wskazówkę :)</li>
        </ol>
        <h3>Przykładowo: Jeśli hasło to "Pierożek z mięsem", do następnej zagadki przeniesie Was URL: </h3>
        <h3 class="green">"https://warzecha.github.io/Zastruze/#/pierozek_z_miesem"</h3>
        <!-- <a href="/Pierwsza">
        <button>START</button>
        </a> -->
        <router-link to="/pierwsza"><button>START</button></router-link>
    </div>
    
</template>
