var data = [
    {
      FirmenName: "FairEasy Automobile Ferizi",
      Strasse: "Römerstrasse 22a",
      PlzOrt: "4314 Zeiningen",
      Wohnort: "München",
      Tel: "+41(0)78 864 06 26",
      Mail: "faireasy-automobile@outlook.com",
      Web: "-",
      Mwst: "CHE-439.889.999",
      Bank: "Post Finance",
      Iban: "CH31 0900 0000 1631 8404 6",
    }
]

let hSatz = 80;

//Datum
var jetzt = new Date();
var tag = jetzt.getDate();
var monat = jetzt.getMonth() + 1; // getMonth() gibt Monate von 0-11 zurück, daher +1
var jahr = jetzt.getFullYear();

// Stelle sicher, dass Tag und Monat immer zweistellig sind
tag = tag < 10 ? '0' + tag : tag;
monat = monat < 10 ? '0' + monat : monat;

var datumString = tag + '.' + monat + '.' + jahr;
