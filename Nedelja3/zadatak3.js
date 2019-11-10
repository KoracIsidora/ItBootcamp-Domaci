let niz = [1, 2, 3, 4, 5, 10, 15, 23, 1, 5];

function deljivoSaPet(niz) {
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 5 == 0) {
            console.log(niz[i]);
        }
    }
}

deljivoSaPet(niz);