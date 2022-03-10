import { createSlice } from '@reduxjs/toolkit'


const calculateTotalPrice = (cartProducts) => {
    let totalPrice = 0;
    cartProducts.forEach(cartProduct => {
        totalPrice += cartProduct.product.price * cartProduct.count;
    });
    return (totalPrice);
}
const calculateTotalCount = (cartProducts)=>{
    let totalCount = 0;
    cartProducts.forEach(cartProduct=>{
        totalCount += cartProduct.count;
    });
    return(totalCount);
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartProducts: [
            // {
            //     product: undefined,
            //     count: 0,
            // }
        ],
        totalPrice: 0,
        totalCount:0
    },
    reducers: {
        addProduct: (state, action) => {
            const newProduct = action.payload;
            const filteredProducts = state.cartProducts.filter(item => {
                return item.product.id === newProduct.id
            });
            console.log(filteredProducts);
            if (filteredProducts.length > 0) {
                filteredProducts[0].count++;
            }
            else {
                state.cartProducts.push({
                    product: {
                        ...newProduct,
                    
                    },
                    count: 1
                })
            }
            console.log(state);
            state.totalPrice = calculateTotalPrice(state.cartProducts);
            state.totalCount = calculateTotalCount(state.cartProducts);
        },
        deleteProduct: (state, action) => {
            const id = action.payload;
            const cartProduct = state.cartProducts.filter(x => x.product.id === id);
            console.log(cartProduct)
            if (cartProduct.length > 0 && cartProduct[0].count > 1) {
                cartProduct[0].count--;
            } else {
                state.cartProducts = state.cartProducts.filter(x => {
                    return x.product.id !== id
                })
            }
            state.totalPrice = calculateTotalPrice(state.cartProducts);
            state.totalCount = calculateTotalCount(state.cartProducts);

        },
        clearProduct:(state, action)=>{
            const id = action.payload;
            state.cartProducts = state.cartProducts.filter(x => {
                return x.product.id !== id
            })
            state.totalPrice = calculateTotalPrice(state.cartProducts);
            state.totalCount = calculateTotalCount(state.cartProducts);
        }
    
    },
})

// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct,clearProduct } = cartSlice.actions

export default cartSlice.reducer
