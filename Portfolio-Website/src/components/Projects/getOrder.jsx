/*
    *getOrder article Component* 
*/

// Ai & Si Icons imports
import { AiFillGithub } from "react-icons/ai";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const GetOrder = ({ }) => {
  return (
    <>
      {/* getOrder article Container */}
      <article className="flex flex-col md:flex-row-reverse w-full h-auto justify-start mt-24">
        <div className="w-full lg:basis-1/2 flex flex-col space-y-8 sm:pl-4 lg:pl-14">
          {/* Text Content */}
          <div className="flex flex-row space-x-3">
            <h2 className="text-white text-4xl">getOrder</h2>
            <div className="grid place-content-center h-[40px]">
              <AiFillGithub className="text-vivid-cyan w-[40px] h-[40px]" />
            </div>
          </div>
          <p className="text-white-secondary text-xs xl:text-sm lg:mr-24">
          "getOrder" is a system for the control of the inventory of products and the invoicing process for a mini-supermarket, where you can monitor from the input to the output of each product.
          </p>
          <div className="flex flex-col-reverse sm:flex-row w-full sm:justify-between">
            <div className="flex flex-col pt-4 space-y-8 sm:pt-12 lg:pt-0">
              <div className="flex flex-row justify-center sm:justify-start space-x-3 text-vivid-cyan">
                <FaJava className="h-[40px] w-[40px]" />
                <SiMicrosoftsqlserver className="h-[40px] w-[40px]" />
              </div>
              <div className="hidden justify-center sm:justify-start">
                <a href="" className="text-white text-xl border border-white  py-2 px-3 rounded-lg transition duration-200 hover:border-vivid-cyan hover:text-vivid-cyan hover:opacity-80">
                  Visit Code
                </a>
              </div>

            </div>
            <div className="flex justify-center sm:justify-start lg:hidden pt-4 sm:pt-0">
              <img className=" h-[120px] sm:h-[155px] rounded-md" src="src\assets\img\getOrder.png" alt="Imagen de Serva" />

            </div>
          </div>

        </div>
        {/* getOrder Image */}
        <div className="sm:basis-2/5 lg:basis-1/2 h-72 hidden lg:flex">
          <img className="sm:mr-4 lg:mr-14 lg:h-[200px] xl:h-[300px] rounded-md" src="src\assets\img\getOrder.png" alt="Imagen de getOrder" />
        </div>
      </article >
    </>
  )
}