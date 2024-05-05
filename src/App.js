import Header from './Components/Header';
import DayList from './Components/DayList';
import Day from './Components/Day';
import EmptyPage from './Components/EmptyPage';
import CreateWord from './Components/CreateWord';
import CreateDay from './Components/CreateDay';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element = {<DayList />} />
          <Route path="/day/:day" element = {<Day />} />
          <Route path="/create_word" element = {<CreateWord />} />
          <Route path="/create_day" element = {<CreateDay />} />
          <Route path="*" element = {<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
