const main = document.querySelector(".main-section");

printStartpage();

function printStartpage(id) {
    console.log("skriv ut startsida");
        main.style.backgroundColor = "#f3edea";
        main.innerHTML = `
        <article>
            <h3>Profil</h3>
            <span class="text-shadow"> </span>
            <p>Jag utbildar mig just nu till frontend-utvecklare efter 10 år på HM, senast som visual merchandiser. Jag kastar mig in i en ny branch nu och är hungrig på ny kunskap inom frontend, programering och nya arbetssätt! Jag gillar design, färg och form och har intresse för inredning på fritiden.</p>
        </article>
        <article>
            <h3>Github</h3>
            <span class="text-shadow"> </span>
            <h4>Repos</h4>
            <p id="repo1"></p>
        </article>`

        const repo1 = document.getElementById("repo1");
        fetch("https://api.github.com/users/Mathildap/repos")
        .then(response => response.json())
        .then(data => {
        // console.log(data[1]);

        repo1.insertAdjacentHTML("beforeend", "<i class='fab fa-github gh'></i>" + "<a target='_blank' class='github' href='"+ data[1].html_url +"'>" + "To-do List" + "</a>");
        });
};

function printPortfolio() {
    console.log("skriv ut portfolio");
    main.style.backgroundColor = "#f3edea";
    main.innerHTML = `
    <article>
        <h3>Portfolio</h3>
        <span class="text-shadow"> </span>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, deserunt odit sapiente, cum possimus itaque quod explicabo nisi excepturi animi qui sunt obcaecati nemo dolore eligendi veritatis repellendus consequuntur? Dignissimos!
        <p>
    </article>
    `
};

function printExperience() {
    console.log("skriv ut erfarenhet");
    main.style.backgroundColor = "#f3edea";
    main.innerHTML = `
    <article>
    <h3>Utbildning</h3>
    <span class="text-shadow"> </span>
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
  </article>
  <article>
    <h3>Arbetserfarenhet</h3>
    <span class="text-shadow"> </span>
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
  </article>
  `
};

function printContact() {
    console.log("skriv ut kontakt");
    main.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    main.style.border = "1px solid rgba(255,255,255,0.4)"
    main.innerHTML = `
    <article>
        <h3>Kontakt</h3>
        <span class="text-shadow"> </span>
    </article>
    <article class="contact-page">

        <a href="mailto:mathilda.pettersson@medieinstitutet.se" target="_blank" class="contact-page_link">
        <div class="contact-page_box">
            <h4>E-post</h4>
            <i class="contact-icon fab fas fa-envelope"></i>
            <p>Mathilda.pettersson<br>@medieinstitutet.se</p>
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