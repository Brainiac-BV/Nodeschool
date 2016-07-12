
    //set variables to contain arguments, and accumulate argument sums
    var args = process.argv;
    var argCollector = 0;
    //iterate through process array
    for (var i = 2; i < args.length; i += 1) {
        argCollector += Number(args[i]);

    }

    console.log(argCollector);

