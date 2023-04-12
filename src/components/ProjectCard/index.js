import Card from 'react-bootstrap/Card';

function ProjectCard ({title, image, website, github}) {
    return (
        <Card>
        <Card.Body>
            <Card.Img src = {image} height="150px"/>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Weather Dashboard</Card.Subtitle>
          {/* <Card.Text>Weather app</Card.Text> */}
          <Card.Link href={website}>Application Link</Card.Link>
          <Card.Link href={github}>Github Repo</Card.Link>
        </Card.Body>
      </Card>
    )
}
export default ProjectCard; 