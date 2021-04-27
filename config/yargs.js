const argv = require('yargs')
                    .option('b',{
                        alias:"base",
                        demandOption:true,
                        describe:"Numero de la tabla",
                        type:"number",
                    })
                    .option('l',{
                        alias:"list",
                        type:"boolean",
                        describe:"Listar tabla",
                        default:false,
                    })
                    .option('h',{
                        alias:"hasta",
                        type:"number",
                        describe:"Cuantos numeros",
                        default:10
                    })
                    .check((argv,option)=>{
                        if(isNaN(argv.b)) {
                            throw "Tienes que Indicar una base";
                        }
                        else return true
                    })
                    .argv;

module.exports = argv; //exportar por defecto