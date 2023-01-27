import React from 'react'

export interface Options {
  value: string
  label: string
}
interface SelectInputProps {
  options: Options[];
  id:string;
  label:string;
}
const SelectInput: React.FC<SelectInputProps> = ({ options,id,label }) => {
  return (
    <div className='mb-4'>
         <label
        htmlFor={id}
        className="form-label inline-block  text-gray-700 text-sm"
      >
        {label}
      </label>

    <select
      className="form-select form-select-sm
                appearance-none
                block
                w-full
                px-2
                py-1
                text-sm
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      aria-label=".form-select-sm example"
    >

      {options.map((op) => (
        <option key={op.label} value={op.value}>
          {op.label}
        </option>
      ))}
    </select>
    </div>
  )
}

export default SelectInput
