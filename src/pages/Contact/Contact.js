import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useDoctors from "../../hooks/useDoctors";
import './Contact.css'


const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const { user } = useAuth();
    const [doctors] = useDoctors();


    return (
        <div className='pt-5 text-start fw-bold contact'>
            <Container>
                <div className='w-75 mx-auto'>
                    <h2 className='fw-bolder text-center my-5'>Make an Appointment</h2>
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
                            <option value="1">{doctors[0]?.name}</option>
                            <option value="1">{doctors[1]?.name}</option>
                            <option value="1">{doctors[2]?.name}</option>
                            <option value="1">{doctors[3]?.name}</option>
                            <option value="1">{doctors[4]?.name}</option>
                            <option value="1">{doctors[5]?.name}</option>
                            <option value="1">{doctors[6]?.name}</option>
                        </Form.Select>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Describe your problem</Form.Label>
                            <Form.Control as="textarea" rows={3}  {...register("problem")} />
                        </Form.Group>

                        <Button variant="dark" type="submit" className='my-4 w-100'>
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Contact;