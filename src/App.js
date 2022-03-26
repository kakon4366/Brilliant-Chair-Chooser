import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import QuestionAns from './Components/QuestionAns/QuestionAns';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Shop></Shop>
      <QuestionAns></QuestionAns>
      <Footer></Footer>
    </div>
  );
}

export default App;
