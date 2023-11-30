// NOTE: it's generally encouraged that you split things up into small modular components as much as possible (just like we did here in the ShoppingListItem.jsx - we cut the <li> and pasted it here on this file).  Prefer that over creating long components that do everything inside of one component.

function ShoppingListItem({name, quantity, completed}) {  // We can also write a single 'obj' inside the paranthesis. In that case 'obj' has all the data. [If there are only a handful of props, we can prefer to write all of them individually.]
    const styles= {
        color: i.completed ? "grey" : "red",
        textDecoration: i.completed ? "line-through" : "none"
    }

    return (
    <>
    <li style={styles}>  
        {i.name} - {i.quantity}
    </li>
    </>
    )
}

export default ShoppingListItem;
