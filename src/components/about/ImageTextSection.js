// ImageTextSection.js
import React from 'react';
import Image from 'next/legacy/image';

const ImageTextSection = ({ imageUrl, blurUrl, text }) => {
    return (
        <div className="relative flex h-[230px]">
            <Image
                src={imageUrl}
                blurDataURL={blurUrl}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
            />
            <h1 className="relative 320:mx-6 320:text-[11px] 1024:text-[15px] 1024:mx-20 1440:text-[20px] 1440:mx-36 flex items-center justify-center text-center text-white md:mx-10 md:text-[18px] 2xl:mx-44 2xl:text-[25px]">
                {text}
            </h1>
        </div>
    );
};

export default ImageTextSection;
