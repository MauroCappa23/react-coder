import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase.config";

import Card from "../Card";

const CardList = () => {
    let [ items, setItems ] = useState([]);
    
    useEffect(() => {
        const dataGames = collection(db, 'games');
        getDocs(dataGames)
        .then((snapshot) => {
            setItems(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
        })
    }, []);
    
    return (
        <section className="cards__container container">
            {items.map((item, i) => <Card key={`item-${i}`} {...item}/>)}
        </section>
    )
}
export default CardList;