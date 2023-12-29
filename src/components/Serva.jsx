/*
    *Serva article Component* 
*/

// Ai & Si Icons imports
import { AiFillGithub } from "react-icons/ai";
import { SiDotnet, SiCsharp, SiMysql } from "react-icons/si";
//Images import 
import ServaImage from '../assets/img/Serva.png';

export const Serva = ({ }) => {
  return (
    <>
      {/* Serva article Container */}
      <article className="flex flex-col md:flex-row w-full justify-start mt-24">
        <div className="w-full lg:basis-1/2 flex flex-col space-y-8">
          {/* Text Content */}
          <div className="flex flex-row space-x-3">
            <h2 className="text-white text-4xl">Serva System</h2>
            <div className="grid place-content-center h-[40px]">
              <AiFillGithub className="text-vivid-cyan w-[40px] h-[40px]" />
            </div>
          </div>
          <p className="text-white-secondary text-xs xl:text-sm lg:mr-24">
            Serva is a multimedia application, mainly oriented to the administration of reservations, management of the local restaurants available to the client, as well as their corresponding menus, and the administration of the billing process of each reservation to be generated.
          </p>
          <div className="flex flex-col-reverse sm:flex-row w-full sm:justify-between">
            <div className="flex flex-col pt-4 space-y-8 sm:pt-12 lg:pt-0">
              <div className="flex flex-row justify-center sm:justify-start space-x-3 text-vivid-cyan">
                <SiDotnet className="h-[30px] w-[30px]" />
                <SiCsharp className="h-[30px] w-[30px]" />
                <SiMysql className="h-[30px] w-[30px]" />
              </div>
              <div className="hidden justify-center sm:justify-start">
                <a href="" className="text-white text-xl border border-white  py-2 px-3 rounded-lg transition duration-200 hover:border-vivid-cyan hover:text-vivid-cyan hover:opacity-80">
                  Visit Code
                </a>
              </div>

            </div>
            <div className="flex justify-center sm:justify-start lg:hidden pt-4 sm:pt-0">
              <img className=" h-[120px] sm:h-[155px] rounded-md" src={ServaImage} alt="Imagen de Serva" />

            </div>
          </div>

        </div>
        {/* Serva Image */}
        <div className="sm:basis-2/5 lg:basis-1/2 h-72 hidden lg:flex">
          <img className="sm:ml-4 lg:ml-14 lg:h-[200px] xl:h-full rounded-md" src={ServaImage} alt="Imagen de Serva" />
        </div>
      </article >
    </>
  )
}