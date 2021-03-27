import React, { Component } from 'react' ;
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
  } from 'reactstrap';
  import { connect } from 'react-redux';
 import { addtItem } from "../redux/Action/itemsAction";



 class ItemModal extends Component {
    constructor(props) {
        super(props);
    this.state ={
         modal:false,
         name : ''
     }
     
     
    }
     toggle =()=>{
         this.setState({
             modal:!this.state.modal
         })
     }
     onChange= (e)=>{
         this.setState({[e.target.name]:e.target.value})
     }
    onSubmit=(e)  =>{
         e.preventDefault();
         const newItem={
             name :this.state.name
         }

       this.props.addtItem(newItem)
    
     
        this.toggle();
     }
     
    render() {
        return (
            <div>
                <Button color ="dark"
                style= {{marginBottom:"2rem"}}
                onClick={this.toggle}>Add Item</Button>
                <Modal  isOpen={this.state.modal}
                toggle ={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label  for ="item">Item</Label>
                                <Input type ="text" name ="name"
                                id="item"
                                placeholder="Add Shooping item"
                                onChange={this.onChange}></Input>
                                <Button color="danger" style ={{marginTop:'2rem'}} block>Add your Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    
                </Modal>
            </div>
        )
    }
}
const mapStatetoProps = (state) =>({
    newstate : state
  })
export default connect (mapStatetoProps ,{addtItem})(ItemModal)
