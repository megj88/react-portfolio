import React from 'react'
import "./projects.css"
import Bari from "../../Assets/Bari.png"
import Weather from "../../Assets/Reactweather.png"
import Dictionary from "../../Assets/Dictionary.png"


function Projects() {
  return (
    <section id="projects">
         <h5>See My Work</h5>
      <h2>Projects</h2>
      <div className="projects__container">
        <div className="projects__card">
        <img
              src= {Bari}
              alt="Screenshot of travel app"
              class="img-fluid projects d-none d-lg-block"
              title="Responsive Web Page Image"
            />
            <h4 class="mt-2">Responsive Web Page</h4>
            <p>
              A fully responsive web page created with grids and responsive images. This project was created for the purpose of learning responsive web design. 

              <br /><br />
              For this project I used:
            </p>
            <div class="images pb-2">HTML, CSS</div>
            <div className="portfolio__cta">
            <a
              href="https://bari-travel-page.netlify.app//"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              title="Preview my responsive webpage"
              >Preview</a
            >
            
            <a
              href="https://github.com/megj88/travel-page"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              title="See my code on GitHub"
              >Github</a
            >
        </div>
        </div>
  
          <div className="projects__card">
            <img
              src={Weather}
              alt="Screenshot of weather app"
              class="img-fluid projects d-none d-lg-block"
              title="Weather App Image"
            />
            <h4 class="mt-2">Weather App</h4>
            <p>
             A weather app built using React.Js and connecting to a weather API.
              <br /><br />
              For this project I used:
            </p>
            <div class="images pb-2">HTML, CSS, React.JS</div>
            <div className="portfolio__cta">
            <a
              href="https://delightful-rugelach-bc18da.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              title="Preview my weather app"
              >Preview</a
            >
            
            <a
              href="https://github.com/megj88/react-weather-search"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              title="See my code on GitHub"
              >Github</a
            >
</div>

      </div>
      <div className="projects__card">
            <img
              src={Dictionary}
              alt="Screenshot of dictionary app"
              class="img-fluid projects d-none d-lg-block"
              title="Dictionary App Image"
            />
            <h4 class="mt-2">Dictionary App</h4>
            <p>
             A dictionary app built using React.JS, that makes two seperate API calls. 
             One to access definitions, synonyms, and phonetics. Another to search for related images. 
              <br /><br />
              For this project I used:
            </p>
            <div class="images pb-2">HTML, CSS, Bootstrap, React.JS</div>
            <div className="portfolio__cta">
            <a
              href="https://heartfelt-marshmallow-86de8c.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              title="Preview my dictionary app"
              >Preview</a
            >
            
            <a
              href="https://github.com/megj88/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              title="See my code on GitHub"
              >Github</a
            >
</div>

      </div>
      </div>
    </section>
  )
}

export default Projects
