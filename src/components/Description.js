import  React from 'react'

export default function Description(props) {

    const description = props.description_obj.attributes

    function save() {
        console.log('feito')
        if (props.items) {
            localStorage.setItem('items_save', JSON.stringify([...props.items, props.description_obj]))
        }else{
            localStorage.setItem('items_save', JSON.stringify([props.description_obj]))
        }
    }

    return (
        <div>
            <h2>{description.canonicalTitle}</h2>

            <div className='info_'>
                <img src={description.posterImage.small} alt='imagem do anime'/>
                <div>
                    {console.log(props.description_obj)}
                    <p>Status: {description.status}</p>

                    <p>Ultimo lançamento: {description.endDate}</p>

                    <p>Quantidade de eps: {description.episodeCount}</p>

                    <p>Idade indicada: {description.ageRatingGuide} </p>

                    <p>Rank de popularidade: {description.popularityRank}</p>

                    <div>
                        <button onClick={save}>Salvar</button>
                    </div>
                </div>
            </div>
                <div className='description_text'>
                <p>Descrição: {description.description}</p>
                </div>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${description.youtubeVideoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        </div>
    )
}

//"https://kitsu.io/api/edge/episodes/4692/videos?page%5Blimit%5D=10&page%5Boffset%5D=0"