import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Counter from '../views/Counter';
import Historic from '../views/Historic';
import Goals from '../views/Goals';
import '../styles/content.css';

const Content = props => (
    
    <div className="content">
  
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/historic" element={ <Historic />} />
        <Route path="/goals" element={ <Goals />} />
      </Routes>
    
    </div>
  );
  
  export default Content;