import { useEffect, useState } from 'react'
import './App.scss'
import SearchInput from './components/Search_input'
import Results from './components/Results'
import Description from './components/Description'
import Infomations from './components/Informations'

const api = 'https://kitsu.io/api/edge/'

function App() {
  const [text, setText] = useState('')
  const [info, setInfo] = useState({})
  const [description_obj, set_description_obj] = useState({})
  const [items, set_items] = useState([])

  useEffect(()=>{
    if (text) {
      set_description_obj({})
      setInfo({})
        fetch(`${api}anime?filter[text]=${text}&page[limit]=12&page[offset]=0`)
        .then((res)=>res.json())
        .then((res)=>{
          setInfo(res)
        })
    }
  }, [text])

  useEffect(()=>{
//
   // if (items.length) {
  //    localStorage.setItem('items_save', JSON.stringify(items)) 
//    }
  }, [items])

  return (
    <div className="App">
      <h1>Animes</h1>
        <SearchInput text={text} onchange={(search)=>setText(search)}/>
      {text && !info.data && (
        <div className='loading_img'>
        <img src='http://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan/loading.gif/@@images/image.gif' alt='carregando...'></img>
        </div>
      )}

      {!text && (
        <Infomations description_item={(obj)=>set_description_obj(obj)}/>
      )}

      {info.data && !description_obj.verification && text && (
        <Results info={info} description_item={(obj)=>set_description_obj(obj)} />
      )}

      {info.data && description_obj.verification && text && (
        <Description  set_items={set_items}  items={items} description_obj={description_obj}/>
      )}



    </div>
  );
}

export default App;