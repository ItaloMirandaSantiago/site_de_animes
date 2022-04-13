import { useEffect, useState } from 'react';
import './App.css';
import Search from './Search_input'

const api = 'https://kitsu.io/api/edge/'

function App() {
  const [text, setText] = useState('')
  const [info, setInfo] = useState({})

  useEffect(()=>{
    if (text) {
      setInfo({})
      fetch(`${api}anime?filter[text]=${text}&page[limit]=12&page[offset]=0`)
      .then((res)=>res.json())
      .then((res)=>{
         setInfo(res)
      })
    }
  }, [text])

  return (
    <div className="App">
      <h1>Animes</h1>
      <Search value={text} onchange={(search)=>setText(search)}/>
      {text && !info.data && (
        <span>Carregando...</span>
      )}
      {info.data && (
        <ul className='animes-list'>
          {info.data.map((item)=>(
            <li key={item.id}>
              <img src={item.attributes.posterImage.small} 
              alt={item.attributes.canonicalTitle}
              />
              {item.attributes.canonicalTitle}
              {console.log(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
