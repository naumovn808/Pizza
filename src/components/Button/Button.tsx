import { ButtonProps } from "./Button.props";
import cn from 'classnames';
// import { FC } from 'react';


// export const ButtonAlt: FC<ButtonProps> = ({ children, className, ...props }) => {
//     return (
//         <button className={cn("button accent", className)} {...props}>{children}</button>
//     );
// }


function Button({ children, className, ...props }: ButtonProps) {
    return (
        <button className={cn("button accent", className)} {...props}>{children}</button>
    );
}

export default Button;