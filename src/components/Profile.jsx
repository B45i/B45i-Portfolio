const Profile = ({ name, title, links, imageUrl }) => {
    return (
        <div className="profile">
            <img className="profile-image" src={imageUrl} alt="" />

            <h1 className="profile-name">{name}</h1>
            <h3 className="profile-title">{title}</h3>

            <div className="profile-links">
                {(links || []).map(link => (
                    <a href={link.url} target="_blank">
                        <i className={link.iconClass}></i>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Profile;
