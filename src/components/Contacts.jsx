import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import * as Yup from 'yup';

function Contacts() {
    const initialValues = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        phoneNumber: Yup.string().required('Phone Number is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
    });

    const [submittedData, setSubmittedData] = useState([]);

    const onSubmit = (values, { resetForm }) => {
        console.log('Form data', values);
        setSubmittedData(prevData => [...prevData, values]);
        resetForm();
    };

    const handleDelete = index => {
        setSubmittedData(prevData => prevData.filter((_, i) => i !== index));
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-6">Register</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {formik => (
                    <Form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                First Name
                            </label>
                            <Field
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                Last Name
                            </label>
                            <Field
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                                Phone Number
                            </label>
                            <Field
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                            Register
                        </button>
                    </Form>
                )}
            </Formik>

            {submittedData.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-xl font-bold mb-2">Submitted Data</h3>
                    {submittedData.map((data, index) => (
                        <div key={index} className="mb-4">
                            <p><strong>First Name:</strong> {data.firstName}</p>
                            <p><strong>Last Name:</strong> {data.lastName}</p>
                            <p><strong>Phone Number:</strong> {data.phoneNumber}</p>
                            <p><strong>Email:</strong> {data.email}</p>
                            <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2">Delete</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Contacts;
