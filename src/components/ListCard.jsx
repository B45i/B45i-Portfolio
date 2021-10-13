const ListCard = ({ title, entries }) => {
    return (
        <div className="list-card">
            <h3>{title}</h3>
            <ul className="list">
                {(entries || []).map(entry => (
                    <li key={entry.title}>
                        <p>
                            <a
                                target="_blank"
                                href={entry.url ? entry.url : '#'}
                            >
                                {entry.title}
                            </a>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListCard;
