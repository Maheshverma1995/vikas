import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // You can handle the form submission here
    console.log(values);
    // Reset the form after submission
    resetForm();
    setSubmitting(false);
  };

  return (
    <div className='container'>
        <div className="contact-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form id="contact-form">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-box user-icon mb-30">
                  <Field type="text" name="name" placeholder="Your Name" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-box email-icon mb-30">
                  <Field type="text" name="email" placeholder="Your Email" />
                  <ErrorMessage name="email" component="div" className="error" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-box phone-icon mb-30">
                  <Field type="text" name="phone" placeholder="Your Phone" />
                  <ErrorMessage name="phone" component="div" className="error" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-box subject-icon mb-30">
                  <Field type="text" name="subject" placeholder="Your Subject" />
                  <ErrorMessage name="subject" component="div" className="error" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-box message-icon mb-30">
                  <Field as="textarea" name="message" placeholder="Your Message" />
                  <ErrorMessage name="message" component="div" className="error" />
                </div>
                <div className="contact-btn text-center">
                  <button
                    className=" btn-icon ml-0"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : ' get action'}
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <p className="ajax-response text-center"></p>
    </div>
    </div>
  );
};

export default ContactForm;
