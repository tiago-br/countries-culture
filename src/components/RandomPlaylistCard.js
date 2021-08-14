

const RandomPlaylistCard = (props)=>{

    if (this.state.randomPlaylist === null) {
        return (<div></div>)
    }else{
    return (
        <div>
            <iframe
                src={props.randomPlaylist}
                title={props.playListName}
            ></iframe>
        </div>
    )
    }
}

export default RandomPlaylistCard