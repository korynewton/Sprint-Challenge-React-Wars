import React from 'react';

const StarWarsCard = (props) => {
    console.log(props.info)
    return (
        <div className={'card'}>
            <h2><strong>Name:</strong> {props.info.name}</h2>
            <h4><strong>Gender:</strong> {props.info.gender}</h4>
            <h4><strong>Birth Year:</strong> {props.info.birth_year}</h4>
            <h4><strong>Hair Color:</strong> {props.info.hair_color}</h4>
            <h4><strong>Mass:</strong> {props.info.mass}kg</h4>
            <h4><strong>Eye Color:</strong> {props.info.eye_color}</h4>
            <h4><strong>Skin Color:</strong> {props.info.skin_color}</h4>
        </div>
    )
}

export default StarWarsCard