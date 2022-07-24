import { useEffect, useState } from 'react'
import './style.sass/App.scss'
import SearchInput from './components/Search_input'
import Results from './components/Results'
import Description from './components/Description'
import Infomations from './components/Informations'
import ResultsPageMain from './components/ResultsPageMain'
import Pagination from './components/Pagination'
import BarraNav from './components/BarraNav'
import InforDescription from './components/inforDescription'
// dependencia
import qs from 'qs'

const api = 'https://kitsu.io/api/edge/'

function App() {
  const [text, setText] = useState('')
  const [info, setInfo] = useState({})
  const [description_obj, set_description_obj] = useState({})
  const [items, set_items] = useState([])
  const [offset, setOffset] = useState(0)
  const [BarrNavVerification, SetBarrNavVerification] = useState(false)
  const limit = 10

  useEffect(()=>{
 
      set_description_obj({})

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
        })
  }, [text, offset])

  return (
    <div className="App">


    <div>
      <h1 className='titulo_principal'>Comenta Animes</h1>
    </div>


        <BarraNav set_items={set_items} setInfo={(set)=>setInfo(set)} SetBarrNavVerification={(verification)=>SetBarrNavVerification(verification)}/>
        <SearchInput text={text} onchange={(search)=>setText(search)}/>
      {text && !info.data && (
        <div className='loading_img'>
        <img src='http://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan/loading.gif/@@images/image.gif' alt='carregando...'></img>
        </div>
      )}

      {!text && !BarrNavVerification && (
        <div className='infor'>
              <Infomations set_items={set_items}  items={items} description_item={(obj)=>set_description_obj(obj)}/>
              <ResultsPageMain set_items={set_items}  items={items} name={"Animes mais vistos"} API={"https://kitsu.io/api/edge/anime?page[limit]=15"}/>
              
              <ResultsPageMain set_items={set_items} items={items} name={"Mangas que talvez voce goste"} API={"https://kitsu.io/api/edge/manga?page[limit]=15"}/>
        </div>
      )}

      {BarrNavVerification && !description_obj.verification && !text && (
        <Results info={info} description_item={(obj)=>set_description_obj(obj)}/>
        //ativado quando apertado alguma opção do menu
      )}
      {description_obj.verification && BarrNavVerification && !text && (
        <InforDescription set_items={set_items}  items={items} name={'Voltar'} Description={description_obj} setDescription={(e)=>set_description_obj(e)}/>
      )}
  
      {BarrNavVerification && !info.data && (
        <div className='loading_img'>
        <img src='http://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan/loading.gif/@@images/image.gif' alt='carregando...'></img>
        </div>
      )}

      {info.data && !description_obj.verification && text && (
        <div>
          <Results info={info} description_item={(obj)=>set_description_obj(obj)} />
          <Pagination limit={limit} total={info.meta.count} offset={offset} setOffset={setOffset}/>
        </div>
      )}

      {info.data && description_obj.verification && text &&(
        <Description  set_items={set_items}  items={items} description_obj={description_obj} set_description_obj={(obj)=>set_description_obj(obj)}/>
      )}
    </div>
  );
}

export default App;
