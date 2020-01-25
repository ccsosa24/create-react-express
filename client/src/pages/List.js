import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Books extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        synposis: "",
        image: ""
     };


componentDidMount() {
    this.loadBooks();
}

loadBooks = () => {
    API.getBooks()
    .then(res =>
        this.ListeningStateChangedEvent({ books: res.data, title: "", author: "", image: "" }))
        .catch(err => console.log(err));
};

deleteBook = id => {
    API.deleteBook(id)
    .then(res => this.loadBooks())
    .catch(err => console.log(err));
};

handleInputChange = event => {
    console.log(this.title)
    console.log(this.author)
    const { name, value } =  event.target;
    this.ListeningStateChangedEvent({
        [name]: value
    });
 };

 handleFormSubmit = event => {
     event.preventDefault();
     if(this.state.title && this.state.author) {
         API.saveBook({
             title: this.state.title,
             author: this.state.author,
             synopsis: this.state.synopsis
         })
         .then(res => this.loadBooks())
         .catch(err => console.log(err));
     }
 };

 render() {
     return (
         <Container fluid>
             <Row>
                 <Col size="md-12 sm-12">
                     <container-fliud>
                         <h1>Books on My List</h1>
                     </container-fliud>
                     {this.state.books.length ? (
                         <List>
                             {this.state.books.map(book => (
                                 <ListItem key ={book._id}>
                                     <Link to={"/books/" + book._id}>
                                     <strong>
                                         {book.title} by {book.author}
                                     </strong>
                                     </Link>
                                     <DeleteBtn onClick={() => this.deleteBtn(book._id) } />
                                 </ListItem>
                             ))}
                         </List>
                     ) : (
                         <h3> No Results</h3>
                     )}
                    
                 </Col>
             </Row>
         </Container>
     );
 }
}
 export default Books;

