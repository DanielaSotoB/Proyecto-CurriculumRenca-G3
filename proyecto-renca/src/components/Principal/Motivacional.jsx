

const Motivacional = () => {
    return (
        <div className="container p-4 text-center"
            style={{ borderRadius: '12px', overflow: 'hidden', backgroundColor: 'rgba(50, 150, 250, 0.9)', marginBottom: '30px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div className="col-12 card-body">
                <h2 className="card-title text-white">¡Descubre el poder del aprendizaje!</h2>
                <p className="card-text text-white-50">Cada nuevo conocimiento es un paso más hacia el crecimiento y el éxito.
                    Atrévete a tomar un curso y desbloquea tu potencial.</p>
                <a href="/CursosDispo" className="btn btn-outline-light">Explora nuestros cursos</a>
            </div>
        </div>
    );
}

export default Motivacional;
