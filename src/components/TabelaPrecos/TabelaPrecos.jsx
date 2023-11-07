/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function TabelaPrecos(props) {
    const [produtos, setProdutos] = useState([])
    useEffect(()=>{
      setProdutos(props.produtos)
    },[props.produtos])
  return (
    <Table striped bordered hover style={{width:"67%"}}>
    <thead>
      <tr>
        <th>#</th>
        <th>Descrição</th>
        <th>Preço</th>
      </tr>
    </thead>
    <tbody>
      {produtos.map((produto, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{produto.titulo}</td>
          <td>{produto.preco}</td>
        </tr>
      ))}
    </tbody>
  </Table>
  );
}

export default TabelaPrecos;