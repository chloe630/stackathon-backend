import React from 'react';
import { connect } from 'react-redux';
import store from './store';

class SingleRecipe extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "container">


            </div>
        );

    }
}

export default connect()(SingleRecipe);