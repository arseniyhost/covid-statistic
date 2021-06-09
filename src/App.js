import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Item from './components/Item/Item';
import ModalItem from './components/ModalItem/ModalItem';
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [current, setCurrent] = useState(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    getItems();

  }, [])

  useEffect(() => {
    const body = document.querySelector('body');
    if (current) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "scroll";
    }
  }, [current])

  const getItems = () => {
    fetch('https://api.covid19api.com/summary')
      .then(res => res.json())
      .then(result => {
        setItems(result.Countries)
      })
  }


  const currentCountry = (item) => {
    setCurrent(item);
  }

  const clearCurrent = () => {
    setCurrent('');
  }

  const filteredItems = items && items.filter(item => {
    return item.Country.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <div className="App">
      <Header setValue={setValue} />
      {
        current ? <ModalItem clearCurrent={clearCurrent} current={current} /> : ''
      }
      <div className="table-info">
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Country</th>
              <th>Total Confirmed</th>
            </tr>
          </thead>
          <tbody>
            {
              items ? filteredItems.map((item, index) => {
                return <Item
                  id={index + 1}
                  key={item.ID}
                  id_item={item.ID}
                  modalInfo={item}
                  total={item.TotalConfirmed}
                  country={item.Country}
                  currentCountry={currentCountry}
                  current={current}
                  item={item}
                />
              }) : <div>Loading...</div>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
