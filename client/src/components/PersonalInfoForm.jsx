// import { BriefcaseBusiness, Globe, Mail, MapPin, Phone, User } from 'lucide-react';
// import React from 'react';

// const PersonalInfoForm = ({data, onChange, removeBackground, setRemoveBackground}) => {
  
//     const handleChange = (field, value)=>{
//         onChange({...data,[field]: value})
//     }

//     const fields = [
//         {key:'full_name', label:'Full Name', icon: User , type:'text', required: true},
//         {key:'email', label:'Email', icon: Mail, type:'email', required: true},
//         {key:'phone', label:'Phone', icon: Phone, type:'tel'},
//         {key:'location', label:'Location', icon: MapPin, type:'text'},
//         {key:'profession', label:'Profession', icon: BriefcaseBusiness, type:'text'},
//         {key:'linkedin', label:'LinkedIn Profile', icon: Globe, type:'url'},
//         {key:'website', label:'Personal Website', icon: Globe, type:'url'},
//     ]
//   return (
//     <div>
//       <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
//       <p className="text-sm text-gray-600">Get Started with the personal</p>
//       <div className="flex items-center gap-2">
//         <label>
//             {data.image ? (
//                 <img src={typeof data.image === 'string' ? data.image : URL.createObjectURL(data.image)}
//                  alt="user-image" className='w-16 h-16 rounded-full object-cover mt-5 ring ring-slate-300
//                  hover:opacity-80'/>
//             ):(
//                 <div className='inline-flex items-center gap-2 mt-5 text-slate-600 hover:text-slate-700 cursor-pointer'>
//                    <User className='size-10 p-2.5 border rounded-full' /> 
//                    Upload user image
//                 </div>
//             )}
//             <input type="file" accept='image/jpeg, image/png' className='hidden'
//             onChange={(e)=>handleChange("image", e.target.files[0])}/>
//         </label>
//         {typeof data.image === 'object' && (
//             <div className="flex flex-col gap-1 pl-4 text-sm">
//                 <p>Remove Background</p>
//                 <label className='relative inline-flex items-center cursor-pointer text-gray-900 gap-3'>
//                     <input type="checkbox" className='sr-only peer' 
//                     onChange={()=>setRemoveBackground(prev => !prev)} checked={removeBackground}/>
//                     <div className="w-9 h-5 bg-slate-300 rounded-full peer peer-checked:bg-blue-300
//                     transition-colors duration-200"></div>
//                     <span className='dot absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform
//                     duration-200 ease-in-out peer-checked:translate-x-4'></span>
//                 </label>
//             </div>
//         )}
//       </div>

//     {fields.map((field) => {
//         const Icon = field.icon;
//         return(
//             <div key={field.key} className='space-y-1 mt-5'>
//               <label className='flex items-center gap-2 text-sm font-medium text-gray-600'>
//                <Icon className='size-4'/>
//                {field.label}
//                {field.required && <span className='text-red-500'>*</span>}
//             </label>  
//             <input type={field.type} value={data[field.key] || ""} onChange={(e)=>handleChange(field.key, e.target.value)}
//             className='mt-1 w-full px-3 py-2 border bprder-gray-300 rounded-lg focus:ring focus:ring-blue-300
//             focus:border-blue-300 outline-none transition-colors text-sm' placeholder={`Enter Your ${field.label.toLocaleLowerCase()}`}
//             required={field.required}/>
//             </div>
//         )
//     })}
//     </div>
//   )
// }

// export default PersonalInfoForm




import {
  BriefcaseBusiness,
  Camera,
  CheckCircle2,
  Globe,
//   Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  User,
} from 'lucide-react';
import React from 'react';

