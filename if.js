/*Detyra 1 =>
Gjeni mesataren e notave tuaja:
(nota1 + nota2 + nota3… + notaN)/numriINotave


Nëse mesatarja juaj është më e madhe se 4.5 printoni në konzollë tekstin “Keni sukses të shkëlqyeshëm”
Nëse mesatarja është mbi 3.5 dhe nën 4.5 printoni “ Keni sukses shumë të mirë”
Nëse mesatarja është mbi 2.5 dhe nën 3.5 printoni “ Keni sukses të mirë ”
Nëse mesatarja është mbi 2 dhe nën 2.5 printoni “Suksesi juaj është i mjaftueshëm”
Nëse mesatarja është 1 printoni “Suksesi juaj është i pa-mjaftueshëm”
Për çdo rast tjetër printoni “Mesatarja ka vlerë të gabuar”
*/
let gjuheShqipe =3,
    matematike = 4,
    anglisht = 5,
    kimi = 3,
    fizike = 3,
    edQytetare = 4;
let mesatarja =(gjuheShqipe + matematike + anglisht + kimi + fizike + edQytetare)/6
if (mesatarja > 4.5 && mesatarja <=5) {
    console.log("Keni sukses te shkelqyeshem")
}
else if(mesatarja >= 3.5 && mesatarja <=4.5){
    console.log("Keni sukses shume te mire")
}
else if(mesatarja >=2.5 && mesatarja <3.5){
    console.log("Keni sukses te mire")
}
else if(mesatarja >=2 && mesatarja <2.5){
    console.log("Keni sukses te mire")
}
else if(mesatarja == 1){
    console.log("Suksesi juaj është i pa-mjaftueshëm")
}
else{
    console.log("Mesatarja ka vlere te gabuar")
}
/*Detyra 2=>
Të jepet numri i pikëve nga lënda e matematikes duke përdorur prompt

Nëse pikët janë mbi 50 Nota në console të shfaqe 2
Nëse pikët janë mbi 60-65 Nota në console të shfaqe 3
Nëse pikët janë mbi 65- 80 Nota në console të shfaqe 4
Nëse pikët  janë mbi 80-100 Nota në console të shfaqe 5
Nëse piket janë më pak se 50 të shfaqet mesazhi në console “ Na vjen keq por keni deshtuar ne testim”
*/
let piket = +prompt("Jep numrin e pikeve nga lenda e matematikes.")
if(piket>=50){
    console.log("Nota eshte 2")
}
else if(piket >= 60 && piket <= 65){
    console.log("Nota eshte 3")
}
else if(piket >= 65 && piket <= 80){
    console.log("Nota eshte 4")
}
else if(piket >= 80 && piket <= 100){
    console.log("Nota eshte 5")
}
else{
    console.log("Na vjen keq por keni deshtuar ne testim!")
}