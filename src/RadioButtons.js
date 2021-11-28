

const RadioButtons = ({name, touched, error, handleChange, value, options, question}) => {
    return (
        <div>
            <label>{question}</label>
            {options.map(({text, id}) => (
                <div key={id}>
                    <input
                        style={{cursor: "pointer"}}
                        name={name}
                        type="radio"
                        id={text}
                        value={text}
                        checked={value === text}
                        onChange={handleChange}
                    />
                    <label style={{cursor: "pointer"}} htmlFor={text}>{text}</label>
                </div>
            ))}
            {touched && error && <span style={{color: "red", fontSize: "12px"}}>{error}</span>}
        </div> 
    )
}

export default RadioButtons

