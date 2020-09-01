const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM Zona", (err, zona) => {
      if (err) {
        res.json(err);
      }
      res.render("zona", {
        data: zona,
      });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body);
  req.getConnection((err, connection) => {
    const query = connection.query(
      "INSERT INTO Zona set ?",
      data,
      (err, customer) => {
        console.log(customer);
        res.redirect('/');
      }
    );
  });
};

controller.edit = (req, res) => {
  const { id_zona } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "SELECT * FROM Zona WHERE id_zona = ?",
      [id_zona],
      (err, rows) => {
        res.render("zona_edit", {
          data: rows[0],
        });
      }
    );
  });
};

controller.update = (req, res) => {
  const { id_zona } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE Zona set ? where id_zona = ?",
      [newCustomer, id_zona],
      (err, rows) => {}
    );
  });
};

controller.delete = (req, res) => {
  const { id_zona } = req.params;
  req.getConnection((err, connection) => {
    connection.query(
      "DELETE FROM Zona WHERE id_zona = ?",
      [id_zona],
      (err, rows) => {
        res.redirect("/");
      }
    );
  });
};

module.exports = controller;