import React from 'react';

const types = {
    email: {
        regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
        message: 'Preencha um email válido',
    },
    password: {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        message: "A senha deve ter ao menos um dígito, um caractere minúsculo, um caractere maiúsculo e pelo menos 8 caracteres.",
    }
}

const useForm = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);

    function validate(value) {
        if(type === false) return true;
        if(value.length === 0) {
            setError('Preencha um valor.')
            return false
        } else if(types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function onChange({target}) {
        if(error) validate(target.value);
        setValue(target.value);
    }

    return {
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
    }
}

export default useForm;