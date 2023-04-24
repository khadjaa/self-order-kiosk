import img from "../images/french-fries.svg";

export type CategoryType = {
    id: string, name: string, image: string
}

export type ProductsType = {
    id: number,
    categoryName: string,
    name: string,
    description: string,
    price: number,
    image: string,
}

export type CompoundType = {
    id: number,
    name: string,
    isDone: boolean
}

export type OrderStateType = {
    order: {
        orderType: string,
        orderItems: ProductsType[],
        categories: CategoryType[],
        compound: CompoundType[]
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
        ],
        compound: [
            {id: 1, name: 'Onion', isDone: true},
            {id: 2, name: 'Souse', isDone: true},
        ],
        product: {}
    },
}

type ActionsTypes = chooseOrderType
    | chooseProductType
    | addProductType
    | cancelOrderType

export const orderInfoReducer = (state: any = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'CHOOSE-ORDER-TYPE': {
            return {
                ...state,
                order: {...state.order, orderType: action.payload.orderedType}
            }
        }
        case 'CHOOSE-PRODUCT': {
            return {
                ...state,
                order: {...state.order, product: state.order.products[action.payload.id - 1]}
            }
        }
        case 'ADD-PRODUCT' : {
            return {
                ...state,
                order: {
                    ...state.order,
                    orderItems: [state.order.products[action.payload.id], ...state.order.orderItems]
                }
            }
        }
        case 'CANCEL-ORDER' : {
            return {
                ...state,
                order: {
                    ...state.order,
                    orderItems: []
                }
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

type chooseProductType = ReturnType<typeof chooseProductAC>
export const chooseProductAC = (id: number) => {
    return {
        type: 'CHOOSE-PRODUCT',
        payload: {id}
    } as const
}

type addProductType = ReturnType<typeof addProductAC>
export const addProductAC = (id: number) => {
    return {
        type: 'ADD-PRODUCT',
        payload: {id}
    } as const
}


type cancelOrderType = ReturnType<typeof cancelOrderAC>
export const cancelOrderAC = () => {
    return {
        type: 'CANCEL-ORDER',
    } as const
}