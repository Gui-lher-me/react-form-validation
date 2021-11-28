

const Checkbox = ({name, touched, error, handleChange, handleBlur, values, options, question}) => {
    return (
        <div>
            <label>{question}</label>
            {options.map(({text, id}) => (
                <div key={id}>
                    <input
                        style={{cursor: "pointer"}}
                        name={name}
                        type="checkbox"
                        id={text}
                        value={text}
                        onBlur={handleBlur}
                        checked={values.includes(text)}
                        onChange={handleChange}
                    />
                    <label style={{cursor: "pointer"}} htmlFor={text}>{text}</label>
                </div>
            ))}
            {touched && error && <span style={{color: "red", fontSize: "12px"}}>{error}</span>}
        </div> 
    )
}

export default Checkbox

