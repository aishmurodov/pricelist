import PriceListItem from "./PriceListItem";

export default interface PriceListProps {
    num?: boolean,
    title: string,
    items: Array<PriceListItem>

}