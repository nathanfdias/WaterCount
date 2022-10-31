import '../styles/home.css';

const Home = props => (
    
    <main className="home">
      <div className='main-description'>
        <h1 className='main-logo-title'>WATER COUNTER</h1>
        <p className='main-description-text'>Counter of water ingested per day, with goals and setting of the amount of ml per glass</p>   
      </div>
      <div className='main-data'>
        <div className='main-data-content'>
          <h1>00</h1>
          <p>CUPS</p>
        </div>
        <div className='main-data-content'>
          <h1>920</h1>
          <p>ML</p>
        </div>
        <div className='main-data-content'>
          <h1>920</h1>
          <p>GOAL</p>
        </div>
        <div className='main-data-content'>
          <h1>00</h1>
          <p>DAYS</p>
        </div>
      </div>
      <div className='button'>
        <button>RESET</button>
      </div>
    </main>
  );
  
  export default Home;