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
                            /* Singola Card */
                            <div className="card" key={comic.id}>
                                <div className="img-container">
                                    <img src={comic.thumb} alt={comic.series} />
                                </div>
                                <h4>{comic.series}</h4>
                            </div>
                        ))}
                    </div>

                    <button className="load-more">LOAD MORE</button>
                </div>
            </div>
        </main>

    );

}

export default Main