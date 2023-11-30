import "./Property.css"

export default function Property(i) {
    return (
        <div className="property" key={i.id}>
            <h2>{i.name}</h2>
            <h3>{i.rating} star</h3>
            <h4>{i.price}$ a night</h4>
        </div>
    )
}