import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Main from './components/main/Main';
import Service1 from './components/service/service1/Service1';
import Service1Results from './components/service/service1/Service1Results';
import Service1ResultsMore from './components/service/service1/Service1ResultsMore';
import Service2 from './components/service/service2/Service2';
import Service2Results from './components/service/service2/Service2Results';
import Service3 from './components/service/service3/Service3';
import Service3Results from './components/service/service3/Service3Results';
import Service3ResultsMore from './components/service/service3/Service3ResultsMore';
import List from './components/list/List';
import MyPage from './components/mypage/MyPage';
import CardInfo from './components/cardinfo/CardInfo';


function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/main' element={<Main />} />
                <Route exact path='/service1' element={<Service1 />} />
                <Route exact path='/service1/results' element={<Service1Results />} />
                <Route exact path='/service1/results/more' element={<Service1ResultsMore />} />
                <Route exact path='/service2' element={<Service2 />} />
                <Route exact path='/service2/results' element={<Service2Results />} />
                <Route exact path='/service3' element={<Service3 />} />
                <Route exact path='/service3/results' element={<Service3Results />} />
                <Route exact path='/service3/results/more' element={<Service3ResultsMore />} />
                <Route exact path='/list' element={<List />} />
                <Route exact path='/mypage' element={<MyPage />} />
                <Route exact path='/cardinfo' element={<CardInfo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;