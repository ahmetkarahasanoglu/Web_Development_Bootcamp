export default function Clicker({buttonText, message}) {
    return (
        <button onClick={() => alert(message)}>        
            {buttonText}
        </button>
    )
}

// ANOTHER WAY TO DO IS, BY DESCRIBING A HANDLECLICK FUNCTION AND CALLING IT ON BELOW: [BUT ON THE ABOVE CODE BLOCK, WE BOTH WROTE AND EXECUTED THE FUNCTION (alert(message)) RIGHT ON THE SPOT WHERE WE NEED IT]

// export default function Clicker({ message, buttonText}) {
//     const handleClick = () => {
//         alert(message);
//     }
//     return (
//         <button onClick={handleClick}>
//             {buttonText}
//         </button>
//     )
// }
