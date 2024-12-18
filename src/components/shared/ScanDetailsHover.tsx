import React from 'react';

interface ScanDetailsHoverProps {
  isVisible: boolean;
  onClose: () => void;
}

export const ScanDetailsHover: React.FC<ScanDetailsHoverProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="absolute z-50 bg-white rounded-lg shadow-xl p-6 w-72 border border-gray-200">
      <button 
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        ×
      </button>
      <h4 className="font-italiana text-lg mb-4">Areas to be Scanned:</h4>
      <ul className="font-montserrat text-sm space-y-2 text-[#737D74]">
        <li>• Building Facades</li>
        <li>• Floorplan 1</li>
        <li>• Floorplan 2</li>
        <li>• Floorplan 3</li>
        <li>• Floorplan 4</li>
        <li>• Roofplan</li>
      </ul>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="font-montserrat text-sm">
          <span className="font-bold text-brand-dark">Project Dimensions</span>
          <br />
          <span className="font-medium text-brand-sage">Total Area: 8,755 sq ft</span>
        </p>
      </div>
    </div>
  );
};