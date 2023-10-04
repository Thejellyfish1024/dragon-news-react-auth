import { useEffect, useState } from "react";
import Card from "../Card/Card";


const DragonNews = () => {
    const [cards, setCards] = useState([]);

    useEffect(() =>{
        fetch('news.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    console.log(cards);
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6">Dragon News Home</h2>
            <div className="p-2 grid gap-8">
                {
                    cards.map(card => <Card key={card._id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default DragonNews;