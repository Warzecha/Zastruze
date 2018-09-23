<template>
    <div>
        <h2>
            Witajcie Zastrużanie! Przedstawiamy Wam grę 
        </h2>
        <h1 class="title">NAZWA GRY</h1>
        <p>Na początek kilka zasad:</p>
        <ol>
            <li>Gra sprawdza głównie Waszą umiejętność wyszukiwania - korzystajcie z internetu do woli!</li>
            <li>Kiedy odkryjecie odpowiedź wpiszcie ją jako element URL. Na przykład jeśli hasłem był "pierożek" to do następnego hasła przeniesie Was URL "https://warzecha.github.io/Zastruze/#/pierozek"</li>
            <li>Używajcie '_' zamiast znaku spacja</li>
            <li>Nie używajcie polskich znaków ani wielkich liter.</li>
            <li>Jeśli bardzo utkniecie, zapytajcie o wskazówkę :)</li>
        </ol>
        <!-- <a href="/Pierwsza">
        <button>START</button>
        </a> -->
        <router-link to="/pierwsza"><button>START</button></router-link>
    </div>
    
</template>
