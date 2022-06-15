import {onConsultasOrdenes,actualizarDatosOrdenes} from './firebase.js'


const infoBuscar = document.getElementById('form-buscar');
let validacion = false;

const botonEnviar = document.getElementById('button-enviar');
botonEnviar.onclick = actualizarOrden;

window.addEventListener('DOMContentLoaded',async()=>{
    
});


let id= '';
let ubicarorden ='';

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

infoBuscar.addEventListener('submit',(e) =>{
    e.preventDefault()

    if(validacion){
      let encontrado = false;
    
      let numero = document.getElementById("numero_orden").value;
      const buscarTabla = document.getElementById('buscar-tabla');
      const buscarProducto = document.getElementById('producto');
      const Informacion = document.getElementById('info');
      
      let contador = 1;
      
  // funcion para encontrar la orden 
      onConsultasOrdenes((consulta) => {
          let fila1 = '', fila2 = '',fila3 = '', fila4 = '',fila5 = '', fila6 = '',fila7 = '', fila8 = '',
          fila9 = '',fila10 = '',fila11 = '',fila12 = '';
          
          let producto = ''
          let informacion= ''
          
          
          consulta.forEach(doc => {
              const orden = doc.data()
              let material1 = orden.material_1,material2 = orden.material_2,material3 = orden.material_3;
              let material4 = orden.material_4,material5 = orden.material_5,material6 = orden.material_6;
              let material7 = orden.material_7,material8 = orden.material_8,material9= orden.material_9;
              let material10 = orden.material_10,material11 = orden.material_11, material12 = orden.material_12;
              
              if(orden.numero_de_orden == numero && encontrado == false){
                  encontrado= true;
                 
                  id = doc.id
                  ubicarorden = orden;
                  producto+=`<h3>Ingrese la cantidad real y el costo real en los debidos espacios</h3><br><h4> # de Referencia: <span class="text-secondary">${orden.Referencia}</span> </br>Descripcion: <span class="text-secondary">${orden.Descripcion}</span> </h4>
                  
                  `;  
                  
                  if(material1.nombre != ""){  
                  fila1+= `
                   <tr>
                      <td data-titulo="# material:" >1</td>
                      <td data-titulo="Nombre:" >${material1.nombre}</td>
                      <td data-titulo="Cantidad:" >${material1.cantidad}</td>
                      <td data-titulo="Unidad de medida:" >${material1.unidad_medida}</td>
                      <td data-titulo="Costo x unidad:" >${material1.costo_x_uni}</td>
                      <td data-titulo="Costo teorico:" >${material1.total}</td>
                      <td data-titulo="Cantidad real:" ><input type="number" class="form-control" id="cantidad_real1" step="0.01"></td>
                      <td data-titulo="Costo real:" >${material1.costo_real}</td>
                   </tr>`;
                  }
                  if(material2.nombre != ""){  
                    fila2+= `
                     <tr>
                     <td data-titulo="# material:" >2</td>
                        <td data-titulo="Nombre:" >${material2.nombre}</td>
                        <td data-titulo="Cantidad:" >${material2.cantidad}</td>
                        <td data-titulo="Unidad de medida:" >${material2.unidad_medida}</td>
                        <td data-titulo="Costo x unidad:" >${material2.costo_x_uni}</td>
                        <td data-titulo="Costo teorico:" >${material2.total}</td>
                        <td data-titulo="Cantidad real:" ><input type="number" class="form-control" id="cantidad_real2" step="0.01"></td>
                        <td data-titulo="Costo real:" >${material2.costo_real}</td>
                     </tr>`;
                    }
                    if(material3.nombre != ""){  
                      fila3+= `
                       <tr>
                       <td data-titulo="# material:" >3</td>
                          <td data-titulo="Nombre:" >${material3.nombre}</td>
                          <td data-titulo="Cantidad:" >${material3.cantidad}</td>
                          <td data-titulo="Unidad de medida:" >${material3.unidad_medida}</td>
                          <td data-titulo="Costo x unidad:" >${material3.costo_x_uni}</td>
                          <td data-titulo="Costo teorico" >${material3.total}</td>
                          <td data-titulo="Cantidad real" ><input type="number" class="form-control" id="cantidad_real3" step="0.01"></td>
                          <td data-titulo="Costo real:" >${material3.costo_real}</td>
                       </tr>`;
                      
                    }if(material4.nombre != ""){  
                        fila4+= `
                         <tr>
                         <td data-titulo="# material:" >4</td>
                            <td data-titulo="Nombre:" >${material4.nombre}</td>
                            <td data-titulo="Cantidad: " >${material4.cantidad}</td>
                            <td data-titulo="Unidad de medida:" >${material4.unidad_medida}</td>
                            <td data-titulo="Costo x unidad:" >${material4.costo_x_uni}</td>
                            <td data-titulo="Costo teorico:" >${material4.total}</td>
                            <td data-titulo="Cantidad real:" ><input type="number" class="form-control" id="cantidad_real4" step="0.01"></td>
                            <td data-titulo="Costo real:" >${material4.costo_real}</td>
                         </tr>`;
                        }
                        if(material5.nombre != ""){  
                          fila5+= `
                           <tr>
                           <td data-titulo="# material:" >5</td>
                              <td data-titulo="Nombre:" >${material5.nombre}</td>
                              <td data-titulo="Cantidad:" >${material5.cantidad}</td>
                              <td data-titulo="Unidad de medida:" >${material5.unidad_medida}</td>
                              <td data-titulo="Costo x unidad:" >${material5.costo_x_uni}</td>
                              <td data-titulo="Costo teorico:" >${material5.total}</td>
                              <td data-titulo="Cantidad real:" ><input type="number" class="form-control" id="cantidad_real5" step="0.01"></td>
                              <td data-titulo="Costo real:" >${material5.costo_real}</td>
                           </tr>`;
                          }
                          if(material6.nombre != ""){  
                            fila6+= `
                             <tr>
                             <td data-titulo="# material:" >6</td>
                                <td data-titulo="Nombre:" >${material6.nombre}</td>
                                <td data-titulo="Cantidad:" >${material6.cantidad}</td>
                                <td data-titulo="Unidad de medida:" >${material6.unidad_medida}</td>
                                <td data-titulo="Costo x unidad:" >${material6.costo_x_uni}</td>
                                <td data-titulo="Costo teorico:" >${material6.total}</td>
                                <td data-titulo="Cantidad real:" ><input type="number" class="form-control" id="cantidad_real6" step="0.01"></td>
                                <td data-titulo="Costo real:" >${material6.costo_real}</td>
                             </tr>`;
                            }
                            if(material7.nombre != ""){  
                              fila7+= `
                               <tr>
                               <td data-titulo="# material:" >7</td>
                                  <td data-titulo="Nombre:" >${material7.nombre}</td>
                                  <td data-titulo="Cantidad:" >${material7.cantidad}</td>
                                  <td data-titulo="Unidad de medida:" >${material7.unidad_medida}</td>
                                  <td data-titulo="Costo x unidad:" >${material7.costo_x_uni}</td>
                                  <td data-titulo="Costo teorico:" >${material7.total}</td>
                                  <td data-titulo="Cantidad real:" ><input type="number" class="form-control" id="cantidad_real7" step="0.01"></td>
                                  <td data-titulo="Costo real:" >${material7.costo_real}</td>
                               </tr>`;
                              }
                              if(material8.nombre != ""){  
                                fila8+= `
                                 <tr>
                                 <td data-titulo="# material:" >8</td>
                                    <td data-titulo="Nombre:" >${material8.nombre}</td>
                                    <td data-titulo="Cantidad:" >${material8.cantidad}</td>
                                    <td data-titulo="Unidad de medida:" >${material8.unidad_medida}</td>
                                    <td data-titulo="Costo x unidad:" >${material8.costo_x_uni}</td>
                                    <td data-titulo="Costo teorico:" >${material8.total}</td>
                                    <td data-titulo="Cantidad real:" ><input type="number" class="form-control" id="cantidad_real8" step="0.01"></td>
                                    <td data-titulo="Costo real:" >${material8.costo_real}</td>
                                 </tr>`;
                                }
                                
                                if(material9.nombre != ""){  
                                  fila9+= `
                                   <tr>
                                   <td data-titulo="# material:" >9</td>
                                      <td data-titulo="Nombre:" >${material9.nombre}</td>
                                      <td data-titulo="Cantidad:" >${material9.cantidad}</td>
                                      <td data-titulo="Unidad de medida:" >${material9.unidad_medida}</td>
                                      <td data-titulo="Costo x unidad:" >${material9.costo_x_uni}</td>
                                      <td data-titulo="Costo teorico:" >${material9.total}</td>
                                      <td data-titulo="Cantidad real:" ><input type="number" class="form-control" id="cantidad_real9" step="0.01"></td>
                                      <td data-titulo="Costo real:" >${material9.costo_real}</td>
                                   </tr>`;
                                  }
                                  if(material10.nombre != ""){  
                                    fila10+= `
                                     <tr>
                                     <td data-titulo="# material:" >10</td>
                                        <td data-titulo="Nombre:" >${material10.nombre}</td>
                                        <td data-titulo="Cantidad:" >${material10.cantidad}</td>
                                        <td data-titulo="Unidad de medida:" >${material10.unidad_medida}</td>
                                        <td data-titulo="Costo x unidad:" >${material10.costo_x_uni}</td>
                                        <td data-titulo="Costo teorico:" >${material10.total}</td>
                                        <td data-titulo="Cantidad real:" ><input type="number" class="form-control" id="cantidad_real10" step="0.01"></td>
                                        <td data-titulo="Costo real:" >${material10.costo_real}</td>
                                     </tr>`;
                                    }
                                    if(material11.nombre != ""){  
                                      fila11+= `
                                       <tr>
                                       <td data-titulo="# material:" >11</td>
                                          <td data-titulo="Nombre:" >${material11.nombre}</td>
                                          <td data-titulo="Cantidad:" >${material11.cantidad}</td>
                                          <td data-titulo="Unidad de medida:" >${material11.unidad_medida}</td>
                                          <td data-titulo="Costo x unidad:" >${material11.costo_x_uni}</td>
                                          <td data-titulo="Costo teorico:" >${material11.total}</td>
                                          <td data-titulo="Cantidad real:" ><input type="number" class="form-control" id="cantidad_real11" step="0.01"></td>
                                          <td data-titulo="Costo real:" >${material11.costo_real}</td>
                                       </tr>`;
                                      }
                                      if(material12.nombre != ""){  
                                        fila12+= `
                                         <tr>
                                         <td data-titulo="# material:" >12</td>
                                            <td data-titulo="Nombre:" >${material12.nombre}</td>
                                            <td data-titulo="Cantidad:" >${material12.cantidad}</td>
                                            <td data-titulo="Unidad de medida:" >${material12.unidad_medida}</td>
                                            <td data-titulo="Costo x unidad:" >${material12.costo_x_uni}</td>
                                            <td data-titulo="Costo teorico:" >${material12.total}</td>
                                            <td data-titulo="Cantidad real:" ><input type="number" class="form-control" id="cantidad_real12" step="0.01"></td>
                                            <td data-titulo="Costo real:" >${material12.costo_real}</td>
                                         </tr>`;
                                        }
                                  
  
  
                  informacion+=`
                  <div class="container contenedor">               
                      <h3></br>Valor teorico de la orden: $ ${orden.total_orden}</h3>
                   </div>    ` 
                   
                   document.getElementById('button-enviar').disabled= false;
              }           
          });
  
          if(encontrado == false){
              Swal.fire({
                  position: 'top-end',
                  icon: 'error',
                  title: 'Producto no encontrado',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
  
          buscarTabla.innerHTML = fila1 + fila2 + fila3 +fila4 + fila5 + fila6 + fila7 + fila8 + fila9 + fila10 + fila11 + fila12;
          buscarProducto.innerHTML = producto
          Informacion.innerHTML = informacion   
                 
      })     
    }   
})

//aqui voy actualizando
function actualizarOrden (){

            let material1 = ubicarorden.material_1,material2 = ubicarorden.material_2,material3 = ubicarorden.material_3;
            let material4 = ubicarorden.material_4,material5 = ubicarorden.material_5,material6 = ubicarorden.material_6;
            let material7 = ubicarorden.material_7,material8 = ubicarorden.material_8,material9= ubicarorden.material_9;
            let material10 = ubicarorden.material_10,material11 = ubicarorden.material_11, material12 = ubicarorden.material_12;

    let canti_real1=material1.cantidad,costo_real1=material1.total,
        canti_real2=material2.cantidad,costo_real2=material2.total,
        canti_real3=material3.cantidad,costo_real3=material3.total,
        canti_real4=material4.cantidad,costo_real4=material4.total,
        canti_real5=material5.cantidad,costo_real5=material5.total,
        canti_real6=material6.cantidad,costo_real6=material6.total,
        canti_real7=material7.cantidad,costo_real7=material7.total,
        canti_real8=material8.cantidad,costo_real8=material8.total,
        canti_real9=material9.cantidad,costo_real9=material9.total,
        canti_real10=material10.cantidad,costo_real10=material10.total,
        canti_real11=material11.cantidad,costo_real11=material11.total,
        canti_real12=material12.cantidad,costo_real12=material12.total;
         
   if(material1.nombre != ""){
      canti_real1 = document.getElementById("cantidad_real1").value;
      costo_real1 = canti_real1 * material1.costo_x_uni;

      if(canti_real1 == ''){
        canti_real1=material1.cantidad
        costo_real1= material1.total;
      }

    }

    if(material2.nombre != ""){
      canti_real2 = document.getElementById("cantidad_real2").value;
      costo_real2 = canti_real2 * material2.costo_x_uni;

      if(canti_real2 == ''){
        canti_real2=material2.cantidad
        costo_real2= material2.total;
      }
    }

    if(material3.nombre != ""){
      canti_real3 = document.getElementById("cantidad_real3").value;
      costo_real3 = canti_real3 * material3.costo_x_uni;

      if(canti_real3 == ''){
        canti_real3=material3.cantidad
        costo_real3= material3.total;
      }
    }

    if(material4.nombre != ""){
      canti_real4 = document.getElementById("cantidad_real4").value;
      costo_real4 = canti_real4 * material4.costo_x_uni;

      if(canti_real4 == ''){
        canti_real4=material4.cantidad
        costo_real4= material4.total;
      }
    }

    if(material5.nombre != ""){
      canti_real5 = document.getElementById("cantidad_real5").value;
      costo_real5 = canti_real5 * material5.costo_x_uni;

      if(canti_real5 == ''){
        canti_real5=material5.cantidad
        costo_real5= material5.total;
      }
    }

    if(material6.nombre != ""){
      canti_real6 = document.getElementById("cantidad_real6").value;
      costo_real6 = canti_real6 * material6.costo_x_uni;

      if(canti_real6 == ''){
        canti_real6=material6.cantidad
        costo_real6= material6.total;
      }
    }

    if(material7.nombre != ""){
      canti_real7 = document.getElementById("cantidad_real7").value;
      costo_real7 = canti_real7 * material7.costo_x_uni;

      if(canti_real7 == ''){
        canti_real7=material7.cantidad
        costo_real7= material7.total;
      }
    }

    if(material8.nombre != ""){
      canti_real8 = document.getElementById("cantidad_real8").value;
      costo_real8 = canti_real8 * material8.costo_x_uni;

      if(canti_real8 == ''){
        canti_real8=material8.cantidad
        costo_real8= material8.total;
      }
    }

    if(material9.nombre != ""){
      canti_real9 = document.getElementById("cantidad_real9").value;
      costo_real9 = canti_real9 * material9.costo_x_uni;

      if(canti_real9 == ''){
        canti_real9=material9.cantidad
        costo_real9= material9.total;
      }
    }

    if(material10.nombre != ""){
      canti_real10 = document.getElementById("cantidad_real10").value;
      costo_real10 = canti_real10 * material10.costo_x_uni;

      if(canti_real10 == ''){
        canti_real10=material10.cantidad
        costo_real10= material10.total;
      }
    }

    if(material11.nombre != ""){
      canti_real11 = document.getElementById("cantidad_real11").value;
      costo_real11 = canti_real11 * material11.costo_x_uni;

      if(canti_real11 == ''){
        canti_real11=material11.cantidad
        costo_real11= material11.total;
      }
    }

    if(material12.nombre != ""){
      canti_real12 = document.getElementById("cantidad_real12").value;
      costo_real12 = canti_real12 * material12.costo_x_uni;

      if(canti_real12 == ''){
        canti_real12=material12.cantidad
        costo_real12= material12.total;
      }
    }

    //realizar el calculo del total del producto real
    let suma = costo_real1 + costo_real2 + costo_real3 + costo_real4 + costo_real5 + costo_real6 + costo_real7 + costo_real8 +  costo_real9 +
    costo_real10 + costo_real11 + costo_real12;

     let total = suma * ubicarorden.cantidad_producir;

    actualizarDatosOrdenes(id,{total_orden: total,
      material_1: { nombre: material1.nombre, unidad_medida: material1.unidad_medida, cantidad: material1.cantidad,costo_x_uni: material1.costo_x_uni, total: material1.total,costo_real:costo_real1,cantidad_real:canti_real1},
      material_2: { nombre: material2.nombre, unidad_medida: material2.unidad_medida, cantidad: material2.cantidad,costo_x_uni: material2.costo_x_uni, total: material2.total,costo_real:costo_real2,cantidad_real:canti_real2},
      material_3: { nombre: material3.nombre, unidad_medida: material3.unidad_medida, cantidad: material3.cantidad,costo_x_uni: material3.costo_x_uni, total: material3.total,costo_real:costo_real3,cantidad_real:canti_real3},
      material_4: { nombre: material4.nombre, unidad_medida: material4.unidad_medida, cantidad: material4.cantidad,costo_x_uni: material4.costo_x_uni, total: material4.total,costo_real:costo_real4,cantidad_real:canti_real4},
      material_5: { nombre: material5.nombre, unidad_medida: material5.unidad_medida, cantidad: material5.cantidad,costo_x_uni: material5.costo_x_uni, total: material5.total,costo_real:costo_real5,cantidad_real:canti_real5},
      material_6: { nombre: material6.nombre, unidad_medida: material6.unidad_medida, cantidad: material6.cantidad,costo_x_uni: material6.costo_x_uni, total: material6.total,costo_real:costo_real6,cantidad_real:canti_real6},
      material_7: { nombre: material7.nombre, unidad_medida: material7.unidad_medida, cantidad: material7.cantidad,costo_x_uni: material7.costo_x_uni, total: material7.total,costo_real:costo_real7,cantidad_real:canti_real7},
      material_8: { nombre: material8.nombre, unidad_medida: material8.unidad_medida, cantidad: material8.cantidad,costo_x_uni: material8.costo_x_uni, total: material8.total,costo_real:costo_real8,cantidad_real:canti_real8},
      material_9: { nombre: material9.nombre, unidad_medida: material9.unidad_medida, cantidad: material9.cantidad,costo_x_uni: material9.costo_x_uni, total: material9.total,costo_real:costo_real9,cantidad_real:canti_real9},
      material_10: { nombre: material10.nombre, unidad_medida: material10.unidad_medida, cantidad: material10.cantidad,costo_x_uni: material10.costo_x_uni, total: material10.total,costo_real:costo_real10,cantidad_real:canti_real10},
      material_11: { nombre: material11.nombre, unidad_medida: material11.unidad_medida, cantidad: material11.cantidad,costo_x_uni: material11.costo_x_uni, total: material11.total,costo_real:costo_real11,cantidad_real:canti_real11},
      material_12: { nombre: material12.nombre, unidad_medida: material12.unidad_medida, cantidad: material12.cantidad,costo_x_uni: material12.costo_x_uni, total: material12.total,costo_real:costo_real12,cantidad_real:canti_real12}
    })

    Swal.fire({
      icon: 'success',
      title: 'Notificacion realizada correctamente',
      html: '<a style="width: 300px;" href="../index.html"><button type="button" class="btn btn-success">continuar</button></a>',
      allowOutsideClick: false,
      showConfirmButton:false,
      
    })

}
