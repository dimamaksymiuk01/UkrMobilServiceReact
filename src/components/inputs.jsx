import './inputs.css'
import { useState } from 'react';

import { useForm } from "react-hook-form";


import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



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
      <FormControl sx={{ m: 1, minWidth: 180, minHeight: 70}}>
      <InputLabel id="demo-select-small-label">Market</InputLabel>
      <Select {...register('market')}
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
        <MenuItem value={"OLX+"}>OLX+</MenuItem>
        <MenuItem value={"VsePlus"}>VsePlus</MenuItem>
        <MenuItem value={"Other"}>Other</MenuItem>
      </Select>
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
                required: 'Enter a name',
              })}
              />
            <div> {errors?.client && <span>{errors?.client?.message || "Error!"}</span>} </div>
              </label>
              </div>
        
              <div className='form__group'>
              <label className='form__label'>Phone number
              <input className='form__input' placeholder="Client name" required=""
              {...register('phone', {
                required: 'поле обов*язкове',
                minLength: {
                  value: 5,
                  message: 'мінімум 5 символів'
                }
              })}
              />
              </label>
              </div>
        
              <div className='form__group'>
              <label className='form__label' htmlFor="name">Device model
              <input className='form__input' placeholder="Client name" required=""
              {...register('device', {
                required: 'поле обов*язкове',
                minLength: {
                  value: 5,
                  message: 'мінімум 5 символів'
                }
              })}
              />
              </label>
              </div>
        
              <div className='form__group'>
              <label className='form__label' htmlFor="name">Expecter product
              <input className='form__input' placeholder="Client name" required=""
              {...register('product', {
                required: 'поле обов*язкове',
                minLength: {
                  value: 5,
                  message: 'мінімум 5 символів'
                }
              })}
              />
              </label>
              </div>
        
              <div className='date'>
              <label>Date of arrival:</label>
              <input type='date' className='waitDate' 
              {...register('date', {
                required: 'поле обов*язкове',
              })}
              />
              </div>
        
              </div>
              <input className="bubbly-button" type="submit" disabled={!isValid }></input>
              <div> {errors?.firstName && <span>{errors?.firstName?.message || "Error!"}</span>} </div>
        
        
            </form>
        
        </>
    )
  }
  
  export default Inputs;