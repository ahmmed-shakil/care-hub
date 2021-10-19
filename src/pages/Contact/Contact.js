import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useDoctors from "../../hooks/useDoctors";


const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const { user } = useAuth();
    const [doctors] = useDoctors();


    return (
        <div className='pt-5 text-start fw-bold'>
            <Container>
                <h2 className='login-header my-3'>Make an Appointment</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control {...register("firstName")} type="name" defaultValue={user.displayName ? user.displayName : 'Your Name'} placeholder='Enter name' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" defaultValue={user?.email} placeholder='Enter email' {...register("email")} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Select date</Form.Label>
                        <Form.Control type="date" placeholder='Enter date' {...register("date")} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Select time</Form.Label>
                        <Form.Control type="time" placeholder='Enter time' {...register("time")} />
                    </Form.Group>

                    <p>Gender</p>
                    <Form.Select aria-label="Default select example" className='mb-3' {...register("gender")}>
                        <option>Select your gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </Form.Select>

                    <p>Doctor</p>
                    <Form.Select aria-label="Default select example" className='mb-3' {...register("doctor")}>
                        <option>Select your doctor</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Describe your problem</Form.Label>
                        <Form.Control as="textarea" rows={3}  {...register("problem")} />
                    </Form.Group>

                    <Button variant="primary" type="submit" className='my-4'>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Contact;