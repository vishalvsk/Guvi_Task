import React from "react";
import { useFormik,Formik, Form, Field, ErrorMessage } from "formik";

const AdminDashboard = () => {
  const initialValues = {
    bookTitle: "",
    authorName: "",
    isbn: "",
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.bookTitle) {
      errors.bookTitle = "Book title is required";
    }

    if (!values.authorName) {
      errors.authorName = "Author name is required";
    }

    if (!values.isbn) {
      errors.isbn = "ISBN is required";
    } else if (!/^\d{3}-\d{10}$/.test(values.isbn)) {
      errors.isbn = "Invalid ISBN format (e.g., 123-1234567890)";
    }

    return errors;
  };

  const handleBookSubmit = (values) => {
    // Handle book submission here
    console.log("Book details:", values);
  };

  const handleAuthorSubmit = (values) => {
    // Handle author submission here
    console.log("Author details:", values);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <div>
        <h2>Add New Book</h2>
        <Formik
          initialValues={initialValues}
          validate={validateForm}
          onSubmit={handleBookSubmit}
        >
          {() => (
            <Form>
              <div>
                <label htmlFor="bookTitle">Book Title:</label>
                <Field type="text" id="bookTitle" name="bookTitle" />
                <ErrorMessage
                  name="bookTitle"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <label htmlFor="authorName">Author Name:</label>
                <Field type="text" id="authorName" name="authorName" />
                <ErrorMessage
                  name="authorName"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <label htmlFor="isbn">ISBN:</label>
                <Field type="text" id="isbn" name="isbn" />
                <ErrorMessage name="isbn" component="div" className="error" />
              </div>

              <button type="submit">Add Book</button>
            </Form>
          )}
        </Formik>
      </div>

      <div>
        <h2>Add New Author</h2>
        <Formik
          initialValues={initialValues}
          validate={validateForm}
          onSubmit={handleAuthorSubmit}
        >
          {() => (
            <Form>
              <div>
                <label htmlFor="authorName">Author Name:</label>
                <Field type="text" id="authorName" name="authorName" />
                <ErrorMessage
                  name="authorName"
                  component="div"
                  className="error"
                />
              </div>

              <button type="submit">Add Author</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AdminDashboard;
