import { useEffect, useState } from "react";
import BehandlingFullItem from "./BehandlingFullItem";

export default function BehandlingItemComponent(props) {
    const [post, setPost] = useState(undefined);

    useEffect(() => {
        if (props.id === undefined) return
        async function getData(id) {
            const res = await fetch(`https://behandling.frejavangilst.com/wp-json/wp/v2/posts/${id}?_embed`);
            const data = await res.json();
            console.log(data);
            setPost(data);
        }

        getData(props.id);
    }, [props.id]);

    if (props.id === undefined) return <section>id parameter er ikke angivet</section>
    if (post === undefined) return <section>Posts indlæses</section>
    return (
        <section>
            <BehandlingFullItem key={post.id} post={post} />
            <button>BESTIL</button>
        </section>

    );
}
