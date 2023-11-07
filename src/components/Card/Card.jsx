
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import MyVerticallyCenteredModal from '../Modal/Modal';

function PokeCard(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Card style={{ width: '15rem' }}>
    <Card.Body>
      <Card.Img src={props.imagem}></Card.Img>
      <Card.Title>{props.titulo}</Card.Title>
      <Card.Text>
        {props.descricao}
      </Card.Text>
      <Card.Title>
        R$ {props.preco},00
      </Card.Title>
      
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Mais detalhes
      </Button>
      <MyVerticallyCenteredModal
        titulo={props.titulo}
        imagem={props.imagem}
        descricao={props.descricao}
        preco={props.preco}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Card.Body>
  </Card>
  );
}
PokeCard.propTypes = {
  titulo: PropTypes.string,
  descricao: PropTypes.string,
  preco: PropTypes.number,
  imagem: PropTypes.string
}
export default PokeCard;