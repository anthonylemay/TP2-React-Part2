import {useQuery} from 'react-query'
import categoriesService from '../service/categoriesService'
import FetchState from '../../components/FetchState/FetchState';
import { Container, Row, Col, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const csS = new categoriesService()

const Categories = () => {
	const { data, isLoading, isError, error } = useQuery(['categories'], () => csS.getAllCategories());
	return (
		<Container fluid className='d-grid min-vh-100'>
			<FetchState isLoading={isLoading} isError={isError} error={error}>
				<Container>
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
                    </Container>
                </Navbar>
                    <h1 className='p-5 mt-4 text-center'>List of all meal categories</h1>
					<Row className='p-5 mt-4'>
						{data?.map((category) => (
							<Col key={category.strCategory} xs={12} sm={6} md={4} lg={3} xl={2}>
								<Link className='h6' to={`/category/${category.strCategory}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tag-fill" viewBox="0 0 16 16">
  <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>
									{category.strCategory}
								</Link>
							</Col>
						))}
					</Row>
				</Container>
				
			</FetchState>
		</Container>
	)
}

export default Categories