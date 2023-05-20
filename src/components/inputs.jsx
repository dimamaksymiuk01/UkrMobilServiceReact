import './inputs.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

import { useForm } from "react-hook-form";

import * as React from 'react'; 
import InputLabel from '@mui/material/InputLabel'; //хуй зна
import MenuItem from '@mui/material/MenuItem'; //хуй зна
import FormControl from '@mui/material/FormControl'; //хуй зна
import Select from '@mui/material/Select'; //селект вибору магазину

import Alert from '@mui/material/Alert'; //алерт валідації
import Stack from '@mui/material/Stack'; //алерт валідації

import moment from 'moment'; //бібліотека з датами

import Button from '@mui/material/Button'; //кнопка делейта
import DeleteIcon from '@mui/icons-material/Delete'; //кнопка делейта



function Inputs() {

  const today = new Date().toISOString().split('T')[0];
  const [age, setAge] = React.useState('');
  const [data, setData] = useState([]);

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

  useEffect(() => {
    axios.get("http://localhost:5000/api/Notes").then(res => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:5000/api/Notes")
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  

  const onSubmit = (data) => {
    handleSASbmit(data);
    console.log(data);
    reset();
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // const handleSASbmit = (formData) => {
  //   console.log(formData);
  //   axios.post("http://localhost:5000/api/Notes", formData).catch((error) => { console.log(error) })
  //   const newData = [...data, formData];
  //   newData.sort((a, b) => new Date(a.date) - new Date(b.date));
  //   setData(newData);
  // };

  const handleSASbmit = (formData) => {
    console.log(formData);
    axios.post("http://localhost:5000/api/Notes", formData)
      .then(() => {
        fetchData(); // Оновити дані після успішного додавання запису
      })
      .catch((error) => {
        console.log(error);
      });
  };


  // const handleStatusChange = (note) => {
  //   console.log("status change");
  //   axios.post("http://localhost:5000/api/Notes/" + note.id)
  //     .then(res => {
  //       // з api прилітає та сама note, але вже з поміняним статусом
  //       // тут обновити дані в табличці
  //       // console.log(res.data);
  //       const currentDate = moment().format('LL');


  //     })
  //     .catch((error) => { console.log(error) });
  // };

  const handleStatusChange = (note) => {
    console.log("status change");
    axios.post("http://localhost:5000/api/Notes/" + note.id)
      .then(() => {
        fetchData(); // Оновити дані після успішної зміни статусу
      })
      .catch((error) => {
        console.log(error);
      });
  };


  useEffect(() => {
    fetchData();
  }, []);
  

// я трохи переписав код, бо нам треба було кожного разу оновлювати сторінку коли відбувалися якісь зміни в статусі або 
// додавання в табличку. Ща все додається і видаляється моментально. + чутка візуал підкачав і поставив норм дати в табличку

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
                onChange={handleChange}>
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
            <input
              type='date'
              className='waitDate'
              {...register('date', {
                required: 'Enter the date',
              })}
              min={today}
            />
            <div className='alertError'>
              {errors?.date && (
                <Alert className='alertError' severity='error'>
                  {errors?.date?.message || 'Error!'}
                </Alert>
              )}
            </div>
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
              <th>Market</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Device</th>
              <th>Product</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((row)=>{
              return row.status === false
            }).map((row, index) => (
              <tr key={index}>
                <td>{row.market}</td>
                <td>{row.client}</td>
                <td>{row.phone}</td>
                <td>{row.device}</td>
                <td>{row.product}</td>
                <td>{moment(row.date).format('LL')}</td>              
                <td>
                  {/* <button onClick={() => handleStatusChange(row)}>Test</button> */}
                    <Button onClick={() => handleStatusChange(row)} variant="outlined" startIcon={<DeleteIcon />}>delete</Button>
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