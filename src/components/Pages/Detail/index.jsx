import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/firebase.config";

const Detail = () => {
  const { id } = useParams();
  let [ item, setItem ] = useState(null);

  useEffect(() => {
    const docRef = (doc(db, 'games', id))
    getDoc(docRef)
    .then((docSnapshot) => {
      if (docSnapshot.exists()){
        setItem({ id: docSnapshot.id, ...docSnapshot.data() });
      } else {
        console.log("No se encontro el juego");
        
      }
  })
  .catch((err) => {
    console.error("Error al obtener el juego:", err)
  })
}, [id]);

  return item ? <ItemDetail {...item} /> : <p>Cargando el detalle del juego...</p>;
}

export default Detail;