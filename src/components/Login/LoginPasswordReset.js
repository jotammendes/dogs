import React from 'react';
import { useNavigate } from 'react-router';
import { PASSWORD_RESET } from '../../Api';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginPasswordReset = () => {
    const [ login, setLogin ] = React.useState('');
    const [ key, setKey ] = React.useState('');
    const password = useForm('');
    const navigate = useNavigate();
    const {data, loading, error, request} = useFetch();

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const login = params.get('login');
        const key = params.get('key');

        if(login) setLogin(login);
        if(key) setKey(key);
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();

        if(password.validate()) {
            const { url, options } = PASSWORD_RESET({
                login: login,
                key: key,
                password: password.value
            });

            const { response } = await request(url, options);
            if(response.ok)
                navigate('/login');
        }
    }

    return (
        <div>
            <Head title="Resete a senha" />

            <h1 className="title">Reset a Senha</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Nova Senha" type="password" {...password} />
                {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
            </form>
            <Error error={error} />
        </div>
    )
}

export default LoginPasswordReset;
