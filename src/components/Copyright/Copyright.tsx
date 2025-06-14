import Container from '../Сontainer/Container.tsx';
import cs from "./Copyright.module.scss"
const Copyright = () => {
  return (
    <Container className={"marginTop111"}>
      <h1 className={cs.title}>Copyright 2021 News Portal</h1>
    </Container>
  );
};

export default Copyright;