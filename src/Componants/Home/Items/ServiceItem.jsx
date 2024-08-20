import React from 'react'

const ServiceItem = (props) => {
    return (
        <>
            <div className="col-xl-3 col-lg-2 col-md-6">

                <div className="services"> <div className="line-shape">
                    <img src={props.value.line} alt="" />
                </div>
                    <div className="service-items text-center">

                        <div className="icon bg-cover">
                            <img src={props.value.img} alt="" />
                        </div>
                        <div className="content">
                            <h4>Choose A Service</h4>
                            <p>In a free hour, when our power of choice is untrammeled and</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ServiceItem