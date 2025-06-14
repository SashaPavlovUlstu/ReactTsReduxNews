import cs from '../Header/Header.module.scss';
import type { FC } from 'react';

interface InputProps{
    className?: string;
    type?: 'text' | 'number';
    placeholder?: string;
    value?:string;
    onChange?:(value:string) => void;
}
const Input: FC<InputProps> = ({className,type,placeholder,value,onChange}) => {
  return (
    <div>
      <input onChange={(e=> onChange && onChange(e.target.value) )} value={value} className={`${cs.input} ${className || ""}`} type={type} placeholder={placeholder}/>
    </div>
  );
};

export default Input;