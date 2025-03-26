function unknownArgs(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

unknownArgs(1, 2, 3, 4, 5);
unknownArgs("a", "b", "c");