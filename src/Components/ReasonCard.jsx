import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ReasonCard(props) {
  const data = props.data;
  return (
    <Card style={{ maxWidth: '300px', margin: 5, border: 'none' }}>
      <Card.Header style={{ backgroundColor: '#EBC038', fontWeight: 'bold' }}>
        {data.Title}
      </Card.Header>

      <Card.Body>
        <Card.Text>{data.Desc}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ReasonCard;
