import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Wrapper from './Components/Wrapper';


function App() {
  return (
    <div>
      <Header/>
      <Wrapper>
        <Main name="안민하"/>
      </Wrapper>
      <Footer/>
    </div>
  );
}

export default App;
