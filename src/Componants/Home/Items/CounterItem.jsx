import React from 'react'
import CountUp from 'react-countup';


const CounterItem = (props) => {
    return (
        <>
            <div className="col-xl-3 col-lg-4">
                <div className="counter-items">
                    <div className="icon">
                        <img src={props.value.img} alt="" />
                    </div>
                    <div className="content">
                        <h2>
                            <span className='count'>
                                <CountUp end={props.value.num} duration={2.75} />

                            </span> +
                        </h2>
                        <p>{props.value.text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CounterItem