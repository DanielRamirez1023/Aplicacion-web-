import {onConsultas} from './firebase.js'


const infoBuscar = document.getElementById('form-buscar');
var conti = 1;
let encontrado = false;
window.addEventListener('DOMContentLoaded',async()=>{
    
  
   
});

infoBuscar.addEventListener('submit',(e) =>{
    e.preventDefault()
     
    

    
    let refe = document.getElementById("numero_referencia").value;
    const buscarTabla = document.getElementById('buscar-tabla');
    const buscarProducto = document.getElementById('producto');
    const Informacion = document.getElementById('info');

    let contador = 1;
    
// funcion para encontrar la orden 
    onConsultas((consulta) => {
        let fila =''
        let producto = ''
        let informacion= ''
        
        
        consulta.forEach(doc => {
            const orden = doc.data()
            
            if(orden.Referencia == refe){
                encontrado = true;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Producto encontrado',
                    showConfirmButton: false,
                    timer: 1500
                  })

                  //habilitar boton al momento que se encunetra el producto
                    document.getElementById('boton-ver').disabled= false;
                    document.getElementById('etiqueta_a').classList.remove('no-activo');
                
                producto+=`<h4> # de Referencia: <span class="text-secondary">${orden.Referencia}</span> </br>Descripcion: <span class="text-secondary">${orden.Descripcion}</span> </h4>
                
                `;  
                
                if(orden.material_1.nombre != ""){                      
                Addfila(orden.material_1.nombre,orden.material_1.cantidad,orden.material_1.unidad_medida,orden.material_1.costo_x_uni,orden.material_1.total);
                }

                if(orden.material_2.nombre != ""){                      
                    Addfila(orden.material_2.nombre,orden.material_2.cantidad,orden.material_2.unidad_medida,orden.material_2.costo_x_uni,orden.material_2.total);
                    }

                    if(orden.material_3.nombre != ""){                      
                        Addfila(orden.material_3.nombre,orden.material_3.cantidad,orden.material_3.unidad_medida,orden.material_3.costo_x_uni,orden.material_3.total);
                        }

                        if(orden.material_4.nombre != ""){                      
                            Addfila(orden.material_4.nombre,orden.material_4.cantidad,orden.material_4.unidad_medida,orden.material_4.costo_x_uni,orden.material_4.total);
                            }

                            if(orden.material_5.nombre != ""){                      
                                Addfila(orden.material_5.nombre,orden.material_5.cantidad,orden.material_5.unidad_medida,orden.material_5.costo_x_uni,orden.material_5.total);
                                }
                                if(orden.material_6.nombre != ""){                      
                                    Addfila(orden.material_6.nombre,orden.material_6.cantidad,orden.material_6.unidad_medida,orden.material_6.costo_x_uni,orden.material_6.total);
                                    }
                                    if(orden.material_7.nombre != ""){                      
                                        Addfila(orden.material_7.nombre,orden.material_7.cantidad,orden.material_7.unidad_medida,orden.material_7.costo_x_uni,orden.material_1.total);
                                        }
                                        if(orden.material_8.nombre != ""){                      
                                            Addfila(orden.material_8.nombre,orden.material_8.cantidad,orden.material_8.unidad_medida,orden.material_8.costo_x_uni,orden.material_8.total);
                                            }

                                            
                                            if(orden.material_9.nombre != ""){                      
                                                Addfila(orden.material_9.nombre,orden.material_9.cantidad,orden.material_9.unidad_medida,orden.material_9.costo_x_uni,orden.material_9.total);
                                                }

                                                if(orden.material_10.nombre != ""){                      
                                                    Addfila(orden.material_10.nombre,orden.material_10.cantidad,orden.material_10.unidad_medida,orden.material_10.costo_x_uni,orden.material_10.total);
                                                    }

                                                    if(orden.material_11.nombre != ""){                      
                                                        Addfila(orden.material_11.nombre,orden.material_11.cantidad,orden.material_11.unidad_medida,orden.material_11.costo_x_uni,orden.material_11.total);
                                                        }

                                                        if(orden.material_12.nombre != ""){                      
                                                            Addfila(orden.material_12.nombre,orden.material_12.cantidad,orden.material_12.unidad_medida,orden.material_12.costo_x_uni,orden.material_12.total);
                                                            }



                informacion+=`
                <div class="container contenedor">               
                    <h3></br>Valor teorico del producto: $ ${orden.total_producto}</h3>
              </div>
                `        
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
    infoBuscar.reset();
 
})






  




 



    

  