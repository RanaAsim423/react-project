import { createSlice } from '@reduxjs/toolkit'

let localData = JSON.parse(localStorage.getItem("cart"))
let localCart = [];
if(localData === null){
    localCart = []
}else{
    localCart = localData
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: localCart,
    },
    reducers: {
        addToCart : (state, action) =>{
            state.cart = [...state.cart, action.payload]
            localStorage.setItem("cart",JSON.stringify(state.cart))
        },
        addQuantity : (state, action) =>{
            const newState = state.cart.map(obj => {
                // 👇️ if id equals 2, update array values
                if (obj.id === action.payload.id) {
                    return {
                        ...obj,
                        cartQuantity: obj.cartQuantity + action.payload.cartQuantity,
                    };
                }
                return obj;
            });
            state.cart = newState
            localStorage.setItem("cart",JSON.stringify(state.cart))
        },
        removeQuantity : (state, action) =>{
            const newState = state.cart.map(obj => {
                // 👇️ if id equals 2, update array values
                if (obj.id === action.payload.id) {
                    return {
                        ...obj,
                        cartQuantity: obj.cartQuantity - action.payload.cartQuantity,
                    };
                }
                return obj;
            });
            state.cart = newState
            localStorage.setItem("cart",JSON.stringify(state.cart))
        },
        deleteQuantity : (state, action) => {

            let singleItem = state.cart.filter(el => {
                console.log(action.payload,el.id )
                return el.id !== action.payload.id;
            });
            console.log(singleItem)
            state.cart = singleItem
            localStorage.setItem("cart",JSON.stringify(state.cart))
        },
        emptyCart : (state, action) => {
            state.cart = []
            localStorage.removeItem("cart")
        },
    },
})

export const { addToCart,addQuantity,removeQuantity, deleteQuantity,emptyCart } = cartSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCart = (state) => state.cart.cart

export default cartSlice.reducer
