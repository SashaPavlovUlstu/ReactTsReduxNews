import cs from "./Container.module.scss"
import type { FC } from 'react';
import "../../styles/style.scss"
interface ContainerProps {
  className?:string;
  children?: any;
}
const Container: FC<ContainerProps> = ({className,children})=> {
  return (
    <div className={`${cs.container} ${className}`}>
      {children}
    </div>
  );
};

export default Container;