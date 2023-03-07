const Playlist = (props) => {
    return <div className="playlist">
        <h1>Playlist</h1>
        <button>Downlod all</button>
        <button>Play all</button>
        {props.children}
    </div>
}
export default Playlist