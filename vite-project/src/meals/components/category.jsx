import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import categoryService from '../service/categoryService';
import FetchState from '../../components/FetchState/FetchState';
import {Navbar, Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FavoriteButton from '../../favorites/components/FavoriteButton';

const cS = new categoryService();

const Category = () => {
	const params = useParams();
	const { data, isLoading, isError, error } = useQuery(['category', params.categoryName], () => cS.getCategoryByName(params.categoryName));
	return (
		<Container fluid className='min-vh-100 d-grid'>
			<FetchState isLoading={isLoading} isError={isError} error={error}>
            <Navbar className="bg-body-tertiary">
                    <Container>
                    <Link to="/favorites" className="navbar-brand">
					<button>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stars" viewBox="0 0 16 16">
  					<path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
					</svg>
					Favorite Meals
					</button>
					</Link>
                    <Link to="/" className="navbar-brand"><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shop-window" viewBox="0 0 16 16">
  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
</svg> Return To All Categories</button></Link>
</Container>
                </Navbar>
            <Container>
                <Row className='p-5 mt-4'>
                        <h1><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tag-fill" viewBox="0 0 16 16">
  <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg> {params.categoryName} Meals</h1>
						{data?.map((meal) => (
							<Col key={meal.strMeal} xs={12} sm={12} md={6} lg={4} xl={4} className='text-left'>
                                <Card style={{ width: '18rem' }} className='m-4 p-3'>
                                <Link to={`/category/${params.categoryName}/${meal.idMeal}`}><Card.Img variant="top" src={`${meal.strMealThumb}`} />
                                <Card.Body>
                                <Card.Title>{meal.strMeal}</Card.Title>
                                <Button variant="primary">See full recipe</Button>
                                </Card.Body>
                                </Link>
                                <FavoriteButton meals={meal} categoryName={params.categoryName}/>
                                </Card>
							</Col>
						))}
				</Row>
				</Container>
			</FetchState>
		</Container>
	)
}

export default Category
