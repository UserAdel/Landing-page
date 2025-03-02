import Productimage from '@/assets/product-image.png';
import pyramid from '@/assets/pyramid.png';
import Tube from '@/assets/tube.png';
import Image from "next/image";
export const ProductShowcase = () => {
  return (
    <section className=' bg-gradient-to-t from-blue-500 to-white py-24 overflow-clip'>
    <div className="container">
    <div className='max-w-[540px] mx-auto'>

    <div className='flex justify-center '>
      <div className="tag ">boost your productivity</div>
    </div>
      <h2 className='text-3xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 text-center md:text-[54px] md:leading-[60px]' > A more effective way to track progress</h2>
      <p className='text-[22px] leading-[30px] text-[#010D3E]  tracking-tight text-center md:mt-10'>"Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer."</p>
    </div>

    <div className='relative'>
      <Image src={Productimage} alt="Product image" className='mt-10 '/>
      <Image src={pyramid} alt="pyramid image" height={262} width={262} className='absolute -top-32 -right-36 hidden md:block'/>
      <Image src={Tube} alt="Tube image" height={240} className='absolute bottom-24 -left-36 hidden md:block'/>

    </div>

    </div>
    </section>
  );
};
