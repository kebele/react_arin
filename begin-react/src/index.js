// modulleri çağırıyoruz
import React from "react";
import ReactDOM from "react-dom";

//component bir class veya function dan oluşan bir kod
//bir web sayfasındaki her bir şey bir component olarak düşünülebilir
//element comp un en küçük yapı taşı

//functional comp yapalım
// JSX; js ye html benzeri bir yazım eklenmesi,
//JSX ifadeleri tek bir div içinde olmalı

// const names = ["ronaldo", "sergio", "gareth", "benzema"];

//style="padding: 10px; background-color: red; color : white; border: 2px solid yellow"
//style yazımında dikkat bir js object şeklinde key:value şeklinde yazılmı var, dikkat
//className kullanımına dikkat, JSX'de bu şekilde, bazı başka attribute isimleride farklı, bunları yanlış yazıdğımızda bunun için colsole da uyarı alırız,  
// {...} arasına kodda yazabiliriz, 40-15 mesela, yada aşağıda kodda old. gibi, 

function App() {
  // return <h1>real madrid</h1>

  const buttonValue = "benim buton";
  const str1 = "click "
  const str2 = "me"

  return (
    <div>
      {/* {names.map(name => (<h1>{name}</h1>))} */}
      <button
        className="jsxCLASS"
        type="button"
        style={{
          padding: "10px",
          backgroundColor: "red",
          color: "white",
          backgroundColor: "green",
        }}
      >
        {buttonValue}
      </button>
      <br/>
      <button
        className="jsxCLASS"
        type="button"
        style={{
          padding: "10px",
          backgroundColor: "red",
          color: "white",
          backgroundColor: "green",
        }}
      >
        {str1.concat(str2)}
      </button>
    </div>
    // yukarısı JSX yazımı
  );
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
  <App />,
  document.getElementById("root")
  // document.querySelector('#root')
);
