import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Item from './components/Item/Item';
import ModalItem from './components/ModalItem/ModalItem';
import "./App.css";
import { API_URL } from './api/api';
import { ICountry } from './types';
import axios from 'axios';

const App: React.FC = () => {
  const [items, setItems] = useState<ICountry[]>([]);
  const [current, setCurrent] = useState<object>({});
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    getItems();

  }, [])

  useEffect(() => {
    const body = document.body
    if (current) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "scroll";
    }
  }, [current])

  const getItems = async () => {
      const response = await axios.get<ICountry[]>(API_URL);

      setItems(response.data);
  }


  const currentCountry = (item: any) => {
    setCurrent(item);
  }

  const clearCurrent = () => {
    setCurrent({});
  }

  const filteredItems = items && items.filter(item => {
    return item.Country.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <div className="App">
      <Header setValue={setValue} />
      {
        // current ? <ModalItem clearCurrent={clearCurrent} current={current} /> : ''
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
                  total={item.TotalConfirmed}
                  country={item.Country}
                  currentCountry={currentCountry}
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
