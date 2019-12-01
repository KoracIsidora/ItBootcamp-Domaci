const user = document.querySelector("#user");
const pass = document.querySelector("#pass");
const btn = document.querySelector("#btn");
let users;
fetch('users.json')
    .then(response => response.json())
    .then(response => users = response)

btn.addEventListener('click', logInOnClick);

function logInOnClick() {
    let userName = user.value;
    let passWord = pass.value;

    if ((userName.length < 3) || (userName.length > 15)) {
        alert('Username mora imati izmedju 3 i 15 karaktera.')
        return;
    }

    if ((passWord.length < 3) || (passWord.length > 15)) {
        alert('Password mora imati izmedju 3 i 15 karaktera.')
        return;
    }

    let num = userName.charAt(0);
    if (!isNaN(num)) {
        alert('Prvo slovo mora biti karakter!')
        return;
    }

    let a = userName;
    let b = passWord;
    let varijabla = false;

    users.forEach(user => {
        if (user.username == a && user.password == b) {
            alert('Uspesna prijava!');
            varijabla = true;
            return;
        }  
    })

    if(varijabla == false){
        alert('Molimo, pokusajte ponovo!');
    }
}

// Ovo bismo putem backenda uradili na sledeci nacin:
// Informacije iz forme bismo poslali putem fetch-a u backend,
// putem zahteva 'POST', i na taj nacin dobili informaciju
// da li se zahtev koji smo prosledili nalazi na backendu. 
// Kada se to odradi, backend nam vraca odgovor 
// u formatu true/false.


