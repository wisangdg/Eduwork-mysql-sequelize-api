export const resolveIndexById = (req, res, next) => {
  const { id } = req.params;
  const parsedId = parseInt(id);

  if (isNaN(parsedId)) {
    return res
      .status(400)
      .json({ error: "Invalid ID: ID harus berupa angka." });
  }

  connection.query(
    "SELECT * FROM users WHERE id = ?",
    [parsedId],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Database query error." });
      }

      if (results.length === 0) {
        return res
          .status(404)
          .json({ error: `User dengan ID ${parsedId} tidak ditemukan.` });
      }

      req.user = results[0];
      next();
    }
  );
};
