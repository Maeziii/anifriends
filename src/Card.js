const Card = ( {name, anime, aniName} ) => {
    return (  
        <div className="tc bg-washed-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${aniName}?200x200`} alt='robot'/>
            <div>
                <h2>{name}</h2>
                <p>{anime}</p>
            </div>
        </div>
    );
}

export default Card;