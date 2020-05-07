import axios from 'axios'
import Swal from 'sweetalert2'

const SERVER_URL = 'http://localhost:3001'


export const Login = async (email, password) => {
    try {
        const { data } = await axios({
            method: 'POST',
            url: `${SERVER_URL}/user/login`,
            data: { email, password }
        })
        Swal.fire({
            position:'top-right',
            title: `Welcome admin ${data.name}`,
            showConfirmButton: false,
            timer: 1500
        })
        return data
    } catch (err) {
        Swal.fire({
            icon: 'warning',
            title: err.response.data
        })
    }
}

export const Register = async (name, email, password, superPassword) => {
    try {
        if (superPassword !== 'warunglokal') throw ('Invalid super password')
        const { data } = await axios({
            method: 'POST',
            url: `${SERVER_URL}/user/register`,
            data: {
                name,
                email,
                password,
                admin: true
            }
        })
        return data
    } catch (err) {
        console.log(err.response)
        if (err === 'Invalid super password') {
            Swal.fire({icon:'warning', title:'Invalid super password'})
        } else if (err.response.data){
            Swal.fire({icon:'warning', title: err.response.data})
        } 
    }
}