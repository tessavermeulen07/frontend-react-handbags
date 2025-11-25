// Button.jsx

function Button({ textOnClick, textOnButton, disabled }) {

    function handleClick(showText) {
        console.log(showText);
    }

    return (
        <button
            type="button"
            onClick={() => handleClick(textOnClick)}
            disabled={disabled}
        >
            {textOnButton}
        </button>
    )
}

export default Button;