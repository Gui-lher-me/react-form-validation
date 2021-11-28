

const InputText = ({label, name, touched, error, handleBlur, handleChange, value}) => {
    return (
        <div>
            <label style={{cursor: "pointer"}} htmlFor={name}>{label}</label>
            <input onBlur={handleBlur} onChange={handleChange} type="text" id={name} value={value} name={name} />
            {touched && error && <span style={{color: "red", fontSize: "12px"}}>{error}</span>}
        </div>
    )
}

export default InputText

