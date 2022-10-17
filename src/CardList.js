import Card from './Card';

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user, i) => {
        return <Card 
                    key={ i } 
                    id={ robots[i].id } 
                    name={ robots[i].name } 
                    anime={ robots[i].anime } 
                    aniName={ robots[i].aniName }/>
    })
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;