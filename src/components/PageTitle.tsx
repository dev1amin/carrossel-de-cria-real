import React from 'react';

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="bg-white border-b border-gray-light">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-2xl md:text-3xl font-bold text-dark">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PageTitle;