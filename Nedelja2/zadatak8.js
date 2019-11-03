let height = 5;

for (let x = 1; x <= height; x++) {
    let row = '';

    for (let y = 1; y <= (height - x); y++) {
        row += ' ';
    }
    for (let z = 1; z <= x; z++) {
        row += '#';
    }
    console.log(row);
}

