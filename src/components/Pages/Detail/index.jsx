import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../ItemDetail";

const Detail = () => {
  const { id } = useParams();
  let [ item, setItem ] = useState(null);

  useEffect(() => {
    fetch(`/src/components/data/items.json`)
    .then(res => res.json())
    .then(data => setItem(data.find(item => item.id == id)))
  }, []);

  return <ItemDetail {...item} />;
}

export default Detail;