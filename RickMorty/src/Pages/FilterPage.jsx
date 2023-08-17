import React, { useState } from 'react';
import Filters from '../Components/Filters'; // Asegúrate de tener la ruta correcta
import CharacterList from '../Components/CharacterList'; // Asegúrate de tener la ruta correcta

function FilterPage() {
  const [filters, setFilters] = useState({ name: '', status: '' });
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Resetear la página cuando cambian los filtros
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Filters onFilterChange={handleFilterChange} />
      <CharacterList
        filters={filters}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default FilterPage;








































