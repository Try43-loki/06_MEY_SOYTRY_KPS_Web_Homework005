import { Tag } from "lucide-react";
import React from "react";

function HomePage() {
  return (
    <>
      <article className="w-full  pr-14">
        <section className="bg-white h-[83vh] rounded-lg p-10">
          <div className="px-3 py-2 rounded-md bg-gray-white w-[200px] text-center">
            <h4 className="text-secondary text-2xl font-normal">Homepage</h4>
          </div>
          <hr className="border-[1.5px] border-secondary mt-5"></hr>

          <figure>
            <figcaption className="relative rounded-lg h-[300px] w-[250px] overflow-hidden group">
              <img
                className="w-full h-full group-hover:opacity-50 transition-opacity duration-300"
                src="https://s3-alpha-sig.figma.com/img/c73c/a81c/dd317b2dcd79328efc4e3095489f2244?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sop1LVQptT1zML-GVA9Q0ZDt5qkU4Apx6H9tTIZMvD9WfErQZZlubZI2SZBsPUiV-QgL5JR9VsAS6JgrjHBXt1SESaIVXrBFmThQkQwLVyxHmduniVAefQv6SVsNWMGnc-B7H6NYa0Xfe2UXRKPtt4YiDOZ1A~yE0TJUU9eOH2LUI9Sv0eygEjNy5BMuztUfPGXrGILhJOvh0fDcCI9Dlal0Bu8f7qWrZEA3WZ2~w2-Z3ben~QQRt-vz9gYO0ZsA8F4rJGDlBlDY8M2oUopxsCUND9VVyVF8VNeMcgViCSP94gidrM8hqGX60XmHafNwPvrogafTyPhZGmRI24LxZg__"
              />
              <span className="absolute top-2 left-2 text-primary text-medium flex justify-center items-center gap-x-2 bg-white rounded-md px-2 py-1">
                <Tag size={20} />
                <p>Book</p>
              </span>
              <div className="absolute inset-0 bg-black bg-opacity-80 text-center opacity-0 group-hover:opacity-100 ">
                <p>
                  View All <br />
                  Available <br />
                  Books
                </p>
              </div>
            </figcaption>
          </figure>
        </section>
      </article>
    </>
  );
}

export default HomePage;
