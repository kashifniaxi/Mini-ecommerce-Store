import React from 'react';

function Category({ finalcategory, setcatname }) {
  
  return (
    <div>
      <h3 className="text-[20px] p-[10px] font-[500]">Product Categories</h3>
      <ul>
        {finalcategory.map((category) => (
          <li key={category.slug} onClick={() => setcatname(category.name)} className='p-[7px] bg-[#ccc] cursor-pointer font-serif font-[400] mb-2'>
            {category.name} {/* Render the name of the category */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
