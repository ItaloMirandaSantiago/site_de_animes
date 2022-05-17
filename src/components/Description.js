import React from 'react'

export default  function Description(title) {
    class Obj_descri {
        constructor(img, title, descri, date){
            this.img = img
            this.title = title
            this.description = descri
            this.date = date
        }
        show(){
            return console.log(this.title, this.img)
        }
    }
    return(
        <div>
            <img></img>
            <h2>{title}</h2>
        </div>
    )
}






