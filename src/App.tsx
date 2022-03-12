import React, { useEffect, useState } from 'react';

import './styles/reset.scss';
import './styles/variables.scss';
import './styles/app.scss';

import MyInput from './component/input/MyInput';
import MyButton from './component/button/MyButton';

import { $host } from './html';
import { fetchWeather } from './html/weatherAPI';

import data from './component/data/citys.json';
import { IData } from './interface/IData';
import Card from './component/card/Card';

const App = () => {
    const [inputActive, setInputActive] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('')

    const [cityWeather, setCityWeather] = useState<IData[]>([])

    const filteredData = data.filter(item => {
        return item.city.toLowerCase().includes(inputValue.toLowerCase())
    })

    return (
        <div className="app">
            <div className="app__container">
                <div className="app__tools tools">
                    <div className="tools__search">
                        <div className="tools__inputlist">
                            <MyInput
                                placeholder='Search for a city'
                                className="tools__input"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.currentTarget.value)}
                                onFocus={(e) => setInputActive(true)}
                                onBlur={(e) => setInputActive(false)}
                            />

                            <ul className={`tools__list${inputActive ? ' _active' : ''}`}>
                                {filteredData.slice(0, 50).map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={(e) => {
                                            setInputValue(e.currentTarget.innerHTML)
                                        }}
                                    >
                                        {item.city}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <MyButton
                            className="tools__btn"
                            onClick={() => {
                                let temp = filteredData;
                                if (temp.length > 0 && inputValue != '') {
                                    fetchWeather(temp[0].lat.toString(), temp[0].lng.toString())
                                        .then(data => setCityWeather(oldData => [...oldData, data]))
                                }

                                setInputValue('')
                            }}
                        >
                            submit
                        </MyButton>

                    </div>
                    <MyButton
                        className="tools__btn"
                        onClick={() => {
                            console.log(cityWeather)
                            setCityWeather([])
                        }}
                    >
                        reset
                    </MyButton>
                </div>
                <div className="app__body">
                    {cityWeather.map(item => (
                        <Card data={item}/>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default App;
