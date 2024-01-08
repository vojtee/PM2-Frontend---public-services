import Head from 'next/head';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material';
import createApiInstance from '../utils/api';
import { useState, useEffect } from 'react'

const CreateEmployeePage = () => {
    const router = useRouter();
    const auth = useAuth();
    const instance = createApiInstance();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            password: '',
            phoneNumber: '',
            email: '',
            department: '',
            submit: null
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(255).required('Name is required'),
            lastName: Yup.string().max(255).required('Surname is required'),
            password: Yup.string().max(255).required('Password is required'),
            phoneNumber: Yup.string().max(20).required('Phone Number is required'),
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            department: Yup.string().max(255).required('Department is required'),
        }),
        onSubmit: async (values, helpers) => {
            try {
                console.log(values);
                const { firstName, lastName, password, phoneNumber, email, department } = values;

                const employeeData = {
                    email,
                    firstName,
                    lastName,
                    phoneNumber,
                    departmentUid: department,
                    password,
                };
                console.log(employeeData);
                await instance.post('/api/v1/employees', employeeData);
                // Redirect to the employee list page or wherever you want to navigate after creation
                router.push('/employees');
            } catch (err) {
                console.error('Error creating employee:', err);
                helpers.setStatus({ success: false });
                helpers.setErrors({ submit: 'Error creating employee.' });
                helpers.setSubmitting(false);

            }
        }
    });

    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        // Fetch departments from the API endpoint
        const fetchDepartments = async () => {
            try {
                const response = await instance.get('/api/v1/services/me/departments');
                setDepartments(response.data.departments);
            } catch (error) {
                console.error('Error fetching departments:', error);
            }
        };

        // Fetch departments only when the component mounts
        fetchDepartments();
    }, []);

    return (
          <>
              <Head>
                  <title>Create Employee</title>
              </Head>
              <Box
                  sx={{
                      flex: '1 1 auto',
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'center'
                  }}
              >
                  <Box
                      sx={{
                          maxWidth: 550,
                          px: 3,
                          py: '100px',
                          width: '100%'
                      }}
                  >
                      <div>
                          <Stack
                              spacing={1}
                              sx={{ mb: 3 }}
                          >
                              <Typography variant="h4">Create Employee</Typography>
                          </Stack>
                          <form
                              noValidate
                              onSubmit={formik.handleSubmit}
                          >
                              <Stack spacing={3}>
                                  <TextField
                                      error={!!(formik.touched.firstName && formik.errors.firstName)}
                                      fullWidth
                                      helperText={formik.touched.firstName && formik.errors.firstName}
                                      label="Name"
                                      name="firstName"
                                      onBlur={formik.handleBlur}
                                      onChange={formik.handleChange}
                                      value={formik.values.firstName}
                                  />
                                  <TextField
                                      error={!!(formik.touched.lastName && formik.errors.lastName)}
                                      fullWidth
                                      helperText={formik.touched.lastName && formik.errors.lastName}
                                      label="Surname"
                                      name="lastName"
                                      onBlur={formik.handleBlur}
                                      onChange={formik.handleChange}
                                      value={formik.values.lastName}
                                  />
                                  <TextField
                                      error={!!(formik.touched.password && formik.errors.password)}
                                      fullWidth
                                      helperText={formik.touched.password && formik.errors.password}
                                      label="Password"
                                      name="password"
                                      onBlur={formik.handleBlur}
                                      onChange={formik.handleChange}
                                      type="password"
                                      value={formik.values.password}
                                  />
                                  <TextField
                                      error={!!(formik.touched.phoneNumber && formik.errors.phoneNumber)}
                                      fullWidth
                                      helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                                      label="Phone Number"
                                      name="phoneNumber"
                                      onBlur={formik.handleBlur}
                                      onChange={formik.handleChange}
                                      value={formik.values.phoneNumber}
                                  />
                                  <TextField
                                      error={!!(formik.touched.email && formik.errors.email)}
                                      fullWidth
                                      helperText={formik.touched.email && formik.errors.email}
                                      label="Email Address"
                                      name="email"
                                      onBlur={formik.handleBlur}
                                      onChange={formik.handleChange}
                                      type="email"
                                      value={formik.values.email}
                                  />
                                  <FormControl fullWidth>
                                      <InputLabel id="department-label">Department</InputLabel>
                                      <Select
                                          labelId="department-label"
                                          id="department"
                                          name="department"
                                          value={formik.values.department}
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                          error={!!(formik.touched.department && formik.errors.department)}
                                          label="Department"
                                      >
                                          <MenuItem value="" disabled>
                                              Select a Department
                                          </MenuItem>
                                          {/*vyvorit dane itemy z public service moznosti*/}
                                          {departments.map((department) => (
                                              <MenuItem key={department.uid} value={department.uid}>
                                                  {department.name}
                                              </MenuItem>
                                          ))}
                                      </Select>
                                      {formik.touched.department && formik.errors.department && (
                                          <FormHelperText error>{formik.errors.department}</FormHelperText>
                                      )}
                                  </FormControl>
                              </Stack>
                              {formik.errors.submit && (
                                  <Typography
                                      color="error"
                                      sx={{ mt: 3 }}
                                      variant="body2"
                                  >
                                      {formik.errors.submit}
                                  </Typography>
                              )}
                              <Button
                                  fullWidth
                                  size="large"
                                  sx={{ mt: 3 }}
                                  type="submit"
                                  variant="contained"
                              >
                                  Create Employee
                              </Button>
                          </form>
                      </div>
                  </Box>
              </Box>
          </>
      );
};

CreateEmployeePage.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default CreateEmployeePage;
