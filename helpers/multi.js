const fs = require('fs');
const colors = require('colors/safe');

const multiplicationTable = async (base,list,limit) =>{
        console.clear()
        console.log(colors.green("================="));
        console.log("Tabla del",colors.green(base))
        console.log(colors.green("================="));

        let exit = "";  
    try {   
        for( let x =0;x<=limit;x++ ){
            exit  +=`${base} * ${x} = ${base*x}\n`;
            if(list) console.log(`${base} ${colors.green("*")} ${x} = ${base*x}`)
        }
        
        fs.writeFileSync(`./tabla/table-${base}.txt`,exit);
    
        return `table-${base}.txt`;
    } catch (error) {
        throw "error"
    }

}

//para exportar tenemos que hacer lo siguiente

module.exports = {
    multiplicationTable
}

//Lo importamos para usarlo tenemos que hacer lo siguiente
//Primer valor es el nombre del archivo que crearemos
//Segundo valor el contenido de
//y el tercero un callback que indicaremos si realiza la operacion o no
    /* fs.writeFile( `table-${base}.txt`,exit,(err)=>{
    if (err) throw err

    console.log("archivo creado")
} ) */