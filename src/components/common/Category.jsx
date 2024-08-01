import PropTypes from 'prop-types';

const Category = ({ name }) => (
    <div className="category-wrapper">
        <div className="category-name">{name}</div>
    </div>
);

Category.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Category;
