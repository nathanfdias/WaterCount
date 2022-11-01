import '../styles/historic.css';
import { useContext, useState } from 'react'
import { context } from '../context' 

const Historic = props => {
  const ctx = useContext(context); 

  const historicTxt = () =>{
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0')
    let mes = String(data.getMonth() + 1).padStart(2, '0')
    let ano = String(data.getFullYear())
    let hora = String(data.getHours())
    let minuto = String(data.getMinutes())
    let segundo = String(data.getSeconds())
    let horario = `${hora}:${minuto}.${segundo}`
    let dataAtual = `${mes}/${dia}/${ano}`

    // let novo_elemento = document.createElement('p');
    // // novo_elemento.innerText = `Cup quantity: ${ctx.cuphist} | Ml cup: ${ctx.quantcuphist} | Data: ${dataAtual} | Time: ${horario}`;
    // // novo_elemento.innerHTML = {ctx.historicData};
    // let elemento = document.querySelector('#myList');
    // elemento.appendChild(novo_elemento);
    
    var frase = `Cup quantity: ${ctx.cuphist} | Ml cup: ${ctx.quantcuphist} | Data: ${dataAtual} | Time: ${horario}`;
    ctx.setHistoricData(frase);
  }

  return(
    <div className="historic">
      <div className='historic-title'>
        <h1>Historic</h1>
        <button onClick={historicTxt}>Update</button>
      </div>
      <div className='historic-context' id='myList'>
        <p>{ctx.historicData}</p>
      </div>
    </div>
    );
    
  };
  
  export default Historic;