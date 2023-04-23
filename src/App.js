/* eslint-disable no-unused-vars */
import './App.css';
import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { Shop } from './components/Shop';
import { Item } from './components/Item';
import { data } from './components/data';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, json } from "react-router-dom";
function App() {
  const [itemsData, serItemsData] = useState({ ...data })
  const [itemData, setItemData] = useState({})
  let [list, setList] = useState([]);
  function addItem(e) {
    e.preventDefault()
    let dataId = e.target.id;
    window.localStorage.setItem("itemData", JSON.stringify(...itemData[dataId]))
    console.log(localStorage)
  }
  function getInfo(e) {
    e.preventDefault()
    let dataId = e.target.id;
    setList((prev) => { return [...prev, dataId] })
  }
  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem("list")).length > list.length) {
      setList(JSON.parse(window.localStorage.getItem("list")));
    }
    else {
      window.localStorage.setItem("list", JSON.stringify(list))
    }
    console.log(localStorage)
  }, [list])
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop function={getInfo} />} />
          <Route path='/item' element={<Item {...JSON.parse(window.localStorage.getItem("itemData"))} function={addItem} />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
