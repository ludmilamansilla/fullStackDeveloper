import React from 'react';
import Genre from './Genre';

const GenresInDb = () => {
	const genres = ['Acción', 'Animación', 'Aventura', 'Ciencia Ficción', 'Comedia', 
		'Documental', 'Drama', 'Fantasía', 'Infantiles', 'Musical'
	]
    return (
        <div className="col-lg-6 mb-4">						
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
				</div>
				<div className="card-body">
					<div className="row">
						<Genre genres = {genres} />
                    </div>
				</div>
			</div>
		</div>
    )
}

export default GenresInDb;