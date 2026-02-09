import ComicsCard from './ComicsCard';
import comics from './comics.js'

function Main() {

    return (
        <main>
            <div className="jumbotron"></div>
            <div className="product-list">
                <div className="container">
                    <div className="current-series-btn">CURRENT SERIES</div>
                   <div className="cards-container">
                        {comics.map((comic) => (
                            <ComicsCard 
                                key={comic.id} 
                                thumb={comic.thumb} 
                                series={comic.series} 
                            />
                        ))}
                    </div>
                    <button className="load-more">LOAD MORE</button>
                </div>
            </div>
        </main>

    );

}

export default Main