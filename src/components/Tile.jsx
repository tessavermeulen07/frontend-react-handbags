// Tile.jsx

function Tile(props) {
    return (
        <>
        <section>
            <h2>{props.title}</h2>
            {props.children}
        </section>
        </>
    );
}

export default Tile;