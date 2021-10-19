import React from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useDoctors from "../../../hooks/useDoctors";

const Subscribe = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const { user } = useAuth();
    const [doctors] = useDoctors();
    return (
        <div>
            <Container className='shadow-lg mb-5 contact text-start'>
                <Row className='d-md-flex align-items-center'>
                    <Col lg={6} sm={12}>
                        <h3 className='fw-bolder'>TRUE HEALTHCARE FOR YOUR FAMILY!</h3>
                        <p>Serve the community by improving the quality of life through better health.</p>
                        <p>Today the hospital is recognised as a world renowned institution, not only providing outstanding care and treatment, our goal is to deliver quality care in a respectful & compassionate manner. We strive to be the first and best choice for healthcare.</p>
                    </Col>
                    <Col lg={6} sm={12}>
                        <div className='mx-auto'>
                            <h2 className='fw-bolder text-center my-5'>Make an Appointment</h2>
                            <Form onSubmit={handleSubmit(onSubmit)} className='shadow-lg my-4 p-3 fw-bold'>
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Subscribe;