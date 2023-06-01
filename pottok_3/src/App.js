import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserId from './component/UserId/UserId';
import Recherche from './component/Recherche/Recherche';
import ProjectName from './component/ProjectName/ProjectName';
import Menu from './component/Menu/Menu';

function App(){
  return (
   <div className='App'>
    <UserId/>
    <Recherche/>
    <ProjectName/>
    <Menu/>
   </div> 
  );
}

export default App;
