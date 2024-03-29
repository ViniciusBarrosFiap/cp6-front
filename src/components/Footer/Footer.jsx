import logo from "../../img/logoPokeBuy.png"
import "./style.scss"
function Footer(){
    return(
        <footer className="container d-flex align-items-center">
            <div className="esquerda d-flex justify-content-center">
                <img src={logo}alt="logo footer" style={{width:"50%"}}/>
            </div>
            <div className="direita w-100">
                <ul className="d-flex flex-column align-items-center" style={{listStyle:"none"}}>
                    <li>PokeBuy</li>
                    <li>Redes Sociais</li>
                    <li>Produtos</li>
                    <li>contato</li>
                </ul>
            </div>
            <h1>Trabalho feito por:</h1>
            <ul>
                <li>RM98297 - Lucas Pisaneschi Speranzini</li>
                <li>RM97824 - Vinicius Oliveira de Barros</li>
            </ul>
        </footer>
    )
}

export default Footer