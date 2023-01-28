import react, { useState, useEffect } from 'react';
import { createClient } from "next-sanity";

export default function Products() {
    const [products, setProducts] = useState([]);


    const client = createClient(
        {
            projectId: "ko0nh6pi",
            dataset: "production",
            apiVersion: "2021-03-25",
            useCdn: false,
        }
    );


    async function getStaticProps() {
        const products = await client.fetch(`*[_type == "product"]`);
        setProducts(products);
        return {
            props: {
                products,
            },
        };

    }


    useEffect(() => {
        getStaticProps();
    }, []);


    return (
        <div>
            <h1>Products</h1>

            {
                products.map((product) => (
                    <li key={product._id}>{product?.name}</li>
                ))
            }


        </div>
    );
}
