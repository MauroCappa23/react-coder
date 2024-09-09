import { useParams } from "react-router-dom";
import CardList from "../../ItemList"

const Games = () => {
    const { id } = useParams();

    return(
        <>
            <CardList category={id}/>
        </>
    )
}
export default Games;