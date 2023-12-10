import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm, usePage } from "@inertiajs/inertia-react";
import FormInput from "../Shared/FormInput";
import { Card, Col, Row } from "react-bootstrap";
import Select from "react-select";
import FormButton from "../Shared/FormButton";
import PasswordResetModal from "./PasswordResetModal";

export default function Edit() {

    const { auth,
        roles, errors, userRoles, facilities, user } = usePage().props;
    const { data, setData, patch, processing } = useForm({
        name: user.name ? user.name : '',
        email: user.email ? user.email : '',
        role_id: user.role_id ? user.role_id : '',
        facility_id: user.facility_id ? user.facility_id : ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        return patch(route('users.update', {user:user}));
    }

    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit User</h2>

                </div>

            }
            role={roles}
        >
            
            <Head title="Edit User" />
            <Card className="card shadow-sm rounded-5">
                <Card.Body>
                    <form onSubmit={handleSubmit}>
                        <FormInput
                            labelText='Full Name'
                            handleChange={e => setData('name', e.target.value)}
                            error={data.name}
                            value={data.name}
                        />

                        <FormInput
                            type="email"
                            labelText='Email '
                            handleChange={e => setData('email', e.target.value)}
                            error={data.email}
                            value={data.email}
                        />



                        <Row className="mb-3">
                            <Col md={3}>
                                <span className="text-secondary">User Role</span>
                            </Col>
                            <Col md={6}>
                                <Select  options={userRoles} defaultValue={
                                        userRoles.filter(option => option.value === data.role_id)
                                       
                                        } onChange={(value) => setData('role_id', value.value)} />
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={3}>
                                <span className="text-secondary">Facility</span>
                            </Col>
                            <Col md={6}>
                                <Select options={facilities} defaultValue={
                                        facilities.filter(option => option.value === data.facility_id)
                                       
                                        } onChange={(value) => setData('facility_id', value.value)} />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={3}></Col>
                            <Col md={6}> <FormButton processing={processing} labelText='Save User' type="submit" mode="primary btn-sm me-2" className="" /><PasswordResetModal user={user} /></Col>
                            <Col md={3}></Col>
                        </Row>

                       


                    </form>
                </Card.Body>
            </Card>


        </Authenticated>
    )
}