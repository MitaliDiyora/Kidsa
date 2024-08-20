import React from 'react'
import { Link } from 'react-router-dom'

const ProgramItem = (props) => {
  return (
    <>
      
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="program-box-items">
                                <div className="program-bg"></div>
                                <div className="program-image">
                                    <img src={props.value.img} alt="" />
                                </div>
                                <div className="program-content text-center">
                                    <h4>
                                        <Link to=''>{props.value.title}</Link></h4>
                                    <span>{props.value.year}</span>
                                    <p>Lorem ipsum dolor consectur the <br /> adipiscing elit eiusmod.</p>
                                    <Link className='arrow-icon'>
                                        <i class="fa-solid fa-arrow-right-long"></i>
                                    </Link>



                                </div>



                        </div>

                    </div>
    </>
  )
}

export default ProgramItem