import { Stack, Typography, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { FormikProvider, Form, useFormik } from 'formik';

// apis
import footerApi from '../../apis/footerApi';
// hooks
import useSnackbar from '../../hooks/useSnackbar';
// utils
import { footerConnectSchema } from '../../utils/yupSchemas';

const Connect = ({ connect }) => {
    const { setSnackbar } = useSnackbar();
    const formik = useFormik({
        initialValues: {
            connectOne: connect[0]?.title || '',
            connectOneLink: connect[0]?.link || '',
            connectTwo: connect[1]?.title || '',
            connectTwoLink: connect[1]?.link || '',
            connectThree: connect[2]?.title || '',
            connectThreeLink: connect[2]?.link || '',
        },
        validationSchema: footerConnectSchema,
        onSubmit: async values => {
            const { connectOne, connectOneLink, connectTwo, connectTwoLink, connectThree, connectThreeLink } = values;
            const connect = [
                {
                    title: connectOne,
                    link: connectOneLink
                },
                {
                    title: connectTwo,
                    link: connectTwoLink
                },
                {
                    title: connectThree,
                    link: connectThreeLink
                }
            ];
            const res = await footerApi.editConnect({
                connect
            })
            const { statusText, message } = res;
            setSnackbar({
                isOpen: true,
                type: statusText,
                message: message,
                anchor: 'bottom-center'
            });
        }
    });
    const { getFieldProps, isSubmitting, touched, errors } = formik;
    return (
        <FormikProvider value={formik}>
            <Form>
                <Stack
                    spacing={2}
                >
                    <Typography variant='subtitle2'>Liên kết</Typography>
                    <Stack
                        direction='row'
                        alignItems='center'
                        spacing={2}
                    >
                        <TextField
                            fullWidth
                            variant='standard'
                            label='Tiêu đề 1'
                            {...getFieldProps('connectOne')}
                            error={Boolean(touched.connectOne && errors.connectOne)}
                            helperText={touched.connectOne && errors.connectOne}
                        />
                        <TextField
                            fullWidth
                            variant='standard'
                            label='Liên kết 1'
                            {...getFieldProps('connectOneLink')}
                            error={Boolean(touched.connectOneLink && errors.connectOneLink)}
                            helperText={touched.connectOneLink && errors.connectOneLink}
                        />
                    </Stack>
                    <Stack
                        direction='row'
                        alignItems='center'
                        spacing={2}
                    >
                        <TextField
                            fullWidth
                            variant='standard'
                            label='Tiêu đề 2'
                            {...getFieldProps('connectTwo')}
                            error={Boolean(touched.connectTwo && errors.connectTwo)}
                            helperText={touched.connectTwo && errors.connectTwo}
                        />
                        <TextField
                            fullWidth
                            variant='standard'
                            label='Liên kết 2'
                            {...getFieldProps('connectTwoLink')}
                            error={Boolean(touched.connectTwoLink && errors.connectTwoLink)}
                            helperText={touched.connectTwoLink && errors.connectTwoLink}
                        />
                    </Stack>
                    <Stack
                        direction='row'
                        alignItems='center'
                        spacing={2}
                    >
                        <TextField
                            fullWidth
                            variant='standard'
                            label='Tiêu đề 3'
                            {...getFieldProps('connectThree')}
                            error={Boolean(touched.connectThree && errors.connectThree)}
                            helperText={touched.connectThree && errors.connectThree}
                        />
                        <TextField
                            fullWidth
                            variant='standard'
                            label='Liên kết 3'
                            {...getFieldProps('connectThreeLink')}
                            error={Boolean(touched.connectThreeLink && errors.connectThreeLink)}
                            helperText={touched.connectThreeLink && errors.connectThreeLink}
                        />
                    </Stack>
                    <LoadingButton type='submit' variant='contained' loading={isSubmitting}>
                        Lưu
                    </LoadingButton>
                </Stack>
            </Form>
        </FormikProvider>
    );
};

export default Connect;
