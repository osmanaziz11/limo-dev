import ListItem from './ListItem';
import { FleetListItems } from '@/util/para';

const FleetItems = () => {
    return (
        <div className="flex flex-col text-center justify-center md:justify-start lg:ml-10">
            <p className="text-[#FFFFFF] text-[19px] font-Montserrat font-[700] uppercase tracking-[3.6px]">THE FLEET</p>
            <div className='flex justify-center lg:justify-'>
                <ul className="flex flex-col text-left mt-5 space-y-1 list-disc list-inside whitespace-nowrap">
                    {FleetListItems.map((item, index) => (
                        <ListItem key={index} text={item} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FleetItems;