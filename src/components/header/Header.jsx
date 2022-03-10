import React from "react";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <>
      <div className={`${styles["header"]}`}>
        <div className="container">
          <div className="flex">
            <div className="flex-col">
              <h1 className={`${styles["header__title"]}`}>
                Доставка ВКУСНЕЙШИХ <br /> БЛЮд за 60 минут
              </h1>
              <p className={`${styles["header__sub-title"]}`}>
                Ещё не пробовал?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
