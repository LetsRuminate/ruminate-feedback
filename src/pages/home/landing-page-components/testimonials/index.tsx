// Testimonial - image .svg
import Testimonial from "@assets/testimonial/testimonial.svg";
import Fruit from "@assets/testimonial/fruit.png";

export default function Testimonials() {
  return (
    <section className="bg-[#B9EDD6] skew-y-1 -mt-16 border-t-[40px] border-black pt-20 pb-40 relative z-50">
      <section className="-skew-y-1">
        <h1 className="text-black text-[140px] header1 text-right pr-20 relative z-40 pb-20">
          TESTIMONIALS
        </h1>
        <div className="z-10 absolute -mt-[680px]">
        <img
              src={Fruit}
              alt="Photograph of flying fruit."
              width={1000}
            />
        </div>

        <div className="horizontal-scroll-wrapper">
        <div className="flex gap-12 -ml-28 relative z-30">
          <div>
            <div className="w-[414px] bg-[#FFFFFF] pt-10 pb-[80px] text-center px-16 rounded-t-3xl boxshadow  border-white border-b-[40px]">
              <p className="text-[#000000] text-xl font-manrope font-medium">
                The praise you hear from your fans feels good, but it doesn’t
                explain why your sales won’t grow. Feedback products just like
                yours.
              </p>
            </div>
            <div className="absolute ml-[103px] -mt-[80px] z-10 rounded-full border-black border-[13px]">
            <img
              src={Testimonial}
              alt="Testimonial"
              width={177}
              height={177}
            />
            </div>
            <div className="absolute w-[414px] bg-[#F9BCAC] h-[40px] -skew-y-3 z-0"></div>
            <div className="w-[414px] bg-[#F9BCAC] h-[250px] rounded-b-3xl boxshadow text-center pt-[120px] border-white border-t-[29px]">
              <h1 className="text-black text-[28px] manropesemibold">JOHN SMITH</h1>
            <p className="text-black text-xl manropesemibold font-medium">
                Cofounder of Good Food
              </p>
            </div>
          </div>

          <div>
            <div className="w-[414px] bg-[#FFFFFF] pt-10 pb-[80px] text-center px-16 rounded-t-3xl boxshadow  border-white border-b-[40px]">
              <p className="text-[#000000] text-xl font-manrope font-medium">
                The praise you hear from your fans feels good, but it doesn’t
                explain why your sales won’t grow. Feedback products just like
                yours.
              </p>
            </div>
            <div className="absolute ml-[103px] -mt-[80px] z-10 rounded-full border-black border-[13px]">
            <img
              src={Testimonial}
              alt="Testimonial"
              width={177}
              height={177}
            />
            </div>
            <div className="absolute w-[414px] bg-[#E4DD67] h-[40px] skew-y-3 z-0"></div>
            <div className="w-[414px] bg-[#E4DD67] h-[250px] rounded-b-3xl boxshadow text-center pt-[120px] border-white border-t-[29px]">
              <h1 className="text-black text-[28px] manropesemibold">JOHN SMITH</h1>
            <p className="text-black text-xl manropesemibold font-medium">
                Cofounder of Good Food
              </p>
            </div>
          </div>

          <div>
            <div className="w-[414px] bg-[#FFFFFF] pt-10 pb-[80px] text-center px-16 rounded-t-3xl boxshadow  border-white border-b-[40px]">
              <p className="text-[#000000] text-xl font-manrope font-medium">
                The praise you hear from your fans feels good, but it doesn’t
                explain why your sales won’t grow. Feedback products just like
                yours.
              </p>
            </div>
            <div className="absolute ml-[103px] -mt-[80px] z-10 rounded-full border-black border-[13px]">
            <img
              src={Testimonial}
              alt="Testimonial"
              width={177}
              height={177}
            />
            </div>
            <div className="absolute w-[414px] bg-[#790E4A] h-[40px] -skew-y-3 z-0"></div>
            <div className="w-[414px] bg-[#790E4A] h-[250px] rounded-b-3xl boxshadow text-center pt-[120px] border-white border-t-[29px]">
              <h1 className="text-white text-[28px] manropesemibold">JOHN SMITH</h1>
            <p className="text-white text-xl manropesemibold font-medium">
                Cofounder of Good Food
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="w-[414px] bg-[#FFFFFF] pt-10 pb-[80px] text-center px-16 rounded-t-3xl boxshadow  border-white border-b-[40px]">
              <p className="text-[#000000] text-xl font-manrope font-medium">
                The praise you hear from your fans feels good, but it doesn’t
                explain why your sales won’t grow. Feedback products just like
                yours.
              </p>
            </div>
            <div className="absolute ml-[103px] -mt-[80px] z-10 rounded-full border-black border-[13px]">
            <img
              src={Testimonial}
              alt="Testimonial"
              width={177}
              height={177}
            />
            </div>
            <div className="absolute w-[414px] bg-[#0E6BA8] h-[40px] skew-y-3 z-0"></div>
            <div className="w-[414px] bg-[#0E6BA8] h-[250px] rounded-b-3xl boxshadow text-center pt-[120px] border-white border-t-[29px]">
              <h1 className="text-white text-[28px] manropesemibold">JOHN SMITH</h1>
            <p className="text-white text-xl manropesemibold font-medium">
                Cofounder of Good Food
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </section>
  );
}
