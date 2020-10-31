import React from 'react'
import {Modal, Button} from 'react-bootstrap'


function MyVerticallyCenteredModal(props) {
 
    console.log(props.word)

  return (
    
     
    
      
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <h4>The word was </h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {props.word}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    
  );

}


  export default MyVerticallyCenteredModal