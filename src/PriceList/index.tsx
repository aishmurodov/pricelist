import React, {PropsWithChildren, useEffect, useState} from "react";
import "./styles/index.scss"
import PriceListProps from "./interfaces/PriceListProps";

const PriceList: React.FunctionComponent<PriceListProps> = (props: PropsWithChildren<PriceListProps>) => {

    const [active, setActive] = useState<boolean>(false)

    useEffect(() => {

        setTimeout(() => {
            setActive(true)
        }, 1000)

    }, [])

    return <div className="PriceList">
        <div className="PriceList__inner">
            <div className="PriceList__title">
                <span>Прайслист</span>
            </div>
            <div className={`PriceList__list${active ? " PriceList__list--active" : ""}`}>
                {
                    props.items.map((item) => (
                        <div className="PriceList__list__item">
                            <div className="PriceList__list__item__title">{item.title}</div>
                            <div className="PriceList__list__item__value">{
                                typeof item.value === "number" ? item.value.toLocaleString() : (typeof item.value === "string" ? item.value : (item.value.map((v) => v.toLocaleString())).join(" / "))
                            } ₽</div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
}

export default PriceList