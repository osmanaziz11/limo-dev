import ListItem from './ListItem';
import { serviceListItems } from '@/util/para';

const ServiceList = () => {
    return (
        <div className="flex flex-col text-center justify-center">
            <p className="text-[#FFFFFF] text-[19px] font-Montserrat font-[700] uppercase tracking-[3.6px]">Services</p>
            <div className='flex justify-center'>
                <ul className="flex flex-col text-left mt-5 space-y-1 list-inside list-disc whitespace-nowrap">
                    {serviceListItems.map((item, index) => (
                        <ListItem key={index} text={item} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ServiceList;
