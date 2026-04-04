import React from 'react';
import { MenuItem } from '../data/menu';
import { getImagePath, IMAGE_FALLBACKS } from '../data/menu';

interface Props {
  item: MenuItem;
}

export const MenuCard: React.FC<Props> = ({ item }) => {

  const image = getImagePath(item.name);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

      {/* SAFE IMAGE */}
      <img
        src={image}
        alt={item.name}
        className="w-full h-52 object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = IMAGE_FALLBACKS["default-food"];
        }}
      />

      <div className="p-4">
        <h3 className="text-xl font-bold">{item.name}</h3>
        <p className="text-gray-500">{item.description}</p>
        <p className="text-saffron font-semibold">₹{item.price}</p>
      </div>

    </div>
  );
};