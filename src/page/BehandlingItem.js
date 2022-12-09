import { useParams } from "react-router-dom";
import BehandlingItemComponent from "../components/behandlingfetch/BehandlingItemComponent";

export default function BehandlingItem({ post }) {
    let params = useParams()
    console.log(params)
    return (
        <>
            <BehandlingItemComponent id={post.id}></BehandlingItemComponent>
        </>
    );
}
