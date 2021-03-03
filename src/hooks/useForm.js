import {useState} from 'react'

const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues)
    const onChange = (event) => {
        const {value, name} = event.target;
        // const value = event.target.value
        // const name = event.target.name
        setForm({ ...form, [name]: value})
        console.log(form)
    }
    return[form, onChange]
}

export default useForm;