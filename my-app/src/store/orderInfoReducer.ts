import img from "../images/french-fries.svg";

export type CategoryType = {
    id: string, name: string, image: string
}

export type CompoundType = {
    id: number, name: string, isDone: boolean
}

export type ProductsType = {
    id: number,
    categoryName: string,
    name: string,
    description: string,
    price: number,
    image: string,
    compound: CompoundType[]
}

export type OrderStateType = {
    order: {
        orderType: string,
        orderItems: ProductsType[],
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
                compound: [
                    {id: 1, name: 'Bulka', isDone: true},
                    {id: 2, name: 'Souse', isDone: true},
                ]
            },
            {
                id: 2,
                categoryName: 'Пиццы',
                name: 'Пицца',
                description: 'Аппетитная пицца с ароматным томатным соусом, сыром и разнообразными топпингами',
                price: 350,
                image: 'https://via.placeholder.com/150',
                compound: [
                    {id: 1, name: 'Testo', isDone: true},
                    {id: 2, name: 'Souse', isDone: true},
                ]
            },
            {
                id: 3,
                categoryName: 'Салаты',
                name: 'Салат',
                description: 'Свежий салат с миксом листьев, овощами, сыром и заправкой на выбор',
                price: 150,
                image: 'https://via.placeholder.com/150',
                compound: [
                    {id: 1, name: 'Onion', isDone: true},
                    {id: 2, name: 'Souse', isDone: true},
                ]
            },
            {
                id: 4,
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
        ],
        product: {}
    },
}

type ActionsTypes = chooseOrderType
    | chooseProductType
    | addProductType
    | cancelOrderType
    | changeCompoundType

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

        // case ORDER_ADD_ITEM: {
        //             const item = action.payload;
        //             const existItem = state.order.orderItems.find(
        //                 (x) => x.name === item.name
        //             );
        //             const orderItems = existItem
        //                 ? state.order.orderItems.map((x) =>
        //                     x.name === existItem.name ? item : x
        //                 )
        //                 : [...state.order.orderItems, item];
        //
        //             const itemsCount = orderItems.reduce((a, c) => a + c.quantity, 0);
        //             const itemsPrice = orderItems.reduce(
        //                 (a, c) => a + c.quantity * c.price,
        //                 0
        //             );
        //             const taxPrice = Math.round(0.15 * itemsPrice * 100) / 100;
        //             const totalPrice = Math.round((itemsPrice) * 100) / 100;
        //             return {
        //                 ...state,
        //                 order: {
        //                     ...state.order,
        //                     orderItems,
        //                     taxPrice,
        //                     totalPrice,
        //                     itemsCount,
        //                 },
        //             };
        //         }

        //             const itemsCount = orderItems.reduce((a, c) => a + c.quantity, 0);
        //             const itemsPrice = orderItems.reduce(
        //                 (a, c) => a + c.quantity * c.price,
        //                 0
        //             );

        case 'CHANGE-COMPOUND' : {
            const newCompound = state.order.product.compound
                .map((comp: CompoundType) => {
                    if (comp.id === action.payload.idCompound) {
                        return {...comp, isDone: action.payload.newIsDone}
                    } else {
                        return comp
                    }
                })
            const newProducts = state.order.products.
                map((prod: ProductsType) => prod.id === action.payload.idProduct
                ? {...prod, compound: state.order.products[action.payload.idProduct - 1].compound
                        .map((comp: CompoundType) => comp.id === action.payload.idCompound
                        ? {...comp, isDone: action.payload.newIsDone}
                        : comp)}
                : prod)
            return {
                ...state,
                order: {
                    ...state.order,
                    products: newProducts,
                    product: {...state.order.product, compound: newCompound},
                },
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

type changeCompoundType = ReturnType<typeof changeCompoundAC>
export const changeCompoundAC = (idProduct: number, idCompound: number, newIsDone: boolean) => {
    return {
        type: 'CHANGE-COMPOUND',
        payload: {idProduct, idCompound, newIsDone}
    } as const
}
