import {almacenarOrdenActualizado, onConsultas,buscarNumeroOrden} from './firebase.js'

let validacion = false;

const infoBuscar = document.getElementById('form-creacion-orden');
var conti = 1;


window.addEventListener('DOMContentLoaded',async()=>{

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

infoBuscar.addEventListener('submit',(e) =>{
    e.preventDefault()

    if(validacion){
        let encontrado = false
    
        let refe = document.getElementById("numero_referencia").value;
        let numero_orden = document.getElementById("numero_orden").value;
        let cprodu = document.getElementById("cantidad_producir").value;
        let fprodu = document.getElementById("Fecha_producir").value;
        
       let valor;
        buscarNumeroOrden(numero_orden).then(val => { 
            valor = val;

            if(!valor){

                const buscarTabla = document.getElementById('buscar-tabla');
            const buscarProducto = document.getElementById('producto');
            const Informacion = document.getElementById('info');
            
        // funcion para encontrar la orden 
            onConsultas((consulta) => {
                
               let fila = ''
                let producto = ''
                let informacion= ''
                     
                consulta.forEach(doc => {
                        
                    const orden = doc.data()
                        let material1 = orden.material_1,material2 = orden.material_2,material3 = orden.material_3;
                        let material4 = orden.material_4,material5 = orden.material_5,material6 = orden.material_6;
                        let material7 = orden.material_7,material8 = orden.material_8,material9= orden.material_9;
                        let material10 = orden.material_10,material11 = orden.material_11, material12 = orden.material_12;
                        const totalOrden = orden.total_producto * cprodu;
                    
                          
                    if(orden.Referencia == refe){
                        encontrado = true;
                        almacenarOrdenActualizado(orden.Referencia,orden.Descripcion,
                            material1.nombre,material1.unidad_medida,material1.cantidad,material1.costo_x_uni,material1.total,material1.total,material1.cantidad,
                            material2.nombre,material2.unidad_medida,material2.cantidad,material2.costo_x_uni,material2.total,material2.total,material2.cantidad,
                            material3.nombre,material3.unidad_medida,material3.cantidad,material3.costo_x_uni,material3.total,material3.total,material3.cantidad,
                            material4.nombre,material4.unidad_medida,material4.cantidad,material4.costo_x_uni,material4.total,material4.total,material4.cantidad,
                            material5.nombre,material5.unidad_medida,material5.cantidad,material5.costo_x_uni,material5.total,material5.total,material5.cantidad,
                            material6.nombre,material6.unidad_medida,material6.cantidad,material6.costo_x_uni,material6.total,material6.total,material6.cantidad,
                            material7.nombre,material7.unidad_medida,material7.cantidad,material7.costo_x_uni,material7.total,material7.total,material7.cantidad,
                            material8.nombre,material8.unidad_medida,material8.cantidad,material8.costo_x_uni,material8.total,material8.total,material8.cantidad,
                            material9.nombre,material9.unidad_medida,material9.cantidad,material9.costo_x_uni,material9.total,material9.total,material9.cantidad,
                            material10.nombre,material10.unidad_medida,material10.cantidad,material10.costo_x_uni,material10.total,material10.total,material10.cantidad,
                            material11.nombre,material11.unidad_medida,material11.cantidad,material11.costo_x_uni,material11.total,material11.total,material11.cantidad,
                            material12.nombre,material12.unidad_medida,material12.cantidad,material12.costo_x_uni,material12.total,material12.total,material12.cantidad,
                            fprodu,totalOrden,cprodu,numero_orden);
                            
                            Swal.fire({
                                icon: 'success',
                                title: 'se ha creado la orden correctamente',
                                allowOutsideClick: false,
                                confirmButtonText: 'continuar',
                                
                              })
                        
                        producto+=`<h4> # de Referencia: <span class="text-secondary">${orden.Referencia}</span> </br>Descripcion: <span class="text-secondary">${orden.Descripcion}</span> <br>
                        Cantidad a producir: <span class="text-secondary">${cprodu}</span> <br>
                        Fecha a producir: <span class="text-secondary">${fprodu}</span></h4>
                    
                        `;          
                        if(material1.nombre != ""){  
                            Addfila(material1.nombre,material1.cantidad,material1.unidad_medida,material1.costo_x_uni,material1.total);
                        }
        
                        if(material2.nombre != ""){  
                            Addfila(material2.nombre,material2.cantidad,material2.unidad_medida,material2.costo_x_uni,material2.total);
                            }
        
                            if(material3.nombre != ""){  
                                Addfila(material3.nombre,material3.cantidad,material3.unidad_medida,material3.costo_x_uni,material3.total);
                                }
        
                                if(material4.nombre != ""){  
                                    Addfila(material4.nombre,material4.cantidad,material4.unidad_medida,material4.costo_x_uni,material4.total);
                                    }
        
                                    if(material5.nombre != ""){  
                                        Addfila(material5.nombre,material5.cantidad,material5.unidad_medida,material5.costo_x_uni,material5.total);                 
                                        }
                                        
                                        if(material6.nombre != ""){  
                                            Addfila(material6.nombre,material6.cantidad,material6.unidad_medida,material6.costo_x_uni,material6.total);
                                            }
        
                                            if(material7.nombre != ""){  
                                                Addfila(material7.nombre,material7.cantidad,material7.unidad_medida,material7.costo_x_uni,material7.total); 
                                                }
        
                                                if(material8.nombre != ""){  
                                                    Addfila(material8.nombre,material8.cantidad,material8.unidad_medida,material8.costo_x_uni,material8.total);
                                                    }

                                                    
                                            if(material9.nombre != ""){                      
                                                Addfila(material9.nombre,material9.cantidad,material9.unidad_medida,material9.costo_x_uni,material9.total);
                                                }

                                                if(material10.nombre != ""){                      
                                                    Addfila(material10.nombre,material10.cantidad,material10.unidad_medida,material10.costo_x_uni,material10.total);
                                                    }

                                                    if(material11.nombre != ""){                      
                                                        Addfila(material11.nombre,material11.cantidad,material11.unidad_medida,material11.costo_x_uni,material11.total);
                                                        }

                                                        if(material12.nombre != ""){                      
                                                            Addfila(material12.nombre,material12.cantidad,material12.unidad_medida,material12.costo_x_uni,material12.total);
                                                            }
               
                        informacion+=`
                        <div class="container contenedor">               
                            <h3></br>Valor teorico de la orden: $ ${totalOrden}</h3>
                      </div>
                      
                        `
                      
                         //habilitar boton al momento que se encunetra el producto
                         document.getElementById('boton-ver').disabled= false;
                         document.getElementById('etiqueta_a').classList.remove('no-activo');
                      
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
        
                buscarProducto.innerHTML = producto
                Informacion.innerHTML = informacion
                function Addfila(material,cantidad,medida,costoU,total){
                    fila+= `
                    <tr>
                    <td data-titulo="# material">${conti}</td>
                        <td data-titulo="nombre">${material}</td>
                        <td data-titulo="cantidad">${cantidad}</td>
                        <td data-titulo="unidad de medida">${medida}</td>
                        <td data-titulo="costo x unidad">${costoU}</td>
                        <td data-titulo="total teorico">${total}</td>
                    </tr>`
                    conti++
                    buscarTabla.innerHTML= fila
                }
        
                
            })
            }else{  
                
                document.getElementById('numero_orden').classList.add('alerta')
                
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'el numero de orden ya existe, ingrese por favor uno diferente!',
                  })
            
            }
            
        })
         
    }else{
        console.log("espacios vacios")   
    }
    
 
})

