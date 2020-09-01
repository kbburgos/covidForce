const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM semaforo", (err, semaforo) => {
      if (err) {
        res.json(err);
      }
      res.render("semaforo", {
        data: semaforo,
      });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body);
  req.getConnection((err, connection) => {
    const query = connection.query(
      "INSERT INTO semaforo set ?",
      data,
      (err, semaforo) => {
        console.log(semaforo);
        res.redirect('/');
      }
    );
  });
};

controller.edit = (req, res) => {
  const { id_semaforo } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "SELECT * FROM Usuario WHERE id_semaforo = ?",
      [id_semaforo],
      (err, rows) => {
        res.render("semaforo_edit", {
          data: rows[0],
        });
      }
    );
  });
};

controller.update = (req, res) => {
  const { id_semaforo } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE semaforo set ? where id_semaforo = ?",
      [newCustomer, id_semaforo],
      (err, rows) => {}
    );
  });
};

controller.delete = (req, res) => {
  const { id_semaforo } = req.params;
  req.getConnection((err, connection) => {
    connection.query(
      "DELETE FROM semaforo WHERE id_semaforo = ?",
      [id_semaforo],
      (err, rows) => {
        res.redirect("/");
      }
    );
  });
};

module.exports = controller;