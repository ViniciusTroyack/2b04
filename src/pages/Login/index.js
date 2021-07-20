import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios'
import { useState } from 'react';
import ErroMsg from '../../component/ErroMsg';
import SucessMsg from '../../component/SucecssMsg';
import { CardLogin } from './styles'

const Login = () => {

    const [sucess, setSucess] = useState(false)
    const [erro, setErro] = useState(false)

    const schema = yup.object().shape({
        username: yup.string().required("Usuario obrigatório"),
        password: yup.string().required("Senha obrigatório")
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmitFunction = (data) => {
        axios.post('https://kenzieshop.herokuapp.com/sessions/', data)
            .then((response) => {
                console.log(response)
                setErro(false)
                setSucess(true)
            }).catch((err) => {
                console.log(err)
                setSucess(false)
                setErro(true)
            })
    }

    return (
        <CardLogin>
            <h3>Login Kenzie</h3>
            <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>

                <input placeholder="Usuario" {...register("username")} />
                {errors.username?.message}

                <input placeholder="Senha" type='password' {...register("password")} />
                {errors.password?.message}

                <button type="submit">Enviar!</button>
            </form>
            {sucess &&
                <SucessMsg />}
            {erro &&
                <ErroMsg />}
        </CardLogin>
    );

}

export default Login;