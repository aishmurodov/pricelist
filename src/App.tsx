import React from 'react';
import PriceList from "./PriceList";

function App() {
  return (
    <div className="App">
     <PriceList items={[
         {
             title: "Снятие, маникюр, покрытие",
             value: 900
         },
         {
             title: "Маникюр без покрытия",
             value: 450
         },
         {
             title: "Снятие",
             value: 150
         },
         {
             title: "Ремонт/донаращивание",
             value: [50, 100]
         },
         {
             title: "Френч (1 ноготь/все)",
             value: [40, 300]
         },
         {
             title: "Дизайн 1 ногтя",
             value: "от 40"
         },
     ]} />
    </div>
  );
}

export default App;
