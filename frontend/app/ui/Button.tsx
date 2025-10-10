import { Link } from 'react-router';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  to?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const variantClasses = {
  primary:
    'bg-teal-700 text-white hover:bg-teal-800 transition-all duration-300',
  secondary: 'text-zinc-500 hover:text-zinc-500/80',
};

function Button({
  children,
  variant = 'primary',
  className = '',
  to,
  onClick = () => {},
}: ButtonProps) {
  if (to) {
    return (
      <Link
        to={to}
        className={`${variantClasses[variant]} cursor-pointer px-4 py-2 font-semibold ${className}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <>
      <button
        onClick={onClick}
        className={`${variantClasses[variant]} cursor-pointer px-4 py-2 font-semibold ${className}`}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
