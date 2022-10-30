import '../styles/home.css';

const Home = props => (
    
    <main className="home">
      <div className='main-description'>
        <h1 className='main-logo-title'>WATER COUNTER</h1>
        <p className='main-description-text'>Counter of water ingested per day, with goals and setting of the amount of ml per glass</p>   
      </div>
      <div className='main-data'>
        <div className='main-data-content'>
          <h1>920</h1>
          <p>HOURS</p>
        </div>
        <div className='main-data-content'>
          <h1>920</h1>
          <p>HOURS</p>
        </div>
        <div className='main-data-content'>
          <h1>920</h1>
          <p>HOURS</p>
        </div>
        <div className='main-data-content'>
          <h1>920</h1>
          <p>HOURS</p>
        </div>
      </div>
    </main>
  );
  
  export default Home;