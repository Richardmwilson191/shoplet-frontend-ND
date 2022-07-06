import React, { useEffect, useRef } from 'react'

export default function Textarea({
    name,
    value,
    className,
    required,
    isFocused,
    placeholder,
    handleChange,
}) {
    const textarea = useRef()

    useEffect(() => {
        if (isFocused) {
            textarea.current.focus()
        }
    }, [])

    return (
        <div className="flex flex-col items-start">
            <textarea
                name={name}
                value={value}
                className={
                    `w-full h-32 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-gray-400 ` +
                    className
                }
                ref={textarea}
                required={required}
                placeholder={placeholder}
                onChange={e => handleChange(e)}
            />
        </div>
    )
}
