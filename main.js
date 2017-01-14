// var mouse = require('./mouse.js');


var stdin = process.openStdin();
stdin.setRawMode(true);
stdin.resume();

stdin.on('data', function (key) {
    process.stdout.write('on data: ' + key);

    if (key === '\u0003') {
        process.exit();
    }
});
stdin.on('keypress', function (chunk, key) {
    process.stdout.write('Get Chunk: ' + chunk + '\n');
    if (key && key.ctrl && key.name == 'c') process.exit();
});
// console.log(mouse);