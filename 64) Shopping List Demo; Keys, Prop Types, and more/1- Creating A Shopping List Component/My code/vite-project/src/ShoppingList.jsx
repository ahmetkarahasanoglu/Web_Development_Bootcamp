import ShoppingListItem from "./ShoppingListItem"

function ShoppingList({items}) {
return (
    <ul>
        {items.map(i => (
            <ShoppingListItem key={i.id} name={i.name} quantity={i.quantity} completed={i.completed}/> // For the place of 'name, quantity, completed' we can simply (as shorthand) write:  {...i}.  it's the spread operator. So it would be like this:  <ShoppingListItem key={i.id} {...i} />   --> Because the other ShoppingListItem.jsx file takes props of (name, quantity, completed), so it understands the {...i}
            // <ShoppingListItem key={i.id} {...i} />   --> explanation is on above line.
        ))}
    </ul>
);
}

export default ShoppingList;


/* Note:  key={i.id} --> In Colt's Visual Studio Code, there was an error: "You're missing a "key" prop for element in iterator ESlint." I didn't have this error in my code. Colt said this error can get things confused when inserting, removing elements. So we added a "key" property. And in App.jsx we added "id" field to "data". */
