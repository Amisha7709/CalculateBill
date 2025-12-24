import './App.css'
import ProductList from './components/ProductList'
import BasketSummary from './components/BasketSummary'
import './index.css'

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 gap-6">
        <ProductList />
        <BasketSummary />
      </div>
    </div>
    </>
  )
}

export default App
