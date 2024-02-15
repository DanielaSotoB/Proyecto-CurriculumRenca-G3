import './info.css'

const CursoInformacion = () => {
    return (
        <div className="container py-4">
            <div className="container py-4">
                <div className="position-relative py-4">
                    {/* Primera tarjeta */}
                    <div className="container p-4 d-flex justify-content-start align-items-center position-absolute top-0 start-0" style={{ borderRadius: '12px', overflow: 'hidden', backgroundColor: 'rgba(223, 230, 238, 0.9)', marginBottom: '30px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <div className="col-12 card-body">
                            <h1 className="card-title text-start" style={{ color: '#2c3e50', fontSize: '48px' }}>Curso Básico Python</h1>

                            <h4 className="card-subtitle mb-3 text-start" style={{ color: '#34495e', fontSize: '20px' }}>Python es un lenguaje de programación de alto nivel</h4>

                            {/* Lista con iconos de "like" */}
                            <ul className="list-unstyled text-left">
                                <li><i className="bi bi-hand-thumbs-up"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg></i> Conceptos básicos de Python
                                </li>
                                <li><i className="bi bi-hand-thumbs-up"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg></i> Estructuras de control y datos
                                </li>
                                <li><i className="bi bi-hand-thumbs-up"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg></i> Inteligencia Artificial y Machine Learning
                                </li>
                                <li><i className="bi bi-hand-thumbs-up"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg></i> Automatización y Scripting
                                </li>
                                <li><i className="bi bi-hand-thumbs-up"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg></i> Desarrollo de Aplicaciones Web
                                </li>
                            </ul>
                            <div className="row mt-4 justify-content-start">
                                <div className="col-md-8">
                                    <div className="card shadow-lg">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <h5 className="card-title mt-3 text-dark">PROFESOR</h5>
                                                <img src="https://media.licdn.com/dms/image/D5603AQGIS8_oH390Wg/profile-displayphoto-shrink_400_400/0/1705586748936?e=1712793600&v=beta&t=NT2zzSRXGD6MAg_oD2ymRPWm77EnghP0xeucOtyFbIA" alt="Foto de perfil de Janis Aravena" className="profile-img img-fluid rounded-start" style={{ width: '70%' }} />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title mt-3 text-dark">Janis Aravena</h5>
                                                    <p className="card-text text-dark">Full Stack Developer</p>
                                                    <p className="card-text text-dark">Ingeniera en Tecnologías de la Información, Lead Mobile Developer. Desarrollo de apps nativas con Android JAVA/Kotlin, multiplataforma con Flutter y Dart.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Segunda tarjeta */}
                    <div className="container py-2">
                        <div className="row mt-4 justify-content-end" style={{ marginTop: '40px', marginLeft: '40px' }}>

                            <div className="col-md-4">
                                <div className="card shadow-lg">
                                    <img className="card-img-top" src="https://edteam-media.s3.amazonaws.com/specialities/original/435ca535-2522-4c30-9764-f35e9e4e3ae0.png" alt="Curso Básico Python" />
                                    <div className="card-body text-start">
                                        <h4 className="card-title mb-4" style={{ color: 'black' }}>Este curso incluye:</h4>
                                        <ul className="list-unstyled list-style-type-none text-start" style={{ color: 'black' }}>
                                            <li>Certificado de finalización</li>
                                            <li>10 horas de contenido</li>
                                            <li>Recursos descargables</li>
                                        </ul>
                                        <div className="text-left align-items-center">
                                            <div className="d-flex align-items-center">
                                                <h4 className="estrellas p-2 mr-2">4.4/5.0</h4>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg></li>
                                                    <li className="list-inline-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg></li>
                                                    <li className="list-inline-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg></li>
                                                    <li className="list-inline-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg></li>
                                                    <li className="list-inline-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                                        <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                                    </svg></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="text-center mt-4">
                                            <a href="curso.html" className="btn btn-primary">COMENZAR</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Tercera tarjeta */}
                </div>
            </div>
        </div>
    );
}

export default CursoInformacion;
