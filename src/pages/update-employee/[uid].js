import Head from 'next/head';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material';
import createApiInstance from '../../utils/api';
import { useState, useEffect } from 'react';

const UpdateEmployeePage = () => {
  const router = useRouter();
  const instance = createApiInstance();

  const [employeeData, setEmployeeData] = useState(null);
  const [departments, setDepartments] = useState([]);
  const { uid } = router.query;

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      password: '',
      phoneNumber: '',
      email: '',
      department: '',
      submit: null,
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

        const updatedEmployeeData = {
          email,
          firstName,
          lastName,
          phoneNumber,
          departmentUid: department,
          password,
        };
        console.log(updatedEmployeeData);
        await instance.patch(`/api/v1/employees/${uid}`, updatedEmployeeData);
        // Redirect to the employee list page or wherever you want to navigate after creation
        router.push('/employees');
      } catch (err) {
        console.error('Error updating employee:', err);
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: 'Error updating employee.' });
        helpers.setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await instance.get(`/api/v1/employees/${uid}`);
        setEmployeeData(response.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    const fetchDepartments = async () => {
      try {
        const response = await instance.get('/api/v1/services/me/departments');
        setDepartments(response.data.departments);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    // Fetch employee data and departments when the component mounts
    fetchEmployeeData();
    fetchDepartments();
  }, [uid]);

  useEffect(() => {
    // Update form values when employee data changes
    if (employeeData) {
      formik.setValues({
        firstName: employeeData.firstName,
        lastName: employeeData.lastName,
        password: '', // Set password to empty, or use a placeholder value
        phoneNumber: employeeData.phoneNumber,
        email: employeeData.email,
        department: employeeData.departmentUid,
        submit: null,
      });
    }
  }, [employeeData, formik]);

  if (!employeeData) {
    // You might want to show a loading spinner or an error message
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Update Employee</title>
      </Head>
      <Box
        sx={{
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%',
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">Update Employee</Typography>
            </Stack>
            <form noValidate onSubmit={formik.handleSubmit}>
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
                <Typography color="error" sx={{ mt: 3 }} variant="body2">
                  {formik.errors.submit}
                </Typography>
              )}
              <Button fullWidth size="large" sx={{ mt: 3 }} type="submit" variant="contained">
                Update Employee
              </Button>
            </form>
          </div>
        </Box>
      </Box>
    </>
  );
};

UpdateEmployeePage.getLayout = (page) =>
  <DashboardLayout>
    {page}
  </DashboardLayout>;

export default UpdateEmployeePage;