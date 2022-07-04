import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
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

        post(route('login'));
    };

    return (
        <Guest>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <Card className='rounded-5 shadow-sm'>
                    <Card.Body>

                        <Link href="/" >
                            {/* <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" /> */}
                            <BrandLogo />
                        </Link>
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
                    </Card.Body>
                </Card>



                {/* <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div> */}

                {/* <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Forgot your password?
                        </Link>
                    )}

                 
                </div> */}
            </form>
        </Guest>
    );
}
