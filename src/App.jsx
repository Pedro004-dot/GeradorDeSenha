import './App.css'
import Botao from './components/button/botao'
import Frame from './components/frame/frame'
import Slider, { SliderValueLabel } from '@mui/material/Slider';


import {useState} from 'react'
function App() {
  let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
  const [showPassword,setShowPassword] = useState()
  const [copyText,setCopyText] = useState("Copiar")
  const [size,setSize] = useState(6)
  function gerarSenha(){
    let password = ""
    for(let i = 0 , n = charSet.length; i< size; i++ ){
      password += charSet.charAt(Math.floor(Math.random()* n))
    }
    setShowPassword(password)
    setCopyText("Copiar")
  }
function copiarText(){
  window.navigator.clipboard.writeText(showPassword)
  setCopyText("Copiado")
}
  return (
   <div className="container">
     <div class="title" >
        <h1>Gerador de senha</h1>
      </div>
      <div>
      <h2>{size} caracteres</h2>
      <Slider min={6} max={26} valueLabelDisplay="auto" value={size} onChange={(ev)=>setSize(ev.target.value)}/>
      </div>
      <div class="botoes" >
        <button onClick={()=> {
          gerarSenha()
        }}> Gerar</button>
        <button onClick={()=> { copiarText() }}>
          {copyText}
        </button>
      </div>  
      <div class="senha">
        {showPassword}
      </div>
    </div>
  )
}

export default App
