import db from "../config/db.js";

export const getAllBlogs = (req, res) => {
   const q = "select * from users";

   db.query(q, (err, results) => {
      if (err) {
         return res.status(500).json({ success: false, error: err });
      }

      console.log(results);
      res.status(200).json({
         success: true,
         data: results,
      });
   });
};
export const createBlog = (req, res) => {
   const q =
      "insert into blogs (`title`,`description`,`img`,`author`) values (?)";

   const values = [
      req.body.title,
      req.body.description,
      req.body.img,
      req.body.author,
   ];

   db.query(q, [values], (err, results) => {
      if (err) {
         return res.status(500).json({ success: false, error: err });
      }

      console.log(results);
      res.status(200).json({
         success: true,
         data: results[0],
      });
   });
};
