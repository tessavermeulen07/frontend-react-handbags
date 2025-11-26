import './App.css'
import Button from "./components/Button.jsx";
import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";
import Product from "./components/Product.jsx";
import brand from "./assets/brand.png";
import our_story from "./assets/our_story.png";
import Tile from "./components/Tile.jsx";


function App() {
    function handleClick(showText) {
        console.log(showText);
    }

    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    textOnClick="To the collection"
                    textOnButton="To the collection"
                    disabled={false}
                />
                <Button
                    textOnClick="Shop all bags"
                    textOnButton="Shop all bags"
                    disabled={false}
                />
                <Button
                    textOnClick="Pre-orders"
                    textOnButton="Pre-orders"
                    disabled={true}
                />
            </nav>
            <main>
                <Product
                    spanText="Bestseller"
                    image={bag_1}
                    title="The handy bag"
                    description="The handy bag"
                    price={400}
                />
                <Product
                    spanText="Bestseller"
                    image={bag_2}
                    title="The stylish bag"
                    description="The stylish bag"
                    price={250}
                />
                <Product
                    spanText="Bestseller"
                    image={bag_3}
                    title="The simple bag"
                    description="The simple bag"
                    price={300}
                />
                <Product
                    spanText="Bestseller"
                    image={bag_4}
                    title="The handy bag"
                    description="The handy bag"
                    price={400}
                />
            </main>
            <footer>
                <Tile title={"Our brand"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores facilis hic impedit maiores
                        nulla perspiciatis quam quidem temporibus ut voluptatem.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequuntur eos est
                        explicabo itaque molestias nulla obcaecati possimus quibusdam.</p>
                </Tile>
                <Tile>
                    <img src={brand} alt="Our brand"/>
                </Tile>
                <Tile>
                    <img src={our_story} alt="Our story"/>
                </Tile>
                <Tile title="Our story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut distinctio, dolor error,
                        excepturi exercitationem fugiat incidunt itaque libero, odit quasi qui repellat sapiente unde
                        vel. Delectus dolor exercitationem obcaecati.</p>
                </Tile>
            </footer>
        </>
    )
}

export default App
