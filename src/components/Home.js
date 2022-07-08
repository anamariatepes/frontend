import React, { Fragment,useState, useEffect } from 'react'
import  Pagination  from 'react-js-pagination'

import MetaData from './layout/MetaData'
import Animal from './animal/Animal'
import Loader from './layout/Loader'


import { useDispatch, useSelector} from 'react-redux'
import {useAlert} from 'react-alert';
import { getAnimals } from '../actions/animalActions'


const Home = ({match}) => {

  const [currentPage, setCurrentPage] = useState(1)

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, animals, error, animalsCount, resPerPage} = useSelector(state => state.animals || {})

  const keyword = match.params.keyword
  
  useEffect(() => {
    if(error){
      return alert.error(error)
    }
    dispatch(getAnimals( keyword, currentPage));
    
  }, [dispatch, alert, error, keyword, currentPage])

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber)
  }

    return (
        <Fragment>
          {loading ? <Loader /> : (
            <Fragment> 
              <MetaData title={'Salveaza!'}/>

            <h1 id="products_heading">Animalele din centrul nostru va asteapta!</h1>
            
            <section id="products" className="container mt-5">
              <div id="canvas" width="1050" >
              <div className="input-group">
                <p>Ce varsta aveti?</p>
              <input
               type="text"
               id="search_field2"
               className="form-control"
               placeholder="Tasteaza raspunsul..."
              />
            </div>
            <div className="input-group">
                <div>
                  <p>Aveti copii?</p>
                  </div>
              <input
               type="text"
               id="search_field2"
               className="form-control"
               placeholder="Tasteaza raspunsul..."
              />
            </div>
            <div className="input-group">
                <p>Aveti vreo problema de sanatate?</p>
              <input
               type="text"
               id="search_field2"
               className="form-control"
               placeholder="Tasteaza raspunsul..."
              />
            </div>
            <div className="input-group">
                <p>Ce calitate care va caracterizeaza cel mai bine?</p>
              <input
               type="text"
               id="search_field2"
               className="form-control"
               placeholder="Tasteaza raspunsul..."
              />
            </div>
            <div className="input-group">
                <p>In ce tip de locuinta traiti?</p>
              <input
               type="text"
               id="search_field2"
               className="form-control"
               placeholder="Tasteaza raspunsul..."
              />
            </div>
            <div className="input-group">
                <p>Numarul de telefon: </p>
              <input
               type="text"
               id="search_field2"
               className="form-control"
               placeholder="Tasteaza raspunsul..."
              />
            </div>
          </div>

              <div><a href="" id="view_btn2" className="btn btn-block">Genereaza profilele animalelor</a></div>
            
            
      <div className="row">
        {animals && animals.map(animal => (
          <Animal key={animal._id} animal ={animal} />
        ) )}
        
      </div>
    </section>
    {resPerPage <= animalsCount && (
      <div className='d-flex justify-content-center mt-5'>
        <Pagination
           activePage={currentPage}
           itemsCountPerPage={resPerPage}
           totalItemsCount = {animalsCount}
           onChange={setCurrentPageNo}
           nextPageText = {'Next'}
           prevPageText = {'Previous'}
           firstPageText = {'First'}
           lastPageText = {'Last'}
           itemClass ="page-item"
           linkClass="page-link"

        />

       </div>
    )}
       
    
    </Fragment>
          )}
       
</Fragment>
    )
}
export default Home