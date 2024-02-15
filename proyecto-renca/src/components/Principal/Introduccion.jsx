 {/* INTRODUCCION DE SERVICIOS */}

const Introduccion = () => {
    return (
        <section className="py-0 py-xl-5">
            <div className="container">
                <div className="row g-4" style={{ color: 'white' }}>
                    {/* Curso item */}
                    <div className="col-sm-6 col-xl-3">
                        <div className="d-flex justify-content-center align-items-center p-4 bg-blue bg-opacity-10 rounded-3"
                            style={{ backgroundColor: '#Ff571e' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#CEFF24"
                                className="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                                <path
                                    d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
                            </svg>
                            <div className="ms-4 h6 fw-normal mb-0">
                                <div className="d-flex">
                                    <h5 className="purecounter mb-0 fw-bold" data-purecounter-start="0"
                                        data-purecounter-end="200" data-purecounter-delay="200"
                                        data-purecounter-duration="0">10</h5>
                                    <span className="mb-0 h5">+</span>
                                </div>
                                <p className="mb-0">Cursos logrados exitosamente</p>
                            </div>
                        </div>
                    </div>

                    {/* Counter item */}
                    <div className="col-sm-6 col-xl-3">
                        <div className="d-flex justify-content-center align-items-center p-4 bg-blue bg-opacity-10 rounded-3"
                            style={{ backgroundColor: '#0192d0' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#CEFF24"
                                className="bi bi-wechat" viewBox="0 0 16 16">
                                <path
                                    d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117.166.166 0 0 1-.162.162.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074.5.5 0 0 0-.142.021 5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.63.63 0 0 0 .098.356" />
                                <path
                                    d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.5.5 0 0 0-.032.14.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26 4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0" />
                            </svg>
                            <div className="ms-4 h6 fw-normal mb-0">
                                <div className="d-flex">
                                    <h5 className="purecounter mb-0 fw-bold" data-purecounter-start="0"
                                        data-purecounter-end="200" data-purecounter-delay="200"
                                        data-purecounter-duration="0">10</h5>
                                    <span className="mb-0 h5">+</span>
                                </div>
                                <p className="mb-0">Foro de la comunidad</p>
                            </div>
                        </div>
                    </div>
                    {/* Counter item */}
                    <div className="col-sm-6 col-xl-3">
                        <div className="d-flex justify-content-center align-items-center p-4 bg-blue bg-opacity-10 rounded-3"
                            style={{ backgroundColor: '#009a88' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#CEFF24"
                                className="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
                                <path
                                    d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5M12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25" />
                            </svg>
                            <div className="ms-4 h6 fw-normal mb-0">
                                <div className="d-flex">
                                    <h5 className="purecounter mb-0 fw-bold" data-purecounter-start="0"
                                        data-purecounter-end="200" data-purecounter-delay="200"
                                        data-purecounter-duration="0">10</h5>
                                    <span className="mb-0 h5">+</span>
                                </div>
                                <p className="mb-0">Estudiantes en línea</p>
                            </div>
                        </div>
                    </div>
                    {/* Counter item */}
                    <div className="col-sm-6 col-xl-3">
                        <div className="d-flex justify-content-center align-items-center p-4 bg-blue bg-opacity-10 rounded-3"
                            style={{ backgroundColor: '#e68e0c' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#CEFF24"
                                className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                <path
                                    d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                            </svg>
                            <div className="ms-4 h6 fw-normal mb-0">
                                <div className="d-flex">
                                    <h5 className="purecounter mb-0 fw-bold" data-purecounter-start="0"
                                        data-purecounter-end="200" data-purecounter-delay="200"
                                        data-purecounter-duration="0">10</h5>
                                    <span className="mb-0 h5">+</span>
                                </div>
                                <p className="mb-0">Todos los cursos certificados</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Introduccion;
