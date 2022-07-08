import React, {Fragment, useEffect} from 'react'
import {Carousel } from 'react-bootstrap'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'


import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import {getAnimalsDetails, clearErrors} from '../../actions/animalActions'

const AnimalDetails = ({ match }) => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const {loading, error, animal } = useSelector(state => state.animalDetails)


    useEffect(() => {
        dispatch(getAnimalsDetails(match.params.id))

        if(error){
            alert.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch, alert, error, match.params.id] )

  return (
    <Fragment>
    {loading ? <Loader/> : (
        <Fragment>
            <MetaData title={animal.nume} />
        <div className="row f-flex justify-content-around">
       <div className="col-12 col-lg-5 img-fluid" id="product_image">
        <Carousel pause ='hover'>
            {animal.images && animal.images.map(image => (
                <Carousel.Item key = {image.public_id}>
                    <img className='d-block w-100' src={image.url} alt={animal.title} />
                </Carousel.Item>
            ))}
        </Carousel>
       </div>

       <div className="col-12 col-lg-5 mt-5">
        <h3>{animal.nume}</h3>
        <p id="product_id">{animal.tipAnimal} </p>

        <hr/>

        <p>Status: <span id="stock_status">Disponibil</span></p>

        <hr/>

        <p>Varsta: {animal.varsta} luni</p>
        <p>Sex: {animal.sex}</p>
        <p>Culoare: {animal.culoare}</p>
        <p>Calitatea prin care se face remarcat: {animal.calitate}</p>
        <p>Un defect: {animal.defect}</p>
        <p>Stare sanatate: {animal.stareSanatate}</p>
        <hr/>
        <p id="product_seller mb-3">Adapost: <strong>AnimalsFirst Bucuresti</strong></p>
        <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4" >Adopta!</button>
        
        
        
    </div>
</div>
        </Fragment>
    )}
    </Fragment>
  )
}

export default AnimalDetails
