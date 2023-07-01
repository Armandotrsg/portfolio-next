import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export interface EduCardProps {
  name: string;
  date: string;
  gpa: string;
  title: string;
}

export const EduCard = ({ name, date, gpa, title }: EduCardProps) => {
  return (
    <Col xs={12} md={6} xl={4}>
      <Card className="educationCard">
        <Card.Body className="cardBody">
          <div>
            <Card.Title
              className={
                name === "Tecnológico de Monterrey, Campus Guadalajara"
                  ? "gradient-text-tec"
                  : "gradient-text-tecmilenio"
              }
              as={"h2"}
            >
              {name}
            </Card.Title>
            <Card.Subtitle as="p" className="mb-2 text-muted">
              {date}
            </Card.Subtitle>
            <Card.Text>
              {title}
              <br />
              {gpa}
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