const PersonalInfoForm = ({ data, onChange, removeBackground, setRemoveBackground }) => {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  const fields = [
    { key: 'full_name', label: 'Full Name', icon: User, type: 'text', required: true, fullWidth: true },
    { key: 'email', label: 'Email', icon: Mail, type: 'email', required: true },
    { key: 'phone', label: 'Phone', icon: Phone, type: 'tel' },
    { key: 'location', label: 'Location', icon: MapPin, type: 'text' },
    { key: 'profession', label: 'Profession', icon: BriefcaseBusiness, type: 'text' },
    { key: 'linkedin', label: 'LinkedIn Profile', icon: Globe, type: 'url' },
    { key: 'website', label: 'Personal Website', icon: Globe, type: 'url' },
  ];

  // Derived progress & lightweight validation status (no extra state added)
  const completedCount = fields.filter((f) => Boolean(data?.[f.key]?.trim())).length;
  const completionPercent = Math.round((completedCount / fields.length) * 100);
  const isEmailInvalid =
    Boolean(data?.email?.trim()) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim());

  return (
    <div className="space-y-6">
      {/* Header & Profile Completion Status Bar */}
      <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-slate-900">Personal Information</h3>
            <p className="mt-0.5 text-xs text-slate-500">
              Add your contact details so recruiters can reach you easily.
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#31adcd]/10 px-2.5 py-1 text-xs font-semibold text-[#217e96]">
            {completionPercent === 100 && <CheckCircle2 className="size-3.5 text-[#31adcd]" />}
            {completedCount}/{fields.length} Filled
          </span>
        </div>

        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-200/80">
          <div
            className="h-full rounded-full bg-[#31adcd] transition-all duration-300 ease-out"
            style={{ width: `${completionPercent}%` }}
          />
        </div>
      </div>

      {/* Avatar Upload & AI Background Removal Card */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-dashed border-slate-300 bg-white p-4 transition-colors hover:border-[#31adcd]/60">
        <label className="group flex cursor-pointer items-center gap-4">
          {data.image ? (
            <div className="relative">
              <img
                src={typeof data.image === 'string' ? data.image : URL.createObjectURL(data.image)}
                alt="user-image"
                className="size-16 rounded-full object-cover ring-2 ring-[#31adcd]/40 transition-all group-hover:opacity-85"
              />
              <span className="absolute -bottom-1 -right-1 flex size-6 items-center justify-center rounded-full bg-[#31adcd] text-white shadow-sm ring-2 ring-white">
                <Camera className="size-3.5" />
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-3.5">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-full border border-[#31adcd]/30 bg-[#31adcd]/10 text-[#31adcd] transition-transform group-hover:scale-105">
                <Camera className="size-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800 group-hover:text-[#217e96]">
                  Upload Profile Photo
                </p>
                <p className="text-xs text-slate-500">JPG or PNG format recommended</p>
              </div>
            </div>
          )}

          {data.image && (
            <div>
              <p className="text-sm font-semibold text-slate-800 group-hover:text-[#217e96]">
                Change Photo
              </p>
              <p className="text-xs text-slate-500">Click to replace current image</p>
            </div>
          )}

          <input
            type="file"
            accept="image/jpeg, image/png"
            className="hidden"
            onChange={(e) => handleChange('image', e.target.files[0])}
          />
        </label>

        {typeof data.image === 'object' && data.image !== null && (
          <div className="flex items-center gap-3 rounded-lg border border-[#31adcd]/25 bg-[#31adcd]/8 px-3.5 py-2.5">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1f758c]">
              <Sparkles className="size-3.5 text-[#31adcd]" />
              <span>Remove Background</span>
            </div>

            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                className="peer sr-only"
                onChange={() => setRemoveBackground((prev) => !prev)}
                checked={removeBackground}
              />
              <div className="h-5 w-9 rounded-full bg-slate-300 transition-colors duration-200 peer-checked:bg-[#31adcd]" />
              <span className="dot absolute left-1 top-1 h-3 w-3 rounded-full bg-white shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-4" />
            </label>
          </div>
        )}
      </div>

      {/* Form Fields Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {fields.map((field) => {
          const Icon = field.icon;
          const value = data[field.key] || '';
          const showEmailWarning = field.key === 'email' && isEmailInvalid;

          return (
            <div
              key={field.key}
              className={`space-y-1.5 ${field.fullWidth ? 'sm:col-span-2' : ''}`}
            >
              <label className="flex items-center justify-between text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <Icon className="size-3.5 text-[#31adcd]" />
                  {field.label}
                  {field.required && <span className="text-rose-500">*</span>}
                </span>

                {field.required && !value.trim() && (
                  <span className="text-[11px] font-medium text-amber-600">Required</span>
                )}
              </label>

              <div className="relative">
                <input
                  type={field.type}
                  value={value}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  className={`w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all ${
                    showEmailWarning
                      ? 'border-amber-400 focus:border-amber-500 focus:ring-3 focus:ring-amber-500/15'
                      : 'border-slate-200 hover:border-slate-300 focus:border-[#31adcd] focus:ring-3 focus:ring-[#31adcd]/15'
                  }`}
                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                  required={field.required}
                />
              </div>

              {showEmailWarning && (
                <p className="text-[11px] font-medium text-amber-600">
                  Please enter a valid email address (e.g., name@domain.com).
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalInfoForm;