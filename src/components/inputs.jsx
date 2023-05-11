import './inputs.css'
import { useState } from 'react';

import { useForm } from "react-hook-form";

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
    return (
            <>
            <h1>UKRmobil service notes</h1>
        
            <form className='container' onSubmit={handleSubmit(onSubmit)}>
        
              <div className='allInput'>
        
            <div className='form__group'>
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
              </div>
        
              <div className='form__group'>
              <label className='form__label' htmlFor="name">Enter name
              <input className='form__input' placeholder="Client name" required=""
              {...register('client', {
                required: 'поле обов*язкове',
              })}
              />
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