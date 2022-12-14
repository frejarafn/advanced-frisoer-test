// Freja


import BehandlingPost from "./BehandlingPost";
import { useEffect, useState } from "react";

export default function BehandlingSection() {
    const [posts, setPosts] = useState([]);
    // Her hentes datalisten fra json Wordpress
    useEffect(() => {
        async function getData() {
            const res = await fetch("https://behandling.frejavangilst.com/wp-json/wp/v2/categories?_embed");
            const data = await res.json();
            console.log(data);
            setPosts(data);
        }

        getData();
    }, []);

    return (
        <section>

            <div className="behandlingoverblik"> {posts.filter(cat => cat.id !== 1).map(post => (
                <BehandlingPost key={post.id} post={post} />
            ))}</div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </section>

    );
}
