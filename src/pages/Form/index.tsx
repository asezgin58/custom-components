import { FC } from 'react';
import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

/**
 * Component File Description
 */
const Form: FC<any> = () => {
    const handleFormSubmit = async (data: any) => {
        alert(JSON.stringify(data));
    };

    const { handleSubmit, handleChange, handleBlur, touched, values, errors } = useFormik({
        initialValues: {
            name: '',
            surname: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name Required'),
            surname: Yup.string().required('Surname Required'),
        }),
        onSubmit: handleFormSubmit,
    });

    return (
        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <div className='row mb-4'>
                    <div className='col-6'>
                        <TextField
                            name={'name'}
                            variant={'outlined'}
                            label={'Name'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                        />
                    </div>
                </div>
                <div className='row mb-4'>
                    <div className='col-6'>
                        <TextField
                            name={'surname'}
                            variant={'outlined'}
                            label={'Surname'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.surname}
                            error={touched.surname && Boolean(errors.surname)}
                            helperText={touched.surname && errors.surname}
                        />
                    </div>
                </div>
                <div className='row mb-4'>
                    <div className='col-6'>
                        <Button type={'submit'} variant='contained'>
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Form;
