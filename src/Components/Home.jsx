import React, { useState } from 'react';
import axios from 'axios';
import {Card,Col,Form, Button,Container,Row } from 'react-bootstrap';


const Home = () => {
  const [user, setUser] = useState("");
  const [weatherData, setWeatherData] = useState({
    data: {},
    error: false,
  });
  
  const handleSearch = (e) => {
    e.preventDefault(); 
    console.log(weatherData);
  

    const url = "https://api.openweathermap.org/data/2.5/weather";
    const apikey = 'e48c7fb754750ef7c6a8c449bb2d5c70';

    axios
      .get(url, {
        params: {
          q: user,
          appid: apikey,
          units: 'metric',
        },
      })
      .then((response) => {
        console.log(response);
        setWeatherData({
          data: response.data,
          error: false,
        });
        setUser('');
      })
      .catch((error) => {
        console.log("error occurs in fetching", error);
        setWeatherData({
          data: {},
          error: true,
        });
        setUser('');     
      }); 
  };

  return (
    <Container fluid className="mt-6 " style={{ maxWidth: '800px' }}>
    <Row className="flex justify-content-center">
      <Col xs={12} md={8} >
        <Card className='mb-4 city '>
          <Card.Header>Weather App</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSearch}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>City Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter City Name"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Search
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="d-flex justify-content-center">
      <Col xs={12} md={8}>
        <Card className='weather'>
          <Card.Header>Weather Results</Card.Header>
          <Card.Body>
            {weatherData.error ? (
              <p className="text-danger">Error fetching weather data</p>
            ) : (
              <>
              {/* <img src={`https://openweathermap.org/img/wn/${weatherData.data.weather[0]?.icon}.png`} alt={weatherData.data.weather[0].description} /> */}
                <p>City: {weatherData.data.name}</p>
                <p>Temperature: {weatherData.data.main?.temp}°C</p>
                <p>Humidity: {weatherData.data.main?.humidity}%</p>
                <p>Wind speed: {weatherData.data.wind?.speed} km/h</p>
              </>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
};

export default Home;