import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  return (
    <div>
      <h1 className='title'>연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col className='list-container'>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
