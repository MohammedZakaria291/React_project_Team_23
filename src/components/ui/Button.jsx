import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  secondary: 'bg-white/20 text-white hover:bg-white/30',
  outline: 'bg-white text-primary border border-gray-200 hover:bg-gray-50',
};

function Button({ children, to, href, variant = 'primary', className = '', ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
