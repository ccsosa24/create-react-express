import React, {Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Images from "../components/Image";

class Detail extends Component {
    state = {
        book: {}
    };

    componentsDidMount() {
        API.getBook(this.props.match.params.id)
        .then(res => this.setState({ book: res.data }))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <hi>
                                {this.state.book.title} by {this.state.book.author}
                            </hi>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-2">
                        <Images image={this.state.book.image} />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-10 md-offset-1">
                        <article>
                            <h1>Synopsis</h1>
                            <p>
                                {this.state.book.synopsis}
                            </p>
                        </article>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-2">
                        <Link to="/"> Back to Authors</Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Detail;