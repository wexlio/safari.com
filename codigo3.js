// ------------------Cargar archivos excel-json

let selectedFile;

var productos777 = [];
var guardarArreglo = "";

const inputCargar = document.getElementById("inputs11");

inputCargar.addEventListener("change", (event) =>{
	selectedFile = event.target.files[0];
})

const buttonCargar = document.getElementById("button-cargar-excel");

buttonCargar.addEventListener("click", (event) =>{
    // XLSX.utils.json_to_sheet(data, 'out.xlsx');
    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event)=>{
         let data = event.target.result;
         let workbook = XLSX.read(data,{type:"binary"});
         console.log(workbook);
         workbook.SheetNames.forEach(sheet => {
              let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
              console.log(rowObject);
              document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4)
              console.log(productos777);
              const genial = productos777.push(rowObject);
              console.log(genial);

guardarArreglo = JSON.stringify(productos777);

dataMayor = "var data = " + guardarArreglo;

localStorage.setItem("arrays11", guardarArreglo);

const exportado = "";
                    // console.log(arrays1
// export exportado = guardarArreglo;

         });
        }
    }

})

// const verPagina = document.getElementById("ver-pagina");

// verPagina.addEventListener("click", (event) =>{
// 	location.href = "index.html";
// })

// <h2>Exportar texto a un archivo</h2>
//  <p>Escribe para exportar</p>
//  <input type="text" id="texto-archivo" />
//  <button id="exportar">Exportar</button>
//  <hr/>
// <a href="https://youtu.be/sFha8qWeUj4" target="_blank">Ver video tutorial en youtube</a>


function exportar (data, fileName) {
    const a = document.createElement("a");
    const contenido = data,
        blob = new Blob([contenido], {type: "octet/stream"}),
        url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
};

document.querySelector('#exportar').onclick = function () {
    // const data = document.querySelector('#texto-archivo').value;
    const nombreArchivo = 'ejemplo.js'
    exportar(dataMayor, nombreArchivo);
}

// fetch("esfora.txt")
//   .then(res=>res.text())
//   .then(res=>console.log(res))

// console.log(JSON.stringify(res));

// console.log(peticion)
// var prueba1133 = [[
//                     {
//                       a:"si me jala", 
//                       b:"ostias", 
//                       c:"perros"
//                     },
//                     {
//                       a:"no me jala", 
//                       b:"ootias", 
//                       c:"oorros"
//                     }
//                   ]];



