/*
    *Serva article Component* 
*/

// Ai & Si Icons imports
import { AiFillGithub } from "react-icons/ai";
import { SiDotnet, SiCsharp, SiMysql } from "react-icons/si";

export const Serva = ({ }) => {
  return (
    <>
      {/* Serva article Container */}
      <article className="flex flex-row w-full h-[1000px] justify-start mt-24">
        <div className="basis-1/2 flex flex-col space-y-8">
          {/* Text Content */}
          <div className="flex flex-row space-x-3">
            <h2 className="text-white text-4xl">Serva System</h2>
            <div className="grid place-content-center h-[40px]">
              <AiFillGithub className="text-vivid-cyan w-[40px] h-[40px]" />
            </div>
          </div>
          <p className="text-white-secondary text-xs xl:text-sm lg:mr-24">
            Serva is a multimedia application, mainly oriented to the administration of reservations, management of the local restaurants available to the client, as well as their corresponding menus, and the administration of the billing process of each reservation to be generated
          </p>
          <div className="flex flex-row space-x-3 text-vivid-cyan">
            <SiDotnet className="h-[40px] w-[40px]" />
            <SiCsharp className="h-[40px] w-[40px]" />
            <SiMysql className="h-[40px] w-[40px]" />
          </div>
          <div>
            <a href="" className="text-white text-xl border border-white  py-2 px-3 rounded-lg transition duration-200 hover:border-vivid-cyan hover:text-vivid-cyan hover:opacity-80">
              Visit Code
            </a>
          </div>

        </div>
        {/* Serva Image */}
        <div className="bg-slate-600 basis-1/2"></div>
      </article >
    </>
  )
}