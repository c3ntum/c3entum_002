var data = [
    {
      FirmenName: "FairEasy Autohandel Ferizi",
      Strasse: "Strasse 34",
      PlzOrt: "4562 Eiken",
      Wohnort: "München",
      Tel: "079 000 00 00",
      Mail: "mail@mail.ch",
      Web: "www.web.ch",
      Mwst: "CHE-256.23.23",
      Bank: "Bankname",
      Iban: "CH2356456458799",
    }
]

let hSatz = 158;

//Datum
var jetzt = new Date();
var tag = jetzt.getDate();
var monat = jetzt.getMonth() + 1; // getMonth() gibt Monate von 0-11 zurück, daher +1
var jahr = jetzt.getFullYear();

// Stelle sicher, dass Tag und Monat immer zweistellig sind
tag = tag < 10 ? '0' + tag : tag;
monat = monat < 10 ? '0' + monat : monat;

var datumString = tag + '.' + monat + '.' + jahr;
