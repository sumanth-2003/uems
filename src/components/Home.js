import React from 'react'
import Footer from './Footer'
import Headers from './Header'
const Home = () => {
  return (
    <div>
      <div>
        <div className="container">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://source.unsplash.com/random/900x400" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://source.unsplash.com/random/900x400" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://source.unsplash.com/random/900x400/?pub" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="container">
          <h2 className="mt-2">About Us</h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, deserunt alias minus adipisci, totam ex exercitationem quaerat perferendis asperiores repellendus blanditiis maiores ullam quod esse facilis nobis in repellat omnis. Reprehenderit, ut ad eligendi, perferendis dolore harum repellat similique quaerat sint molestiae fuga dolor accusantium suscipit aliquid, dicta odit perspiciatis id amet nemo ratione vitae nam alias iure molestias. Amet sequi eos minus tempora libero quidem voluptate quia quisquam aliquam, nulla aperiam, atque possimus? Voluptatibus dolorum ut delectus provident odio mollitia nemo consectetur asperiores illum aliquam voluptatum eveniet minus praesentium repellendus dignissimos optio omnis, recusandae perferendis porro cumque non harum!
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home