import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const CatList = ({cats, match}) => {
    return (
        <ul className="list-group">
            {cats.map(cat =>
                <li className="list-group-item" key={cat.id}>
                    <Link to={`${match.url}/${cat.id}`}>{cat.name}</Link>
                </li>
            )}
        </ul>
    );
};

CatList.propTypes = {
    cats: PropTypes.array.isRequired,
};

export default CatList;
