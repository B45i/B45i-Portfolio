const TimeLine = ({ title, entries }) => {
    return (
        <div className="timeline-card">
            <h3>{title}</h3>
            <ul className="mt-1">
                {(entries || []).map(entry => (
                    <li className="card-item" key={entry.title}>
                        <div className="timeline-title">
                            <h4 className="title-secondary">{entry.title}</h4>
                            <p>{entry.timePeriod}</p>
                        </div>

                        {!!entry.subText && <p>{entry.subText}</p>}

                        {!!(entry.badges || []).length && (
                            <div className="badges">
                                {entry.badges.map(badge => (
                                    <span className="badge">{badge}</span>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TimeLine;
