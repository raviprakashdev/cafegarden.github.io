import React from 'react';
import Axios from "axios";


class Blogs extends React.Component {

    state = { newsData: [] }
    componentDidMount() {
        const URL = "https://newsapi.org/v2/everything?q=cake&coffee&icecream&At&apiKey=5526443836a6448abb0eec00ba91a67c"
        Axios.get(URL).then(res => {
            this.setState({ newsData: res.data.articles });
            console.log(res.data.articles);

        })
    }

    render() {


        return (

            <div>
                
                {this.state.newsData.map(news =>
                    <div >
                        <div className="newsdv">
                            <h3 className="news">{news.title}</h3>
                            <h5 className="newsdescrip">{news.description}</h5>
                            <article>

                                <img className="newsimg" src={news.urlToImage} height={200} width={200} />




                            </article>
                        </div>

                        <br /> <br /><br />

                        <div>


                        </div>
                    </div>)}
            </div>



        )

    }
}



export default Blogs;
