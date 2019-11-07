import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name} </CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>    
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if (comments == null) {
            return (
            <div></div>
            );
        }
        const cmnts = comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <li>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author},
                        &nbsp;
                            {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit'
                            }).format(new Date(comment.date))}
                        </p>
                    </li>
                </div>
            );
        });
        
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>
            </div>
        )
    }

    render () {
        const selectedish = this.props.dish 
        if (selectedish == null) {
            return (
                <div></div>
            );
        } 

        const dishInfo = this.renderDish(selectedish)
        const dishComment = this.renderComments(selectedish.comments) 
    

        return (
            <div className="row">
                {dishInfo}
                {dishComment}
            </div>    
        );
    }

}

export default DishDetail;