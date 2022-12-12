// Freja

export default function BehandlingFullItem({ post }) {


    return (
        <section >
            <article className="behandlingsection">
                <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h3>
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>

            </article>
        </section>
    );
}