import React from 'react'

//first class function yapalım

const Card = (props) => {
    console.log(props)

    return (
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
    )
}

export default Card;

/* 
first class functions

const Test = function(){
    console.log("test first class ")
}

Test()


Card ı kullanabilmemiz için bunu export etmeliyiz, parent tarafındna da bunun import edilmesi lazım

*/