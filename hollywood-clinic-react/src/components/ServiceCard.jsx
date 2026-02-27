import { Link } from 'react-router-dom';

export default function ServiceCard({ icon: Icon, title, description, linkTo = "/services" }) {
    return (
        <Link to={linkTo} className="glass-card p-10 flex flex-col h-full group">
            <div className="text-primary mb-6 transition-transform duration-300 group-hover:scale-110">
                {Icon && <Icon size={48} strokeWidth={1.5} />}
            </div>
            <h3 className="font-heading text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-text-muted leading-relaxed flex-grow">{description}</p>
        </Link>
    );
}
