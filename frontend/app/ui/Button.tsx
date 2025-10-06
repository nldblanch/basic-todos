import { Link } from "react-router";

interface ButtonProps {
    children: React.ReactNode
    variant?: 'primary' | 'secondary'
    className?: string
    to?: string
}

const variantClasses = {
    primary: 'bg-[#198ed7] text-white hover:bg-[#198ed7]/80',
    secondary: 'text-zinc-500 hover:text-zinc-500/80'
}

function Button({ children, variant = 'primary', className = '', to }: ButtonProps) {
    if (to) {
        return (
            <Link to={to} className={`${variantClasses[variant]} cursor-pointer px-4 py-2 font-semibold ${className}`}>{children}</Link>
        )
    }
    return (
        <>
            <button className={`${variantClasses[variant]} cursor-pointer px-4 py-2 font-semibold ${className}`}>{children}</button>
        </>
    );
}

export default Button;