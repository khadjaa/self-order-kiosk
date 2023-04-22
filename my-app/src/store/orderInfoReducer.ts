
export type StateType = {
    order: {
        orderType: string,
        orderItems: [],
        paymentType: string
    }
}

const initialState = {
    order: {
        orderType: 'Eat in',
        orderItems: [],
        paymentType: 'Pay here'
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
        default: return state
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