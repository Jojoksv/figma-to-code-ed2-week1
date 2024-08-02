import PropTypes from 'prop-types';

const Category = ({ name }) => (
    <div className="category-wrapper">
        <div to="#" className={`${name === "All categories" ? "active" : null} category-name`}>{name}</div>
    </div>
);

Category.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Category;
