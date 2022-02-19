import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
