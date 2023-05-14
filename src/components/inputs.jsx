import './inputs.css'
import { useState } from 'react';

import { useForm } from "react-hook-form";


import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

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
        console.log(data);
        reset();
      }


      const [age, setAge] = React.useState('');

      const handleChange = (event) => {
        setAge(event.target.value);
      };


    return (
            <>





            <h1>UKRmobil service notes</h1>
        
            <form className='container' onSubmit={handleSubmit(onSubmit)}>
        
              <div className='allInput'>

              <div className='form__group'>
      <FormControl  sx={{ m: 1, minWidth: 170, minHeight: 50}} size="">
      <InputLabel className='lbSelect'  id="demo-select-small-label">Buy</InputLabel>
      <Select className='lbSelect' {...register('market', {
        required: 'Please select a store',
      } )}
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
        
            {/* <div className='form__group'>
            <label className='form__label' htmlFor="name">Market
            <select className='sender' {...register('market')}>
                  <option id="sender">Techno+</option>
                  <option id="sender">UkrMobil</option>
                  <option id="sender">Prom</option>
                  <option id="sender">OLX</option>
                  <option id="sender">VsePlus</option>
                  <option id="sender">Other</option>
                </select>
              </label>
              </div> */}
        
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
              <input className='form__input' placeholder="Client name" required=""
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
              <input className="bubbly-button" type="submit" disabled={!isValid }></input>
              <div> {errors?.firstName && <span>{errors?.firstName?.message || "Error!"}</span>} </div>
        
        
            </form>
        
        </>
    )
  }
  
  export default Inputs;