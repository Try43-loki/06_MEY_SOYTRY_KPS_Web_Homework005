"use client";
import React, { use } from "react";
import Link from "next/link";
import profile from "../images/profile.jpg";
import Image from "next/image";
import { sidebarList } from "@/data/navigation";
import { Settings } from "lucide-react";
import { usePathname } from "next/navigation";
function SidebarComponent() {
  const icons = sidebarList;
  const currentPath = usePathname();

  return (
    <>
      <aside className="flex justify-start flex-col items-center w-[20%] px-5 h-screen bg-white">
        {/* profile */}
        <article className="flex flex-col justify-start items-center mt-4 mb-2 ">
          <Image
            src={profile}
            alt="profile"
            width="120"
            hight="120"
            className="rounded-full"
          />
          <h4>Soytry MEY</h4>
          <Link href="mailto:blackmonster@gamil.com">meysoytry@gmail.com</Link>
        </article>
        {/* navigate */}
        <section className="w-full mt-4">
          <ul className="flex flex-col items-start justify-center w-full gap-2">
            {icons.map((icon, index) => (
              <li
                key={index}
                // check current path
                className={
                  currentPath === icon.path
                    ? "flex justify-start  items-center px-3 py-2 w-full rounded-md gap-x-4 bg-thirdary font-semibold "
                    : "flex justify-start  items-center px-3 py-2 w-full rounded-md gap-x-4" +
                      "hover:bg-thirdary hover:font-semibold transition-all gap-x-4"
                }
              >
                <icon.icon size={20} className="text-danger" />
                <span>
                  <Link className="text-start" href={icon.path}>
                    {icon.label}
                  </Link>
                </span>
              </li>
            ))}
            <div className="flex justify-start items-center gap-x-4 px-3 rounded-md mt-8 bg-thirdary w-full py-2">
              <Settings size={20} className="text-slate-700" />
              <span>Settings</span>
            </div>
          </ul>
        </section>
      </aside>
    </>
  );
}

export default SidebarComponent;
