import Header from '../components/Header/Header.tsx';
import Container from '../components/Сontainer/Container.tsx';
import Copyright from '../components/Copyright/Copyright.tsx';

const ErrorPage = () => {
  return (
    <Container>
      <Header showInputWrapper={false}/>
      <div>page not found</div>
      <Copyright/>
    </Container>
  );
};

export default ErrorPage;