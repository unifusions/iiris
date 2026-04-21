import React, { useEffect, useState } from 'react';


import Guest from '@/Layouts/Guest';

import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/react';

import BrandLogo from '@/Layouts/BrandLogo';
import { EyeIcon } from '@heroicons/react/24/outline';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/Components/ui/field';
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';

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
            <div className="flex flex-col gap-6 bg-white">
                <Card className="">
                    <CardHeader className="">

                        <BrandLogo className="h-10 mx-auto"/>


                        <CardTitle className="mt-3">Please sign in  </CardTitle>
                        <CardDescription>
                            Enter your email below to login to your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent >

                        <form onSubmit={submit}>

                            <FieldGroup> <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    type="text"
                                    name="email"
                                    value={data.email}
                                    placeholder="Enter your email"

                                    onChange={onHandleChange}
                                />
                            </Field>

                                <Field>
                                    <div className="flex items-center">
                                        <FieldLabel htmlFor="password">Password</FieldLabel>
                                        <a
                                            href="/forgot-password"
                                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                        >
                                            Forgot your password?
                                        </a>
                                    </div>

                                    <div className='relative'>
                                        <Input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            value={data.password}
                                            className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"

                                            onChange={onHandleChange}
                                        />
                                        <button
                                            type="button"
                                            id="password-toggle"
                                            class="absolute inset-y-0 top-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                                            aria-label="Toggle password visibility"
                                            onClick={togglePasswordVisibility}
                                        >
                                            <EyeIcon className='text-muted' width={20} />


                                        </button>
                                    </div>
                                </Field>


                                <Field>
                                    <Button type="submit" variant='default' processing={processing}>Login</Button>


                                </Field>

                            </FieldGroup>





                            <ValidationErrors errors={errors} />

                            <p class="mt-2 mb-3 text-body-secondary text-center">© 2022– {(new Date().getFullYear())}. DataInsights.</p>


                        </form>
                        {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
                    </CardContent>
                </Card>
            </div>






        </Guest>
    );
}
