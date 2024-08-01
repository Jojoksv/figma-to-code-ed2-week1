import PropTypes from 'prop-types';

const Card = ({ imgSrc, title, price }) => (
    <div className="card">
        <img className="card-child" alt="" src={imgSrc} />
        <div className="card-content">
            <b className="card-title">{title}</b>
            <div className="card-price-wrapper">
                <img className="ethereum-icon" alt="" src="./public/ethereumellipse.svg" />
                <b className="card-price">{price}</b>
            </div>
        </div>
        <div className="place-bid-wrapper">
            <div className="place-bid">Place a Bid</div>
        </div>
    </div>
);

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
