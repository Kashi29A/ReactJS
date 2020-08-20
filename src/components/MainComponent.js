import React, { Component } from 'react';
import Footer from './FooterComponent'
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import { DISHES } from '../Shared/dishes';
import DishDetail from './DishdetailComponent'
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }


    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div >
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}></DishDetail>
                <Footer/>
            </div>
        );
    }
}

export default Main;
