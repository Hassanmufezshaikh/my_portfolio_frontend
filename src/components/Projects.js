import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/fruits.png";
import projImg2 from "../assets/img/cad_design.png";
import projImg3 from "../assets/img/portfolio.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Projects = () => {

  const projects = [

    {
      title: "Star Fruits",
      description: "Design, Development & Deployed",
      imgUrl: projImg1,
      projectLink: "https://starfruits.000webhostapp.com/",
    
    },
    {
      title: "Cad Design",
      description: "In Progress",
      imgUrl: projImg2,
      // projectLink: "https://google.com/",

    },
    {
      title: "My Portfolio",
      description: "Build & Deployed",
      imgUrl: projImg3,
      projectLink: "https://hassanmufez-portfolio.netlify.app/",

    },

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I'm actively building my portfolio, featuring a mix of tech projects, including a company advertisement project, a community forum, and various DevOps endeavors. Details about these projects are provided below..</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">About</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
  
                            <Row class="headings">
                              <Col lg={4} md={12} xl={4}>
                              <h3 >Star Fruits Landing Page</h3>
                              </Col>
                              <Col lg={4} md={12} xl={4}>
                              <h3 >Cad Design Landing Page</h3>
                              </Col>
                              <Col lg={4} md={12} xl={4}>
                              <h3 >My Portfolio</h3>
                              </Col>
                            </Row>
                        {
                          
                          projects.map((project, index) => {
                            
                            return (
                             
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <div  style={{ color: 'grey',paddingLeft: '10px',fontSize:'20px' }}>
      <ul>
      <li>Contributed to front-end and back-end development, ensuring responsive design, efficient data processing, and secure collaboration.
        </li>

        <li>
        Collaborated on an ERP project using React.js, Html, CSS, Javascript, PHP, Bootstrap ,FileZilla, Git, SSH Protocols and SQL.
        </li>
       
        <li>
        Resulted in an effective ERP system, enhancing operational productivity.
        </li>
        <li>
        Efficiently manage deployments, minimize risks, and optimize SQL queries for impactful data solutions.
        </li>
        <li>
        Our commitment to environmental sustainability and proactive issue resolution sets us apart. 
        </li>
        <li>
        Engage us for reliable technical support and strategic data initiatives in Edutech. 
        </li>
        <li>
        Taking an active role as a Scrum Master or staying informed about the progress of work.        </li>
        
    </ul>
      </div>


                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <div  style={{ color: 'grey',paddingLeft: '10px',fontSize:'20px' }}>
      <ul>
        <li>
          Experienced Web Developer with a solid 1 year track record, raising interset in DevOps.
        </li>
        <li>
          Demonstrates proficiency in the end-to-end management of cloud-based deployment in the server, coupled with a keen ability to mitigate risks seamlessly within ERP environments.
        </li>
        <li>
          Expertise extends to deploying and optimizing cutting-edge technologies, fine-tuning SQL queries for optimal performance, and ensuring robust data availability.
        </li>
        <li>
          Committed to collaborative team success, bringing a fervent passion for staying at the forefront of technology by embracing and implementing new DevOps techniques, fostering a culture of continuous improvement.
        </li>
        <li>
          Background in client engagement and a history of delivering exceptional technical support.
        </li>
        <li>
          Poised to contribute skills to innovative projects and eager to tackle challenges within the dynamic tech landscape, leveraging experience and adaptability to drive success in the DevOps community.
        </li>
        <li>
          Invites you to connect to explore synergies and discuss how the comprehensive skill set can bring significant value to your team. Initiating a conversation on how to mutually benefit from dedication to excellence and passion for innovation.
        </li>
      </ul>
    </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
