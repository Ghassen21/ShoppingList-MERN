import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {connect} from 'react-redux';
import { v1 as uuid } from "uuid"; 
import {getItems,deletItem } from '../redux/Action/itemsAction'

 class ShoppingList extends Component {
  constructor(props) {
    super(props);
   this.OnDeleteClick=this.OnDeleteClick.bind(this);
  }
  componentDidMount(){
   this.props.getItems()
  }
  OnDeleteClick=(id) =>{
    this.props.deletItem (id)
  }
  render() {
    const {items}=this.props.newstate.item
    return (
  
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({_id,name}) => ( 
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem >
                  <Button className="remove-btn"
                    color="warning"
                    size="sm" onClick={()=> this.OnDeleteClick(_id)
                    }
                  >&times;</Button>
                  {name} 
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
    
    )
  }
}  const mapStatetoProps = (state) =>({
   newstate : state
 })

 export default connect (mapStatetoProps ,{getItems,deletItem})(ShoppingList)