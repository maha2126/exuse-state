const Song = (props) =>{
    const {title,singer,duration} = props

    return <div className="song">
        <h3>{title}</h3>
        <p>By {singer}</p>
        <p>{duration} min</p>
        <button>Play</button>
        <button>Downlod</button>
    </div>
}

export default Song