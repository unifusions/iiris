import React, { useEffect, useState } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/react';
 
import BrandLogo from '@/Layouts/BrandLogo';
import { EyeIcon } from '@heroicons/react/24/outline';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
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

        post(route('login', {
            onSuccess: () => {
                // This performs a "hard" refresh by moving the browser to the new URL
                // window.location.href = '/dashboard';
            }
        },));
    };

    return (
        <Guest>
            <Head title="Log in" />
<Card></Card>
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}


            <div className="form-signin w-100 m-auto">
                <form onSubmit={submit}>
                    <BrandLogo />

                    <h1 class="h3 mt-3 mb-3 fw-normal">Please sign in</h1>

                    <div className="space-y-2  my-3">

  <Label forInput="email" value="Email" />
                        <Input
                            type="text"
                            name="email"
                            value={data.email}
                            className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            autoComplete="username"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                      
                    </div>

                    <div className="relative space-y-2">

  <Label forInput="password" value="Password" />
 
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={data.password}
                            className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          
                            handleChange={onHandleChange}
                        />
                        <button
                            type="button"
                            id="password-toggle"
                            class="absolute inset-y-0 top-5 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                            aria-label="Toggle password visibility"
                            onClick={  togglePasswordVisibility}
                        >
                            <EyeIcon className='text-muted' width={20} />
                        </button>
                      
                    </div>
                    <Button className="btn btn-primary w-100 mt-3" processing={processing}>
                        Log in
                    </Button>
                    <ValidationErrors errors={errors} />

                    <p class="mt-5 mb-3 text-body-secondary">© 2022–2026. DataInsights.</p>


                </form>
            </div>

        </Guest>
    );
}
