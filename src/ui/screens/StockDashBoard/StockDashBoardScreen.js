import React from 'react';
import {StockList} from './components/StockList';

const stock_1 = require('../../../assets/pic/stock_1.jpeg');
const stock_2 = require('../../../assets/pic/stock_2.jpeg');
const stock_3 = require('../../../assets/pic/stock_3.jpeg');
const stock_4 = require('../../../assets/pic/stock_4.jpeg');
const stock_5 = require('../../../assets/pic/stock_5.jpeg');

const mock = [
    {
        id: 1,
        order: 1,
        name: ['Химчистка', 'озонировние'],
        description: '#1 Химчистка + озонировние',
        oldPrice: 1000,
        newPrice: 800,
        image: stock_1,
    },
    {
        id: 2,
        name: ['Покраска', 'полировка'],
        order: 2,
        description: '#2 Покраска + полировка',
        oldPrice: 400,
        newPrice: 300,
        image: stock_2,
    },
    {
        id: 3,
        name: ['Полировка', 'озонировние'],
        order: 3,
        description: '#3 Полировка + озонировние',
        oldPrice: 20,
        newPrice: 15,
        image: stock_3,
    },
    {
        id: 4,
        name: ['Антидождь', 'чистка дисков'],
        order: 4,
        description: '#4 Антидождь + чиска дисков',
        oldPrice: 230,
        newPrice: 200,
        image: stock_4,
    },
    {
        id: 5,
        name: ['Озонирование', 'химчистка'],
        order: 5,
        description: '#5 Озонирование + химчистка',
        oldPrice: 230,
        newPrice: 150,
        image: stock_5,
    },
];

export const StockDashBooardScreen = props => {
    return <StockList stockItems={mock} />;
};
