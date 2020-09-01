const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM Markers", (err, markers) => {
      if (err) {
        res.json(err);
        res.status(500);
      }
      if (markers == null) {
        res.status(404);
        res.json({ log: "No existen datos que mostrar" });
      }
      res.status(200).json(markers);
      res.render("markers", {
        data: markers,
      });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body);
  req.getConnection((err, connection) => {
    const query = connection.query(
      "INSERT INTO Markers set ?",
      data,
      (err, markers) => {
        if (err) {
          res.status(404).json({ log: "No se pudo crear el marcador." });
        }
        console.log(markers);
      }
    );
  });
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "SELECT * FROM Markers WHERE id_markers = ?",
      [id],
      (err, rows) => {
        if (err) {
          res.status(404).json({ log: "No hay datos que mostrar." });
        }
        res.status(202).json({ log: "No se pudo crear el marcador." });
        res.render("markers_edit", {
          data: rows[0],
        });
      }
    );
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE Markes set ? where id_markers= ?",
      [newCustomer, id],
      (err, rows) => {
        if (err) {
          res.status(404).json({ log: "No se pudo editar el marcador." });
        }
        res.status(200);
        console.log(rows);
      }
    );
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query(
      "DELETE FROM Usuario WHERE cedula = ?",
      [id],
      (err, rows) => {
        if (err) {
          res.status(404).json({ log: "No se pudo eliminar el marcador." });
        }
        res.redirect("/");
      }
    );
  });
};

module.exports = controller;
