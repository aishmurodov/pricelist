import React from 'react';
import PriceList from "./PriceList";

const Sales = () => (
    <PriceList
        title={"Акции"}
        num={false}
        items={[
            {
                title: "Первое посещение",
                value: -200,
            },
            {
                title: "Приведи 3-х подруг",
                value: 0
            },
            {
                title: "Пятый маникюр",
                value: "-30 %"
            },
        ]}
    />
)

const PriceItems = () => (
    <PriceList
        title={"Прайслист"}
        items={[
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
        ]}
    />
)

function App() {
  return (
    <div className="App">

        <PriceItems />

    </div>
  );
}

export default App;
