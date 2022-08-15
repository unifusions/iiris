import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { Card } from 'react-bootstrap';
import BrandLogo from '@/Layouts/BrandLogo';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.update'));
    };

    return (
        <Guest>
            <Head title="Reset Password" />

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <Card className='rounded-5 shadow-sm'>
                    <Card.Body>
                        <Link href="/" >
                            <BrandLogo />
                        </Link>
                        <div className="form-floating my-3">
                           

                            <Input
                                type="password"
                                name="password"
                                value={data.password}
                                className="form-control"
                                autoComplete="new-password"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                             <Label forInput="password" value="Password" />
                        </div>

                        <div className="form-floating my-3">

                      

                            <Input
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="form-control"
                                autoComplete="new-password"
                                handleChange={onHandleChange}
                            />
                              <Label forInput="password_confirmation" value="Confirm Password" />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Button className="btn btn-primary w-100 mt-3" processing={processing}>
                                Reset Password
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
                {/* <div> */}
                {/* <Label forInput="email" value="Email" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                    /> */}
                {/* </div> */}


            </form>
        </Guest>
    );
}
