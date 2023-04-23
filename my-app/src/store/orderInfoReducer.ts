import img from "../images/french-fries.svg";

export type CategoryType = {
    id: string, name: string, image: string
}

export type ProductsType = {
    id: string,
    categoryName: string,
    name: string,
    description: string,
    price: number,
    image: string,
}

export type OrderStateType = {
    order: {
        orderType: string,
        orderItems: [],
        categories: CategoryType[],
        products: ProductsType[]
    }
}

const initialState = {
    order: {
        orderType: '',
        orderItems: [],
        categories: [
            {id: 1, name: 'Бургеры', image: img},
            {id: 2, name: 'Пиццы', image: img},
            {id: 3, name: 'Салаты', image: img},
            {id: 4, name: 'Супы', image: img},
        ],
        products: [
            {
                id: 1,
                categoryName: 'Бургеры',
                name: 'Бургер',
                description: 'Сочный бургер с говяжьей котлетой, луком, помидорами и салатом',
                price: 250,
                image: 'https://via.placeholder.com/150',
            },
            {
                id: 2,
                categoryName: 'Пиццы',
                name: 'Пицца',
                description: 'Аппетитная пицца с ароматным томатным соусом, сыром и разнообразными топпингами',
                price: 350,
                image: 'https://via.placeholder.com/150',
            },
            {
                id: 3,
                categoryName: 'Салаты',
                name: 'Салат',
                description: 'Свежий салат с миксом листьев, овощами, сыром и заправкой на выбор',
                price: 150,
                image: 'https://via.placeholder.com/150',
            },
            {
                id: 4,
                name: 'Суп',
                categoryName: 'Супы',
                description: 'Ароматный суп с куриной грудкой, овощами и крупой на выбор',
                price: 200,
                image: 'https://via.placeholder.com/150',
            },
        ]
    },
}

type ActionsTypes = chooseOrderType

export const orderInfoReducer = (state: any = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'CHOOSE-ORDER-TYPE': {
            return {
                ...state,
                order: {...state.order, orderType: action.payload.orderedType}
            }
        }
        default:
            return state
    }
}

type chooseOrderType = ReturnType<typeof chooseOrderTypeAC>
export const chooseOrderTypeAC = (orderedType: string) => {
    return {
        type: 'CHOOSE-ORDER-TYPE',
        payload: {
            orderedType
        }
    } as const
}