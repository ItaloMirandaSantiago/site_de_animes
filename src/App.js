import { useEffect, useState } from 'react'
import './App.scss'
import SearchInput from './components/Search_input'
import Results from './components/Results'
import Description from './components/Description'
import Infomations from './components/Informations'
import BestAnimes from './components/BestAnimes'
import Pagination from './components/Pagination'
// dependencia
import qs from 'qs'

const api = 'https://kitsu.io/api/edge/'

function App() {
  const [text, setText] = useState('')
  const [info, setInfo] = useState({})
  const [description_obj, set_description_obj] = useState({})
  const [items, set_items] = useState([])
  const [offset, setOffset] = useState(0 )
  const limit = 10 

  useEffect(()=>{
 
      set_description_obj({})
 //     setInfo({})
      const query  = {
        page: {
          limit: limit,
          offset
        }
      }

      if (text) {
        query.filter = {
          text
        }
      }

        fetch(`${api}anime?${qs.stringify(query)}`)
        .then((res)=>res.json())
        .then((res)=>{
          setInfo(res)
          console.log(res)
        })
    
  }, [text, offset])

  return (
    <div className="App">
      <h1 className='titulo_principal'>Comenta Animes</h1>
        <SearchInput text={text} onchange={(search)=>setText(search)}/>
      {text && !info.data && (
        <div className='loading_img'>
        <img src='http://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan/loading.gif/@@images/image.gif' alt='carregando...'></img>
        </div>
      )}

      {!text && (
        <div className='infor'>
          <Infomations description_item={(obj)=>set_description_obj(obj)}/>
          <BestAnimes />
        </div>
      )}

      {info.data && !description_obj.verification && text && (
        <div>
          <Results info={info} description_item={(obj)=>set_description_obj(obj)} />
          <Pagination limit={limit} total={info.meta.count} offset={offset} setOffset={setOffset}/>
        </div>
      )}

      {info.data && description_obj.verification && text &&(
        <Description  set_items={set_items}  items={items} description_obj={description_obj}/>
      )}
    </div>
  );
}

export default App;

//if (text) {
 // set_description_obj({})
 // setInfo({})
//    fetch(`${api}anime?filter[text]=${text}&page[limit]=${limit}&page[offset]=0`)
    //.then((res)=>res.json())
  //  .then((res)=>{
//      setInfo(res)
    //  console.log(res)
  //  })
//}
