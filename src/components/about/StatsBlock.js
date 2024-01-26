import React from 'react';

const StatsBlock = ({ count, description }) => {
    return (
        <div className="320:w-[90px] 320:h-[90px] 768:w-[140px] 768:h-[120px] 1024:w-[180px] relative h-[120px] w-[140px] flex-shrink-0 bg-black shadow-md 2xl:h-[180px] 2xl:w-[190px]" data-aos="zoom-in">
            <div className="absolute flex h-full w-full flex-col justify-center text-center text-white">
                <div className="mb-2 flex justify-center">
                    <p className="font-league-spartan 320:text-[15px] 768:text-[30px] 1024:text-[38px] leading-90 text-[30px] font-bold uppercase 2xl:text-[50px]">
                        {count}
                    </p>
                </div>
                <div className="flex justify-center">
                    <p className="text-shadow-md font-Montserrat 320:text-[6px] 768:text-[7px] 1024:text-[9px] absolute bottom-3 text-center text-[7px] font-[500] uppercase tracking-wider text-white 2xl:text-[15px]">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StatsBlock;
