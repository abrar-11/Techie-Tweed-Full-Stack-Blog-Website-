import db from "../config/db.js";

export const getAllBlogs = (req, res) => {
   const q = "select * from blogs";

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

      console.log(results[0]);
      res.status(200).json({
         success: true,
        
      });
   });
};

export const getBlog = (req, res) => {
   const q = "SELECT `username`,`title`,`desc`,p.img, u.img AS userImg ,`cat`,`date` FROM users u JOINS posts p ON u.id = p.uid WHERE p.id = ?"
   db.query(q, [req.params.id], (err, results) => {
      if (err) {
         return res.status(500).json({ success: false, error: err });
      }
      console.log(results[0]);
      res.status(200).json({
         success: true,
      });
   });
}
// Delete Blog
export const deleteBlog = (req, res) => {
    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(403).json(err);

      return res.json("Deleted");
    });
}

