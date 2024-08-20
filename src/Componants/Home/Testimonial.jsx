import React from 'react'

const Testimonial = () => {
  return (
  <>
  <div className="testimonial-section fix section-padding">
    <div className="tree-shape float-bob-y">
        <img src="assets/img/tree-shape.webp" alt="" />
    </div>
    <div className="right-shape">
        <img src="assets/img/right.webp" alt="" />
    </div>
    <div className="bee-shape float-bob-y">
        <img src="assets/img/bee-2.webp" alt="" />
    </div>
    <div className="container">
        <div className="section-title text-center">
            <span>testimonials</span>
            <h2>Parent's words are the key  <br />  to happy kids</h2>
        </div>
        <div className="testimonial-items ">
        <div class="icon">
            <img src="assets/img/quote.webp" alt="" />
        </div>
        <div className="testimonial-bg"></div>
        <div className="testimonial-content">
        <p>Corquent per conubia nostra, per inceptos himenaeos. Suspendisse gravida vitae nisi Class aptent taciti sociosqu ad litora</p>
        <h6>Esther Howard</h6>
        </div>
        </div>
    </div>
  </div>
  </>
  )
}

export default Testimonial