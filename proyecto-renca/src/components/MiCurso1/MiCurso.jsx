import React, { useState, useEffect } from 'react';
import './MiCurso.css';

// Módulo para el primer paso del tutorial
function Paso1({ avanzar }) {
    return (
        <div>
            <h3>Paso 1: Datos personales</h3>
            <div className="image-container1">
                <img src="../img/DATOS PERSONALES (1).png" alt="Datos Personales" />
            </div>
            <button onClick={avanzar}>Siguiente</button>
        </div>
    );
}

// Módulo para el segundo paso del tutorial
function Paso2({ avanzar, retroceder }) {
    return (
        <div>
            <h3>Paso 2: Experiencia laboral</h3>
            <div className="image-container2">
                <img src="../img/EXPERIENCIA LAB.png" alt="Experiencia Laboral" />
            </div>
            <button onClick={retroceder}>Anterior</button>
            <button onClick={avanzar}>Siguiente</button>
        </div>
    );
}

// Módulo para el tercer paso del tutorial
function Paso3({ avanzar, retroceder }) {
    return (
        <div>
            <h3>Paso 3: Educación</h3>
            <div className="image-container3">
                <img src="../img/EDUCACION.png" alt="Educacion" />
            </div>
            <button onClick={retroceder}>Anterior</button>
            <button onClick={avanzar}>Siguiente</button>
        </div>
    );
}

// Módulo para el cuarto paso del tutorial
function Paso4({ avanzar, retroceder }) {
    return (
        <div>
            <h3>Paso 4: Habilidades Y Competencias</h3>
            <div className="image-container4">
                <img src="../img/HABILIDADES.png" alt="Habilidades" />
            </div>
            <button onClick={retroceder}>Anterior</button>
            <button onClick={avanzar}>Siguiente</button>
        </div>
    );
}


// Módulo para el quinto paso del tutorial
function Paso5({ avanzar, retroceder }) {
    return (
        <div>
            <h3>Paso 5: Datos de interés</h3>
            <div className="image-container5">
                <img src="../img/INTERES.png" alt="Interes" />
            </div>
            <button onClick={retroceder}>Anterior</button>
            <button onClick={avanzar}>Siguiente</button>
        </div>
    );
}


// Módulo para el sexto paso del tutorial
function Paso6({ retroceder }) {
    return (
        <div>
            <h3>Paso 6: ¡AHORA CREA TU PROPIO CV!</h3>
            <div className="image-container6">
                <img src="../img/CV.png" alt="CV" />
            </div>
            <button onClick={retroceder}>Anterior</button>
                    </div>
    );
}

// Componente principal del curso
function MiCurso() {
    const [pasoActual, setPasoActual] = useState(0); // Estado para el paso actual del tutorial
    const [cursoCompleto, setCursoCompleto] = useState(false); // Estado para verificar si el curso está completo

    // Función para avanzar al siguiente paso del tutorial
    const avanzarPaso = () => {
        if (pasoActual < 5) {
            setPasoActual(pasoActual + 1);
        }
    };

    // Función para retroceder al paso anterior del tutorial
    const retrocederPaso = () => {
        if (pasoActual > 0) {
            setPasoActual(pasoActual - 1);
        }
    };

    // Componente para mostrar el progreso del curso
    const ProgressBar = () => {
        const progreso = (pasoActual / 5) * 100; // Calcula el progreso actual
        return (
            <div className="progress-bar" style={{ width: `${progreso}%` }}>
                {progreso.toFixed(2)}%
            </div>
        );
    };

    // Mapea el número del paso al componente correspondiente
    const componentePaso = {
        0: <Paso1 avanzar={avanzarPaso} />,
        1: <Paso2 avanzar={avanzarPaso} retroceder={retrocederPaso} />,
        2: <Paso3 avanzar={avanzarPaso} retroceder={retrocederPaso} />,
        3: <Paso4 avanzar={avanzarPaso} retroceder={retrocederPaso} />,
        4: <Paso5 avanzar={avanzarPaso} retroceder={retrocederPaso} />,
        5: <Paso6 avanzar={avanzarPaso} retroceder={retrocederPaso} />,

    };

    // Verificar si el curso está completo
    useEffect(() => {
        if (pasoActual === 5) {
            setCursoCompleto(true);
        } else {
            setCursoCompleto(false);
        }
    }, [pasoActual]);

    // Mostrar la alerta al completar el curso (únicamente en el último paso)
    useEffect(() => {
        if (cursoCompleto) {
            alert('¡Felicidades! Has completado el curso.');
        }
    }, [cursoCompleto]);

    return (
        <div className="curso-container">
            <h1>Como crear tu CV</h1>
            <div className="curso-content">
                {componentePaso[pasoActual]}
                <div className="progress">
                    <ProgressBar />
                </div>
            </div>
        </div>
    );
}

export default MiCurso;
