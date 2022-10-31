import React, { useContext } from 'react';
import { context } from '../context';
import '../styles/home.css';

const Home = props => {
    const ctx = useContext(context);

    const resetAll = () => {
      console.log("Valor Zero Reset");
      let zero = 0;
      ctx.setValueMl(ctx.valueml -= ctx.valueml)
      ctx.setCup(zero)
      ctx.setGoal(zero)
    }
    
    return(
    <main className="home">
      <div className='main-description'>
        <h1 className='main-logo-title'>WATER COUNTER</h1>
        <p className='main-description-text'>Counter of water ingested per day, with goals and setting of the amount of ml per glass</p>   
      </div>
      <div className='main-data'>
        <div className='main-data-content'>
          <h1>{ctx.cup}</h1>
          <p>CUPS</p>
        </div>
        <div className='main-data-content'>
          <h1>{ctx.valueml}</h1>
          <p>ML</p>
        </div>
        <div className='main-data-content'>
          <h1>{ctx.goal}</h1>
          <p>GOAL</p>
        </div>
        <div className='main-data-content'>
          <h1>0</h1>
          <p>DAYS</p>
        </div>
      </div>
      <div className='button'>
        <button onClick={resetAll}>RESET</button>
      </div>
    </main>
    );
};
  
  export default Home;