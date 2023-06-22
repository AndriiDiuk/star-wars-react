
import cn from 'classnames';
import icon from './img/close.svg'
import '../index.css';
import styles from './UiInput.module.css';

const UiInput = ({ value, handleInputChange, placeholder, classes }) => {

	return (
		<div className={cn(styles.wrapper__input, classes)}>
			<input
				type="text"
				value={value}
				onChange={(e) => handleInputChange(e.target.value)}
				placeholder={placeholder}
				className={styles.input}
			/>
			<img
				onClick={() => value && handleInputChange('')}
				src={icon}
				alt='Clear'
				className={cn(styles.clear, !value && styles.claer__disabled)} />
		</div>
	)
}

export default UiInput;
