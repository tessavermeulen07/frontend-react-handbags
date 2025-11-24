import './App.css'

function App() {
  function handleClick(showText) {
      console.log(showText);
  }

    return (
      <>
        <h1>Handbags & Purses</h1>
      <nav>
          <button type="button" onClick={() => handleClick("To the collection")}>
              To the collection
          </button>
          <button type="button" onClick={() => handleClick("Shop all bags")}>
              Shop all bags
          </button>
          <button type="button" onClick={() => handleClick("Pre-orders")}>
             Pre-orders
          </button>
      </nav>
      </>
  )
}

export default App
