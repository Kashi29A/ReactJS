import React, { Component } from 'react'
import { Card, CardImg, Fade, CardImgOverlay, CardText, CardBody, CardTitle, Media } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    formatDate(date) {
        const option = { year: 'numeric', month: 'short', day: 'numeric' };
        const date1 = new Date(date)
        const newdate = date1.toLocaleDateString("en-US", option)
        return newdate;

    }
    RenderComments(dish) {
        if (dish.comments != null) {
            const renderComments = dish.comments.map((commentObj) => {
                console.log(commentObj);
                return (
                    // can use this.formatDate(commentObj.date)
                    <div className="container">
                        <div key={commentObj.id}>
                            <ul>{commentObj.comment}</ul>
                            <ul>-- {commentObj.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(commentObj.date)))}</ul>
                        </div>
                    </div>
                )
            })
            return (

                <div ><h4>Comments</h4>
                {renderComments}
                </div>

            )
        }
        else {
            return (
                <div></div>
            )
        }
    }


    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="row">

                    <div className="col-12 col-md-5">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle >{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>

                    </div>

                    <div className="col-12  col-md-5 m-1" >
                        {this.RenderComments(dish)}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }


    render() {
        return (<div>
             <div className="container">
                {this.renderDish(this.props.dish)}
            </div>
        </div>)
    }
}

export default DishDetail;