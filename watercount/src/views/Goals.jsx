import '../styles/goals.css';
import { useContext, useState } from 'react'
import { context } from '../context'

const Goals = props => {
  const [goalCount, setGoalCount] = useState(); 
  const ctx = useContext(context); 

  function Send() {
    console.log(goalCount);
    if (goalCount === 0){
      alert("Please enter a value");
    } else {
      ctx.setGoal(goalCount);
    }

    statusConfer();
  }

  function statusConfer() {
    if (goalCount <= ctx.valueml){
      let msg = "Goal Reached"
      ctx.setStatus(msg)
    }
  }

  const goalValue = (e) => {
    let x = (e.target.value)
    setGoalCount(x);
  }

  return(
    <div className="goals">
      <h1 className='goals-title'>DAILY GOALS</h1>
       <p className='goals-description'>The goal of water intake per day is important for the control of our health so that consumption does not drop due to carelessness. Getting enough water every day is important for your health. Drinking water can prevent dehydration, a condition that can cause unclear thinking, result in mood change, cause your body to overheat, and lead to constipation and kidney stones. Water has no calories, so it can also help with managing body weight and reducing calorie intake when substituted for drinks with calories, such as sweet tea or regular soda.</p>
       <div className='goals-form'>
          <input type="text" onKeyUp={goalValue}/>
          <button onClick={Send}>Send</button>
       </div>
    </div>
  );
};
  
  export default Goals;