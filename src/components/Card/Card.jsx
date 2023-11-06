import Card from 'react-bootstrap/Card';
import imgProduto from '../../img/produtoCarta.jpg'
import "./Card.css"
function CardPoke() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img className='w-10' src={imgProduto} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CardPoke;