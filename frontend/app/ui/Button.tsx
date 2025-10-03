interface ButtonProps {
    children: React.ReactNode
    variant?: 'primary' | 'secondary'
    className?: string
}

function Button({ children, variant = 'primary', className = '' }: ButtonProps) {
    return (
        <>
            <button className={`${variant === 'primary' ? 'bg-[#198ed7] text-white' : 'text-zinc-500'} cursor-pointer px-4 py-2 font-semibold ${className}`}>{children}</button>
        </>
    );
}

export default Button;