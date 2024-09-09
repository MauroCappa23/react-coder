import { useState, useEffect } from "react";
import Card from "../Card";

const CardList = ({category}) => {
    let [ items, setItems ] = useState([]);
    console.log(category);
    
    useEffect(() => {
        fetch('/src/components/Data/items.json')
        .then(res => res.json())
        .then(data => {
            if (category) {
                setItems(data.filter(item => item.category === category))
            } else {
                setItems(data);
            }
        })
    }, []);
    return (
        <section className="cards__container container">
            {items.map((item, i) => <Card key={`item-${i}`} {...item}/>)}
        </section>
    )
}
export default CardList;