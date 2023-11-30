// This is a slot machine exercise in which the props are passed from App.jsx. 

export default function Slots({val1, val2, val3}) {
    const isWinner = val1 === val2 && val2 === val3;
    return (
        <>
        <h1>{val1}{val2}{val3}</h1> 
        <h2 style={{ color: isWinner ? 'green' : 'red' }}>{isWinner ? 'You win!' : 'You lose!'}</h2>
        {isWinner && <h3>Congrats!</h3>}
        </>
    )
}