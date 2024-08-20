import React from 'react'
import ProgramItem from './Items/ProgramItem'



const Program = () => {
    const program = [
        { img: 'assets/img/01.webp', title:'Kindergarten', year:'(4-5 years)' },
        { img: 'assets/img/02.webp' , title:'Chemistry Class', year:'(1-2 years)' },
        { img: 'assets/img/03.webp' , title:'Drawing Class', year:'(1-2 years)' },
    ]
    return (
        <>
            <div className="program-main section-padding section-bg-2 fix">
                <div className="top-shape">
                    <img src="assets/img/section-top-shape.webp" alt="" />
                </div>
                <div className="bottom-shape">
                    <img src="assets/img/section-bottom-shape.webp" alt="" />
                </div>
                <div className="mask-shape float-bob-x">
                    <img src="assets/img/mask.webp" alt="" />
                </div>
                <div className="mask-shape-2">
                    <img src="assets/img/mask-2.webp" alt="" />
                </div>
                <div className="compass-shape">
                    <img src="assets/img/compass.webp" alt="" />
                </div>
                <div className="container">
                    <div className="section-title text-center mt-60">
                        <span>Our Programs</span>
                        <h2>
                            We meet kids at their level <br /> regardless of their age
                        </h2>
                    </div>
                    <div className="row">

                        {
                            program.map((i) => <ProgramItem value={i} />)
                        }

                    </div>
                </div>

            </div>

        </>
    )
}

export default Program