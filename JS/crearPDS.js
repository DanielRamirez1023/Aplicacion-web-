import {obtenerInformacion,almacenarProductoActualizado,buscarReferencia} from './firebase.js'

//variable que obtiene el id del formulario y permite acceder a el 
const taskForm = document.getElementById('task-form');
var validacion  = false;
window.addEventListener('DOMContentLoaded',async()=>{
    const mostrar = await obtenerInformacion();

    mostrar.forEach(doc => {
        console.log(doc.data())
    });
});


    //funcion para validar el formulario
    (function () {
      'use strict'
    
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')
    
      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()          
            }else{
              validacion = true;
    
            }
    
            form.classList.add('was-validated')
            
          }, false)
        })
    })()


taskForm.addEventListener('submit',(e) =>{
    e.preventDefault();

    if(validacion){
     //variables para que acceden a la  informacion ingresada en el PDS
    const fecha = new Date().toLocaleDateString();
    const Referencia = taskForm['referencia'].value;
    const Descripcion = taskForm['descripcion'].value;


    // material 1 ---------------------------------------------------------
    const material1 = taskForm['material1'].value;
    const medidas1 = document.querySelector('#medida1 input[type=radio]:checked').value;
    const cantidad1 = taskForm['cantidad_material1'].value;
    const costoU1 = taskForm['costo_unitario_material1'].value;
    const totalM1 = cantidad1 * costoU1;

    //---------------------------------------------------------------------

    // material 2 ---------------------------------------------------------
    const material2 = taskForm['material2'].value;
    const medidas2 = document.querySelector('#medida2 input[type=radio]:checked').value;
    const cantidad2 = taskForm['cantidad_material2'].value;
    const costoU2 = taskForm['costo_unitario_material2'].value;
    const totalM2 = cantidad2 * costoU2;
    //---------------------------------------------------------------------
 
    // material 3 ---------------------------------------------------------
    const material3 = taskForm['material3'].value;
    const medidas3 = document.querySelector('#medida3 input[type=radio]:checked').value;
    const cantidad3 = taskForm['cantidad_material3'].value;
    const costoU3 = taskForm['costo_unitario_material3'].value;
    const totalM3 = cantidad3 * costoU3;
    //---------------------------------------------------------------------

    // material 4 ---------------------------------------------------------
    const material4 = taskForm['material4'].value;
    const medidas4 = document.querySelector('#medida4 input[type=radio]:checked').value;
    const cantidad4 = taskForm['cantidad_material4'].value;
    const costoU4 = taskForm['costo_unitario_material4'].value;
    const totalM4 = cantidad4 * costoU4;
    //---------------------------------------------------------------------
   
      // material 5 ---------------------------------------------------------
      const material5 = taskForm['material5'].value;
      const medidas5 = document.querySelector('#medida5 input[type=radio]:checked').value;
      const cantidad5 = taskForm['cantidad_material5'].value;
      const costoU5 = taskForm['costo_unitario_material5'].value;
      const totalM5 = cantidad5 * costoU5;
      //---------------------------------------------------------------------
 
      // material 6 ---------------------------------------------------------
      const material6 = taskForm['material6'].value;
      const medidas6 = document.querySelector('#medida6 input[type=radio]:checked').value;
      const cantidad6 = taskForm['cantidad_material6'].value;
      const costoU6 = taskForm['costo_unitario_material6'].value;
      const totalM6 = cantidad6 * costoU6;
      //---------------------------------------------------------------------
     
      // material 7 ---------------------------------------------------------
      const material7 = taskForm['material7'].value;
      const medidas7 = document.querySelector('#medida7 input[type=radio]:checked').value;
      const cantidad7 = taskForm['cantidad_material7'].value;
      const costoU7 = taskForm['costo_unitario_material7'].value;
      const totalM7 = cantidad7 * costoU7;
      //---------------------------------------------------------------------
      
      // material 8 ---------------------------------------------------------
      const material8 = taskForm['material8'].value;
      const medidas8 = document.querySelector('#medida8 input[type=radio]:checked').value;
      const cantidad8 = taskForm['cantidad_material8'].value;
      const costoU8 = taskForm['costo_unitario_material8'].value;
      const totalM8 = cantidad8 * costoU8;

      // material 9 ---------------------------------------------------------
      const material9 = taskForm['material9'].value;
      const medidas9 = document.querySelector('#medida9 input[type=radio]:checked').value;
      const cantidad9 = taskForm['cantidad_material9'].value;
      const costoU9 = taskForm['costo_unitario_material9'].value;
      const totalM9 = cantidad9 * costoU9;

      // material 10 ---------------------------------------------------------
      const material10 = taskForm['material10'].value;
      const medidas10 = document.querySelector('#medida10 input[type=radio]:checked').value;
      const cantidad10 = taskForm['cantidad_material10'].value;
      const costoU10 = taskForm['costo_unitario_material10'].value;
      const totalM10 = cantidad10 * costoU10;

      // material 11 ---------------------------------------------------------
      const material11 = taskForm['material11'].value;
      const medidas11 = document.querySelector('#medida11 input[type=radio]:checked').value;
      const cantidad11 = taskForm['cantidad_material11'].value;
      const costoU11 = taskForm['costo_unitario_material11'].value;
      const totalM11 = cantidad11 * costoU11;

      // material 12 ---------------------------------------------------------
      const material12 = taskForm['material12'].value;
      const medidas12 = document.querySelector('#medida12 input[type=radio]:checked').value;
      const cantidad12 = taskForm['cantidad_material12'].value;
      const costoU12 = taskForm['costo_unitario_material12'].value;
      const totalM12 = cantidad12 * costoU12;

      
      //---------------------------------------------------------------------
    const totalP = totalM1 + totalM2 + totalM3 + totalM4 + totalM5 + totalM6 + totalM7 + totalM8 + totalM9 
    + totalM10 + totalM11 + totalM12;

    let valor;
    buscarReferencia(Referencia).then(val => { 
        valor = val;
      
        if(!valor){
          console.log('no se encontro')
          
      //lamando la funcion que guarda todo el PDS
almacenarProductoActualizado(Referencia,Descripcion,
  material1,medidas1,cantidad1,costoU1,totalM1,
  material2,medidas2,cantidad2,costoU2,totalM2,
  material3,medidas3,cantidad3,costoU3,totalM3,
  material4,medidas4,cantidad4,costoU4,totalM4,
  material5,medidas5,cantidad5,costoU5,totalM5,
  material6,medidas6,cantidad6,costoU6,totalM6,
  material7,medidas7,cantidad7,costoU7,totalM7,
  material8,medidas8,cantidad8,costoU8,totalM8,
  material9,medidas9,cantidad9,costoU9,totalM9,
  material10,medidas10,cantidad10,costoU10,totalM10,
  material11,medidas11,cantidad11,costoU11,totalM11,
  material12,medidas12,cantidad12,costoU12,totalM12,
fecha,totalP);

   //notificacion
   Swal.fire({
    icon: 'success',
    title: 'datos PDS guardados correctamente',
    html: '<a style="width: 300px;" href="./buscarPDS.html"><button type="button" class="btn btn-success">Siguiente</button></a>',
    allowOutsideClick: false,
    showConfirmButton:false,
    
  })
        }else{
          
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'el numero de referencia ya existe, ingrese por favor uno diferente!',
          })

        }
      
      })
  
  }else{

    console.log('se encontro')
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No se han llenado todos los campos necesarios!',
    })
  }

})





   