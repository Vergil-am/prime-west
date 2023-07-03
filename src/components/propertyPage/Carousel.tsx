"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";



export default async function Carousel(params: any) {
  const Pictures = params.Pictures;
  if (Pictures == undefined) {
    throw new Error("failed to retrieve images");
  }
  return (
    <div className="m-3 max-sm:m-0">
      <Splide aria-label="My Favorite Images">
        {Pictures.map((pic: any) => {
          return (
            <SplideSlide key={pic.sys.id}>
              <img className="rounded-md" src={pic.fields.file.url} alt={pic.fields.title} />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}
