import Head from 'next/head';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { FormControl, InputLabel, FormHelperText, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import createApiInstance from "../utils/api";
import {useEffect, useState} from "react";


const CreateDepartmentPage = () => {
    const router = useRouter();
    const auth = useAuth();
    const instance = createApiInstance();

    const formik = useFormik({
        initialValues: {
            departmentName: '',
            description: '',
            phoneNumber: '',
            address: '',
            departmentCategories: [],
            submit: null
        },
        validationSchema: Yup.object({
            departmentName: Yup.string().max(255).required('Department Name is required'),
            phoneNumber: Yup.string().max(20).required('Phone Number is required'),
            address: Yup.string().max(500).required('Address is required'),
            description: Yup.string().max(1000),
            departmentCategories: Yup.array().min(1, 'Select at least one Department Category'),
        }),
        onSubmit: async (values, helpers) => {
            try {
                console.log(values);
                const { departmentName, description, phoneNumber, address, departmentCategories } = values;

                const departmentData = {
                    name: departmentName,
                    description,
                    address,
                    phoneNumber,
                    categories: departmentCategories,
                };
                console.log(departmentData);
                await instance.post('/api/v1/departments', departmentData);
                // Redirect to the employee list page or wherever you want to navigate after creation
                router.push('/departments');
            } catch (err) {
                console.error('Error creating employee:', err);
                helpers.setStatus({ success: false });
                helpers.setErrors({ submit: 'Error creating employee.' });
                helpers.setSubmitting(false);

            }
        }
    });

    const [fetchedDepartmentCategories, setFetchedDepartmentCategories] = useState([]);
    useEffect(() => {
        const getDepartmentCategories = async () => {
            try {
                const response = await instance.get(`/api/v1/categories`);
                console.log(response.data);
                const departmentCategoriesData = response.data;
                setFetchedDepartmentCategories(departmentCategoriesData);
                console.log(departmentCategoriesData);
            } catch (error) {
                console.log(error);
            }
        };
        getDepartmentCategories();
    }, []);


    return (
        <>
            <Head>
                <title>Create Department</title>
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
                            <Typography variant="h4">Create Department</Typography>
                        </Stack>
                        <form
                            noValidate
                            onSubmit={formik.handleSubmit}
                        >
                            <Stack spacing={3}>
                                <TextField
                                    error={!!(formik.touched.departmentName && formik.errors.departmentName)}
                                    fullWidth
                                    helperText={formik.touched.departmentName && formik.errors.departmentName}
                                    label="Department Name"
                                    name="departmentName"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.departmentName}
                                />
                                <TextField
                                    error={!!(formik.touched.description && formik.errors.description)}
                                    fullWidth
                                    helperText={formik.touched.description && formik.errors.description}
                                    label="Description"
                                    name="description"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    multiline
                                    rows={4}
                                    value={formik.values.description}
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
                                    error={!!(formik.touched.address && formik.errors.address)}
                                    fullWidth
                                    helperText={formik.touched.address && formik.errors.address}
                                    label="Address"
                                    name="address"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.address}
                                />
                                <InputLabel id="department-category-label">Department Categories</InputLabel>
                                <FormControl fullWidth>
                                    <FormGroup>
                                        {fetchedDepartmentCategories && fetchedDepartmentCategories.map(category => (
                                            <FormControlLabel
                                                key={category.id}
                                                control={
                                                    <Checkbox
                                                        checked={formik.values.departmentCategories.includes(category.id)}
                                                        onChange={(event) => {
                                                            const isChecked = event.target.checked;
                                                            formik.setFieldValue(
                                                                'departmentCategories',
                                                                isChecked
                                                                    ? [...formik.values.departmentCategories, category.id]
                                                                    : formik.values.departmentCategories.filter(id => id !== category.id)
                                                            );
                                                        }}
                                                        name={`departmentCategories-${category.id}`}
                                                    />
                                                }
                                                label={category.name}
                                            />
                                        ))}
                                    </FormGroup>
                                    {formik.touched.departmentCategory && formik.errors.departmentCategories && (
                                        <FormHelperText error>{formik.errors.departmentCategories}</FormHelperText>
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
                                Create Department
                            </Button>
                        </form>
                    </div>
                </Box>
            </Box>
        </>
    );
};

CreateDepartmentPage.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default CreateDepartmentPage;