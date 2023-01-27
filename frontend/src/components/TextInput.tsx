import React from 'react'

interface TextInputProps{
    label:string;
    id:string;
    placeholder:string;

}
const TextInput:React.FC<TextInputProps> = ({label,id,placeholder}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="form-label inline-block  text-gray-700 text-sm"
      >
        {label}
      </label>
      <input
        type="text"
        className="
        form-control
        block
        w-full
        px-3
        py-1
        text-sm
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none
        text-md
      "
        id={id}
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextInput
