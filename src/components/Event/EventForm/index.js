import React, { useEffect, useState } from "react";
import './style.scss';

import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
import { FormControl } from '@mui/material';
import { FormLabel } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

import { NavLink, Redirect, Navigate } from "react-router-dom";

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

import { useFormik } from 'formik';
import * as yup from 'yup';

import axios from "axios";


import HeaderSignUp from "../Signup/HeaderSignup";

import LocationAutoComplete from '../Tools';



import Thumb from "../Tools/Thumb";



//TODO CORRIGER ERREUR ADD EVENTS


const EventForm = () => {

    const Input = styled('input')({
        display: 'none',
    });
    let webApiUrl = 'http://localhost:8080/api/v1/events';
    let tokenStr = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MzkzODc0ODQsImV4cCI6MTYzOTQ3Mzg4NCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGdtYWlsLmNvbSJ9.m1WKw152sWiclYjALSrrnSH-8AS-NOBXpPg-kv4XI1LzNgHINqj84PKZh2NR_VcKXZmN8TAcbq7MhRcTzWw_r848r3Go0CQNjT7Y7JKVhEhqsyJPVurpVmA5jeng7FihB-Aim4TBXTa1dlkd2wZiVLITl3PKa4aE0RipzIJUVTXKvajPy7GsqJjQHQ658i8faVwcU4hb9YvGG5ZxOIY0XQSsKKX_iYAXfndcimojfaIM177ivL_2oQp8BzZkCjLGmq9uLbGqS6U043BryhDaqtt6ezyjNOzCwBDwg8LVxCY06obdGJfXsmgI68H5XKp_QCPHOT5Q2rtS6LrEk6VPeg';

    /* const categorieList = useSelector(
        (state) => state.categories.categorieList
    );
 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: LOAD_CATEGORIES });
    }, []);


    {
	"title": "encore et encore un match de volley",
	"description": "venez vous joindre à nous pour ce match de volley !",
	"date": "2022-02-12 10:55:00",
	"category": 1,
	"maxMembers": 2,
	"author": 3,
	"picture": "",
	"address": "16 rue test",
	"zipcode": "",
	"city": "Sarcelles",
	"country": "France"
}*/
 */


    const [responseFormValidateForm, setResponseValidateForm] = useState(false);



    const onSubmit = async (values) => {
        alert(JSON.stringify( values, null, 2));

        axios({
            headers: { "Authorization": `Bearer ${tokenStr}` },
            data: {
                title : values.email, 
                picture:values.picture.name,
                description: values.description,
                maxMembers:values.maxMembers ,
                isOnline: values.isOnline,
                category: values.category,
                date: values.date,
                adress:values.place,
                author:values.author,
                city:values.city,
                country:values.country,

              },
            url: webApiUrl,
            method: 'post',

        })
            .then(function (reponse) {
                setResponseValidateForm(true);
                console.log(reponse);
            })
            .catch(function (erreur) {

                window.alert("Une erreur s'est produite, veuillez réessayer");              
                console.log(erreur);
            });



    };

    const validationSchema = yup.object({
        title: yup
            .string('Entré le nom de l\'évènement')
            .min(3, 'Un nom d\'évènement doit contenir 3 caractères minimum')
            .required('Le nom de l\'évènement doit être rempli'),
        city: yup
            .string('Entré un lieu valide')
            .min(3, 'Un lieu doit contenir au moins 3 lettres')
            .required('Un lieu est requis'),
        description: yup
            .string('Entré une description')
            .min(20, 'Une description doit contenir 20 caractères au minimum')
            .required('Une description est requise'),
        maxMembers: yup
            .number('Entré un nombre maximum de participant ')
            .min(2, 'Un évènement doit avoir un moins 2 participant')
            .required('Le nombre maximum de participant est requis'),
        picture : yup.object().shape({
            file: yup.mixed().required(),
          })
        //TODO Date VALIDATION

    });



    const formik = useFormik({
        initialValues: {
            title: '',           
            description: '',
            maxMembers: '',
            isOnline: '', //TODO VOIR AVEC BACK >> Changer route envoi selon Online ou Présentiel
            category: '',
            date: new Date(),
            /* cityid: { name: "", id: null, state: "" }, // A CONSERVER POUR AUTOCOMPLETION  */
            place: '',
            picture: '',
            author: 'TODOWITHTOKEN',
            city:'TODO',
            zipcode:'TODO',
            country:'TODO',

        },
<<<<<<< HEAD
         validationSchema: validationSchema,   
=======
         validationSchema: validationSchema, 
>>>>>>> 1b1f628ff1df53309f24b1cbff07a633998e09df
        onSubmit,
    });





    if (responseFormValidateForm) {
        return <Navigate to="/" />
    }
    return (

        <div>
            <HeaderSignUp />
            <h2> Créer votre évènement </h2>


            <form onSubmit={formik.handleSubmit} >

                <div className='event__form__if'>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Type d'évènement</FormLabel>
                        <RadioGroup
                            row aria-label="type"
                        >
                            <FormControlLabel value="online"
                                name="picked"
                                control={<Radio />}
                                onChange={formik.handleChange}
                                label="En ligne" />
                            <FormControlLabel value="realLife"
                                name="picked"
                                control={<Radio />}
                                onChange={formik.handleChange}
                                label="En présentiel" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='event__form__name'>
                    <TextField fullWidth label="Nom de l'évènement" className="eventForm"
                        id="title"
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title} />

                </div>

                <div className='event__form__date'>
                    <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                label="Date&Time picker"
                                value={formik.values.date}
                                onChange={(newDate) => {
                                    formik.setFieldValue("date", newDate);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>
                </div>

                <div className='event__form__place'>
                    <LocationAutoComplete />

                    <TextField fullWidth label="Lieu" className="eventForm"
                        id="city"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        error={formik.touched.city && Boolean(formik.errors.city)}
                        helperText={formik.touched.city && formik.errors.city} />
                </div>

                <div className='event__form__select'>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Choix de catégorie</InputLabel>
                        <Select
                            labelId="event_form_single_select_label"
                            id="event_form_single_select"
                            label="categorySelect"
                            name="categorySelect"
                            defaultValue=""
                            type="select"
                            value={formik.values.categorySelect}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} >

                            {/* //TODO ICI UNE MAP DE CATEGORIE A VERIFIER SI CA FONCTIONNE et renvoyé id
                              {categorieList.map((category) => (
                                
                            <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>   
                               
                       ))}   */}
                            <MenuItem value={2}>Category2</MenuItem>
                            <MenuItem value={3}>Category3</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className='event__form__photo'>
                    <FormControl fullWidth>
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={(event) => {
                                formik.setFieldValue("picture", event.currentTarget.files[0]);
                            }} />
                            <Button
                                sx={{ backgroundColor: '#9FBFFF', '&:hover': { backgroundColor: '#82B5A5' } }}
                                fullWidth variant="contained"
                                component="span">
                                Téléchargez votre image de couverture d'évènement
                            </Button>
                            
                        </label>
                    </FormControl>
                </div>
                <div className='event__form__photo'>
                    <Thumb file={formik.values.picture} />
                </div>
                <div className='event__form__description'>
                    <TextField fullWidth label="Votre description"
                        className="eventForm"
                        id="description"
                        name="description"
                        type="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description} />
                </div>

                <div className='event__form__number'>
                    <TextField fullWidth label="Nombre maximum de participant"
                        className="eventForm"
                        id="maxMembers"
                        name="maxMembers"
                        value={formik.values.maxMembers}
                        onChange={formik.handleChange}
                        error={formik.touched.maxMembers && Boolean(formik.errors.maxMembers)}
                        helperText={formik.touched.maxMembers && formik.errors.maxMembers} />
                </div>
                <div className='event__form__buttom'>
                    <FormControl fullWidth>
                        <Button
                            sx={{ backgroundColor: '#F36B7F', '&:hover': { backgroundColor: '#F8CF61' } }}
                            variant="contained"
                            type="submit">
                            Créer mon évènement
                        </Button>
                    </FormControl>
                </div>

            </form>

        </div>

    );
};


export default EventForm;