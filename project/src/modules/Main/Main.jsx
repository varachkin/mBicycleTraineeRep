import React from 'react';
import "./Main.css"
import p from "./../../public/p/p.png"
import ProductCard from "./components/ProductCard/ProductCard";
import InfoPanel from "./components/InfoPanel/InfoPanel";
import {productsData} from "../../config";
import {v4 as uuidv4} from "uuid";


function Main(props) {
    return (
        <main>
            <section className="section_image section_100vh">
                <div className="wrapper section_image_content container_padding_200">
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, atque, consequuntur
                        corporis expedita explicabo laborum modi neque odit officiis perferendis quidem sed. Aut
                        doloribus eius eos fuga in inventore, nam.
                    </div>
                    <div>Ab at debitis dolorum error facere incidunt laudantium maxime minima, minus molestias
                        necessitatibus neque odio sint sit totam ut vel voluptatem voluptatum. Aspernatur blanditiis ex
                        illo inventore quis quos voluptatem.
                    </div>
                    <div>Asperiores aut blanditiis commodi consequuntur corporis dicta distinctio dolore doloribus eaque
                        eius excepturi facere harum impedit incidunt iste libero, nemo nulla odio officia officiis
                        pariatur possimus quasi quod repellendus repudiandae!
                    </div>
                    <div>A alias explicabo fuga fugiat itaque iure optio pariatur, quae qui quibusdam recusandae,
                        reiciendis tempora vitae? Dolorem doloremque eius minima nam numquam odit quam, ratione rem
                        repellendus similique voluptas voluptate.
                    </div>
                    <div>Ab, accusamus alias aliquid delectus dicta doloremque earum eius eligendi error et eveniet
                        excepturi id ipsa iure laborum nisi odio perferendis provident quae quaerat quas, reprehenderit
                        sunt totam unde vitae!
                    </div>
                    <div>Accusamus, aliquam commodi corporis deserunt eaque eos, est in labore maxime mollitia nemo
                        nihil obcaecati omnis placeat quam quo repellat reprehenderit saepe sint temporibus voluptas
                        voluptatem voluptates? Aperiam eos, rerum?
                    </div>
                    <div>Accusantium, et exercitationem fugiat harum natus nemo neque obcaecati quisquam rerum voluptas?
                        Commodi, delectus, deleniti dicta dolorem dolorum exercitationem expedita iste modi nulla
                        officiis perspiciatis placeat quam repellat, sed vel.
                    </div>
                    <div>Aliquam assumenda aut autem consequatur cupiditate delectus dignissimos dolore dolores dolorum
                        eius enim esse fuga itaque iusto maxime minima modi necessitatibus nulla, numquam obcaecati
                        perferendis ratione recusandae repudiandae sapiente voluptates.
                    </div>
                    <div>Exercitationem in mollitia quaerat sit tempore voluptates voluptatibus. Alias animi at
                        consectetur delectus ea eaque earum, est fugiat illum laboriosam nam officia quo quos vel,
                        voluptates? Assumenda dolorum qui sit.
                    </div>
                    <div>Accusamus at aut consectetur delectus doloribus esse magnam, minima officia, pariatur qui quod
                        sit suscipit voluptates. Asperiores assumenda debitis ea eveniet, facere incidunt nesciunt
                        perferendis praesentium quam quasi totam voluptate!
                    </div>
                </div>
            </section>
            <section className="information_section wrapper">
                <InfoPanel/>
            </section>
            <section className="products wrapper">
                <div className="products_title">
                    <h2>
                        <span>{'<='}</span>
                        Title
                        <span>{'=>'}</span>
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda, atque beatae.
                    </p>
                </div>
                <div className="products_container">
                    {productsData.map(productItem => <ProductCard key={uuidv4(`${productItem}`)} src={productItem.src}
                                                                  title={productItem.title}
                                                                  cost={productItem.cost}/>)}
                </div>
            </section>
        </main>
    );
}

export default Main;