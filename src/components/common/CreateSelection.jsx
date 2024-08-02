import PropTypes from 'prop-types'

function CreateSelection({step}) {
    return (
        <div className="frame-parent2">
            <div className="wallet-02-wrapper">
                <img className="wallet-02-icon" alt="" src={step.icon} />
            </div>
            <b className="b">{step.title}</b>
            <div className="lorem-ipsum-dolor">{step.description}</div>
        </div>
    )
}
CreateSelection.propTypes = {
    step: PropTypes.object
}
export default CreateSelection