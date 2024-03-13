# Labb 1 Git-cheat sheet

## Sammanfattning

I denna labb ska ni arbeta i grupper om 2 personer för att tillsammans </br> producera en lathund med bra att ha git-kommandon med en kort beskrivning av varje.</br>Paren kommer att vara slumpmässigt genererade och går ej att påverka. </br>

## Uppgiftsbeskrivning

Varje team ska producera en lathund med totalt 60 git-kommandon.</br>
Ett git-kommando kan vara enkelt tex.: `git log` eller mer avancerat och specifikt tex. `git checkout -b development`. Varje kommando ska ha en kort beskrivning på **svenska** över vad kommandot gör och när det kan användas.</br>
Varje team får själva välja vilket av följande format man vill göra denna lathund:

* HTML
* MarkDown
* XML
* CSV
* JSON

Via följande länk kan ni skapa era github repositories från en template jag satt upp [GitHub Classroom](https://classroom.github.com/a/XvQH-Zb6).</br> Väl där ska ni välja er själva ifrån listan och sedan ett team tillsammans med den/de personer som står listade i samma team i [detta](./Git/GrupperLabb1.pdf) dokummentet.</br>

## Utförandebeskrivning

### OBS! Det är mycket viktigt att följa varje steg i beskrivningen noga

* Ni ska inom gruppen bestämma er för en lista av kommandon och spara dessa i en textfil i branchen `main`
* Skapa sedan en fil som ni ska lägga till alla kommandon i. (En fil av det format ni valt från listan ovan.)
* I erat repo ska ni skapa en branch som heter `development` och sedan ifrån den skapa var sin personlig branch. Ex: `git checkout -b niklas-dev`</br>
* Dela sedan upp den totala listan av git-kommandon och spara en txt-fil i eran personliga branch med era kommandon.
* Skapa en .gitignore-fil i `development` och lägg till de personliga listorna, hämta sedan denna ifrån `development` till era personliga brancher med hjälp av `merge`.
  
  När detta är gjort bör det se ut såhär i de olika brancharna:

    ```
    main:
        allCommands.txt (alla 60 commands)
        gitCommands.json (tomt)

    development:
        .gitignore (niklasCommands.txt plus partners motsvarighet)
        allCommands.txt (alla 60 commands)
        lathund.json (tomt)

    niklas-dev
        .gitignore (niklasCommands.txt plus partners motsvarighet)
        allCommands.txt (alla 60 commands)
        lathund.json (dina commands)
        niklasCommnads.txt (din lista)
    ```

* **Varje** git-kommando man lägger till ska göras i en **separat commit**. Med ett meddelande som beskriver vilket kommando det gäller.
* När ni är klara ska ni göra en `merge` till `development` och gemensamt se över helheten.
* När ni är nöjda med innehållet gör ni merge tillbaks till `main` och lämnar in.

## Betygskriterier

**OBS! Bedömning sker individuellt!**

### Krav för G

* Samtliga steg är utförda enligt beskrivningen.

### Krav för VG

* Man har lyckats lösa eventuella problem inom teamet.
* En textfil av valfritt format (eller pdf). Som innehåller alla git-kommandon man använt under arbetet. _För kommandon som misslyckats ska en tillhörande beskrivning om vad som gick fel och hur man löste det finnas med._ Lämna in denna på iths-distans.
* Inlämning före deadline (Lyckas man inte kommer en möjlighet till komplettering 2 veckor efter deadline med ny uppgift.)

## Redovisning

* Lämna in via GitHub Classroom
* Skriv en kommentar på iths-distans med vem ni arbetat
* Lämna in på ITHS-Distans
