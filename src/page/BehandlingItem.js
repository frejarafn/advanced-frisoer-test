import { useParams } from "react-router-dom";
import BehandlingItemComponent from "../components/BehandlingItemComponent";

export default function BehandlingItem() {
    let params = useParams()
    console.log(params)
    return (
        <>
            <BehandlingItemComponent id={params.ItemId}></BehandlingItemComponent>
        </>
    );
}
