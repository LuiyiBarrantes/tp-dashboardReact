import React from 'react';
function GenresInDB(props) {
    const generos = ['Acción',
        'Animación',
        'Aventura',
        'Ciencia Ficción',
        'Comedia',
        'Documental',
        'Drama',
        'Fantasia',
        'Infantiles',
        'Musical',]
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        {generos.map((genero,i) => {
                            return (
                                <div className="col-lg-6 mb-4" key={genero+i}>
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body" >
                                            {genero}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GenresInDB;
