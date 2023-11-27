import ListItem from './ListItem';
import { NavigateListItems } from '@/util/para';

const NavigateList = () => {
    return (
        <div className="text-center 1440:text-center px-10">
            <p className="text-[#FFFFFF] text-[19px] font-Montserrat font-[700] uppercase tracking-[3.6px]">NAVIGATE</p>
            <div className='flex justify-center  1440:justify-center'>
                <ul className="flex flex-col text-left mt-5 space-y-1 list-disc list-inside">
                    {NavigateListItems.map((item, index) => (
                        <ListItem key={index} text={item} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavigateList;