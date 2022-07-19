import React, { useEffect, useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import { StaticImage } from "gatsby-plugin-image"
import { TiArrowRight } from "@react-icons/all-files/ti/TiArrowRight"
import {FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin"
import {FaXingSquare} from "@react-icons/all-files/fa/FaXingSquare"
import {FaGithubSquare} from "@react-icons/all-files/fa/FaGithubSquare"
import {HiOutlineMail} from "@react-icons/all-files/hi/HiOutlineMail"
import { motion } from "framer-motion"

function Hero() {
  const [loading, setLoading] = useState(true);
  const [number, setNumber] = useState(0)
  const [projectsCount, setProjectsCount] = useState(0)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if(number >= 3) {
        setNumber(3);
      } else {
        setNumber(number + 0.1);
      }
    }, 100)
  }, [number])


  useEffect(() => {
    let counter = setTimeout(() => {
      if(projectsCount >= 8) {
        setProjectsCount(8);
      } else {
        setProjectsCount(projectsCount + 0.1);
      }
    }, 30)
     return () => clearTimeout(counter)
  }, [projectsCount])



  const containerLoadingScreen = {
    hidden: {
      opacity: 0,    
    },
    visible: {
      opacity: 1, 
      transition: {
        staggerChildren: .3,
        ease: "easeOut",
        duration: .2,
      },
    },
  }

  const loadingScreenBlock = {
    hidden: { 
      y: 0
    },
    visible: {
      y: -80,
      transition: {
        duration: .5, 
      }
    },
  }

  const logo = {
    hidden: {
      opacity: 0,
      y: -40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: .5,
      }
    }
  }
  const headline = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
    }
  }

  const container = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      transition: {
        ease: "easeOut",
        delay: .5,
        when: "beforeChildren",
      },
      opacity: 1,
      y: 0,
    }
  }

  const data = useStaticQuery(graphql`
  {
    allFile(filter: {extension: {eq: "pdf"}}) {
      edges {
        node {
          absolutePath
          publicURL
        }
      }
    }
  }
`)
 const {publicURL} = data.allFile.edges[0].node

  return (
    <>
    { loading ? 
    <motion.div initial="hidden" animate="visible" variants={containerLoadingScreen} className="loaderContainer">
      <motion.div initial="hidden" animate="visible" variants={loadingScreenBlock} className="revealBlock"></motion.div>
      <motion.p className="loader">Portfolio</motion.p>
    </motion.div> 
     :
     <div> 
    <header>
    <Container>
      <motion.p initial="hidden" animate="visible" variants={logo} className="logo">Bennet</motion.p>
      <Row>
        <Col xs={12} lg={6} className="heroContent">
        <motion.div initial="hidden" animate="visible" variants={container}>
          <h1><span>Hey &#128075;<br />I'm Bennet Schwarz</span><br />I am a Frontend Developer</h1>
        <Link to="#body" className="heroBtn"><strong>Portfolio</strong> <TiArrowRight /></Link>
        <motion.div variants={headline} className="heroData">
        <div className="heroDataContainer">
        <p className="number-experience">{number >= 3 ? number.toFixed(0) : number.toFixed(1)}</p>
        <p className="text-experience">Years<br />Experience</p>
        </div>
        <div className="heroDataContainer">
        <p className="number-experience">{projectsCount >= 8 ? projectsCount.toFixed(0) : projectsCount.toFixed(1)}</p>
        <p className="text-experience">Successful<br />Projects</p>
        </div>
        </motion.div>
        <motion.div variants={headline}>
          <div className="links">
          <p className="mb-0">Links</p> 
          <div className="line"></div> 
          <a href="https://www.linkedin.com/in/bennet-schwarz-16901b245/" rel="noopener noreferrer" target="_blank" aria-label="linkedIn Profil"><FaLinkedin className="social-media-icon" /></a>
          <a href="https://www.xing.com/profile/Bennet_Schwarz" rel="noopener noreferrer" target="_blank" aria-label="Xing Profil"><FaXingSquare className="social-media-icon" /></a>
          <a href="https://github.com/B3NT0X?tab=repositories" rel="noopener noreferrer" target="_blank" aria-label="Github Profil"><FaGithubSquare className="social-media-icon" /></a>
          <div className="line short"></div>
          <a className="lebenslauf" href={publicURL} download>Get CV</a>
          </div>
        </motion.div>
        </motion.div>
        </Col>
        <Col xs={12} lg={6} className="heroImageWrapper">
          <StaticImage className="heroImage" src="../images/Studio_02.jpg" alt="Portrait" />
        </Col>
      </Row>
    </Container>
   </header>
   <div id="body">
    <Container className="contentContainer">
    <svg className="blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#2C3033" d="M36.1,-41.6C50.2,-31.2,67.3,-23.1,71.2,-11.1C75.1,0.9,65.6,16.7,56.4,32.5C47.2,48.4,38.2,64.4,25,69.8C11.7,75.1,-5.9,69.9,-23.9,64C-41.9,58.2,-60.2,51.8,-65.1,39.5C-69.9,27.1,-61.2,8.9,-57.3,-9.5C-53.3,-27.9,-54.1,-46.6,-45.3,-57.9C-36.5,-69.3,-18.3,-73.3,-3.6,-68.9C11,-64.6,22,-52,36.1,-41.6Z" transform="translate(100 100)" />
    </svg>
      <Row>
        <Col xs={12} lg={6} className="welcomeContainer order-lg-1"> 
          <h2>Welcome</h2>
          <p className="welcomeText">My name is Bennet Schwarz. I'm passionate Frontend Web Developer and I love building and designing digital experiences using various technologies. Currently, I'm focused on building a recipe app with NextJs and Typescript.</p>
          <p className="welcomeText margin-bottom">I will love to hear from you. Whether it's a project, job opportunity, or just a chat. Feel free to contact me.</p>
        </Col>
        <Col xs={12} lg={6} className="skillsContainer">
        <h2>Skills</h2>
        <div className="progressContainer">
        <ul className="progressList">
          <li>Js</li>
          <li>ReactJs</li>
          <li>GatsbyJs</li>
          <li>NextJs</li>
          <li>UX&amp;UI</li>
        </ul>
        <div className="progressBar">
          <div className="rectangle yellow">
          </div>
          <div className="rectangle orange">
          </div>
          <div className="rectangle red">
          </div>
          <div className="rectangle blue">
          </div>
          <div className="rectangle green">
          </div>
        </div>
        <div className="progressBar">
          <div>
          </div>
          <div className="rectangle yellow">
          </div>
          <div className="rectangle orange">
          </div>
          <div className="rectangle red">
          </div>
          <div className="rectangle blue">
          </div>
          <div className="rectangle green">
          </div>
        </div>
        <div className="progressBar">
          <div>
          </div>
          <div className="rectangle yellow">
          </div>
          <div className="rectangle orange">
          </div>
          <div className="rectangle red">
          </div>
          <div className="rectangle blue">
          </div>
          <div className="rectangle green">
          </div>
        </div>
        <div className="progressBar">
          <div>
          </div>
          <div className="rectangle yellow">
          </div>
          <div className="rectangle orange">
          </div>
          <div className="rectangle red">
          </div>
          <div className="rectangle">
          </div>
          <div className="rectangle">
          </div>
        </div>
        </div>
      </Col>
      </Row>
    </Container>
    <Container className="projectsContainer">
      <Row>
        <h2>Projects</h2>
        
        <Col xs={12} md={6} lg={4} className="projectContainer">
        <StaticImage src="../images/Bild2.jpg" className="projectImg" alt="Projekt1" />
        <div className="overlay">
          <a href="https://urbanke.net/">Urbanke<span><TiArrowRight /></span></a>
          </div>        
        </Col>
        <Col xs={12} md={6} lg={4} className="projectContainer">
        <StaticImage src="../images/HelixMedia1.jpg" className="projectImg" alt="Projekt2" />
        <div className="overlay">
          <a href="https://helix-media.de/">HelixMedia<span><TiArrowRight /></span></a>
          </div>       
        </Col>
        <Col xs={12} md={6} lg={4} className="projectContainer">
        <StaticImage src="../images/TodoApp1.jpg" className="projectImg" alt="Projekt3" />  
        <div className="overlay">
          <a href="https://competent-booth-bb49f5.netlify.app/">TodoApp<span><TiArrowRight /></span></a>
          </div>     
        </Col>
        <Col xs={12} md={6} lg={4} className="projectContainer">
        <StaticImage src="../images/viewEscape2.jpg" className="projectImg" alt="Projekt4" />  
        <div className="overlay">
          <a href="https://b3nt0x.github.io/Clear-View-Escapes/">Clear View Escape<span><TiArrowRight /></span></a>
          </div>     
        </Col>
        <Col xs={12} md={6} lg={4} className="projectContainer">
        <StaticImage src="../images/pappzarapp.jpg" className="projectImg" alt="Projekt5" /> 
        <div className="overlay">
          <a href="https://pappzarapp.de/">Pappzarapp<span><TiArrowRight /></span></a>
        </div>      
        </Col>
        <Col xs={12} md={6} lg={4} className="projectContainer">
        <StaticImage src="../images/kling-binder.jpg" className="projectImg" alt="Projekt6" /> 
        <div className="overlay">
        <a href="https://www.kling-binder.de/">Sabine Kling-Binder Psychotherapie<span><TiArrowRight /></span></a>  
        </div>      
        </Col>
      </Row>
    </Container>
   </div>
   <footer className="footer">
      <StaticImage src="../images/PortraitBG.png" className="footerImage" alt="Projekt7" /> 
      <div className="footer-container">
      <p><strong>Write me</strong></p>
      <a href="mailto:bennet@commun-it.net">bennet@commun-it.net<span><HiOutlineMail /></span></a>
      </div>
      <div className="imprint">
        <Link to="/impressum">Impressum + Datenschutz</Link>
      </div>
   </footer>
   </div>
      }
   </>
  )
}

export default Hero

