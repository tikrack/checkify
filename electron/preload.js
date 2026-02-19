const { contextBridge } = require("electron");
// const db = require("./database");

contextBridge.exposeInMainWorld("dbApi", {
    // getChecks: () => {
    //     return db.prepare("SELECT * FROM checks").all();
    // },
    // addCheck: ({ series, serial, date, amount, status }) => {
    //     const stmt = db.prepare(`
    //   INSERT INTO checks (series, serial, date, amount, status)
    //   VALUES (?, ?, ?, ?, ?)
    // `);
    //     return stmt.run(series, serial, date, amount, status);
    // },
    // updateCheckStatus: (id, status) => {
    //     const stmt = db.prepare(`
    //   UPDATE checks SET status = ? WHERE id = ?
    // `);
    //     return stmt.run(status, id);
    // },
    // deleteCheck: (id) => {
    //     const stmt = db.prepare(`
    //   DELETE FROM checks WHERE id = ?
    // `);
    //     return stmt.run(id);
    // }
    sayHello: () => {
        console.log("SayHello");
    }
});
