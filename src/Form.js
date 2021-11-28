import * as yup from "yup"

import { useFormik } from "formik"

import InputText from "./InputText"
import Select from "./Select"
import RadioButtons from "./RadioButtons"
import Checkbox from "./Checkbox"

const initialState = {
    name: "",
    email: "",
    gender: "",
    color: "",
    fruits: [],
}

const Form = () => {
    const {handleChange, handleSubmit, values, errors, touched, handleBlur} = useFormik({
        initialValues: initialState,

        onSubmit: (values, { resetForm }) => formSubmittedHandler(resetForm, values),

        validationSchema: yup.object({
            name: yup.string().min(3, "Mínimo 3 dígitos").required("Enter you name"),
            email: yup.string().min(8, "Mínimo 8 dígitos").email("Enter a valid email").required("Enter your email"),
            gender: yup.string().required("Enter your gender"),
            color: yup.string().required("Enter your favorite color"),
            fruits: yup.array().min(1, "At least 1 item").required("Enter your favorite fruits"),
        })
    })

    // const onChangeHandler = e => {
    //     setState(previousState => ({...previousState, [e.target.name]: e.target.value}))
    // }

    const formSubmittedHandler = (resetForm, {name, email, gender, color, fruit}) => {
        console.log({name, email, gender, color, fruit})
        resetForm()
    }

    return (
        <form onSubmit={handleSubmit}>

            <fieldset>

                <legend>Login</legend>

                <InputText label="Name" name="name" touched={touched.name} error={errors.name} handleBlur={handleBlur} handleChange={handleChange} value={values.name} />
                <InputText label="Email" name="email" touched={touched.email} error={errors.email} handleBlur={handleBlur} handleChange={handleChange} value={values.email} />

                <hr/>

                <Select label="Gender" name="gender" touched={touched.gender} error={errors.gender} handleBlur={handleBlur} handleChange={handleChange} value={values.gender} options={[
                    {id: 1, text: "male"},
                    {id: 2, text: "female"},
                ]} question="Choose your gender" />

                <hr/>

                <RadioButtons name="color" touched={touched.color} error={errors.color} handleChange={handleChange} value={values.color} options={[
                    {id: 1, text: "blue"},
                    {id: 2, text: "green"},
                ]} question="Choose your favorite color" />

                <hr/>

                <Checkbox name="fruits" touched={touched.fruits} error={errors.fruits} handleBlur={handleBlur} handleChange={handleChange} values={values.fruits} options={[
                    {id: 1, text: "banana"},
                    {id: 2, text: "mango"},
                ]} question="Choose your favorite fruits" />

                <div>
                    <input style={{cursor: "pointer"}} type="submit" value="Send" />
                </div>

            </fieldset>

        </form>
    )
}

export default Form

