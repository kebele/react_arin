// modulleri çağırıyoruz
import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";

//component bir className veya function dan oluşan bir kod
//bir web sayfasındaki her bir şey bir component olarak düşünülebilir
//element comp un en küçük yapı taşı

//functional comp yapalım
// JSX; js ye html benzeri bir yazım eklenmesi,
//JSX ifadeleri tek bir div içinde olmalı

// const names = ["ronaldo", "sergio", "gareth", "benzema"];

//style="padding: 10px; background-color: red; color : white; border: 2px solid yellow"
//style yazımında dikkat bir js object şeklinde key:value şeklinde yazılmı var, dikkat
//classNameName kullanımına dikkat, JSX'de bu şekilde, bazı başka attribute isimleride farklı, bunları yanlış yazıdğımızda bunun için colsole da uyarı alırız,
// {...} arasına kodda yazabiliriz, 40-15 mesela, yada aşağıda kodda old. gibi,

// function App() {
//   // return <h1>real madrid</h1>

//   const buttonValue = "benim buton";
//   const str1 = "click "
//   const str2 = "me"

//   return (
//     <div>
//       {/* {names.map(name => (<h1>{name}</h1>))} */}
//       <button
//         classNameName="jsxclassName"
//         type="button"
//         style={{
//           padding: "10px",
//           backgroundColor: "red",
//           color: "white",
//           backgroundColor: "green",
//         }}
//       >
//         {buttonValue}
//       </button>
//       <br/>
//       <button
//         classNameName="jsxclassName"
//         type="button"
//         style={{
//           padding: "10px",
//           backgroundColor: "red",
//           color: "white",
//           backgroundColor: "green",
//         }}
//       >
//         {str1.concat(str2)}
//       </button>
//     </div>
//     // yukarısı JSX yazımı
//   );
// }

//className based comp yapalım
// className App extends React.Component {
//     render (){
//         return <h1>barcelona</h1>
//     }
// }

const App = () => {
  return (
    // <h1>selam</h1>
    <div>
      {/* <h1 classNameName="display-1">selamlar</h1> */}
      {/* aşağıya bootstrap tan card group kopyaladık onu yapıştırıp JSX formatına uygun olarak düzenleyelim */}

      <div className="card-group">

        <Card cardTitle="barcelona"/> 

        <Card cardTitle="real madrid"/> 

        <Card cardTitle="bayern munih"/>        
        

        
        
      </div>
    </div>
  );
};

//sayfada göstermek, bunun için render etmemiz lazım
ReactDOM.render(
  //neyi göstereceğim, nerede göstereceğim
  <App />,
  document.getElementById("root")
  // document.querySelector('#root')
);

/* 
functionu arrow şekliden de yapabiliriz
props ???
comp lar arasında veri akışı, from parent to child şeklinde
parent ve child comp oluşturalım, 
bootstrap ı ekleyelim, cdn ini normal alıp, index.html ye normal yolla ekleyelim, js dosyalarını da ekleyelim, 
card-group u kopyalayıp yukarıya yapıştırdık ama burada sıkıntı tekrar tekrar kullandığımız kod var bu sıkıntı bunu çözmeliyiz, tekrar eden aynı kod veya benzer kod sıkıntıdır, biz bu tekrar eden card ları ayrı comp yapalım, çözelim
src > components > Card.js oluşturacağız

props comp lar arası veri iletişimi, özellik iletişimi, bu iletişim tek yönlü olur, parent to child 

parent ta Card comp içine özellik belirleyeceğiz, 
parent içinde attribute ları oluşturduk 
cardTitle="real madrid"
şimdi child dan bunları alacağız
child içinde yani Card.js de props kullanacağımızı belirtiyoruz, daha sonrada bunu 
{props.cardTitle}
 şeklinde kullanıyoruz, koda bak
 nesne bunlar bizde nesne yazımı şeklinde yaptık, 


*/
