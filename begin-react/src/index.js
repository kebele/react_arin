// modulleri çağırıyoruz
import React from 'react'
import ReactDOM from 'react-dom'



//component bir class veya function dan oluşan bir kod
//bir web sayfasındaki her bir şey bir component olarak düşünülebilir
//element comp un en küçük yapı taşı

//functional comp yapalım
// JSX; js ye html benzeri bir yazım eklenmesi,
//JSX ifadeleri tek bir div içinde olmalı

const names = ["ronaldo", "sergio", "gareth", "benzema"];


function App(){
    // return <h1>real madrid</h1>
    return (
        <div>
            {names.map(name => (<h1>{name}</h1>))}
        </div>
        // yukarısı JSX yazımı
    )        
}

//class based comp yapalım
// class App extends React.Component {
//     render (){
//         return <h1>barcelona</h1>
//     }
// }


//sayfada göstermek, bunun için render etmemiz lazım
ReactDOM.render(
    //neyi göstereceğim, nerede göstereceğim
    <App/>, 
    document.getElementById('root')
    // document.querySelector('#root')
)



