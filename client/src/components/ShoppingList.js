import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { v1 as uuid } from "uuid";
export default class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ id: uuid(), name: "Eggs" }, { id: uuid(), name: "Milk" }, { id: uuid(), name: "Steak" }, { id: uuid(), name: "Water" }]
    }
    this.onClick=this.onClick.bind(this)
  }
  onClick(e) {
    console.log("e.target.value:",e );
  }
  render() {
    const { items } = this.state
    return (
      <Container>
        <Button color="dark" style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt('Enter Item');
            if (name) {
              this.setState(state => ({
                items: [...state.items, { id: uuid(), name: name }]
              }))
            }
          }}>Add Item</Button>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map((item) => ( 
              <CSSTransition  timeout={500} classNames="fade">
                <ListGroupItem key={item.id}>
                  <Button className="remove-btn"
                    color="warning"
                    size="sm" onClick={this.onClick}
                      /*(state,e,id) => {
                      console.log("id:",e )  
                      this.setState(state => ({ items: this.state.items.filter(item => item.id !== id) }))
                      console.log("items:",this.state)
                    }}*/
                  >&times;</Button>
                  {item.name} 
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container >
    )
  }
}
