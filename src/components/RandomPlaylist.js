import { Component } from "react";
import axios from "axios";
import qs from "query-string";
import './RandomPlaylist.css';


class RandomPlaylist extends Component {
    state = {
        hasLoaded: false,
        randomPlaylist: null,
    }

    fetchPlaylist = async () => {
        try {
            const requestToken = btoa(
                `${"43b48990fbda4def83bc37769b427618"}:${"878344c6ea5745f5a2f44e09d7402b2a"}`
            );

            const response = await axios.post(
                "https://accounts.spotify.com/api/token",
                qs.stringify({ grant_type: "client_credentials" }),
                {
                    headers: {
                        Authorization: "Basic " + requestToken,
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );

            const token = response.data.access_token;

            const playlist = await axios.get(
                `https://api.spotify.com/v1/search?q=${this.props.demonym}&type=playlist`,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            this.setState({
                hasLoaded: true,
                randomPlaylist: playlist.data.playlists.items[0]
            })
        } catch (err) {
            console.error(err);
            this.setState({
                hasLoaded: true,
                randomPlaylist: null
            })
        }
    };

    componentDidMount() {
        this.fetchPlaylist()
    }

    formatURL(URL) {
        return URL.replace('.com/', '.com/embed/')
    }

    render() {
        console.log(this.state.randomPlaylist);
        if (this.state.randomPlaylist === null || this.state.randomPlaylist === undefined) {
            return (<div>
            <img src='https://blog.influx.com.br/storage/app/media/uploaded-files/music.jpeg' alt='not-found-img' id='not-found-img'/>
            <h1>Songs from this country not found</h1>
            </div>)
        } else {
            return (
                <div>
                    <iframe
                        src={this.formatURL(this.state.randomPlaylist.external_urls.spotify)}
                        title={this.state.randomPlaylist.name}
                    ></iframe>
                    <h1>Playlist of songs from {this.props.name} or the most listened songs</h1>
                </div>
            )
        }
    }
}

export default RandomPlaylist;
