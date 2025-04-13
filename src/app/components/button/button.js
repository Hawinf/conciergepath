// 'use client';
// import { useState } from 'react';

// export default function DescriptionToggle() {
//   const [activeTab, setActiveTab] = useState(null);

//   const handleToggle = (tab) => {
//     if (activeTab === tab) {
//       setActiveTab(null); // close if same button clicked again
//     } else {
//       setActiveTab(tab); // open the new one
//     }
//   };

//   return (
//     <div className="p-4">
//       <div className="flex gap-4 mb-4">
//         <button
//           onClick={() => handleToggle('planning')}
//           className={`px-4 py-2 rounded ${activeTab === 'planning' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//         >
//           Planning
//         </button>
//         <button
//           onClick={() => handleToggle('destination')}
//           className={`px-4 py-2 rounded ${activeTab === 'destination' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//         >
//           Destination
//         </button>
//       </div>

//       {activeTab === 'planning' && (
//         <div className="bg-gray-100 p-4 rounded">
//           <h2 className="text-xl font-bold mb-2">Planning Description</h2>
//           <p>This section contains information about your travel planning.</p>
//         </div>
//       )}

//       {activeTab === 'destination' && (
//         <div className="bg-gray-100 p-4 rounded">
//           <h2 className="text-xl font-bold mb-2">Destination Description</h2>
//           <p>This section contains details about your destination.</p>
//         </div>
//       )}
//     </div>
//   );
// }


'use client';
import { useState, useRef, useEffect } from 'react';

export default function DescriptionToggle() {
  const [activeTab, setActiveTab] = useState(null);
  const containerRef = useRef(null);

  const handleToggle = (tab) => {
    if (activeTab === tab) {
      setActiveTab(null); // toggle off
    } else {
      setActiveTab(tab); // switch
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setActiveTab(null); // close if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="p-4 inline-block">
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => handleToggle('planning')}
          className={`px-4 py-2 rounded ${activeTab === 'planning' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Planning
        </button>
        <button
          onClick={() => handleToggle('destination')}
          className={`px-4 py-2 rounded ${activeTab === 'destination' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Destination
        </button>
      </div>

      {activeTab === 'planning' && (
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-bold mb-2">Planning Description</h2>
          <p>This section contains information about your travel planning.</p>
        </div>
      )}

      {activeTab === 'destination' && (
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-bold mb-2">Destination Description</h2>
          <p>This section contains details about your destination.</p>
        </div>
      )}
    </div>
  );
}
