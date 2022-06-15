import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {getFirestore,collection,addDoc,getDocs,deleteDoc,onSnapshot,doc,getDoc,updateDoc,setDoc,runTransaction,query,where} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcM6U508IjTBUgS-pGzpM9hjcMFgtLulI",
  authDomain: "prueba-firestore-e9217.firebaseapp.com",
  projectId: "prueba-firestore-e9217",
  storageBucket: "prueba-firestore-e9217.appspot.com",
  messagingSenderId: "700320753228",
  appId: "1:700320753228:web:b95632c8529d647c6a76e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export const almacenarProductoActualizado = (Referencia,Descripcion,
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
  fecha,totalP) => {
  const direccionColeccion = collection(db, "productos");

   setDoc(doc(direccionColeccion), {
      Referencia: Referencia, Descripcion: Descripcion, fecha_creacion: fecha,total_producto:totalP,
      material_1: { nombre: material1, unidad_medida: medidas1, cantidad: cantidad1,costo_x_uni: costoU1, total: totalM1 },
      material_2: { nombre: material2, unidad_medida: medidas2, cantidad: cantidad2,costo_x_uni: costoU2, total: totalM2 },
      material_3: { nombre: material3, unidad_medida: medidas3, cantidad: cantidad3,costo_x_uni: costoU3, total: totalM3 },
      material_4: { nombre: material4, unidad_medida: medidas4, cantidad: cantidad4,costo_x_uni: costoU4, total: totalM4 },
      material_5: { nombre: material5, unidad_medida: medidas5, cantidad: cantidad5,costo_x_uni: costoU5, total: totalM5 },
      material_6: { nombre: material6, unidad_medida: medidas6, cantidad: cantidad6,costo_x_uni: costoU6, total: totalM6 },
      material_7: { nombre: material7, unidad_medida: medidas7, cantidad: cantidad7,costo_x_uni: costoU7, total: totalM7 },
      material_8: { nombre: material8, unidad_medida: medidas8, cantidad: cantidad8,costo_x_uni: costoU8, total: totalM8 },
      material_9: { nombre: material9, unidad_medida: medidas9, cantidad: cantidad9,costo_x_uni: costoU9, total: totalM9 },
      material_10: { nombre: material10, unidad_medida: medidas10, cantidad: cantidad10,costo_x_uni: costoU10, total: totalM10 },
      material_11: { nombre: material11, unidad_medida: medidas11, cantidad: cantidad11,costo_x_uni: costoU11, total: totalM11 },
      material_12: { nombre: material12, unidad_medida: medidas12, cantidad: cantidad12,costo_x_uni: costoU12, total: totalM12 },
  });
    
}

//metodos para los productos
export const obtenerInformacion = () => getDocs(collection(db,'productos'));

export const onConsultas = (callback) => onSnapshot(collection(db,'productos'),callback);

export const eliminarOrden = (id) => deleteDoc(doc(db,'productos',id));

export const buscarOrden = (id) => getDoc(doc(db,'productos',id));

export const actualizarDatos = (id,newFields) =>  updateDoc(doc(db,'productos',id),newFields);

//Metodos para las ordenes 

