import React, { useState } from "react";

const BlogsContainer = () => {
   const [categories, setcategories] = useState(data);
   return (
      <div className="flex flex-wrap items-center justify-center gap-6">
         {categories.map((category) => {
            return (
               <div className="bg-white rounded-md overflow-hidden  shadow-lg w-[90%] sm:w-80  max-w-96  cursor-pointer hover:shadow-lg transition ease-out">
                  <div className="h-36">
                     <img
                        src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1091524/regular_800x320_COVER-74d0530b060d677e7370f29a73022bcf.png"
                        alt=""
                        className="w-full h-full max-h-full object-cover"
                     />
                  </div>
                  <div className=" p-6 space-y-5">
                     <h1 className="text-slate-800 text-xl">{category.name}</h1>
                     <p className="text-slate-500 text-xs">
                        by:{" "}
                        <span className="font-medium text-slate-700 text-sm">
                           Robert Finch
                        </span>
                     </p>
                     <p className="text-slate-600 text-sm">{category.desc}</p>
                     <p className="text-slate-700 text-xs uppercase font-normal">12 Minute Read</p>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

const data = [
   {
      name: "Engineering",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum alias necessitatibus doloribus distinctio sint impedit modi fugiat dolores exercitationem.",
   },
   {
      name: "Finance",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum alias necessitatibus doloribus distinctio sint impedit modi fugiat dolores exercitationem.",
   },
   {
      name: "Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum alias necessitatibus doloribus distinctio sint impedit modi fugiat dolores exercitationem.",
   },
   {
      name: "Web Application",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum alias necessitatibus doloribus distinctio sint impedit modi fugiat dolores exercitationem.",
   },
   {
      name: "Application",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum alias necessitatibus doloribus distinctio sint impedit modi fugiat dolores exercitationem.",
   },
   {
      name: "Product",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum alias necessitatibus doloribus distinctio sint impedit modi fugiat dolores exercitationem.",
   },
];

export default BlogsContainer;
