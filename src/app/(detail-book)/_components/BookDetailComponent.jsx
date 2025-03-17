import React from "react";

function BookDetailComponent() {
  return (
    <>
      <section className="p-24 mb-16">
        <div className="flex justify-start items-center gap-x-4">
          <a href="/">Home</a>
          <a href="/cartoons">Cartoon</a>
          <a href="/red-full">Read-full</a>
        </div>

        <article className="bg-white rounded-3xl relative p-14">
          <figure className="absolute -top-[76px] right-14">
            <img
              src="https://s3-alpha-sig.figma.com/img/53b7/da50/f304cb33a6800220ad4dc667b09edb1c?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UnI-o082Y0Zgm6eSKTdcYYHqZkLBSe8pUH1k8hh147PDwaYYiglGlvm5g8-ZeYhYXRH-bZfR9yoz4HuLWJ0oZYd7nkEsysovgdblpM6HV2v5MH8lHyI9v~0dBA8f4vM83CG8bS0MWKXbAn6unIedWU8jtslmeOp-0eoiW3CNZ34yziW9KaJ84~SkxmWFx1vtQHF-kxClD-nurKR6KHJPcHL-VNZOneJ8cpJ7N13pwr9nZa2cBslQ2ibv7Mbp7px8m3M~K-lN9D7iS-hYW-DYSOFhRt-gJQ3sIrOv21dHA0aRR85vnpdipq2pbKj6kC3YAuI5K4i5mHEaiera5JbjOw__"
              alt=""
              className="w-[260px] h-[300px] object-cover rounded-2xl "
            />
          </figure>
          <div className="flex justify-center flex-col items-start gap-y-3 pt-40">
            <h3 className="text-3xl text-primary font-bold">
              How Do You Live?
            </h3>
            <h4 className="text-2xl ">
              by{" "}
              <span className=" font-semibold text-secondary">
                Black Monster
              </span>
            </h4>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eveniet fuga quidem saepe possimus, a harum placeat,
              fugit beatae accusamus reprehenderit voluptates obcaecati
              aspernatur aut cumque tempora impedit. Dolor, placeat?
            </p>
          </div>
        </article>
      </section>
    </>
  );
}

export default BookDetailComponent;
