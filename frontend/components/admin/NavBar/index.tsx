import React from "react";
import { Wrapper } from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";

const AdminNav = () => {
  const [collapseShow, setCollapseShow] = React.useState("hidden");

  return (
    <Wrapper>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className=" md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              <Link href="/admin/">Admin Page</Link>
            </h6>

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/admin/product/register">
                  <a
                    href="#pablo"
                    className="text-xs uppercase py-3 font-bold block "
                  >
                    <i className={"fas fa-tv mr-2 text-sm "}></i> Product
                  </a>
                </Link>
              </li>
            </ul>

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/admin/commerce">
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i>{" "}
                    Commerce
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/user">
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>{" "}
                    user
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/admin/plant">
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-tools mr-2 text-sm"></i> PlantData
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};
export default AdminNav;
