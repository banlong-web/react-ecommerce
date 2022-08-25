import React, {Component} from "react";
import {connect} from "react-redux";

import Main from "../components/redux/main";
import { fetchProducts } from "../redux/actions/fetchData";

class Cart extends Component {
    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }

    render(){
        return (
            <div>
                <Main />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.products.item,
    loading: state.products.loading,
    error: state.products.error
});

export default connect(mapStateToProps)(Cart)