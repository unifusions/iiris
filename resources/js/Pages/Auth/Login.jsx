import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/react';
import { Card } from 'react-bootstrap';
import BrandLogo from '@/Layouts/BrandLogo';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login',  {onSuccess: () => {
            // This performs a "hard" refresh by moving the browser to the new URL
            // window.location.href = '/dashboard';
        }},));
    };

    return (
        <Guest>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

           
<div className="form-signin w-100 m-auto">
    <form onSubmit={submit}>
        <BrandLogo />
              
 <h1 class="h3 mt-3 mb-3 fw-normal">Please sign in</h1>
                       
                        <div className="form-floating my-3">


                            <Input
                                type="text"
                                name="email"
                                value={data.email}
                                className="form-control"
                                autoComplete="username"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                            <Label forInput="email" value="Email" />
                        </div>

                        <div className="form-floating">
                          

                            <Input
                                type="password"
                                name="password"
                                value={data.password}
                                className="form-control"
                                autoComplete="current-password"
                                handleChange={onHandleChange}
                            />
                              <Label forInput="password" value="Password" />
                        </div>
                        <Button className="btn btn-primary w-100 mt-3"  processing={processing}>
                        Log in
                    </Button>
                    <ValidationErrors errors={errors} />
                     
<p class="mt-5 mb-3 text-body-secondary">© 2022–2025. DataInsight.</p>

              
            </form>
</div>
        
        </Guest>
    );
}
