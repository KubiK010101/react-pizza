import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const CartButton = ({ children, ...props }) => {
    const { cartProducts } = useSelector((state) => state.cart);
    let totalCount = 0;
    cartProducts.forEach(x => {
        totalCount += x.count;
    });
    console.log(totalCount);
    return (
        <>
            <Link to="/cart" className={`${styles["button"]} inline-flex`} {...props}>
                <div
                    className={`${styles["button__text"]}  px-[24px] py-[18px]`}
                >
                    {children}
                </div>
                {totalCount === 0 ? null : 

                    <div
                    className={`${styles["button__circle"]} m-[14px] w-[24px] h-[24px] bg-white rounded-full text-black flex`}
                    >
                    <div className="my-auto mx-auto">

                        {totalCount}
                    </div>
                </div>
                }
            </Link>
        </>
    );
};

export default CartButton;
