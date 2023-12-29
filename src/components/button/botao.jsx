import './botao.css'
export default function Botao(props){
    return(
    <button class="botao" onCick >{props.texto}  </button>
    )
}