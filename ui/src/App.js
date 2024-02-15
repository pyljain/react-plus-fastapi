import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [searchText, setSearchText] = useState("")
  const [result, setResult] = useState("")

  const onChange = (e) => {
    setSearchText(e.target.value)
  }

  const search = async () => {
    const response = await fetch(`/search?q=${searchText}`)
    const responseText = await response.text()
    setResult(responseText)
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Showcase FastAPI with React!
          <br/>
          <input type="text" placeholder="Search" value={searchText} onChange={onChange}/>
          <button onClick={search}> Search</button>
          <br/>
          <div>
            Result: {result}
          </div>
      </header>
    </div>
  );
}

export default App;
