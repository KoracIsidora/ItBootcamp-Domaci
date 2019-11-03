let n = 5;

for (let i = 1; i <= n; i++) {
    let zvezda = '';
    for (let j = 1; j <= (n - i); j++) {
        zvezda += ' ';
    }
    for (let k = 1; k <= i; k++) {
        zvezda += '#'
    }
    console.log(zvezda);
}

