import React from 'react'
import CounterItem from './Items/CounterItem'

const Counter = () => {
    const counter = [
        {
            img : "assets/img/icon-1.66ad797b.svg",  text:'Year of Experience' ,num:'25'
        },
        {
            img : "assets/img/icon-2.ab7f3416.svg", text:'Class Completed',num:'6500'
        }, {
            img : "assets/img/icon-3.3ceb99fa.svg", text:'Experts Instructors',num:'100'
        }, {
            img : "assets/img/icon-4.2af2e447.svg", text:'Students Enroll',num:'6561'
        }
    ]
    return (
        <>
            <div className="counter-section fix">

                <div className="line-shape">
                    <img src="assets/img/line-shape1.webp" alt="" />
                </div>
                <div className="box-shape float-bob-x">
                    <img src="assets/img/box-shape.webp" alt="" />
                </div>
                <div className="counter-bg"></div>
                <div className="container">
                    <div className="counter-wrapper">
                        <div className="row g-4">
                        {
                            counter.map((i) => <CounterItem value={i}/>)
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter