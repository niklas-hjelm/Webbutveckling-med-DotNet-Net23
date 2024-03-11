# Git och GitHub för Nybörjare

Denna guide är avsedd att ge er en praktisk introduktion till användningen av Git och GitHub, med fokus på samarbete och hantering av merge-konflikter genom att utveckla en enkel hemsida.

## Del 1: Grundläggande Git och GitHub

### Uppgift 1: Skapa och klona ett repository

1. **Skapa ett nytt repository på GitHub.**
   - En skapar ett repository och lägger till den andra som collaborator.

2. **Klona repositoryt.**
   - Den andra klonar detta repository till sin lokala dator med kommandot `git clone [URL]`.

### Uppgift 2: Lägg till en enkel hemsida

1. **Skapa `index.html`.**
   - Den som klonade repositoryt skapar en enkel `index.html` med grundläggande HTML-struktur.

2. **Add, commit, och push.**
   - Använd `git add index.html` för att lägga till filen till Git, `git commit -m "Lägger till index.html"` för att spara ändringarna, och `git push` för att synkronisera ändringarna med GitHub.

### Uppgift 3: Uppdatera hemsidan

1. **Pull, skapa `styles.css`, och push.**
   - Den första gör en `git pull` för att få den senaste versionen, skapar en `styles.css`, länkar den till `index.html`, och följer sedan add, commit, och push-flödet.

## Del 2: Arbeta med Branches och Merge-konflikter

### Branching och grundläggande merges

1. **Skapa branches.**
   - Skapa var sin ny branch för en specifik funktion eller uppdatering av webbsidan med `git branch [branch-namn]`. För att pusha sin branch till origin gör git push och följ anvisningarna.

2. **Utveckla oberoende.**
   - Arbeta oberoende i era branches i nya filer (inte index.html), gör regelbundna commits, och pushar sina ändringar till GitHub.

3. **Merge till `main`.**
   - När en funktion eller uppdatering är klar, genomför en merge till `main`. se till att ha pushat din egen branch, byt till main med `git switch main`, gör `git pull` för att se till att du har det senaste ifrån origin main. Gör sedan `git merge [din branch]` följt av git push.

        Gör två sådana uppdateringar vardera. En uppdatering kan vara en färgad div, bild, knapp eller annan liten sak.

### Framkalla och lösa en merge-konflikt

1. **Skapa en konfliktsituation.**
   - Redigera samma del av `styles.css` i era separata branches, vilket garanterat leder till en konflikt.

2. **Försök att mergea.**
   - En av er mergear sin branch till `main` utan problem. Den andra måste nu hantera en merge-konflikt.

3. **Lös konflikten.**
   - Git markerar konflikten i `styles.css`. Studenterna måste manuellt välja vilken kod de vill behålla eller kombinera kod från båda branches.

4. **Commit den lösta konflikten.**
   - Efter att ha löst konflikten, använder de `git add .` och `git commit` för att slutföra merge-processen. Sedan pushar de sin branch och gör en ny pull request.

        Gör detta två gånger så att båda hanterar en konflikt.

## Avslutande Reflektion

Svara på följande frågor individuellt och skicka svaren till varandra i paren tills på Onsdag.

- Hur underlättar Git samarbete i utvecklingsprojekt?
- Hur viktigt är kommunikation och samarbete när man löser merge-konflikter och varför?.
- Hur kan dessa färdigheter kan tillämpas i större projekt?