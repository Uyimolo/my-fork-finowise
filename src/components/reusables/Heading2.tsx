import { Heading2Props } from '@/types';
import { cn } from '@/lib/utils';

const Heading2 = ({ className, heading }: Heading2Props) => {
  return (
    <h2
      className={cn(
        `leading-40 text-left font-Urbanist text-2xl font-medium text-black lg:text-4xl lg:leading-[60px] xl:text-5xl`,
        className,
      )}
    >
      {heading}
    </h2>
  );
};

export default Heading2;
