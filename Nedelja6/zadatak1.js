// 1. Zasto koristimo JSON?
// Json se koristi za razmenu podataka izmedju klijenta i servera, 
// tj za prevodjenje informacija koje salje klijent u format koji server moze da procita.
// Takodje, informacije koje server salje klijentu se prevode u format koji klijent moze da procita.
// Koristi se pre svega zbog rastuce potrebe da se informacije ucitavaju brzo i asinhrono. 


// 2. Zasto su moduli korisni?
// Moduli su korisni zato sto se ne pise ceo kod u jednom js fajlu,
// vec se informacije stavljaju u nekoliko zavisnih js fajlova, 
// sto ih cini preglednijim i laksim za odrzavanje. 

// Na primer, kada se kod podeli u module, promenljivim koje su deklarisane
// u modulima nije moguce pristupiti iz drugih modula, ili iz spoljnog sveta,
// i na ovaj nacin se obezbedjuje privatnost promenljivih. 


// 3. Sta je EcmaScript? 
// Skracenica za EcmaScript je European Computer Manufacturer's Association 
// i predstavlja standard na osnovu kog se izradjuju skriptni jezici.
// Primer za skriptni jezik je JavaScript, i on je zasnovan na EcmaScript standardima.


// 4. Opisite kako funkcionisu HTTP zahtevi i sta je to REST API.
// HTTP zahtevi - Hypertext Transfer Protocol sluze za razmenu 
// informacija izmedju klijenta i servera.
// Funkcionisu na sledeci nacin:
// Klijent (browser ili kompjuter) posalje zahtev serveru, kada se unese zeljeni url.
// Nakon toga, otvori se konekcija izmedju klijenta i servera, kroz koju se razmenjuju informacije.
// Kroz tu konekciju, server salje svoj odgovor na zahtev, nakon cega se zatvara konekcija.

// Rest API:
// Rest je skracenica od Representational State Transfer,
// dok je API skracenica za Application Programming Interface.
// Rest odredjuje kako ce izgledati Api, predstavlja njegov arhitektonski dizajn.
// Rest je set pravila koji developeri koriste kada kreiraju API.

// API se ponasa kao kurir, a Rest nam dozvoljava 
// da koristimo HTTP da formatiramo poruke koje se prenose preko API. 


// 5. Koja je razlika izmedju == i === ?
// Kada se koristi == za poredjenje dve varijable, one se porede po vrednosti, 
// nezavisno od tipa varijable, pa je tako, na primer, 9 == '9' tacno.
// Kada se koristi === za poredjenje varijabli, one se porede i po vrednosti,
// i po tipu, pa u tom slucaju 9 === '9' nije tacno. 


// 6. Sta vraca console.log(typeof typeof true)?
// - Objasniti zasto. 
// Vraca string.
// Sintaksa operatora typeof je typeof(parametar) ili typeof parametar.
// Kako je u ovom slucaju u konzolu uneto dva puta type of,
// i uzimajuci u obzir sintaksu ovog operatora,
// on na "typeof true" gleda kao na paramatar, odnosno string, 
// zbog cega se to i ispisuje u konzoli. 