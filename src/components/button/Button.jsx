import styles from './Button.module.scss'

const Button = ({children, className, ...props}) => {
    return (
        <>
            <button className={`${styles['button'] } px-[30px] py-[22px] ${className}`} {...props}>
                {children}
            </button>
        </>
    );
}

export default Button;
