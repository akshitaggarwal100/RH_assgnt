import './App.css'
import Cards from "./Components/Cards"
import data from "./products.json"

function App() {

  const products = data

  return (
    <div className='container'>
      <h1>Products</h1>
      <h3>The first card src is intentionally set wrong and it is showing a default image</h3>
      <h3>It is <span className='highlight'>implemeted using onError attribute</span> in img tag</h3>
      <h3>This page is <span className='highlight'>fully responsive</span> as well</h3>
      <Cards products={products} />
    </div>
  )
}

export default App