export const almacenarOrdenActualizado = (Referencia,Descripcion,
  material1,medidas1,cantidad1,costoU1,totalM1,costor1,cantidadr1,
  material2,medidas2,cantidad2,costoU2,totalM2,costor2,cantidadr2,
  material3,medidas3,cantidad3,costoU3,totalM3,costor3,cantidadr3,
  material4,medidas4,cantidad4,costoU4,totalM4,costor4,cantidadr4,
  material5,medidas5,cantidad5,costoU5,totalM5,costor5,cantidadr5,
  material6,medidas6,cantidad6,costoU6,totalM6,costor6,cantidadr6,
  material7,medidas7,cantidad7,costoU7,totalM7,costor7,cantidadr7,
  material8,medidas8,cantidad8,costoU8,totalM8,costor8,cantidadr8,
  material9,medidas9,cantidad9,costoU9,totalM9,costor9,cantidadr9,
  material10,medidas10,cantidad10,costoU10,totalM10,costor10,cantidadr10,
  material11,medidas11,cantidad11,costoU11,totalM11,costor11,cantidadr11,
  material12,medidas12,cantidad12,costoU12,totalM12,costor12,cantidadr12,
fecha,totalo,cprodu,numero_orden) => {
const direccionColeccion = collection(db, "ordenes");

 setDoc(doc(direccionColeccion), {
    Referencia: Referencia, Descripcion: Descripcion, fecha_produccion: fecha,total_orden:totalo,cantidad_producir:cprodu,numero_de_orden:numero_orden,
    material_1: { nombre: material1, unidad_medida: medidas1, cantidad: cantidad1,costo_x_uni: costoU1, total: totalM1,costo_real:costor1,cantidad_real:cantidadr1},
    material_2: { nombre: material2, unidad_medida: medidas2, cantidad: cantidad2,costo_x_uni: costoU2, total: totalM2,costo_real:costor2,cantidad_real:cantidadr2},
    material_3: { nombre: material3, unidad_medida: medidas3, cantidad: cantidad3,costo_x_uni: costoU3, total: totalM3,costo_real:costor3,cantidad_real:cantidadr3},
    material_4: { nombre: material4, unidad_medida: medidas4, cantidad: cantidad4,costo_x_uni: costoU4, total: totalM4,costo_real:costor4,cantidad_real:cantidadr4},
    material_5: { nombre: material5, unidad_medida: medidas5, cantidad: cantidad5,costo_x_uni: costoU5, total: totalM5,costo_real:costor5,cantidad_real:cantidadr5},
    material_6: { nombre: material6, unidad_medida: medidas6, cantidad: cantidad6,costo_x_uni: costoU6, total: totalM6,costo_real:costor6,cantidad_real:cantidadr6},
    material_7: { nombre: material7, unidad_medida: medidas7, cantidad: cantidad7,costo_x_uni: costoU7, total: totalM7,costo_real:costor7,cantidad_real:cantidadr7},
    material_8: { nombre: material8, unidad_medida: medidas8, cantidad: cantidad8,costo_x_uni: costoU8, total: totalM8,costo_real:costor8,cantidad_real:cantidadr8},
    material_9: { nombre: material9, unidad_medida: medidas9, cantidad: cantidad9,costo_x_uni: costoU9, total: totalM9,costo_real:costor9,cantidad_real:cantidadr9},
    material_10: { nombre: material10, unidad_medida: medidas10, cantidad: cantidad10,costo_x_uni: costoU10, total: totalM10,costo_real:costor10,cantidad_real:cantidadr10},
    material_11: { nombre: material11, unidad_medida: medidas11, cantidad: cantidad11,costo_x_uni: costoU11, total: totalM11,costo_real:costor11,cantidad_real:cantidadr11},
    material_12: { nombre: material12, unidad_medida: medidas12, cantidad: cantidad12,costo_x_uni: costoU12, total: totalM12,costo_real:costor12,cantidad_real:cantidadr12},
});
  
}


export const onConsultasOrdenes = (callback) => onSnapshot(collection(db,'ordenes'),callback);

export const actualizarDatosOrdenes = (id,newFields) =>  updateDoc(doc(db,'ordenes',id),newFields);

export const buscar = async (Refenrecia) =>
{
  const citiesRef = collection(db, "productos");

  const q = query(citiesRef, where("Referencia", "==", Refenrecia));
  const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  var orden = doc.data()
 
  if(orden.Referencia == Refenrecia){
    console.log(doc.id, " => ", doc.data());
    console.log('encontrado')
  }else{
    alert('no se encontro')
  }
  // doc.data() is never undefined for query doc snapshots
  
});

}

export let buscarReferencia = async (Referencia) =>
{
  let buscando = false;
  const citiesRef = collection(db, "productos");

  const q = query(citiesRef, where("Referencia", "==", Referencia));
  const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  let orden = doc.data()
 
  orden.Referencia == Referencia ? buscando = true :  buscando = false;
  
});
return buscando;
}

export let buscarNumeroOrden = async (numero) =>
{
  let buscando = false;
  const citiesRef = collection(db, "ordenes");

  const q = query(citiesRef, where("numero_de_orden", "==", numero));
  const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  let orden = doc.data()
 
  orden.numero_de_orden == numero ? buscando = true :  buscando = false;
  
});
return buscando;
}






 



