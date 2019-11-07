import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            selectedDish: null
        }
        console.log('Menu Component constructor is invoked !');
    } 

    // lifecycle method -- this method will test componentDidMount() will be invoked
    componentDidMount() {
        console.log('Menu Component componentDidMount is invoked !');
    }

    onDishselect(dish) {
        this.setState({ 
            selectedDish: dish
        });
    }

    render () {
        // map (JS keyword): iterating over every dish in the dishes array here
        const menu = this.props.dishes.map((dish) => {
            return (
                // key: every item require key attribute to specift it.
                // the key helps React to recognise each one of these elements, uniquely. 
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishselect(dish)}> 
                        <CardImg width="100%" src={dish.image} alt={dish.name} />                    
                        <CardImgOverlay>
                            <CardTitle> {dish.name} </CardTitle>
                        </CardImgOverlay>    
                    </Card>
                </div>    
            );
        }); // take the JS objects

        console.log('Menu Component render is invoked !');

         // return what needs to diaplay on the UI in this conponent. (return view)
        return ( 
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetail dish = {this.state.selectedDish}></DishDetail>
            </div>
        );
    }
}

export default Menu;