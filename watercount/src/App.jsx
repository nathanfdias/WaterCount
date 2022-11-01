import { BrowserRouter as Router } from 'react-router-dom';
import Content from './components/Content';
import Menu from './components/Menu';
import './App.css'

const App = props => {

  return (
    <div className="App">
      <Router>
        <Menu />
        <Content />
      </Router>
    </div>
  )
}

export default App
