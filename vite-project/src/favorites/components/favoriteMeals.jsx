import {Navbar, Container, Row, Col, Button, Card} from 'react-bootstrap';
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
                            <Link to="/" className="navbar-brand"><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shop-window" viewBox="0 0 16 16">
  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
</svg> Return To All Categories</button></Link>
                    </Container>
                    </Navbar>
                    <Container>
                        <h1 className="d-flex mx-auto justify-content-center align-items-center">Your favorite Meals</h1>
                    <Row className='p-5 mt-4'>
                    {favorites.length === 0 ? (
                        <Col xs={12} className='text-center'>
                            
                            <h3 className="mb-4">No favorite meals added to your list yet. Keep cooking!</h3>
                            <Link to="/" className="navbar-brand"><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shop-window" viewBox="0 0 16 16">
  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
</svg> Browse our categories</button></Link>
                        </Col>
                    ) : (
                        favorites.map((meal) => (
                            <Col key={meal.strMeal} xs={12} sm={12} md={6} lg={4} xl={4} className='text-left'>
                                <Card style={{ width: '18rem' }} className='m-4 p-3'>
                                <Link to={`/category/${meal.categoryName}/${meal.idMeal}`}>
                                    
                                        <Card.Img variant="top" src={`${meal.strMealThumb}`} />
                                        </Link>
                                         
                                        <Card.Body>
                                        <Link to={`/category/${meal.categoryName}/${meal.idMeal}`}><Card.Title>{meal.strMeal}</Card.Title></Link>
                                            <Link to={`/category/${meal.categoryName}`} className="navbar-brand"><Card.Text className="text-center"><b>Category:</b> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tag-fill" viewBox="0 0 16 16">
  <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>{meal?.categoryName}</Card.Text></Link>
<Link to={`/category/${meal.categoryName}/${meal.idMeal}`}><Button variant="primary">See full recipe</Button></Link>
                                        </Card.Body>
                                        <FavoriteButton meals={meal}/>
                                    </Card>
                                
                            </Col>
                        ))
                    )}
                </Row>
                    </Container>
        </Container>
    )
}

export default FavoriteMeals;