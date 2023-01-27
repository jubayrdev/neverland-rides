import React,{useState} from 'react'
import DPicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
interface DatePickerProps{
    id?:string;
    label?:string;
}
const DatePicker:React.FC<DatePickerProps> = ({id,label}) => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <div>
        <label
        htmlFor={id??""}
        className="form-label inline-block  text-gray-700 text-sm"
      >
        {label??""}
      </label>

        <DPicker
        className="py-1.5 px-1 w-36 mb-4"
        selected={startDate}
        onChange={(date) => setStartDate(date ?? new Date())}
        nextMonthButtonLabel={'>'}
        previousMonthButtonLabel={'<'}
  />
    </div>
  )
}

export default DatePicker