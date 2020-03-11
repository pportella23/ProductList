import React, { Component } from 'react';
import api from "../../components/service/api";
import { Link } from 'react-router-dom';


import './styles.css';

export default class Product extends Component {
    state = {
        product: {},
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data });
    }

    return = () => {
        const { page } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }

    render() {
        const { product } = this.state;

        return (
            <>
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>

                <p>
                URL: <a href={product.url}>{product.url}</a>
                </p>

            </div>

            <div className="actions">
                <article>
                    <Link to='/'>Voltar</Link>
                </article>
                {/* <button onClick={this.return}>Voltar</button> */}
            </div>
            </>
        );
    }
}