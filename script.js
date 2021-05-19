const main = document.querySelector(".main-section");

printStartpage();

function printStartpage(id) {
    main.innerHTML = `
    <section class="start-container">
        <article>
            <h3>Profil</h3>
            <span class="text-shadow"> </span>
            <div class="background-start">
            <p>Välkommen till min sida, jag heter Mathilda, är 28år och utbildar mig just nu till frontend-utvecklare. Har senaste 10 åren jobbat på HM, största del i butik, senast som visual merchandiser, men en del resande har jag också hunnit med. Jag kastar mig nu in i en ny branch är än så länge säkert på att det är detta jag jobba med! Jag är hungrig på ny kunskap inom frontend och programering och allt där till. Jag gillar design, färg och form och har intresse för inredning på fritiden.
            <br>
            <br>
            Våren 2022 kommer jag ge mig ut på LIA och söker just nu en plats, skulle ditt företag vara intresserade så hör gärna av er!</p>
            </div>
        </article>
    </section>`
};

function printPortfolio() {
    fetch("https://api.github.com/users/Mathildap/repos")
    .then(response => response.json())
    .then(data => {
    console.log(data);

    main.innerHTML = `
    <section class="portfolio-container">
    <article>
        <h3>Portfolio</h3>
        <span class="text-shadow"> </span>
        <p>Här kommer jag lägga upp mina projekt, både mina egna och skolarbeten. Vissa pågående och en del slutförda!
        </p>
        <article>
        <h3>Github</h3>
        <span class="text-shadow"> </span>
        <h4>Repos</h4>
        </article>

        <div class="portfolio-github-container">
        
        <a target='_blank' class='github' href=${data[10].html_url}>
            <article class="github-box">
                <div class="github-img-box">
                    <div class="github-repo1_img"></div>
                    <p id="repo1"></p>
                </div>
                <div class="github-repo-text">
                    <p class="repo-descrip">Mathildap - Website</p>
                </div>
            </article>
        </a>

        <a target='_blank' class='github' href=${data[12].html_url}>
            <article class="github-box">
                <div class="github-img-box">
                    <div class="github-repo2_img"></div>
                    <p id="repo2"></p>
                </div>
                <div class="github-repo-text">
                    <p class="repo-descrip">Sten, sax, påse - Spel</p>
                </div>
            </article>
        </a>

        <a target='_blank' class='github' href=${data[13].html_url}>
            <article class="github-box">
                <div class="github-img-box">
                    <div class="github-repo3_img"></div>
                    <p id="repo3"></p>
                </div>
                <div class="github-repo-text">
                    <p class="repo-descrip">To-do List</p>
                </div>
            </article>
        </a>

        <a target='_blank' class='github' href=${data[15].html_url}>
            <article class="github-box">
                <div class="github-img-box">
                    <div class="github-repo5_img"></div>
                    <p id="repo5"></p>
                </div>
                <div class="github-repo-text">
                    <p class="repo-descrip">Webshop och login-sida</p>
                </div>
            </article>
        </a>

        <a target='_blank' class='github' href=${data[5].html_url}>
            <article class="github-box">
                <div class="github-img-box">
                    <div class="github-repo6_img"></div>
                    <p id="repo6"></p>
                </div>
                <div class="github-repo-text">
                    <p class="repo-descrip">Lets Talk - Chat</p>
                </div>
            </article>
        </a>
        </div>
    </article>
    </section>
    `
    });
};

function printExperience() {
    console.log("skriv ut erfarenhet");
    main.innerHTML = `
    <section class="experience-container">
    <article>
    <h3>Utbildning</h3>
    <span class="text-shadow"> </span>
    <div class="experience-text">
    <h4>Front End developer, Medieinstitutet ⎮ 12/2020 - pågående (2022)</h4>
    <p>
      Slutförd kurs är Html/CSS där vi jobbat med bl.a. webbdesign, sökoptimering, tillgänglighet och responsivitet.<br>
      Pågående kurs är JavaScript; kommer bl.a. läsa om grundläggande och djupdykning inom programmering, ramverk och felsökning. <br>
      Kommande kursen är bl.a. Dynamisk webbutveckling, agila metoder, UX, gränssnittsdesign.
    </p>
    <h4>Handelsprogrammet, Jensen gymnasium ⎮ 2009 - 2012</h4>
    <p>
      Pluggade handels med inriktning försäljning och entreprenörskap. Drev mitt egna UF-företag och gick kurser inom marknadsföring, försäljning, webbdesign och företagande.
    </p>
    </div>
  </article>
  <article>
    <h3>Arbetserfarenhet</h3>
    <span class="text-shadow"> </span>
    <div class="experience-text">
    <h4>H&M ⎮ 2012 - 2020</h4>
    <p>
      Tjänster: Visual merchandiser, Ställföreträdande butikschef och säljare. <br>
      Resor/projekt: Sydafrika 2015 och Cypern 2016, supportade som säljare i deras första butiker.<br>
      Kompetens inom ledarskap, försäljning, visuell kundupplevelse, administration och kundservice.<br>
      Referens vid förfrågan.
    </p>
    <h4>Övriga jobb ⎮ 2007-2012</h4>
    <p>
    Lärkbacksskolan: Lärarvikarie, låg- och mellanstadie. <br>
    Johanssons Café. 
    </p>
    </div>
  </article>
  </section>
  `
};

function printContact() {
    console.log("skriv ut kontakt");
    main.innerHTML = `
    <section class="contact-container">
    <article>
        <h3>Kontakt</h3>
        <span class="text-shadow"> </span>
    </article>
    <article class="contact-page">

        <a href="mailto:mathilda.pettersson@medieinstitutet.se" target="_blank" class="contact-page_link">
        <div class="contact-page_box">
            <h4>E-post</h4>
            <i class="contact-icon fab fas fa-envelope"></i>
            <p class="email-link">Mathilda.pettersson<br>@medieinstitutet.se</p>
        </div>
        </a>

        <a href="https://www.linkedin.com/in/mathilda-pettersson-087a241b5/" target="_blank" class="contact-page_link">
        <div class="contact-page_box">
            <h4>LinkedIn</h4>
            <i class="contact-icon fab fa-linkedin"></i>
            <p>Mathilda Pettersson</p>
        </div>
        </a>

        <a href="https://www.instagram.com/mathildap/" target="_blank" class="contact-page_link">
        <div class="contact-page_box">
            <h4>Instagram</h4>
            <i class="contact-icon fab fa-instagram"></i>
            <p>Mathildap</p>
        </div>
        </a>

        <a href="https://github.com/Mathildap" target="_blank" class="contact-page_link">
        <div class="contact-page_box">
            <h4>Github</h4>
            <i class='fab fa-github'></i>
            <p>Mathildap</p>
        </div>
        </a>
    </article>
    </section>
    `
};

document.addEventListener("click", (evt) => {
    console.log("Klick på ", evt.target.id);
    switch (evt.target.id) {
        case "navStart":
            printStartpage();
        break;
        case "navPortfolio":
            printPortfolio();
        break;
        case "navExperience":
            printExperience();
        break;
        case "navContact":
            printContact();
        break;
    };
});
