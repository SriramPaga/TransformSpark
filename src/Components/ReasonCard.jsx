import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ReasonCard(props) {
  const data = props.data;
  return (
    <Card style={{ maxWidth: '300px', margin: 5 }}>
      <Card.Header>{data.Title}</Card.Header>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Text>{data.Desc}</Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default ReasonCard;
