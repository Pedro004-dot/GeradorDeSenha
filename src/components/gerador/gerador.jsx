export function Gerador(props){
    let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
    for(let i = 0 , n = charSet.length; i< props.size; i++ ){
        props.password += charSet.charAt(Math.floor(Math.random()* n))
      } 
}