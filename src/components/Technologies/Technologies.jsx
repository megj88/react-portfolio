import React from 'react'
import "./technologies.css"
import {AiFillHtml5} from "react-icons/ai"
import {SiCss3} from "react-icons/si"
import {SiJavascript} from "react-icons/si"
import {FaGitSquare} from "react-icons/fa"
import {FaReact} from "react-icons/fa"
function Technologies() {
  return (
    <section id="technologies">
        <h5>Skills I have</h5>
      <h2>Technologies</h2>
<div className="container icons">
   <article className="experience__details"><AiFillHtml5 />
   </article>
   <article className="experience__details"> <SiCss3 />
  </article>
   <article className="experience__details"><SiJavascript />
 </article>
   <article className="experience__details"><FaGitSquare />
</article>
   <article className="experience__details"><AiFillHtml5 />
  </article>
   <article className="experience__details"><FaReact />
</article>




  
  
 

   </div>
    </section>
  )
}

export default Technologies
