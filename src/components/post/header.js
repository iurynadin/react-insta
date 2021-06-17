import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header({ username }) {
    return (
        <div className="flex border-b border-gray-primary h4 p-4 py-8">
            <div className="flex items-center">
                <Link to={`/p/${username}`} className="flex items-center">
                    <img
                        className="flex rounded-full h-9 w-9 mr-3"
                        src={`/images/avatars/${username}.jpg`}
                        alt={`${username}`}
                    />
                    <p className="font-bold">{username}</p>
                </Link>
            </div>
        </div>
    );
}

Header.propTypes = {
    username: PropTypes.string.isRequired,
};
