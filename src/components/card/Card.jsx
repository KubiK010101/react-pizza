import React from "react";
import { Button } from "../button";
import styles from "./Card.module.scss";
import phone from "../../img/phone.svg";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "../../redux/reducers/cartSlice";

const Card = ({ product }) => {
    const dispatch = useDispatch();
    const { cartProducts } = useSelector((state) => state.cart);
    const cartProduct =
        cartProducts?.filter((x) => x.product.id === product.id)[0] ?? null;
    console.log(cartProducts);
    const addToCart = () => {
        console.log("works");
        dispatch(addProduct(product));
    };
    const removeFromCart = () => {
        console.log("works");
        dispatch(deleteProduct(product.id));
    };

    return (
        <div className={`${styles["card"]} relative`}>
            {cartProduct ? (
                <div className="rounded-full text-white text-xl font-bold w-[50px] h-[50px] bg-[#79B382] absolute top-[-12px] right-[-12px] flex justify-center items-center">
                    {cartProduct.count}
                </div>
            ) : null}
            <div className={`${styles["card__img"]}`}>
                <img
                    src={product.img}
                    alt=""
                    className="h-[200px] object-cover w-[100%]"
                />
            </div>
            <div className="p-[16px]">
                <div className="flex justify-between">
                    <h3 className={`${styles["card__title"]}`}>
                        {product.name}
                    </h3>
                    <span className={`${styles["card__weight"]}`}>
                        {product.weight}
                    </span>
                </div>
                <p className={`${styles["card__description"]}`}>
                    {product.description}
                </p>
                <div>
                    <div className="flex justify-between items-center">
                        {cartProduct?.count && cartProduct.count > 0 ? (
                            <>
                                <Button onClick={() => removeFromCart()}>
                                    -
                                </Button>
                                <div className="text-white">
                                    ${product.price * cartProduct.count}
                                </div>
                                <Button onClick={() => addToCart()}>+</Button>
                            </>
                        ) : (
                            <>
                                <p className={`${styles["card__price"]}`}>
                                    ${product.price}
                                </p>
                                <Button onClick={() => addToCart()}>
                                    В корзину
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
