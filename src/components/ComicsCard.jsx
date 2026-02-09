

function ComicsCard({ thumb, series }) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={thumb} alt={series} />
            </div>
            <h4>{series}</h4>
        </div>
    );
}

export default ComicsCard