import { v4 as uuid} from "uuid";
import { useState } from "react";

function createRandomEmoji() {
    const allEmojis = ["😄", "🤣", "😇", "🙂", "😍", "😜", "🤪", "😎", "🙄"];
    const randomIndex = Math.floor(Math.random() * allEmojis.length);
    return allEmojis[randomIndex];
}

export default function EmojiClicker2_Den() {
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: createRandomEmoji() }]);
    const addEmoji = () => {        
        setEmojis((oldEmojis) => [...oldEmojis, {id: uuid(), emoji: createRandomEmoji() }]);
    }
    const deleteEmoji = (id) => {        
        setEmojis((oldEmojis) => {
            const filteredEmojis = oldEmojis.filter((eachObj) => eachObj.id !== id)
            return filteredEmojis;
        })
    }
    function makeEverthingAHeart() {
        setEmojis((oldEmojis) => {
            const updatedEmojis = oldEmojis.map((item)=> {
                return {
                    ...item,
                    emoji: "❤️",
                };
            })
            return updatedEmojis;
        })        
    }

    return (
        <div>
            {emojis.map((e) => (
                <span onClick={()=>deleteEmoji(e.id)} key={e.id} style={{ fontSize: "4rem" }}>{e.emoji}</span>  // About deleteEmoji function in this line, if we hadn't used arrow function, if we used only 'deleteEmoji(e.id)', then the function would execute immediately when web browser refreshes or loads. So, we're using arrow function, because we want it to be deleted when it is clicked.
            ))}
            <br />
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={makeEverthingAHeart}>Make them all hearts</button>
        </div>
    )
}