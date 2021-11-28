

const Select = ({label, name, touched, error, handleBlur, handleChange, value, options, question}) => {
    return (
        <div>
            <label htmlFor={name} style={{cursor: "pointer"}}>{label}</label>
            <select id={name} style={{cursor: "pointer"}} onBlur={handleBlur} value={value} name={name} onChange={handleChange}>
                <option value="">{question}</option>
                {options.map(option => <option value={option.text} key={option.id}>{option.text}</option>)}
            </select>
            {touched && error && <span style={{color: "red", fontSize: "12px"}}>{error}</span>}
        </div>
    )
}

export default Select

