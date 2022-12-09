import { Link } from "react-router-dom";
import parse from "html-react-parser";

export default function BehandlingPost({ post }) {



    let image = "https://avatars.githubusercontent.com/u/90176537?v=4";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }
    // Her er post sendt med som parameter og indholdet vises herefter
    return (
        <section className="client-row">
            <Link to={'/BehandlingList/' + post.id}>
                <article>
                    <h3>{parse(post.name)}</h3>
                    {/* <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div> */}
                </article>
                {/* <figure>
                    <img src={image} alt={post.name} />
                </figure> */}
            </Link>
        </section>
    );
}
