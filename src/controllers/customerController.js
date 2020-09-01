const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM Usuario", (err, customers) => {
      if (err) {
        res.json(err);
      }
      res.render("customers", {
        data: customers,
      });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body);
  req.getConnection((err, connection) => {
    const query = connection.query(
      "INSERT INTO Usuario set ?",
      data,
      (err, customer) => {
        console.log(customer);
      }
    );
  });
};

controller.edit = (req, res) => {
  const { cedula } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "SELECT * FROM Usuario WHERE cedula = ?",
      [cedula],
      (err, rows) => {
        res.render("customers_edit", {
          data: rows[0],
        });
      }
    );
  });
};

controller.update = (req, res) => {
  const { cedula } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE Usuario set ? where cedula = ?",
      [newCustomer, cedula],
      (err, rows) => {}
    );
  });
};

controller.delete = (req, res) => {
  const { cedula } = req.params;
  req.getConnection((err, connection) => {
    connection.query(
      "DELETE FROM Usuario WHERE cedula = ?",
      [cedula],
      (err, rows) => {
        res.redirect("/");
      }
    );
  });
};

module.exports = controller;
