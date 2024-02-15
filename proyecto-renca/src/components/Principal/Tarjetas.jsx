

const Tarjetas = () => {
    return (
        <div className="container py-4">
            <div className="row row-cols-3 g-4">
                <div className="col">
                    <div className="card">
                        <img className="card-img-top" src="https://edteam-media.s3.amazonaws.com/specialities/original/435ca535-2522-4c30-9764-f35e9e4e3ae0.png" alt="Curso Básico PYTHON" />
                        <div className="card-body">
                            <h1 className="h5 card-title">Curso Básico PYTHON</h1>
                            <p className="card-text">Duración: 10 horas</p>
                            <a href="info.html" className="btn btn-primary">Ir al curso</a>
                        </div>
                    </div>
                </div>
                {/* TARJETA 2 */}
                <div className="col">
                    <div className="card">
                        <img className="card-img-top" src="https://edteam-media.s3.amazonaws.com/courses/original/a1a1984b-d7c7-4fdd-b176-6647819d3d2e.png" alt="Curso Básico Scratch" />
                        <div className="card-body">
                            <h1 className="h5 card-title">Curso Básico Scratch</h1>
                            <p className="card-text">Duración: 3 horas</p>
                            <a href="#" className="btn btn-primary">Ir al curso</a>
                        </div>
                    </div>
                </div>
                {/* TARJETA 3 */}
                <div className="col">
                    <div className="card">
                        <img className="card-img-top" src="https://edteam-media.s3.amazonaws.com/courses/original/1bada4e8-4bab-4be8-8f2e-83e285515187.png" alt="Curso Básico Arduino" />
                        <div className="card-body">
                            <h1 className="h5 card-title">Curso Básico Arduino</h1>
                            <p className="card-text">Duración: 5 horas</p>
                            <a href="#" className="btn btn-primary">Ir al curso</a>
                        </div>
                    </div>
                </div>
                {/* TARJETA 4 */}
                <div className="col">
                    <div className="card">
                        <img className="card-img-top" src="https://edteam-media.s3.amazonaws.com/courses/big/152be9d3-4704-4639-b399-203a76a286c5.jpg" alt="Curso Básico Java" />
                        <div className="card-body">
                            <h1 className="h5 card-title">Curso Básico Java</h1>
                            <p className="card-text">Duración: 7 horas</p>
                            <a href="#" className="btn btn-primary">Ir al curso</a>
                        </div>
                    </div>
                </div>
                {/* TARJETA 5 */}
                <div className="col">
                    <div className="card">
                        <img className="card-img-top" src="https://edteam-media.s3.amazonaws.com/courses/original/506ead68-9257-44c7-8ff8-2d0c320b99dd.jpg" alt="Curso Básico Excel" />
                        <div className="card-body">
                            <h1 className="h5 card-title">Curso Básico Excel</h1>
                            <p className="card-text">Duración: 7 horas</p>
                            <a href="#" className="btn btn-primary">Ir al curso</a>
                        </div>
                    </div>
                </div>
                {/* TARJETA 6 */}
                <div className="col">
                    <div className="card">
                        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_FeHat2EE3hkIvYfCpL9-IHyB9fluBCmxw&usqp=CAU" alt="Curso Básico AWS" />
                        <div className="card-body">
                            <h1 className="h5 card-title">Curso Básico AWS</h1>
                            <p className="card-text">Duración: 7 horas</p>
                            <a href="#" className="btn btn-primary">Ir al curso</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tarjetas;
