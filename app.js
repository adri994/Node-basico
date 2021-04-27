
const {multiplicationTable} = require('./helpers/multi')
const argv = require('./config/yargs');
const colors = require('colors/safe');



multiplicationTable(argv.b,argv.l,argv.h)
    .then(file=>console.log(colors.rainbow(file),"creado"))
    .catch(err=>console.log(err))







