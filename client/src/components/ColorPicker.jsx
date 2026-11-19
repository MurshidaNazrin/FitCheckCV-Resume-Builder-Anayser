// import { Palette, Check } from 'lucide-react';
// import React, { useState } from 'react';


// const ColorPicker = ({selectedColor, onChange}) => {
//     const colors = [
//         { name: "Blue", value: "#3B82F6" },
//         { name: "Navy Blue", value: "#1E3A8A" },
//         { name: "Royal Blue", value: "#2563EB" },
//         { name: "Slate Blue", value: "#475569" },
//         { name: "Teal", value: "#0F766E" },
//         { name: "Forest Green", value: "#166534" },
//         { name: "Sage Green", value: "#4D7C0F" },
//         { name: "Burgundy", value: "#881337" },
//         { name: "Maroon", value: "#7F1D1D" },
//         { name: "Terracotta", value: "#9A3412" },
//         { name: "Deep Purple", value: "#581C87" },
//         { name: "Indigo", value: "#3730A3" },
//         { name: "Charcoal", value: "#1F2937" },
//         { name: "Graphite", value: "#374151" },
//         { name: "Warm Gray", value: "#57534E" },
//         { name: "Bronze", value: "#78350F" }
//     ]

//     const [isOpen,setIsOpen] = useState(false);
//     return (
//         <div className='relative'>
//           <button onClick={()=> setIsOpen(!isOpen)} className='flex items-center gap-1 text-sm text-purple-600 bg-linear-to-br
//           from-purple-50 to-purple-100 ring-purple-300 hover:ring transition-all px-3 py-2 rounded-lg'>
//             <Palette size={16}/> <span className="max-sm:hidden">Accent</span>
//           </button>
//           {isOpen && (
//             <div className="grid grid-cols-4 w-60 gap-2 absolute top-full left-0
//             right-0 p-3 mt-2 z-10 bg-white rounded-md border border-gray-200 shadow-sm">
//              {colors.map((color)=>(
//                 <div key={color.value} className="relative cursor-pointer group flex flex-col"
//                 onClick={()=> {onChange(color.value); setIsOpen(false)}}>
//                    <div className='w-12 h-12 rounded-full border-2 border-transparent group-hover:border-black/25 
//                    transition-colors' style={{backgroundColor : color.value}}>
//                     </div> 
//                     {selectedColor === color.value && (
//                         <div className='absolute top-0 left-0 right-0 bottom-4.5 flex items-center justify-center'>
//                            <Check className="size-5 text-white"/>
//                         </div>
//                     )}
//                     <p className='text-xs text-center mt-1 text-gray-600'>{color.name}</p>
//                 </div>
//              ))}
//             </div>
//           )}
//         </div>
//     )
// }

// export default ColorPicker





import { Palette, Check } from 'lucide-react';
import React, { useState } from 'react';

const ColorPicker = ({ selectedColor, onChange }) => {
  const colors = [
    { name: "Brand Cyan", value: "#31adcd" },
    { name: "Blue", value: "#3B82F6" },
    { name: "Navy Blue", value: "#1E3A8A" },
    { name: "Royal Blue", value: "#2563EB" },
    { name: "Slate Blue", value: "#475569" },
    { name: "Teal", value: "#0F766E" },
    { name: "Forest Green", value: "#166534" },
    { name: "Sage Green", value: "#4D7C0F" },
    { name: "Burgundy", value: "#881337" },
    { name: "Maroon", value: "#7F1D1D" },
    { name: "Terracotta", value: "#9A3412" },
    { name: "Deep Purple", value: "#581C87" },
    { name: "Indigo", value: "#3730A3" },
    { name: "Charcoal", value: "#1F2937" },
    { name: "Graphite", value: "#374151" },
    { name: "Warm Gray", value: "#57534E" },
    { name: "Bronze", value: "#78350F" }
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg border border-[#31adcd]/30 bg-[#31adcd]/10 px-3 py-2 text-sm font-medium text-[#217e96] transition-all hover:border-[#31adcd]/50 hover:bg-[#31adcd]/15 focus:outline-none focus:ring-2 focus:ring-[#31adcd]/40"
      >
        <span
          className="size-3.5 shrink-0 rounded-full ring-1 ring-black/15"
          style={{ backgroundColor: selectedColor || '#31adcd' }}
        />
        <Palette size={16} className="text-[#31adcd]" />
        <span className="max-sm:hidden">Accent</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-20 mt-2 grid w-68 grid-cols-4 gap-2.5 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xl ring-1 ring-slate-900/5">
          {colors.map((color) => {
            const isSelected = selectedColor === color.value;

            return (
              <div
                key={color.value}
                className="group relative flex cursor-pointer flex-col items-center rounded-xl p-1 transition-colors hover:bg-slate-50"
                onClick={() => {
                  onChange(color.value);
                  setIsOpen(false);
                }}
              >
                <div
                  className={`flex size-11 items-center justify-center rounded-full border-2 transition-transform duration-150 group-hover:scale-105 ${
                    isSelected
                      ? 'border-[#31adcd] ring-2 ring-[#31adcd]/30'
                      : 'border-transparent ring-1 ring-black/10'
                  }`}
                  style={{ backgroundColor: color.value }}
                >
                  {isSelected && <Check className="size-5 text-white drop-shadow-xs" />}
                </div>
                <p
                  className={`mt-1.5 w-full truncate text-center text-[11px] ${
                    isSelected ? 'font-semibold text-[#217e96]' : 'text-slate-600'
                  }`}
                >
                  {color.name}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;