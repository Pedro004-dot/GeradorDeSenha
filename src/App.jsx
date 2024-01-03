import './App.css'
import Slider from '@mui/material/Slider';

import {useState} from 'react'
function App() {
  let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"

  const [showPassword,setShowPassword] = useState()
  const [copyText,setCopyText] = useState("Copiar")
  const [size,setSize] = useState(6)
  const [numberPassword,setNumberPassword]= useState(false)
  const [lowCasePassword,setLowCasePassword]= useState(false)
  const [upCasePassword,setUpCasePassword]= useState(false)
  const [charachteresPassword,setCharachteresPassword]= useState(false)

  let numbLow = "0123456789abcdefghijklmnopqrstuvwxyz"
  let numbLowUp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let lowUp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY"

  function gerarSenha(){
    let password = ""
    if(numberPassword && lowCasePassword && upCasePassword && charachteresPassword){
      for(let i = 0 , n = numbLowUp.length; i< size; i++ ){
        password += numbLowUp.charAt(Math.floor(Math.random()* n))
      } 
    }else if(numberPassword && lowCasePassword && upCasePassword){
      for(let i = 0 , n = numbLow.length; i< size; i++ ){
        password += numbLow.charAt(Math.floor(Math.random()* n))
      } 
    } else if (lowCasePassword && upCasePassword){
      for(let i = 0 , n = lowUp.length; i< size; i++ ){
        password += lowUp.charAt(Math.floor(Math.random()* n))
      }
    }else{
      for(let i = 0 , n = charSet.length; i< size; i++ ){
        password += charSet.charAt(Math.floor(Math.random()* n))
      } 
    }
    // console.log(carcMaiscu)
    setShowPassword(password)
    setCopyText("Copiar")
  }
function copiarText(){
  window.navigator.clipboard.writeText(showPassword)
  setCopyText("Copiado")
}
  return (
   <div className="container">
     <div className="title" >
        <h1>Gerador de senha</h1>
      </div>
      <div>
        <div className='inputs'>
             <div>
             <label htmlFor='showNumber'> Senha com números  </label>
           <input 
             id="showNumber" 
             type="checkbox" 
             name="myCheckbox"
             value={numberPassword}
             onChange={()=>setNumberPassword(currentState => !currentState)}
             ></input>

             </div>
             <div>
             <label htmlFor='showLowCase'> Senha com letras minusculas  </label>
             <input 
             id="showLowCase" 
             type="checkbox" 
             name="myCheckbox"
             value={lowCasePassword}
             onChange={()=>setLowCasePassword(currentState => !currentState)}
           ></input>
             </div>
              <div>
              <label htmlFor='showUpCase'> Senha com letras maiusculas  </label>
             <input 
             id="showUpCase" 
             type="checkbox" 
             name="myCheckbox"
             value={upCasePassword}
             onChange={()=>setUpCasePassword(currentState => !currentState)}
           ></input>
              </div>
            <div>
            <label htmlFor='showCharachteres'> Senha com caracteres  </label>
           <input 
             id="showCharachteres" 
             type="checkbox" 
             name="myCheckbox"
             value={charachteresPassword}
             onChange={()=>setCharachteresPassword(currentState => !currentState)}
           ></input>
            </div>
        </div>
        <h2>{size} caracteres</h2>
        <Slider 
        min={6} 
        max={26}
        valueLabelDisplay="auto" 
        value={size}
        onChange={(ev)=>setSize(ev.target.value)}/>
      </div>

      <div className="botoes" >
        <button onClick={()=> {
          gerarSenha()
        }}> Gerar</button>
        <button onClick={()=> { copiarText() }}>
          {copyText}
        </button>
      </div>  
      <div className="senha">
        {showPassword}
      </div>
    </div>
  )
}

export default App
