for (let i = 1; i <= 10; i++) {
    if (i === 1) {
        console.log("Złoty medal");
    } else if (i === 2) {
        console.log("Srebrny medal");
    } else if (i === 3) {
        console.log("Brązowy medal");
    } else {
        console.log(i);
    }
}

for (let i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("Złoty medal");
            break;
        case 2:
            console.log("Srebrny medal");
            break;
        case 3:
            console.log("Brązowy medal");
            break;
        default:
            console.log(i);
    }
}