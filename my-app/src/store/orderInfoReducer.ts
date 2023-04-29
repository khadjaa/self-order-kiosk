import img from "../images/french-fries.svg";
import {initialState} from "./state";

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
            const newProducts = state.order.products
                .map((prod: ProductsType) => prod.id === action.payload.idProduct
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
