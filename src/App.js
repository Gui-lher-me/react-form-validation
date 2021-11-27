import * as yup from "yup"
import { useFormik } from "formik"

const App = () => <Form />
export default App


const options = [
  {id: 1, text: "Male"},
  {id: 2, text: "Female"},
]


const initialState = {
  name: "",
  email: "",
  gender: "",
}

const Form = () => {
  const {handleChange, handleSubmit, values, errors, touched, handleBlur} = useFormik({
    initialValues: initialState,

    onSubmit: ({name, email, gender}, { resetForm }) => {
      fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => {
        console.log(data)
        resetForm()
      })
    },

    validationSchema: yup.object({
      name: yup.string().min(3, "Mínimo 3 dígitos").required("Enter you name"),
      email: yup.string().min(8, "Mínimo 8 dígitos").email("Enter a valid email").required("Enter your email"),
      gender: yup.string().required("Enter your gender"),
    })
  })

  // const onChangeHandler = e => {
  //   setState(previousState => ({...previousState, [e.target.name]: e.target.value}))
  // }

  return (
    <form onSubmit={handleSubmit}>

      <fieldset>

        <legend>Login</legend>

        <div>
          <label htmlFor="name">
            Name: <input onBlur={handleBlur} onChange={handleChange} type="text" id="name" value={values.name} name="name" />
          </label>
          {touched.name && errors.name && <span style={{color: "red"}}>{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="email">
            Email: <input onBlur={handleBlur} onChange={handleChange} type="text" id="email" value={values.email} name="email" />
          </label>
          {touched.email && errors.email && <span style={{color: "red"}}>{errors.email}</span>}
        </div>

        <Select errors={errors} touched={touched} onBlur={handleBlur} value={values.gender} name="gender" onChange={handleChange} options={options}/>

        <div>
          <input type="submit" value="Send" />
        </div>

      </fieldset>

    </form>
  )
}


const Select = ({onChange, options, name, value, onBlur, touched, errors}) => {
  return (
    <div>
      <label>Gender</label>
      <select onBlur={onBlur} value={value} name={name} onChange={onChange}>
        <option value="">Choose your gender</option>
        {options.map(option => <option value={option.text} key={option.id}>{option.text}</option>)}
      </select>
      {touched.gender && errors.gender && <span style={{color: "red"}}>{errors.gender}</span>}
    </div>
  )
}

// checkbox
// radio

