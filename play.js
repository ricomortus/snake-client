const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  //Handle incoming data from server when idled/ kicked out
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};


console.log("Connecting ...");
connect();
