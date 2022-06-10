import React from "react";

export default function InforDescription(props) {
    const array = props.Description.attributes

    function voltar() {
        props.setDescription(false)
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

                            <div>
                                <button onClick={()=>{voltar()}}>Voltar</button>
                            </div>

                        </div>
                    </div>
                        <div className='description_text'>
                        <p>Descrição: {array.description}</p>
                        </div>
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${array.youtubeVideoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                    </div>
        </div>

    )
}