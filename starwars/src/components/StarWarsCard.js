import React from 'react';

const StarWarsCard = (props) => {
    console.log(props.info)
    return (
        <div className={'card'}>
            <h2>{props.info.name}</h2>
            <p><strong>Gender:</strong> {props.info.gender}</p>
            <p><strong>Birth Year:</strong> {props.info.birth_year}</p>
            <p><strong>Hair Color:</strong> {props.info.hair_color}</p>
            <p><strong>Mass:</strong> {props.info.mass}kg</p>
            <p><strong>Eye Color:</strong> {props.info.eye_color}</p>
            <p><strong>Skin Color:</strong> {props.info.skin_color}</p>
        </div>
    )
}

export default StarWarsCard