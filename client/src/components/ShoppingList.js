import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {v1 as uuid} from "uuid";
export default class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{ id: uuid(), name: "Eggs" }, { id: uuid(), name: "Milk" }, { id: uuid(), name: "Steak" }, { id: uuid(), name: "Water" }]
        }
    }
    render() {
        const { items } = this.state
        console.log("items: ",items)
        return (
            <Container>
                <Button color="dark" style={{ marginBottom: "2rem" }}
                    onClick={()=> { const name = prompt('Enter Item') ;
            if (name){
                    this.setState(state => ({
                        items: [...state.items, { id: uuid(), name :name}]
                    }))
                }}}>Add Item</Button>
                <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(( item) => (
            <CSSTransition key={item.id} timeout={500} classNames="fade">
              <ListGroupItem>
               {item.name }
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
           </Container >
        )
    }
}
