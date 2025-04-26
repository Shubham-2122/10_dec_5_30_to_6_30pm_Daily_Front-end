import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Card() {

    const [products, setproducts] = useState("")

    useEffect(() => {
        product()
    }, [])

    const product = async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
        console.log(res.data)
        setproducts(res.data)
    }

    return (
        <div>
            <div className="container">
                <h1>hello this card data</h1>
                <div className="row">
                    {
                        products && products.map((data) => {
                            return (
                                <div className="col-md-4">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={data.image} style={{ height: "300px" }} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{data.id}</h5>
                                            <h5 className="card-title">{data.title}</h5>
                                            <h4 className="card-title">{data.price} $</h4>
                                            <p className="card-text">{data.description.slice(0, 100)}</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Card
