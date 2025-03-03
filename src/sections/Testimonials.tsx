import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstcol=testimonials.slice(0,3)
const secondcol=testimonials.slice(3,6)
const thirdcol=testimonials.slice(6,9)

export const Testimonials = () => {
  return (
<section>

<div className="mt-12">
  <div className="flex justify-center items-center mb-5">
  <p className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight"> Testimonials</p>
  </div>
  <h3 className="section-title "> what our users say</h3>
</div>



<div className="container justify-center flex mt-10 [mask-image:linear-gradient(to_top,transparent,black,transparent)]">

<div className="">
{firstcol.map((testimonial) => (
  <div className="card flex flex-col mt-10">  
    <p>{testimonial.text}</p>
<div className=" flex mt-5">
    <img src={testimonial.imageSrc} alt={testimonial.name} width={40} height={40} className="pr-2"/>
<div>
    <h4>{testimonial.name}</h4>
    <span>{testimonial.username}</span>
</div>
  </div>
</div>
))}

</div>






<div className=" ml-5 hidden md:block">
{secondcol.map((testimonial) => (
  <div className="card flex flex-col mt-10">  
    <p>{testimonial.text}</p>
<div className=" flex mt-5">
    <img src={testimonial.imageSrc} alt={testimonial.name} width={40} height={40} className="pr-2"/>
<div>
    <h4>{testimonial.name}</h4>
    <span>{testimonial.username}</span>
</div>
  </div>
</div>
))} </div>

<div className=" ml-5 hidden lg:block ">
{thirdcol.map((testimonial) => (
  <div className="card flex flex-col mt-10">  
    <p>{testimonial.text}</p>
<div className=" flex mt-5">
    <img src={testimonial.imageSrc} alt={testimonial.name} width={40} height={40} className="pr-2"/>
<div>
    <h4>{testimonial.name}</h4>
    <span>{testimonial.username}</span>
</div>
  </div>
</div>
))} </div>





</div>
</section>
  );
};
