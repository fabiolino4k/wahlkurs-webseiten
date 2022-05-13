var str = [
    "Der Klebstoff auf der Rückseite israelischer Briefmarken ist koscher",
    "Es gibt Haie schon länger auf der Erde als Bäume",
    "Die Erde passt insgesamt 63 mal in den Gasplaneten Uranus",
    "Ungefähr 17% der schwedischen Landmasse besteht aus Heidelbeersträuchern",
    "Herzinfakte passieren am häufigsten an einem Montag",
    "Ein kleines Kind kann durch die Venen eines Blauwals schwimmen.",
    "Den Kopf gegen die Wand zu schlagen verbrennt 150 Kalorien",
    "Seeotter halten im Schlaf Händchen, damit sie nicht voneinander abdriften",
    "In Großbritannien ist es illegal, am Weihnachtstag Hackfleisch Pasteten zu essen",
    "Pteronophobie ist die Angst, von Vätern gekitzelt zu werden.",
    "Wenn Flusspferde verärgert sind, wird ihr Schweiß rot",
    "Eine Herde von Krähen wird als Mörder bezeichnet",
    "Die “Facebook Sucht” ist eine psychische Störung, die von Psychologen identifiziert wurde",
    "Die durchschnittliche Frau verbraucht innerhalb 5 Jahren ca. 1,7 Meter Lippenstift",
    "Der 29. Mai ist der offizielle “Steck-ein-Kissen-in-dein-Gefrierfach-Tag”",
    "Cherophobie ist die Angst vor Spaß",
    "Menschlicher Speichel hat einen dreimal so hohen Siedepunkt wie normales Wasser",
    "Wenn man einen Känguru-Schwanz anhebt kann es nicht hüpfen",
    "Bananen sind krumm weil sie in Richtung der Sonne wachsen",
    "Billy-Ziegen urinieren auf ihren eigenen Köpfe um attraktiver für Weibchen zu riechen",
    "Der Erfinder der Frisbee wurde nach seinem Tod eingeäschert und zu einer Frisbee verarbeitet",
    "In deinem Leben produzierst du so viel Speichel um zwei Swimmingpools zu füllen",
    "Wenn Pinocchio sagt “Meine Nase wächst gerade” geschieht das Lügner Paradox",
    "Polarbären können bis zu 86 Pinguine essen",
    "König Henry VIII schlief mit eine riesigen Axt neben seinem Bett",
    "Filmtrailer wurden ursprünglich nach dem Film gezeigt, deswegen werden sie auch “trailer” genannt",
    "Ein Adler kann einen jungen Hirsch töten und mit ihm wegfliegen",
    "Herzinfarkte passieren am häufigsten an einem Montag",
]

console.log(str[0])




function changeColor() {
    document.getElementById("b").style.backgroundColor = rgba(255,255,255, 0.5)
}

function generate() {
    var random = Math.floor(str.length * Math.random());
    if(random <= str.length) {
        console.log(str[random])
        document.getElementById("ausgabe").innerHTML = str[random]
    }

}