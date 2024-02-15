{/* SLIDER DE IMAGENES */}
const Principal = () => {
    return (
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                    <img src="https://codigofacilito.com/system/courses/thumbnails/000/000/340/original/python-thumb.jpg?1635347671" className="d-block w-100" alt="" />
                </div>

                <div className="carousel-item" data-bs-interval="3000">
                    <img src="https://pbs.twimg.com/media/FxyVouEXwAE-_Lc.jpg" className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item" data-bs-interval="3000">
                    <img src="https://codigofacilito.com/system/courses/thumbnails/000/000/311/original/Frame_23.png?1637690965" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Principal;
