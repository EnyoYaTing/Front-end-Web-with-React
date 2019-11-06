import React, { Component } from 'react';
// import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        //the state stores in Properties related to this component that we can make use of 
        //here we define "dishes" property, and inside the dishes, we define the JS objects
        this.state = {
            selectedDish: null
        }
    } 

    onDishelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle> {dish.name} </CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    // return what needs to diaplay on the UI in this conponent. (return view)
    render () {
        // map (JS keyword): iterating over every dish in the dishes array here
        const menu = this.props.dishes.map((dish) => {
            return (
                // key: every item require key attribute to specift it.
                // the key helps React to recognise each one of these elements, uniquely. 

                // -- Card example -- 
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishelect(dish)}> 
                        <CardImg width="100%" src={dish.image} alt={dish.name} />                    
                        <CardImgOverlay>
                            <CardTitle> {dish.name} </CardTitle>
                        </CardImgOverlay>    
                    </Card>
                </div>

                /* -- media example --
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li"> 
                        <Media left middle>  
                            <Media object src={dish.image} alt={dish.name} />                    
                        </Media>
                        <Media body className="ml-5">
                            <Media heading> {dish.name} </Media>
                            <p> {dish.description} </p>
                        </Media>    
                    </Media>
                </div>  */
            );
        }); // take the JS objects

        return ( 
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>

            // -- Media example -- 
            // <div className="container">
            //     <div className="row">
            //         <Media list>        
            //             {menu}
            //         </Media>
            //     </div>
            // </div>
        );
    }

}

// remember to export the component from this file
export default Menu;