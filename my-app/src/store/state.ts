import img from "../images/french-fries.svg";
import kebabImg from '../images/kebab.svg'
import comboImg from '../images/combo.svg'
import lemonadeImg from '../images/lemonade.svg'
import soupImg from '../images/soup.svg'
import alcoholImg from '../images/beer.svg'
import realKurImg from '../images/real_k.png'
import grandImg from '../images/grand_g.png'
import falafelImg from '../images/falafel.png'
import friesImg from '../images/fries_.png'
import ApaImg from '../images/APA.png'
import LiptonImg from '../images/lipton_z.png'

export const initialState = {
    order: {
        orderType: '',
        orderItems: [],
        categories: [
            {id: 1, name: 'Гранд-Кебаб', image: comboImg},
            {id: 2, name: 'Супы', image: soupImg},
            {id: 3, name: 'Реал-Кебаб', image: kebabImg},
            {id: 4, name: 'Закуски', image: img},
            {id: 5, name: 'Напитки', image: lemonadeImg},
            {id: 6, name: 'Алкоголь', image: alcoholImg},
        ],
        products: [
            {
                id: 1,
                categoryName: 'Реал-Кебаб',
                name: 'Реал-Кебаб',
                description: 'Традиционная подача в свеже испеченной лепёшке',
                price: 250,
                image: realKurImg,
                compound: [
                    {id: 1, name: 'Кебаб куриный', isDone: true},
                    {id: 2, name: 'Салат айсберг', isDone: true},
                    {id: 3, name: 'Пекинская капустаг', isDone: true},
                    {id: 4, name: 'Морковь по-корейски', isDone: true},
                    {id: 5, name: 'Лук репчатый', isDone: true},
                    {id: 6, name: 'Белый соус', isDone: true},
                    {id: 7, name: 'Красный соус', isDone: true},
                    {id: 8, name: 'Лепешка', isDone: true},
                ]
            },
            {
                id: 2,
                categoryName: 'Гранд-Кебаб',
                name: 'Гранд-Кебаб',
                description: 'Подача на тарелке для самых голодных',
                price: 350,
                image: grandImg,
                compound: [
                    {id: 1, name: 'Testo', isDone: true},
                    {id: 2, name: 'Souse', isDone: true},
                ]
            },
            {
                id: 3,
                categoryName: 'Закуски',
                name: 'Фалафель',
                description: 'Свежий салат с миксом листьев, овощами, сыром и заправкой на выбор',
                price: 150,
                image: falafelImg,
                compound: []
            },
            {
                id: 4,
                categoryName: 'Закуски',
                name: 'Картофель фри',
                description: 'Обжаренный по-бельгийски',
                price: 150,
                image: friesImg,
                compound: []
            },
            {
                id: 5,
                name: 'Суп',
                categoryName: 'Супы',
                description: 'Ароматный суп с куриной грудкой, овощами и крупой на выбор',
                price: 200,
                image: 'https://via.placeholder.com/150',
                compound: [
                    {id: 1, name: 'Bulon', isDone: true},
                    {id: 2, name: 'Souse', isDone: true},
                ]
            },
            {
                id: 6,
                name: 'Пиво АПА',
                categoryName: 'Алкоголь',
                description: 'На выбор',
                price: 200,
                image: ApaImg,
                compound: []
            },
            {
                id: 7,
                name: 'Lipton',
                categoryName: 'Напитки',
                description: 'На выбор',
                price: 200,
                image: LiptonImg,
                compound: []
            },
        ],
        product: {}
    },
}