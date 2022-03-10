import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [
            {
                id: 1,
                name: "Kurka1",
                description: "super smachna",
                price: 999,
                weight: 1000,
                category:'coldDishes',
                img:"https://focus.ua/static/storage/thumbs/920x465/c/c0/24614ee7-8304073daeda130553b3307aa8a4fc0c.jpeg?v=3367_1"
                
            },
            {
                id: 2,
                name: "Kurka2",
                description: "super smachna",
                price: 999,
                weight: 1000,
                category:'coldDishes',
                img:"/img/products/product1.png"
            },
            {
                id: 3,
                name: "Kurka3",
                description: "super smachna",
                price: 999,
                weight: 1000,
                category:'hotDishes',
                img:"/img/products/product1.png"
            },
            {
                id: 4,
                name: "Kurka3",
                description: "super smachna",
                price: 999,
                weight: 1000,
                category:'hotDishes',
                img:"/img/products/product1.png"
            },
            {
                id: 5,
                name: "Kurka3",
                description: "super smachna",
                price: 999,
                weight: 1000,
                category:'hotDishes',
                img:"/img/products/product1.png"
            },
            {
                id: 6,
                name: "Kurka3",
                description: "super smachna",
                price: 999,
                weight: 1000,
                category:'hotDishes',
                img:"/img/products/product1.png"
            },
            {
                id: 7,
                name: "Kurka4",
                description: "super smachna",
                price: 999,
                weight: 1000,
                category:'snacks',
                img:"/img/products/product1.png"
            },
            {
                id: 8,
                name: "Kurka1",
                description: "super smachna",
                price: 999,
                weight: 1000,
                category:'coldDishes',
                img:"https://focus.ua/static/storage/thumbs/920x465/c/c0/24614ee7-8304073daeda130553b3307aa8a4fc0c.jpeg?v=3367_1"
                
            },
            {
                id: 9,
                name: "Kurka2",
                description: "super smachna",
                price: 999,
                weight: 1000,
                category:'coldDishes',
                img:"/img/products/product1.png"
            },
            {
                id: 10,
                name: "Kurka1",
                description: "super smachna",
                price: 999,
                weight: 1000,
                category:'coldDishes',
                img:"https://focus.ua/static/storage/thumbs/920x465/c/c0/24614ee7-8304073daeda130553b3307aa8a4fc0c.jpeg?v=3367_1"
                
            },
            {
                id: 11,
                name: "Kurka2",
                description: "super smachna",
                price: 999,
                weight: 1000,
                category:'coldDishes',
                img:"/img/products/product1.png"
            },
        ]
    },
    reducers: {
        addProduct: (state, action) => {
            const product = action.payload;
            state.products = [
                ...state.products,
                product
            ]
        },
        deleteProduct: (state, action) => {
            const id = action.payload;
            state.products = state.products.filter(x => {
                return x.id !== id
            })
        }
    },
})

export const { addProduct, deleteProduct } = productsSlice.actions

export default productsSlice.reducer



