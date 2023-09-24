import {Navbar, Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FavoriteButton from '../../favorites/components/FavoriteButton';

import { useSelector } from "react-redux";
import { favoritesSelector } from "../store/favoriteSelectors";


const FavoriteMeals = () => {
    const favorites = useSelector(favoritesSelector);

    return (
        <Container fluid className='min-vh-100 d-grid'>
                    <Navbar className="bg-body-tertiary">
                            <Container>
                                <Link to="/" className="navbar-brand">Back to all Categories</Link>
                            </Container>
                    </Navbar>
                    <Container>
                        <Row className='p-5 mt-4'>
                                {favorites.map((meal) => (
                                    <Col key={meal.strMeal} xs={12} sm={12} md={6} lg={4} xl={4} className='text-left'>
                                        <FavoriteButton meals={meal}/>
                                        <Link to={`/category/${meal.categoryName}/${meal.idMeal}`}>
                                        <Card style={{ width: '18rem' }} className='m-4 p-3'>
                                        <Card.Img variant="top" src={`${meal.strMealThumb}`} />
                                        <Card.Body>
                                        <Card.Title>{meal.strMeal}</Card.Title>
                                        <Button variant="primary">See full recipe</Button>
                                        </Card.Body>
                                        </Card></Link>
                                    </Col>
                                ))}
                        </Row>
                    </Container>
        </Container>
    )
}

export default FavoriteMeals;