import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Button } from 'reactstrap';
import uuid from 'uuid';
export default class ShoppingList extends Component {
    constructor(props) {
        super(props);
      this.state = {
            items: [{id:uuid(),name:"Eggs"},{id:uuid(),name:"Milk"},{id:uuid(),name:"Steak"},{id:uuid(),name:"Water"}]
        }
    }
    render() {
        const {items}=this.state
        return (
           <Container>
               <Button></Button>
           </Container>
        )
    }
}
