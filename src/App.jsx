import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
      <main>
        <h1>App</h1>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </>
  )
}

export default App;