

function CardImage(props){
    return(
        <div>
            <img className="image-card" src={props.file}/>
        </div>
    )
}

export default CardImage;