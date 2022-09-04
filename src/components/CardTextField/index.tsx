import React from 'react';
import { useFormik } from 'formik';

import TextField from '../TextField';

import { useStylesCommon } from '../../styles/common';
import { useStyles } from './styles';

const validate = (values: any) => {
    const errors = {} as any;
      
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 15) {
      errors.name = 'Must be 15 characters or less';
    }

    return errors;
  };

const CardTextField = () => {
    const { cardTextField__title } = useStyles();
    const { title3, card } = useStylesCommon();

    const formik = useFormik({
        initialValues: {
          name: ''
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return (
        <div className={card}>
            <h3 className={`${title3} ${cardTextField__title}`}>
                Name your QR code*
            </h3>
            <TextField
                placeholder='e.g. My QR code'
                id="name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                error={formik.touched.name && formik.errors.name ? formik.errors.name : undefined}
            />
        </div>
    )
}

export default CardTextField;
