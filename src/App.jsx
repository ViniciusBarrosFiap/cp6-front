import CardPoke from "./components/Card/Card";
import CarroselBrabo from "./components/Carousel";
import Header from "./components/Header/Header";
import "./App.css"
import TabelaPrecos from "./components/TabelaPrecos/TabelaPrecos";
const produtos = [{
  titulo: "Triple pack pokemon rixa rebelde",
  descricao: "Triple Pack Realeza Absoluta - Rillaboom",
  imagem: "https://a-static.mlcdn.com.br/1500x1500/pokemon-tcg-triple-pack-realeza-absoluta-rillaboom-pokemon-company/criancafeliz/624de244c32b11edb2314201ac18502f/aafd9626b6c3444e3bb424f74fe3cc9f.jpeg",
  preco: 35
},
{
  titulo: "Triple pack pokemon rixa rebelde",
  descricao: "Triple Pack Realeza Absoluta - Rillaboom",
  imagem: "https://a-static.mlcdn.com.br/1500x1500/pokemon-tcg-triple-pack-realeza-absoluta-rillaboom-pokemon-company/criancafeliz/624de244c32b11edb2314201ac18502f/aafd9626b6c3444e3bb424f74fe3cc9f.jpeg",
  preco: 35
},
{
  titulo: "Triple pack pokemon rixa rebelde",
  descricao: "Triple Pack Realeza Absoluta - Rillaboom",
  imagem: "https://a-static.mlcdn.com.br/1500x1500/pokemon-tcg-triple-pack-realeza-absoluta-rillaboom-pokemon-company/criancafeliz/624de244c32b11edb2314201ac18502f/aafd9626b6c3444e3bb424f74fe3cc9f.jpeg",
  preco: 35
}, {
  titulo: "Triple pack pokemon rixa rebelde",
  descricao: "Triple Pack Realeza Absoluta - Rillaboom",
  imagem: "https://a-static.mlcdn.com.br/1500x1500/pokemon-tcg-triple-pack-realeza-absoluta-rillaboom-pokemon-company/criancafeliz/624de244c32b11edb2314201ac18502f/aafd9626b6c3444e3bb424f74fe3cc9f.jpeg",
  preco: 35
},
{
  titulo: "Triple pack pokemon rixa rebelde",
  descricao: "Triple Pack Realeza Absoluta - Rillaboom",
  imagem: "https://a-static.mlcdn.com.br/1500x1500/pokemon-tcg-triple-pack-realeza-absoluta-rillaboom-pokemon-company/criancafeliz/624de244c32b11edb2314201ac18502f/aafd9626b6c3444e3bb424f74fe3cc9f.jpeg",
  preco: 35
},
{
  titulo: "Triple pack pokemon rixa rebelde",
  descricao: "Triple Pack Realeza Absoluta - Rillaboom",
  imagem: "https://a-static.mlcdn.com.br/1500x1500/pokemon-tcg-triple-pack-realeza-absoluta-rillaboom-pokemon-company/criancafeliz/624de244c32b11edb2314201ac18502f/aafd9626b6c3444e3bb424f74fe3cc9f.jpeg",
  preco: 35
}, {
  titulo: "Triple pack pokemon rixa rebelde",
  descricao: "Triple Pack Realeza Absoluta - Rillaboom",
  imagem: "https://a-static.mlcdn.com.br/1500x1500/pokemon-tcg-triple-pack-realeza-absoluta-rillaboom-pokemon-company/criancafeliz/624de244c32b11edb2314201ac18502f/aafd9626b6c3444e3bb424f74fe3cc9f.jpeg",
  preco: 35
},
{
  titulo: "Triple pack pokemon rixa rebelde",
  descricao: "Triple Pack Realeza Absoluta - Rillaboom",
  imagem: "https://a-static.mlcdn.com.br/1500x1500/pokemon-tcg-triple-pack-realeza-absoluta-rillaboom-pokemon-company/criancafeliz/624de244c32b11edb2314201ac18502f/aafd9626b6c3444e3bb424f74fe3cc9f.jpeg",
  preco: 35
}, {
  titulo: "Triple pack pokemon rixa rebelde",
  descricao: "Triple Pack Realeza Absoluta - Rillaboom",
  imagem: "https://a-static.mlcdn.com.br/1500x1500/pokemon-tcg-triple-pack-realeza-absoluta-rillaboom-pokemon-company/criancafeliz/624de244c32b11edb2314201ac18502f/aafd9626b6c3444e3bb424f74fe3cc9f.jpeg",
  preco: 35
},
{
  titulo: "Triple pack pokemon rixa rebelde",
  descricao: "Triple Pack Realeza Absoluta - Rillaboom",
  imagem: "https://a-static.mlcdn.com.br/1500x1500/pokemon-tcg-triple-pack-realeza-absoluta-rillaboom-pokemon-company/criancafeliz/624de244c32b11edb2314201ac18502f/aafd9626b6c3444e3bb424f74fe3cc9f.jpeg",
  preco: 35
}
]


function App() {
  return (
    <>
      <Header />
      <CarroselBrabo />
      <section className="container-xl d-flex flex-wrap justify-content-around">
        {produtos.map((produto) => {
          return (
            <CardPoke
              key={produto}
              titulo={produto.titulo}
              descricao={produto.descricao}
              imagem={produto.imagem}
              preco={produto.preco} />
          )
        })}
      </section>
      <section className="d-flex justify-content-center">
        <TabelaPrecos produtos={produtos} />
      </section>
    </>
  );
}

export default App;
