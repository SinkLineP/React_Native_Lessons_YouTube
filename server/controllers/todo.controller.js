const db = require("../db");

class TodoController {
  async createTodo(req, res) {
    const {name} = req.body;
    const newTodo = await db.query(`INSERT INTO todo (name) values ($1) RETURNING *`, [name]);
    res.json(newTodo.rows[0]);
  };

  async getTodo(req, res) {
    const todo = await db.query('SELECT * FROM todo');
    res.json(todo.rows);
  };

  async getOneTodo(req, res) {
    const id = req.params.id;
    const todo = await db.query('SELECT * FROM todo where id = $1', [id]);
    res.json(todo.rows[0]);
  };

  async updateTodo(req, res) {
    const {id, name} = req.body
    const todo = await db.query(
      'UPDATE todo set name = $1 where id = $5 RETURNING *',
      [name, id]
    );
    res.json(todo.rows[0]);
  };

  async deleteTodo(req, res) {
    const id = req.params.id;
    const todo = await db.query('DELETE FROM todo where id = $1', [id]);
    res.json(todo.rows[0]);
  };
}

module.exports = new TodoController();