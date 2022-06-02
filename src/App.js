import { useEffect, useState } from 'react'
import './App.scss'
import SearchInput from './components/Search_input'
import Results from './components/Results'
import Description from './components/Description'

const api = 'https://kitsu.io/api/edge/'

function App() {
  const [text, setText] = useState('')
  const [info, setInfo] = useState({})
  const [description_obj, set_description_obj] = useState({})

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
      <SearchInput text={text} onchange={(search)=>setText(search)}/>
      {text && !info.data && (
        <div className='loading_img'>
        <img src='http://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan/loading.gif/@@images/image.gif' alt='carregando...'></img>
        </div>
      )}

      {info.data && !description_obj.verification && (
          <Results info={info} description_item={(obj)=>set_description_obj(obj)}/>
      )}

      {description_obj.verification && (
        <Description description_obj={description_obj}/>
      )}

    </div>
  );
}

export default App;