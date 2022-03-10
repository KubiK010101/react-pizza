import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/card";
import { Header } from "../components/header";
import { CardSlider } from "../components/slider";
import { deleteProduct } from "../redux/reducers/productsSlice";

const Home = () => {
    const products = useSelector((state) => state.products.products);
    console.log(products);
    return (
        <>
            <Header />
            {/* {products?.map(x => <>
                <Card key={x.id} product={x}></Card>
            </>)} */}

            <CardSlider products={products.filter(prod=>prod.category === 'hotDishes')} title={'Гарячі закуски'} />
            <CardSlider products={products.filter(prod=>prod.category === 'coldDishes')} title={'Холодні закуски'} />
            <CardSlider products={products.filter(prod=>prod.category === 'snacks')} title={'Снеки'} />
        </>
    );
};

export default Home;
