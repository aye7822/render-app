function Card({ id, name, price, onDelete }) {
    return (
      <div className="card">
        <h1>Product: {name}</h1>
        <p>Price: {price}</p>
        <button onClick={() => console.log(name, 'is added to cart')}>Add to Cart</button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    );
  }
  
  export default Card
  