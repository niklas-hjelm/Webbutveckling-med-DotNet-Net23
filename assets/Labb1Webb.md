# Labb 1 - Webbutveckling med .NET

## Uppdraget

Ett lokalt företag har kontaktat dig och erbjudit dig möjligheten att skapa deras nya hemsida. De vill ha en hemsida med tre delar. Navigation ska ske genom en navbar eller liknande menysystem.

Den första delen är en landningssida där man ska kunna se företagets namn en passande bild och en passande välkomsttext.

Den andra delen är en "Om Oss"-sida där man ska kunna läsa om företaget, kontaktuppgifter och address.

Den tredje delen ska lista företagets tjänster/produkter. Dessa ska listas på ett snyggt sätt med hjälp av en JavaScript-array. Varje tjänst/produkt ska ha en passande bild. Här ska också finnas någon enkel form av kundvagn.

Uppdraget innebär ett ta fram ett förslag åt företaget och måste inte innehålla någon specifik text eller exakta kontaktuppgifter.

## Förslag på företag

* Frisörsalong
  * Tjänster som Herrklippning, Hårfärgning etc.
* Konditori/Bageri
  * Produkter som olika bakverk eller beställningar
* Pizzeria
  * Produkter som olika typer av pizza/kebab/falafel osv
* Florist
  * Produkter som olika arrangemang, buketter eller liknande.
* Städfirma
  * Tjänster för tex hemstäd, fönstertvätt, garagerensning osv.
* Hunddagis
  * Tjänster som tex kloklipp, pälsvård osv.

## Bedömning

### Krav för G

* Alla delar beskrivna ovan finns med.
* Sidan är uppdelad på ett strukturerat sätt med **minst tre** HTML- och CSS-filer.
*  Det finns en site.js-fil som innehåller funktionaliteten för att:
   * Visa listan av produkter/tjänster. 
   * Visa kundvagnen.
   * Lägga till och ta bort saker ur kundvagnen.
* Sidorna uppnår minst 80% i Lighthouse på Best Practices i både Mobile och Desktop.
* Hemsidan nyttjar minst två typsnitt.
* Hemsidan har ett färsgschema med minst 3 färger (utöver vitt och svart).
* Man nyttjar Bootstrap (eller liknande css-bibliotek).
* På sidan "Om Oss" Ska man kunna se adressen i en inbakad Google Maps-modul.

### Krav för VG

* Alla krav för G är uppfyllda.
* Man ska på något sätt anropa ett öppet API för att hämta intressant information. (tex väder, valuta-kurser eller annat som är relevant för sidan) [Här finns publika apier](https://github.com/public-api-lists/public-api-lists)
* Alla produkter/tjänster i listan (ej kundvagnen) ska kunna expanderas för att visa mer detaljerad information. Detta ska göras med hjälp av Modaler.
* Utöver detta så ska Performance, Accessability och Best Practices alla vara över 90% i Lighthouse på Desktop och Mobile.

## Redovisning
Sidan ska publiceras på [GitHub-Pages](https://pages.github.com/). Länk till både repo och sidan ska läggas till i inlämningen på ithsdistans.

# Inlämning sker före DEADLINE

Missar man deadline får man vänta på komplettering i Maj.