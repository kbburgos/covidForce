const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM Reporte", (err, reporte) => {
      if (err) {
        res.json(err);
      }
      res.render("Reporte", {
        data: reporte,
      });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body);
  req.getConnection((err, connection) => {
    const query = connection.query(
      "INSERT INTO Reporte set ?",
      data,
      (err, reporte) => {
        console.log(reporte);
        res.redirect('/');
      }
    );
  });
};

controller.edit = (req, res) => {
  const { id_reporte } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "SELECT * FROM Usuario WHERE id_reporte = ?",
      [id_reporte],
      (err, rows) => {
        res.render("reporte_edit", {
          data: rows[0],
        });
      }
    );
  });
};

controller.update = (req, res) => {
  const { id_reporte } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE Reporte set ? where id_reporte = ?",
      [newCustomer, id_reporte],
      (err, rows) => {}
    );
  });
};

controller.delete = (req, res) => {
  const { id_reporte } = req.params;
  req.getConnection((err, connection) => {
    connection.query(
      "DELETE FROM Reporte WHERE id_reporte = ?",
      [id_reporte],
      (err, rows) => {
        res.redirect("/");
      }
    );
  });
};

module.exports = controller;