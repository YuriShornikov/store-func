import classes from './ShopItemFunc.module.css';
import PropTypes from 'prop-types';

export const ShopItemFunc = (props) => {

    const { brand, title, description, descriptionFull, price, currency } = props.info;

    const formattedPrice = `${currency}${price.toFixed(2)}`;
  return (
    <div className={classes["main-content"]}>
        <h2>{brand}</h2>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div className={classes["description"]}>
            {descriptionFull}
        </div>
        <div className={classes["highlight-window mobile"]}>
            <div className={classes["highlight-overlay"]}></div>
        </div>
        <div className={classes["divider"]}></div>
        <div className={classes["purchase-info"]}>
            <div className={classes["purchase-info"]}>{formattedPrice}
            </div>
            <button>Добавить в корзину</button>
        </div>
    </div>
  )
}

// Валидация пропсов
ShopItemFunc.propTypes = {
    info: PropTypes.shape({
      brand: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      descriptionFull: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  };