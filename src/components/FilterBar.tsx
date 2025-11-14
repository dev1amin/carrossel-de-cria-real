import React from 'react';
import { SortOption } from '../types';

interface FilterBarProps {
  activeSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ activeSort, onSortChange }) => {
  const filters: { label: string; value: SortOption }[] = [
    { label: 'Popular', value: 'popular' },
    { label: 'Latest', value: 'latest' },
    { label: 'Likes', value: 'likes' },
    { label: 'Comments', value: 'comments' },
    { label: 'Shares', value: 'shares' },
  ];

  return (
    <div className="relative">
      {/* Filtro com borda e maior largura */}
      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="flex justify-center space-x-0"> {/* Sem espaçamento entre os botões */}
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => onSortChange(filter.value)}
              className={`px-8 py-3 font-medium transition-all ${
                activeSort === filter.value
                  ? 'bg-blue text-white border-b-2 border-blue' // Adiciona borda para o botão ativo
                  : 'bg-white text-gray-dark border border-gray-light hover:border-blue' // Borda separando os botões
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;