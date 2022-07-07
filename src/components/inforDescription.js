import React, { useEffect } from "react";
//mais informações sobre o anime salvos
export default function InforDescription(props) {
    const array = props.Description.attributes
    const {items, set_items} = props

    function voltar() {
        props.setDescription(false)
    }

    useEffect(()=>{
        if (items.length ) {
            localStorage.setItem('items_save', JSON.stringify(items));
        }
    }, [items])

    useEffect(()=>{
        let valor_localStorage = localStorage.getItem('items_save')
        if(valor_localStorage != null){
            set_items(JSON.parse(valor_localStorage))
        }
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function save() {
        let verificar = true
        for (let i = 0; i < items.length; i++) {
            if(props.Description.id === items[i].id) {
                alert('Este anime já esta adicionado na sua lista de salvos')
                verificar = false
            }
        }
            if (verificar) {
                set_items((e)=>[...e, props.Description])
                document.querySelector(".button_save").style = "background-color: aliceblue; color: black;"
            }
    }

    function options() {
        if (props.excluir) {
            props.excluir(props.Description)
            voltar()
        }else{
            voltar()
        }
    }
    return(
        <div>
                    <div className="text-aling">
                    <h2>{array.canonicalTitle}</h2>

                    <div className='info_'>
                        <img src={array.posterImage.small} alt='imagem do anime'/>
                        <div>

                            <p>Status: {array.status}</p>

                            <p>Ultimo lançamento: {array.endDate}</p>

                            <p>Quantidade de eps: {array.episodeCount}</p>

                            <p>Idade indicada: {array.ageRatingGuide} </p>

                            <p>Rank de popularidade: {array.popularityRank}</p>

                            <div className="button_descri_end_info">
                                <button className="button_" onClick={options}>{props.name}</button>
                                <button className="button_ button_save" onClick={()=>{save()}}>Salvar</button>
                            </div>

                        </div>
                    </div>
                        <div className='description_text'>
                        <p>Descrição: {array.description}</p>
                        </div>
                        <div className='video_d'>
                            <iframe className='video_d' src={`https://www.youtube.com/embed/${array.youtubeVideoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>

                    </div>
        </div>

    )
}

//props.excluir(props.Description)
