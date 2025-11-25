// Product.jsx

function Product({spanText, image, title, description, price}) {
    return (
        <article>
            <span>{spanText}</span>
            <img src={image} alt={title} />
            <p>{description}</p>
            <h4>€{price},-</h4>
        </article>
    )
}

export default Product;