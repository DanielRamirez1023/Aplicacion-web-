import {onConsultasOrdenes} from './firebase.js'

const tabla = document.getElementById('ordenes');

window.addEventListener('DOMContentLoaded',async()=>{
    let contador=1;
    
    onConsultasOrdenes((consulta) => {
        let html = ''
        consulta.forEach(doc => {
            
            const orden = doc.data()
                let material1 = orden.material_1,material2 = orden.material_2,material3 = orden.material_3;
                let material4 = orden.material_4,material5 = orden.material_5,material6 = orden.material_6;
                let material7 = orden.material_7,material8 = orden.material_8,material9= orden.material_9;
                let material10 = orden.material_10,material11 = orden.material_11, material12 = orden.material_12;

            if(material1.nombre != ""){  
                Addfila(orden.fecha_produccion,orden.Referencia,orden.numero_de_orden,material1.nombre,material1.cantidad,material1.cantidad_real,material1.unidad_medida,material1.costo_real);
                }

                if(material2.nombre != ""){  
                    Addfila(orden.fecha_produccion,orden.Referencia,orden.numero_de_orden,material2.nombre,material2.cantidad,material2.cantidad_real,material2.unidad_medida,material2.costo_real);
                    }
                    if(material3.nombre != ""){  
                        Addfila(orden.fecha_produccion,orden.Referencia,orden.numero_de_orden,material3.nombre,material3.cantidad,material3.cantidad_real,material3.unidad_medida,material3.costo_real);
                        }
                        if(material4.nombre != ""){  
                            Addfila(orden.fecha_produccion,orden.Referencia,orden.numero_de_orden,material4.nombre,material4.cantidad,material4.cantidad_real,material4.unidad_medida,material4.costo_real);
                            }
                            if(material5.nombre != ""){  
                                Addfila(orden.fecha_produccion,orden.Referencia,orden.numero_de_orden,material5.nombre,material5.cantidad,material5.cantidad_real,material5.unidad_medida,material5.costo_real);
                                }
                                if(material6.nombre != ""){  
                                    Addfila(orden.fecha_produccion,orden.Referencia,orden.numero_de_orden,material6.nombre,material6.cantidad,material6.cantidad_real,material6.unidad_medida,material6.costo_real);
                                    }
                                    if(material7.nombre != ""){  
                                        Addfila(orden.fecha_produccion,orden.Referencia,orden.numero_de_orden,material7.nombre,material7.cantidad,material7.cantidad_real,material7.unidad_medida,material7.costo_real);
                                        }
                                        if(material8.nombre != ""){  
                                            Addfila(orden.fecha_produccion,orden.Referencia,orden.numero_de_orden,material8.nombre,material8.cantidad,material8.cantidad_real,material8.unidad_medida,material8.costo_real);
                                            }
                                            
                                            if(material9.nombre != ""){  
                                                Addfila(orden.fecha_produccion,orden.Referencia,orden.numero_de_orden,material9.nombre,material9.cantidad,material9.cantidad_real,material9.unidad_medida,material9.costo_real);
                                                }
                                                if(material10.nombre != ""){  
                                                    Addfila(orden.fecha_produccion,orden.Referencia,orden.numero_de_orden,material10.nombre,material10.cantidad,material10.cantidad_real,material10.unidad_medida,material10.costo_real);
                                                    }
                                                    if(material11.nombre != ""){  
                                                        Addfila(orden.fecha_produccion,orden.Referencia,orden.numero_de_orden,material11.nombre,material11.cantidad,material11.cantidad_real,material11.unidad_medida,material11.costo_real);
                                                        }
                                                        if(material12.nombre != ""){  
                                                            Addfila(orden.fecha_produccion,orden.Referencia,orden.numero_de_orden,material12.nombre,material12.cantidad,material12.cantidad_real,material12.unidad_medida,material12.costo_real);
                                                            }
                                            

            
         
        });
    
        function Addfila(fecha,referencia,numero_orden,material,cantidad_t,cantidad_r,medida,costo){
            html+= `
            <tr>
                <td>${fecha}</td>
                <th scope="row">${referencia}</th>
                <td>${numero_orden}</td>
                <td>${material}</td>
                <td>${cantidad_t}</td>
                <td>${cantidad_r}</td>
                <td>${medida}</td>
                <td>${costo}</td>
            </tr>`

            tabla.innerHTML = html
            contador++;      
        }
        
        $(document).ready( function () {
            var table = $('#tabla').DataTable({
              language: {
                url: '//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json'
              },
              dom: 'Bfrtipl',
    buttons: [
    {
				extend:    'excelHtml5',
				text:      '<i class="fas fa-file-excel"></i> ',
				titleAttr: 'Exportar a Excel',
				className: 'btn btn-success'
			},
			{
				extend:    'pdfHtml5',
				text:      '<i class="fas fa-file-pdf"></i> ',
				titleAttr: 'Exportar a PDF',
				className: 'btn btn-danger'
			},
			{
				extend:    'print',
				text:      '<i class="fa fa-print"></i> ',
				titleAttr: 'Imprimir',
				className: 'btn btn-secondary'
			},
    ]
            });
          } );
    });
  
});
