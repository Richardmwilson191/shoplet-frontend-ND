import React, { useEffect, useRef } from 'react'

export default function Select({
    name,
    value,
    children,
    className,
    required,
    isFocused,
    handleChange,
}) {
    const select = useRef()

    useEffect(() => {
        if (isFocused) {
            select.current.focus()
        }
    }, [])

    return (
        <div className="flex flex-col items-start">
            <select
                name={name}
                value={value}
                className={
                    `border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md placeholder-gray-300 shadow-sm block w-full mt-1 ` +
                    className
                }
                ref={select}
                required={required}
                onChange={e => handleChange(e)}>
                {children}
            </select>
        </div>
    )
}
