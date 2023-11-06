
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
function PokeCard(props) {
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
      
      <Button variant="primary">Detalhes</Button>{' '}
      
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