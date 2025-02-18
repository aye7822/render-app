import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [products, setProducts] = useState([
    { id:1,name:'HP EliteBook',price: 100 },
    { id:2,name:'MacBook Air',price: 200 },
    { id:3,name:'Asus Rog',price: 300 },
  ]);

  function onDelete(id) {
    setProducts(products.filter((product) => product.id !== id))
    console.log('Product with id:', id, 'is deleted')
  }

  return (
    <div className='App'>
      <h3>Products</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Card id={product.id} name={product.name} price={product.price} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
