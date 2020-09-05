// modulleri çağırıyoruz
import React from 'react'
import ReactDOM from 'react-dom'



//component bir class veya function dan oluşan bir kod
//bir web sayfasındaki her bir şey bir component olarak düşünülebilir
//element comp un en küçük yapı taşı

//functional comp yapalım

// function App(){
//     return <h1>real madrid</h1>
// }

//class based comp yapalım
class App extends React.Component {
    render (){
        return <h1>barcelona</h1>
    }
}


//sayfada göstermek, bunun için render etmemiz lazım
ReactDOM.render(
    //neyi göstereceğim, nerede göstereceğim
    <App/>, document.getElementById('root')
)


