import { useContext, useState } from 'react'
import { context } from '../context'
import '../styles/counter.css';

const Counter = props => {
  const [contador, setContador] = useState(0);
  const [consumo, setConsumo] = useState(0); 
  const [copoml, setCopoml] = useState(0); 
  const [copomlReal, setCopomlReal] = useState(0);
  const ctx = useContext(context);

  function somar() {
    console.log("Somando")
    let copohist = copomlReal + 1;
    setCopomlReal(copohist);
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
    let copohist = copomlReal - 1;
    setCopomlReal(copohist);
    let num = contador - 1;
    if( num > -1){
      setContador(num)
    } else {
      let num = 0
      setContador(num)
      window.alert("Número Mínimo Atingido")
    }
  }

  const diminuirAtt = () =>{
    diminuir();
    diminuirTotal();
  }

  const somarAtt = () =>{
    somar();
    somarTotal();
  }

  const zerar = () => {
    console.log("Zerando")
    let num = 0;
    setContador(num);
    setConsumo(num);
    setCopomlReal(num);
  }

  const copoML = (e) => {
    let copoml = (e.target.value);
    setCopoml(copoml);
  }

  function somarTotal() {
    console.log(copoml)
    console.log(contador + 1)
    
    let valorConsumido = copoml*(contador + 1)
    console.log(valorConsumido)
    setConsumo(valorConsumido)
  }

  function diminuirTotal() {
    console.log(copoml)
    console.log(contador - 1)
    
    let valorConsumido = copoml*(contador - 1)
    console.log(valorConsumido)
    setConsumo(valorConsumido)
  }

  function salvar() {
    ctx.setValueMl(ctx.valueml += consumo);
    ctx.setCup(ctx.cup += contador);
    ctx.setCuphist(contador);
    historic();

    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0')
    let mes = String(data.getMonth() + 1).padStart(2, '0')
    let ano = String(data.getFullYear())
    let hora = String(data.getHours())
    let minuto = String(data.getMinutes())
    let segundo = String(data.getSeconds())
    let horario = `${hora}:${minuto}.${segundo}`
    let dataAtual = `${mes}/${dia}/${ano}`
    
    var frase = [`Cup quantity: ${copomlReal} | Ml consumed: ${consumo} | Date: ${dataAtual} | Time: ${horario}`];
    ctx.historicData.push(frase);

    if (ctx.goal <= ctx.valueml){
      let msg = "Goal Reached"
      ctx.setStatus(msg)
    }
  }
  
  function historic() {
    ctx.setCuphist(copomlReal);
    ctx.setQuantcuphist(copoml);
    console.log(ctx.cuphist);
  }

    return(

    <div className="counter">
      <div className='counter-container'>
        <h1 className='title'>COUNTER DATA</h1>
        <div className='counter-ml'>
          <h3>Cup value in ml:</h3>
          <input type="text" onKeyUp={copoML} valeu={copoml}/>
        </div>
        <div >
          <h3 className='number-cup-title'>Number of cups:</h3>
        </div>
        <h2 className='number-cup'>{contador}</h2>
        <div className='counter-cup'>
          <button onClick={diminuirAtt}>-</button>
          <button onClick={zerar}>Zero</button>
          <button onClick={somarAtt}>+</button>
        </div>
        <div className='counter-amount'>
          <h3>Total:</h3>
          <h2 className='number-cup'>{consumo + " ML"}</h2>
        </div>
        <div className='counter-save'>
          <button onClick={salvar}>Save</button>
        </div>
      </div>
    </div>
    );
};
  
  export default Counter;