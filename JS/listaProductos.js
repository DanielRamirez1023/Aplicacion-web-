import {onConsultas,eliminarOrden,actualizarDatos,} from './firebase.js'


const materiales = document.getElementById('materiales');
const tabla = document.getElementById('task-container');
const form_editar = document.getElementById('form-editar');
let id= '';

window.addEventListener('DOMContentLoaded',async()=>{
    let contador=1;
    let timerInterval
    
Swal.fire({
  title: 'Cargando informacion!',
  html: 'en <b></b> segundos se mostrara la info.',
  timer: 500,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
    
    

    onConsultas((consulta) => {
        let html = ''
        let mate = ''
        
        consulta.forEach(doc => {
            
            const orden = doc.data()
            html+= `
            <tr>
                <td data-titulo="# de producto: ">${contador}</td>
                <td data-titulo="Fecha de creacion: ">${orden.fecha_creacion}</td>
                <td data-titulo="Referencia: " scope="row"><strong>${orden.Referencia}</strong></td>
                <td data-titulo="Descripcion: ">${orden.Descripcion}</td>
                <td data-titulo="total teorico ">$ ${orden.total_producto}</td>
                <td><button type="button" class="btn btn-primary  btn-materiales" data-id="${doc.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">
                 Ver Materiales
                </button></td>
                <td> <button class='btn btn-danger btn-delete d-inline' data-id="${doc.id}">Borrar</button>
                </td>
                <td><button class='btn btn-primary btn-edit d-inline' data-bs-toggle="modal" data-bs-target="#exampleModal2" data-id="${doc.id}">Editar</button></td>
                <!-- Button trigger modal -->
            `;
            contador++;
         
        });
 
        tabla.innerHTML = html;

        $(document).ready( function () {
            var table = $('#tabla-materiales').DataTable({
                
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

          $.fn.dataTable.ext.errMode = 'none';

        

        const botonesEliminar = tabla.querySelectorAll('.btn-delete')

        

        botonesEliminar.forEach(btn => {
            btn.addEventListener('click',({target: { dataset }}) =>{
                Swal.fire({
                    title: 'Estas seguro?',
                    text: "¡No podrás revertir esto!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'si, eliminarlo!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Eliminado!',
                        'Su producto ha sido eliminado.',
                        'success'
                      )
                      eliminarOrden(dataset.id)
                 contador=1;
                 
                    }
                  })            
            })
        })

        
        const botonesMateriales = tabla.querySelectorAll('.btn-materiales')

        botonesMateriales.forEach(btn => {
            btn.addEventListener('click',({target: { dataset }}) =>{
                consulta.forEach(doc => {
                const orden = doc.data();
                let material1 = orden.material_1,material2 = orden.material_2,material3 = orden.material_3;
                let material4 = orden.material_4,material5 = orden.material_5,material6 = orden.material_6;
                let material7 = orden.material_7,material8 = orden.material_8,material9= orden.material_9;
                let material10 = orden.material_10,material11 = orden.material_11, material12 = orden.material_12;
                              
                    if(dataset.id == doc.id){
                        mate=`
                        <tr>
                            <td>${material1.nombre}</td>
                            <td>${material1.cantidad}</td>
                            <td>${material1.unidad_medida}</td>
                            <td>${material1.costo_x_uni}</td>
                            <td>${material1.total}</td>
                        </tr>
                        <tr>
                            <td>${material2.nombre}</td>
                            <td>${material2.cantidad}</td>
                            <td>${material2.unidad_medida}</td>
                            <td>${material2.costo_x_uni}</td>
                            <td>${material2.total}</td>
                        </tr>
                        <tr>
                            <td>${material3.nombre}</td>
                            <td>${material3.cantidad}</td>
                            <td>${material3.unidad_medida}</td>
                            <td>${material3.costo_x_uni}</td>
                            <td>${material3.total}</td>
                        </tr>
                        <tr>
                            <td>${material4.nombre}</td>
                            <td>${material4.cantidad}</td>
                            <td>${material4.unidad_medida}</td>
                            <td>${material4.costo_x_uni}</td>
                            <td>${material4.total}</td>
                        </tr>
                        <tr>
                            <td>${material5.nombre}</td>
                            <td>${material5.cantidad}</td>
                            <td>${material5.unidad_medida}</td>
                            <td>${material5.costo_x_uni}</td>
                            <td>${material5.total}</td>
                        </tr>
                        <tr>
                            <td>${material6.nombre}</td>
                            <td>${material6.cantidad}</td>
                            <td>${material6.unidad_medida}</td>
                            <td>${material6.costo_x_uni}</td>
                            <td>${material6.total}</td>
                        </tr>
                        <tr>
                            <td>${material7.nombre}</td>
                            <td>${material7.cantidad}</td>
                            <td>${material7.unidad_medida}</td>
                            <td>${material7.costo_x_uni}</td>
                            <td>${material7.total}</td>
                        </tr>
                        <tr>
                            <td>${material8.nombre}</td>
                            <td>${material8.cantidad}</td>
                            <td>${material8.unidad_medida}</td>
                            <td>${material8.costo_x_uni}</td>
                            <td>${material8.total}</td>
                        </tr>
                        <tr>
                            <td>${material9.nombre}</td>
                            <td>${material9.cantidad}</td>
                            <td>${material9.unidad_medida}</td>
                            <td>${material9.costo_x_uni}</td>
                            <td>${material9.total}</td>
                        </tr>
                        <tr>
                            <td>${material10.nombre}</td>
                            <td>${material10.cantidad}</td>
                            <td>${material10.unidad_medida}</td>
                            <td>${material10.costo_x_uni}</td>
                            <td>${material10.total}</td>
                        </tr>
                        <tr>
                            <td>${material11.nombre}</td>
                            <td>${material11.cantidad}</td>
                            <td>${material11.unidad_medida}</td>
                            <td>${material11.costo_x_uni}</td>
                            <td>${material11.total}</td>
                        </tr>
                        <tr>
                            <td>${material12.nombre}</td>
                            <td>${material12.cantidad}</td>
                            <td>${material12.unidad_medida}</td>
                            <td>${material12.costo_x_uni}</td>
                            <td>${material12.total}</td>
                        </tr>
                        `;
                        
                    }
                    
                    
                });
                
                
                materiales.innerHTML= mate;
                 
            });
            
        })
        
        const  botonesEditar = tabla.querySelectorAll('.btn-edit')
        botonesEditar.forEach(btn => {
            btn.addEventListener('click',({target: { dataset }}) =>{
                                               
               consulta.forEach(doc =>{
                    const orden2 = doc.data();
                let material1 = orden2.material_1,material2 = orden2.material_2,material3 = orden2.material_3;
                let material4 = orden2.material_4,material5 = orden2.material_5,material6 = orden2.material_6;
                let material7 = orden2.material_7,material8 = orden2.material_8,material9= orden2.material_9;
                let material10 = orden2.material_10,material11 = orden2.material_11, material12 = orden2.material_12;
                     
                    if(dataset.id == doc.id){
                        
                        
                        document.getElementById('referencia').value = orden2.Referencia
                        document.getElementById('descripcion').value = orden2.Descripcion
                 
                        //material1
                        document.getElementById('material1').value = material1.nombre                      
                        document.getElementById('cantidad_material1').value = material1.cantidad
                        document.querySelector('#medida1 [value='+material1.unidad_medida+']').checked = true;
                        document.getElementById('costo_unitario_material1').value = material1.costo_x_uni

                        //material2
                        document.getElementById('material2').value = material2.nombre                      
                        document.getElementById('cantidad_material2').value = material2.cantidad
                        document.querySelector('#medida2 [value='+material2.unidad_medida+']').checked = true;
                        document.getElementById('costo_unitario_material2').value = material2.costo_x_uni

                        //material3
                        document.getElementById('material3').value = material3.nombre                      
                        document.getElementById('cantidad_material3').value = material3.cantidad
                        document.querySelector('#medida3 [value='+material3.unidad_medida+']').checked = true;
                        document.getElementById('costo_unitario_material3').value = material3.costo_x_uni

                        //material4
                        document.getElementById('material4').value = material4.nombre                      
                        document.getElementById('cantidad_material4').value = material4.cantidad
                        document.querySelector('#medida4 [value='+material4.unidad_medida+']').checked = true;
                        document.getElementById('costo_unitario_material4').value = material4.costo_x_uni

                        //material5
                        document.getElementById('material5').value = material5.nombre                      
                        document.getElementById('cantidad_material5').value = material5.cantidad
                        document.querySelector('#medida5 [value='+material5.unidad_medida+']').checked = true;
                        document.getElementById('costo_unitario_material5').value = material5.costo_x_uni

                        //material6
                        document.getElementById('material6').value = material6.nombre                      
                        document.getElementById('cantidad_material6').value = material6.cantidad
                        document.querySelector('#medida6 [value='+material6.unidad_medida+']').checked = true;
                        document.getElementById('costo_unitario_material6').value = material6.costo_x_uni

                        //material7
                        document.getElementById('material7').value = material7.nombre                      
                        document.getElementById('cantidad_material7').value = material7.cantidad
                        document.querySelector('#medida7 [value='+material7.unidad_medida+']').checked = true;
                        document.getElementById('costo_unitario_material7').value = material7.costo_x_uni

                        //material8
                        document.getElementById('material8').value = material8.nombre                      
                        document.getElementById('cantidad_material8').value = material8.cantidad
                        document.querySelector('#medida8 [value='+material8.unidad_medida+']').checked = true;
                        document.getElementById('costo_unitario_material8').value = material8.costo_x_uni

                        //material9
                        document.getElementById('material9').value = material9.nombre                      
                        document.getElementById('cantidad_material9').value = material9.cantidad
                        document.querySelector('#medida9 [value='+material9.unidad_medida+']').checked = true;
                        document.getElementById('costo_unitario_material9').value = material9.costo_x_uni

                        //material10
                        document.getElementById('material10').value = material10.nombre                      
                        document.getElementById('cantidad_material10').value = material10.cantidad
                        document.querySelector('#medida10 [value='+material10.unidad_medida+']').checked = true;
                        document.getElementById('costo_unitario_material10').value = material10.costo_x_uni

                        //material11
                        document.getElementById('material11').value = material11.nombre                      
                        document.getElementById('cantidad_material11').value = material11.cantidad
                        document.querySelector('#medida11 [value='+material11.unidad_medida+']').checked = true;
                        document.getElementById('costo_unitario_material11').value = material11.costo_x_uni

                        //material12
                        document.getElementById('material12').value = material12.nombre                      
                        document.getElementById('cantidad_material12').value = material12.cantidad
                        document.querySelector('#medida12 [value='+material12.unidad_medida+']').checked = true;
                        document.getElementById('costo_unitario_material12').value = material12.costo_x_uni
                       
                    }                   
                })
                 id= dataset.id 
               
            })           
        })            
    });   
});


form_editar.addEventListener('submit', (e) =>{
    e.preventDefault();

    let total1 = 0, total2 = 0, total3 = 0, total4 = 0, total5 = 0, 
    total6 = 0, total7 = 0, total8 = 0,total9=0,total10=0,total11=0,total12=0,total_P=0;

    const referencia = form_editar['referencia'].value;
    const descripcion = form_editar['descripcion'].value;


    //material 1 
    const material_1 = form_editar['material1'].value;
    const unidadm1 = document.querySelector('#medida1 input[type=radio]:checked').value;
    const canti1 = form_editar['cantidad_material1'].value;
    const costo1 = form_editar['costo_unitario_material1'].value;
    total1 = canti1 * costo1;

    
    //material 2 
    const material_2 = form_editar['material2'].value;
    const unidadm2 = document.querySelector('#medida2 input[type=radio]:checked').value;
    const canti2 = form_editar['cantidad_material2'].value;
    const costo2 = form_editar['costo_unitario_material2'].value;
    total2 = canti2 * costo2;

    //material 3 
    const material_3 = form_editar['material3'].value;
    const unidadm3 = document.querySelector('#medida3 input[type=radio]:checked').value;
    const canti3 = form_editar['cantidad_material3'].value;
    const costo3 = form_editar['costo_unitario_material3'].value;
    total3 = canti3 * costo3;

    //material 4 
    const material_4 = form_editar['material4'].value;
    const unidadm4 = document.querySelector('#medida4 input[type=radio]:checked').value;
    const canti4 = form_editar['cantidad_material4'].value;
    const costo4 = form_editar['costo_unitario_material4'].value;
    total4 = canti4 * costo4;

    //material 5 
    const material_5 = form_editar['material5'].value;
    const unidadm5 = document.querySelector('#medida5 input[type=radio]:checked').value;
    const canti5 = form_editar['cantidad_material5'].value;
    const costo5 = form_editar['costo_unitario_material5'].value;
    total5 = canti5 * costo5;

    //material 6 
    const material_6 = form_editar['material6'].value;
    const unidadm6 = document.querySelector('#medida6 input[type=radio]:checked').value;
    const canti6 = form_editar['cantidad_material6'].value;
    const costo6 = form_editar['costo_unitario_material6'].value;
    total6 = canti6 * costo6;

    //material 7 
    const material_7 = form_editar['material7'].value;
    const unidadm7 = document.querySelector('#medida7 input[type=radio]:checked').value;
    const canti7 = form_editar['cantidad_material7'].value;
    const costo7 = form_editar['costo_unitario_material7'].value;
    total7 = canti7 * costo7;

    //material 8 
    const material_8 = form_editar['material8'].value;
    const unidadm8 = document.querySelector('#medida8 input[type=radio]:checked').value;
    const canti8 = form_editar['cantidad_material8'].value;
    const costo8 = form_editar['costo_unitario_material8'].value;
    total8 = canti8 * costo8;

    //material 9 
    const material_9 = form_editar['material9'].value;
    const unidadm9 = document.querySelector('#medida9 input[type=radio]:checked').value;
    const canti9 = form_editar['cantidad_material9'].value;
    const costo9 = form_editar['costo_unitario_material9'].value;
    total9 = canti9 * costo9;

    //material 10 
    const material_10 = form_editar['material10'].value;
    const unidadm10 = document.querySelector('#medida10 input[type=radio]:checked').value;
    const canti10 = form_editar['cantidad_material10'].value;
    const costo10 = form_editar['costo_unitario_material10'].value;
    total10 = canti10 * costo10;

    //material 11 
    const material_11 = form_editar['material11'].value;
    const unidadm11 = document.querySelector('#medida11 input[type=radio]:checked').value;
    const canti11 = form_editar['cantidad_material11'].value;
    const costo11 = form_editar['costo_unitario_material11'].value;
    total11 = canti11 * costo11;

    //material 12 
    const material_12 = form_editar['material12'].value;
    const unidadm12 = document.querySelector('#medida12 input[type=radio]:checked').value;
    const canti12 = form_editar['cantidad_material12'].value;
    const costo12 = form_editar['costo_unitario_material12'].value;
    total12 = canti12 * costo12;


    total_P = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12;
   

   actualizarDatos(id,{
    Referencia: referencia, Descripcion: descripcion,total_producto:total_P,
    material_1: { nombre: material_1, unidad_medida: unidadm1, cantidad: canti1,costo_x_uni: costo1, total: total1 },
    material_2: { nombre: material_2, unidad_medida: unidadm2, cantidad: canti2,costo_x_uni: costo2, total: total2 },
    material_3: { nombre: material_3, unidad_medida: unidadm3, cantidad: canti3,costo_x_uni: costo3, total: total3 },
    material_4: { nombre: material_4, unidad_medida: unidadm4, cantidad: canti4,costo_x_uni: costo4, total: total4 },
    material_5: { nombre: material_5, unidad_medida: unidadm5, cantidad: canti5,costo_x_uni: costo5, total: total5 },
    material_6: { nombre: material_6, unidad_medida: unidadm6, cantidad: canti6,costo_x_uni: costo6, total: total6 },
    material_7: { nombre: material_7, unidad_medida: unidadm7, cantidad: canti7,costo_x_uni: costo7, total: total7 },
    material_8: { nombre: material_8, unidad_medida: unidadm8, cantidad: canti8,costo_x_uni: costo8, total: total8 },
    material_9: { nombre: material_9, unidad_medida: unidadm9, cantidad: canti9,costo_x_uni: costo9, total: total9 },
    material_10: { nombre: material_10, unidad_medida: unidadm10, cantidad: canti10,costo_x_uni: costo10, total: total10 },
    material_11: { nombre: material_11, unidad_medida: unidadm11, cantidad: canti11,costo_x_uni: costo11, total: total11 },
    material_12: { nombre: material_12, unidad_medida: unidadm12, cantidad: canti12,costo_x_uni: costo12, total: total12 },   
   })

   Swal.fire({
    icon: 'success',
    title: 'Edicion realizada correctamente',
    confirmButtonText: 'continuar', 
  })

    form_editar.reset();
})
