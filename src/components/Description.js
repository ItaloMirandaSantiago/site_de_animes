import  React, { useEffect } from 'react'
//mais informações sobre o anime clicado
export default function Description(props) {
    const {items, set_items} = props
    const description = props.description_obj.attributes

    function voltar() {
        props.set_description_obj(false)
    }

    useEffect(()=>{
        let valor_localStorage = localStorage.getItem('items_save')
        if(valor_localStorage != null){
            set_items(JSON.parse(valor_localStorage))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(()=>{
        if (items.length) {
            localStorage.setItem('items_save', JSON.stringify(items))
        }
    }, [items])

    function save() {
        let verificar = true
        for (let i = 0; i < items.length; i++) {
            if(props.description_obj.id === items[i].id) {
                alert('Este anime já esta adicionado na sua lista de salvos')
                verificar = false
            }
        }
            if (verificar) {
                set_items((e)=>[...e, props.description_obj])
                document.querySelector(".save").style = "background-color: aliceblue; color: black;"
            }
    }

    return (
        <div>
            <h2>{description.canonicalTitle}</h2>

            <div className='info_'>
                <img src={description.posterImage.small} alt='imagem do anime'/>
                <div>

                    <p>Status: {description.status}</p>

                    <p>Ultimo lançamento: {description.endDate}</p>

                    <p>Quantidade de eps: {description.episodeCount}</p>

                    <p>Idade indicada: {description.ageRatingGuide} </p>

                    <p>Rank de popularidade: {description.popularityRank}</p>

                    <div className="button_descri_end_info">
                        <button className="button_" onClick={()=>{voltar()}}>Voltar</button>
                        <button className="button_ save" onClick={()=>{save()}}>Salvar</button>
                    </div>
                </div>
            </div>
                <div className='description_text'>
                <p>Descrição: {description.description}</p>
                </div>
                <div className='video_d'>
                    <iframe className='video_d' src={`https://www.youtube.com/embed/${description.youtubeVideoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

        </div>
    )
}
