import { orderInfoReducer } from './orderInfoReducer';

describe('orderInfoReducer', () => {
    it('should handle CHOOSE-ORDER-TYPE action', () => {
        const initialState = {
            order: {
                orderType: '',
            }
        };
        const action = {
            type: 'CHOOSE-ORDER-TYPE',
            payload: {
                orderedType: 'В ЗАЛЕ'
            }
        };
        const expectedState = {
            order: {
                orderType: 'В ЗАЛЕ',
            }
        };
        expect(orderInfoReducer(initialState, action)).toEqual(expectedState);
    });
});

