import React from 'react'

const AboutUs = () => {
    return (
        <div className="flex flex-col text-center justify-center h-full px-[25px] lg:mx-[10px] lg:ml-0 lg:mr-5 gap-y-10">
            <p className="text-[#FFFFFF] text-[20px] font-Montserrat font-[700] uppercase tracking-[3.6px] text-center lg:text-center">About us</p>
            <div className="px-">
                <p className="text-[rgba(255,255,255,0.75)] text-opacity-75 font-[400] text-center lg:text-center lg: font-Librebaskerville italic text-[13px]">
                    High-end luxury Limousine services at affordable prices
                    <br />
                    <br />
                    We have been providing exceptional high-end transportation throughout San Diego county for over 22 years.
                </p>
            </div>
            <p className="mb-2 mt-auto text-[rgba(255,255,255,0.75)] text-center font-Archivo text-[14px] font-[700]">License: TCP15412-A</p>
        </div>
    )
}

export default AboutUs
