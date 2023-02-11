import React from 'react'

const footer = () => {
  return (
    <div>
                <section id="footer">
          <section id="banner">
            <div className="container-fluid" id="banner-container">
              <div className="row" id="banner-row">
                <div className="col-md-4" id="footer-col1">
                  <h3>My Website</h3>
                  <p>
                    At XYZ we believe that customers should always get
                    easy-to-use, best in the kind and fast services.xyz has
                    achieved standards which helps customer to achieve satisfaction
                    and realize value for their hard earned money.
                  </p>
                </div>
                <div className="col-md-4" id="footer-col2">
                  <h3>Contact Us</h3>
                  <p>Call Us- 000-0000-000</p>
                  <p>Email Us- nakirikantisumanth@gmail.com</p>
                </div>

                <div className="col-md-4 justify-content-center d-flex align-items-center" id="footer-col3">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/feed/"><i className="fab fa-2x  fa-linkedin me-2" /></a>&nbsp;
  <a target="_blank" rel="noreferrer" href="https://github.com/"><i className="fab fa-2x fa-github me-2" /></a>&nbsp;
<a target="_blank" rel="noreferrer" href="/"><i className="fab fa-2x fa-instagram" /></a>   
                </div>



                {/* <div className="col-md-4" id="footer-col3">
                <ul className="nav col-md-2">
<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/feed/"><i className="fab fa-2x  fa-linkedin me-2" /></a>&nbsp;
  <a target="_blank" rel="noreferrer" href="https://github.com/"><i className="fab fa-2x fa-github me-2" /></a>&nbsp;
<a target="_blank" rel="noreferrer" href="/"><i className="fab fa-2x fa-instagram" /></a>          
                </ul>
                </div> */}
              </div>
            </div>
          </section>
        </section>
        <style dangerouslySetInnerHTML={{__html: "\n        #banner-container{\n    background-color: #0a193d;\n    color: white !important;\n    padding-top: 50px;\n    padding-bottom: 50px;\n      \n}\n#banner-row img{\n    max-width: 70%;\n    height: auto;\n    display: block;\n    padding-left: 30px;\n}\n#banner-row h3, p{\n    padding-left: 20px;\n    padding-top: 20px;\n    text-align: center;\n}\n.mb-3{\n  padding-top: 10px;\n}\n " }} />
    </div>
  )
}

export default footer