// import { Check, Layout } from 'lucide-react';
// import React, { useState } from 'react'


// const TemplateSelector = ({selectedTemplate, onChange}) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const templates = [
//         {
//             id:"classic",
//             name: "Classic",
//             preview:"A clean, traditional resume format with clear sections and professional typography"
//         },
//         {
//             id:"modern",
//             name: "Modern",
//             preview:"Sleek design with strategic use of color and modern font choices"
//         },
//         {
//             id:"minimal-image",
//             name: "Minimal Image",
//             preview:"Ultra-clean design that puts your content front and center"
//         },
//         {
//             id:"minimal",
//             name: "Minimal",
//             preview:"Ultra-clean design that puts your content front and center"
//         },
//     ]
//   return (
//     <div className='relative'>
//       <button onClick={()=> setIsOpen(!isOpen)} 
//       className='flex items-center gap-1 text-sm text-blue-300 bg-linear-to-br from-blue-50
//       to-blue-100 ring-blue-300 hover:ring transition-all px-3 py-2 rounded-lg'>
//         <Layout size={14}/> <span className="max-sm:hidden">Template</span>
//       </button>
//       {isOpen &&(
//         <div className="absolute top-full w-xs p-3 mt-2 space-y-3 z-10 bg-white rounded-md 
//         border border-gray-200 shadow-sm">
//         {templates.map((template)=>(
//             <div key={template.id} onClick={()=>{onChange(template.id);
//             setIsOpen(false)}} className={`relative p-3 border rounded-md cursor-pointer transition-all
//                 ${selectedTemplate === template.id ? "border-blue-300 bg-blue-100"
//                     :"border-gray-300 hover:border-gray-400 hover:bg-gray-100"}`}>
//             {selectedTemplate === template.id && (
//                 <div className="absolute top-2 right-2">
//                     <div className="size-5 bg-blue-300 rounded-full flex items-center justify-center">
//                      <Check className='w-3 h-3 text-white'/>
//                     </div>
//                 </div>
//             )}       

//             <div className='space-y-1'>
//                <h4 className='font-medium text-gray-800'>{template.name}</h4> 
//                <div className='mt-2 p-2 bg-blue-50 rounded text-xs text-gray-500 italic'>
//                 {template.preview}</div>
//                 </div>     
//                     </div>
//         ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default TemplateSelector



import { Check, Layout } from 'lucide-react';
import React, { useState } from 'react';

const TemplateSelector = ({ selectedTemplate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const templates = [
    {
      id: 'classic',
      name: 'Classic',
      preview: 'A clean, traditional resume format with clear sections and professional typography',
    },
    {
      id: 'modern',
      name: 'Modern',
      preview: 'Sleek design with strategic use of color and modern font choices',
    },
    {
      id: 'minimal-image',
      name: 'Minimal Image',
      preview: 'Ultra-clean design that puts your content front and center',
    },
    {
      id: 'minimal',
      name: 'Minimal',
      preview: 'Ultra-clean design that puts your content front and center',
    },
  ];

  const activeTemplate =
    templates.find((t) => t.id === selectedTemplate) || templates[0];
  const isUnmatchedTemplate =
    Boolean(selectedTemplate) &&
    !templates.some((t) => t.id === selectedTemplate);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 rounded-lg border border-[#31adcd]/30 bg-[#31adcd]/10 px-3 py-2 text-sm font-medium text-[#22859f] shadow-2xs transition-all hover:border-[#31adcd]/50 hover:bg-[#31adcd]/15 focus:outline-none focus:ring-2 focus:ring-[#31adcd]/35"
      >
        <Layout size={15} className="text-[#31adcd]" />
        <span className="max-sm:hidden">Template</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-20 mt-2 w-80 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xl ring-1 ring-slate-900/5">
          {/* Status Header */}
          <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Choose Layout
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#31adcd]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#22859f]">
              <span className="size-1.5 rounded-full bg-[#31adcd]" />
              {activeTemplate.name}
            </span>
          </div>

          {isUnmatchedTemplate && (
            <div className="mb-2.5 rounded-lg border border-amber-200 bg-amber-50 px-2.5 py-1.5 text-[11px] font-medium text-amber-800">
              Unknown template &ldquo;{selectedTemplate}&rdquo; — select a preset below.
            </div>
          )}

          <div className="max-h-96 space-y-2.5 overflow-y-auto pr-0.5">
            {templates.map((template) => {
              const isSelected = selectedTemplate === template.id;

              return (
                <div
                  key={template.id}
                  onClick={() => {
                    onChange(template.id);
                    setIsOpen(false);
                  }}
                  className={`group relative cursor-pointer rounded-xl border p-3 transition-all ${
                    isSelected
                      ? 'border-[#31adcd] bg-[#31adcd]/8 shadow-2xs ring-1 ring-[#31adcd]/30'
                      : 'border-slate-200 bg-white hover:border-[#31adcd]/45 hover:bg-slate-50/80'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute right-2.5 top-2.5">
                      <div className="flex size-5 items-center justify-center rounded-full bg-[#31adcd] shadow-2xs">
                        <Check className="h-3 w-3 stroke-[2.75] text-white" />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2 pr-6">
                    <div className="flex items-center gap-2">
                      <span
                        className={`size-2 rounded-full transition-colors ${
                          isSelected
                            ? 'bg-[#31adcd]'
                            : 'bg-slate-300 group-hover:bg-[#31adcd]/60'
                        }`}
                      />
                      <h4
                        className={`text-sm font-semibold ${
                          isSelected ? 'text-[#1e7890]' : 'text-slate-800'
                        }`}
                      >
                        {template.name}
                      </h4>
                    </div>

                    {/* Subtle Layout Wireframe Strip */}
                    <div className="flex items-center gap-1.5">
                      {template.id === 'minimal-image' && (
                        <span className="size-4 shrink-0 rounded-full bg-[#31adcd]/25" />
                      )}
                      <span
                        className={`h-1.5 rounded-full ${
                          template.id === 'modern'
                            ? 'w-12 bg-[#31adcd]/50'
                            : 'w-10 bg-slate-200'
                        }`}
                      />
                      <span className="h-1.5 w-16 rounded-full bg-slate-100" />
                    </div>

                    <div
                      className={`rounded-lg p-2 text-xs leading-relaxed ${
                        isSelected
                          ? 'bg-white/90 text-slate-600'
                          : 'bg-slate-50 text-slate-500'
                      }`}
                    >
                      {template.preview}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;