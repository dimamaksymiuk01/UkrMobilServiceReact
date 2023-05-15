import './inputs.css'
import { useState, useEffect } from 'react';

import { useForm } from "react-hook-form";


import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import axios from 'axios';



function Inputs() {
  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    handleSASbmit(data); // Додайте цей рядок для додавання даних форми до масиву data
    console.log(data);
    reset();
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [data, setData] = useState([]);

  const handleSASbmit = (formData) => {
    setData((prevData) => [...prevData, formData]); // Додавання нового об'єкта до масиву даних при відправці форми
  };

  const [array, setArray] = useState([]);
  useEffect(() => {
    console.log("sas");
    axios.get("http://localhost:5000/api/Notes").then(res => {
      setArray(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>


      <h1>UKRmobil service notes</h1>

      <form className='container' onSubmit={handleSubmit(onSubmit)}>

        <div className='allInput'>

          <div className='form__group'>
            <FormControl sx={{ m: 1, minWidth: 190, minHeight: 50 }} size="">
              <InputLabel className='lbSelect' id="demo-select-small-label">Buy</InputLabel>
              <Select className='lbSelect' {...register('market', {
                required: 'Please select a store',
              })}
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Techno+"}>Techno+</MenuItem>
                <MenuItem value={"UkrMobil"}>UkrMobil</MenuItem>
                <MenuItem value={"Prom"}>Prom</MenuItem>
                <MenuItem value={"OLX"}>OLX</MenuItem>
                <MenuItem value={"VsePlus"}>VsePlus</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
              <div> {errors?.client && <Alert className='alertError' severity="error">{errors?.client?.message || "Error!"}</Alert>} </div>

            </FormControl>
          </div>


          <div className='form__group'>
            <label className='form__label' htmlFor="name">Enter name
              <input className='form__input' placeholder="Client name" required=""
                {...register('client', {
                  required: 'Enter the name of the customer',
                })}
              />
              <div> {errors?.client && <Alert className='alertError' severity="error">{errors?.client?.message || "Error!"}</Alert>} </div>


              <Stack sx={{ width: '100%' }} spacing={2}>
              </Stack>


            </label>
          </div>

          <div className='form__group'>
            <label className='form__label'>Phone number
              <input className='form__input' placeholder="Number" required=""
                {...register('phone', {
                  required: 'Enter the phone number',
                  minLength: {
                    value: 5,
                    message: 'мінімум 5 символів'
                  }
                })}
              />
              <div> {errors?.phone && <Alert className='alertError' severity="error">{errors?.phone?.message || "Error!"}</Alert>} </div>

            </label>
          </div>

          <div className='form__group'>
            <label className='form__label' htmlFor="name">Device model
              <input className='form__input' placeholder="Model" required=""
                {...register('device', {
                  required: 'What kind of device is this?',
                  minLength: {
                    value: 5,
                    message: 'мінімум 5 символів'
                  }
                })}
              />
              <div> {errors?.device && <Alert className='alertError' severity="error">{errors?.device?.message || "Error!"}</Alert>} </div>

            </label>
          </div>

          <div className='form__group'>
            <label className='form__label' htmlFor="name">Expecter product
              <input className='form__input' placeholder="Product" required=""
                {...register('product', {
                  required: 'What product are you ordering?',
                  minLength: {
                    value: 5,
                    message: 'мінімум 5 символів'
                  }
                })}
              />
              <div> {errors?.product && <Alert className='alertError' severity="error">{errors?.product?.message || "Error!"}</Alert>} </div>

            </label>
          </div>

          <div className='date'>
            <label>Date of arrival:</label>
            <input type='date' className='waitDate'
              {...register('date', {
                required: 'Enter the date',
              })}
            />
            <div className='alertError'> {errors?.date && <Alert className='alertError' severity="error">{errors?.date?.message || "Error!"}</Alert>} </div>


          </div>

        </div>
        <input className="bubbly-button" type="submit" disabled={!isValid}></input>
        <div> {errors?.firstName && <span>{errors?.firstName?.message || "Error!"}</span>} </div>


      </form>





      {/* Таблиця */}

      <div className='box'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Device</th>
              <th>Product</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.client}</td>
                <td>{row.phone}</td>
                <td>{row.device}</td>
                <td>{row.product}</td>
                <td>{row.date}</td>
                <td>
                  <label className="toggleButton">
                    <input type="checkbox" />
                    <div>
                      <svg viewBox="0 0 44 44">
                        <path d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758" transform="translate(-2.000000, -2.000000)"></path>
                      </svg>
                    </div>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Inputs;