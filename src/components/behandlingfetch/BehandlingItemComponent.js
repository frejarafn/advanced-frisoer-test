import { useEffect, useState } from "react";
import BehandlingFullItem from "./BehandlingFullItem";

export default function BehandlingItemComponent(props) {
    const [post, setPost] = useState(undefined);

    useEffect(() => {
        if (props.id === undefined) return
        async function getData(id) {
            const res = await fetch(`https://portfolio.frejavangilst.com/wp-json/wp/v2/posts/${id}?_embed`);
            const data = await res.json();
            console.log(data);
            setPost(data);
        }

        getData(props.id);
    }, [props.id]);

    if (props.id === undefined) return <section>id parameter er ikke angivet</section>
    if (post === undefined) return <section>post er ikke angivet</section>
    return (
        <section>
            <h2>Behandlinger</h2>
            <BehandlingFullItem key={post.id} post={post} />
        </section>

    );
}
