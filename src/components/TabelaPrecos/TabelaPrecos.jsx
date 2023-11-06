/* eslint-disable react/prop-types */
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

function TabelaPrecos(props) {
    const [produtos, setProdutos] = useState([])
    setProdutos(props.produtos)
    
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Pokemon</th>
          <th>Descrição</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((produto)=>{
            return (
                <tr>
                    {produto.titulo}
                </tr>
            )
        })}
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TabelaPrecos;