import React, { Children } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../components/button";
import {
    addProduct,
    clearProduct,
    deleteProduct,
} from "../redux/reducers/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const { cartProducts, totalPrice, totalCount } = useSelector((x) => x.cart);
    const addToCart = (product) => {
        console.log("works");
        dispatch(addProduct(product));
    };
    const removeFromCart = (product) => {
        console.log("works");
        dispatch(deleteProduct(product.id));
    };
    const clearFromCart = (product) => {
        console.log("works");
        dispatch(clearProduct(product.id));
    };
    return (
        <>
            <div className="container text-white mx-auto">
                <Link to="/">
                    <p>к выбору блюда</p>
                </Link>
                <h3 className="cart__title">КОРЗИНА</h3>
                <p> В корзине {totalCount} товара </p>
                <div className="cart__card"></div>
                {cartProducts?.map(({ product, count }) => (
                    <>
                        <div className="flex items-center justify-between">
                            <div className="flex">
                                <img
                                    src={product.img}
                                    className="max-w-[117px] mr-[40px]"
                                />
                                <div>
                                    <h4 className="uppercase">{product.name}</h4>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <CardButton
                                    className="mx-[12px] "
                                    onClick={() => removeFromCart(product)}
                                >
                                    -
                                </CardButton>
                                <div className="text-white">{count}</div>
                                <CardButton
                                    className="mx-[12px] "
                                    onClick={() => addToCart(product)}
                                >
                                    +
                                </CardButton>
                            </div>
                            <div>${product.price * count}</div>
                            <div className="justify-self-end">
                                <CardButton
                                    className=""
                                    onClick={() => clearFromCart(product)}
                                >
                                    x
                                </CardButton>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
};

const CardButton = ({ className, children, ...props }) => (
    <>
        <button
            className={`w-[38px] h-[38px] bg-[#72A479] rounded-full inline-flex justify-center items-center font-bold ${className}`}
            {...props}
        >
            <span className="align-middle text-center">{children}</span>
        </button>
    </>
);

export default Cart;
