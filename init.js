class FastAF {
  constructor() {}
  init(clientID, clientSecret, userID, devID) {
    async function sendCreds() {
      const rawres = await fetch("http://localhost:5000/init", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          clientID: clientID,
          clientSecret: clientSecret,
          userID: userID,
          devID: devID,
        },
      });
      const res = await rawres.json();
      return res;
    }
    sendCreds();
  }
  startAuth() {
    window.location.href = "http://127.0.0.1:5500/authView/index.html";
  }
}

const fastAF = new FastAF();
module.exports = FastAF;
