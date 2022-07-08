import React from 'react'
import {Link} from 'react-router-dom'

const Animal = ({ animal }) => {
    return (
        <div  className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-3 rounded">
            <img
              className="card-img-top mx-auto"
              src={animal.images[0].url}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <Link to={`/animal/${animal._id}`}>{animal.nume}</Link>
              </h5>
              
              
              <Link to={`/animal/${animal._id}`} id="view_btn" className="btn btn-block">Vezi detalii</Link>
            </div>
          </div>
        </div> 
    )
}
export default Animal