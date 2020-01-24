import React from 'react';

const ListItem = ({author, handleSelection}) => {

    return (
        <li onClick={(e) => handleSelection(e)}>
            <img src={`${author.image}`} alt={`${author.name}`} />
        </li>
    )
}

export default ListItem;