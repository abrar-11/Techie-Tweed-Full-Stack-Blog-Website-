import React, { useState } from "react";

const CategoriesContainer = () => {
   const [categories, setcategories] = useState(data);
   return (
      <div className="flex flex-wrap items-center justify-center gap-6">
         {categories.map((category) => {
            return (
               <div className="bg-indigo-50 p-6 rounded-xs shadow-md w-96 space-y-5 cursor-pointer hover:shadow-lg transition ease-out">
                  <h1 className="text-slate-800 text-2xl">
                     {category.name}
                  </h1>
                  <p className="text-slate-600 text-sm">{category.desc}</p>
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

export default CategoriesContainer;
