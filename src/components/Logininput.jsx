import styles from './Logininput.module.css';

function LoginButton({ icons, iconsspan, icon, type, name, placeholder, value, onChange, ...props }) {

    return (
        <div className={styles.div}>
            <link rel="stylesheet" href={icons} />
            <span class={iconsspan}>
                {icon}
            </span>
            <input
                className={styles.input}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...props}
            />
        </div>
    )
}

export default LoginButton