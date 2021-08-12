import { Component } from "react";
import axios from 'axios'

class RandomCardArtist extends Component{
    state = { 
        artist:"",
        imgArtist:""
    }
    componentDidMount(){
           
    const options = {
    method: 'GET',
    url: 'https://theaudiodb.p.rapidapi.com/search.php',
    params: {s:this.props.artistName},
    headers:{
        'x-rapidapi-key':"d3cc5e807amsh60e1b2222e08699p178b42jsna1cc25c337c8",
        'x-rapidapi-host':'theaudiodb.p.rapidapi.com'
    }
    };
    axios.request(options).then((result)=>{
        this.setState({
            artist:result
        })
        console.log(result.data)
    }).then(()=>{
        this.setState({
            imgArtist:this.state.artist
        })
        
    })
    }

    render(){
        console.log(this.params)
        //console.log(this.state.artist)
        return(
            <div><img src={""} alt="artist-img"/></div>
        )
    }
}

export default RandomCardArtist