import { FC } from "react";

interface IProps {
    onClick: () => void;
}

const Button: FC<IProps> = ({ onClick }) => {
    console.log("Running Button");

    return <button onClick={onClick}>Click me</button>;
};

export default Button;
