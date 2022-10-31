import '../styles/goals.css';

const Goals = props => {
    
  return(
    <div className="goals">
      <h1 className='goals-title'>DAILY GOALS</h1>
       <p className='goals-description'>The goal of water intake per day is important for the control of our health so that consumption does not drop due to carelessness. Getting enough water every day is important for your health. Drinking water can prevent dehydration, a condition that can cause unclear thinking, result in mood change, cause your body to overheat, and lead to constipation and kidney stones. Water has no calories, so it can also help with managing body weight and reducing calorie intake when substituted for drinks with calories, such as sweet tea or regular soda.</p>
       <div className='goals-form'>
          <input type="text" />
          <button>Send</button>
       </div>
    </div>
  );
};
  
  export default Goals;