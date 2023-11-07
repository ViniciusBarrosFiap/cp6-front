/* eslint-disable react/prop-types */
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.titulo}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.titulo}</h4>
          <img style={{width:"300px"}} src={props.imagem} alt="" />
          <p>
           {props.descricao}
          </p>
          <h2>R${props.preco},00</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default MyVerticallyCenteredModal