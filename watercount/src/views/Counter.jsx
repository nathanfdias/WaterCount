import { useState } from 'react'
import '../styles/counter.css';

const Counter = props => {
  const [contador, setContador] = useState(0);
  const [consumo, setConsumo] = useState(0);  

  function somar() {
    console.log("Somando")
    let num = contador + 1;
    if (num <= 100){
      setContador(num)
    } else {
      let num = 100
      setContador(num)
      window.alert("Número Máximo Atingido")
    }
  }

  function diminuir() {
    console.log("Diminuindo")
    let num = contador - 1;
    if( num > -1){
      setContador(num)
    } else {
      let num = 0
      setContador(num)
      window.alert("Número Mínimo Atingido")
    }
  }

  function zerar() {
    console.log("Zerando")
    let num = 0;
    setContador(num)
  }

  function copoML() {
    let copoML = document.getElementById("copoml").value;
    console.log(copoML);
  }

  function somarTotal() {
    let copoML = document.getElementById("copoml").value;

    if(copoML <= 0) {
      copoML = 250
      alert("Quantidade inválida, quantia padrão de 250ml aplicada!")
    }
    console.log("Copo ML: "+copoML)
    console.log("Contador: "+contador)
    
    let valorConsumido = copoML*contador
    setConsumo(valorConsumido)
  }

    return(

    <div className="counter">
      <div className='counter-container'>
        <h1 className='title'>COUNTER DATA</h1>
        <div className='counter-ml'>
          <h3>Cup value in ml:</h3>
          <input type="number" onKeyUp={copoML}/>
        </div>
        {/* <div className='counter-goals'>
          <h3>Goals to be achieved:</h3>
          <input type="number"/>
        </div> */}
        <div >
          <h3 className='number-cup-title'>Number of:</h3>
        </div>
        <h2 className='number-cup'>{contador}</h2>
        <div className='counter-cup'>
          <button onClick={diminuir}>-</button>
          <button onClick={zerar}>Zero</button>
          <button onClick={somar}>+</button>
        </div>
        <div className='counter-amount'>
          <h3>Total:</h3>
          <h2 className='number-cup'>{consumo + " ML"}</h2>
        </div>
        <div className='counter-save'>
          <button>Save</button>
        </div>
      </div>
    </div>
    );
};
  
  export default Counter;