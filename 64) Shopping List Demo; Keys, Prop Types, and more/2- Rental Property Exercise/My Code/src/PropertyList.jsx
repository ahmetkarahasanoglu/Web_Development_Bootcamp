import Property from "./Property"
import "./PropertyList.css"

export default function PropertyList({items}) {

    return (
        <div>
            {items.map(i => (
                <Property
                key={i.id}
                name={i.name}
                rating={i.rating}
                price={i.price}
                />
                
            ))}
        </div>
    )    
}