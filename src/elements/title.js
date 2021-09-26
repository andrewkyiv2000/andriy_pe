import { render } from '@testing-library/react';
import React, {Component, Fragment} from 'react';
import { graphql } from '@apollo/client/react/hoc';
import TITLECAT from '../GraphQL/titlecat.js';

class Title extends Component {
    renderTitl() {
        
        return this.props.data.categories.map(cat =>{
            return (
                <div class="Title">
            <h1>Category: {cat.name}</h1>
        </div>           
            )
        })
    }

    render() {
        if (this.props.data.loading) {return <div>Londing...</div>;}
        console.log(this.props)
        
        return(
            <div>
               {this.renderTitl()}
            </div>
        );
    }
}

export default graphql(TITLECAT)(Title);





