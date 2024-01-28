import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectLink }) => {
  const handleClick = () => {
    if(projectLink){
      window.open(projectLink, "_blank", "noopener,noreferrer");

    }
  };

  return (
    <Col size={12} sm={6} md={4} onClick={handleClick}>
      <div className="proj-imgbx">
        <img src={imgUrl} />

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={projectLink} target="_blank" rel="noopener noreferrer"></a>


        </div>
      </div>
    </Col>
  )
}
