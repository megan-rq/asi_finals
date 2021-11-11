// Aquino, Bea Nichole T. - Dizon, Maycee G. - Quizon, Megan Rae L.
// CS - 401     6ASI    Activity
// November 11 2021

var _sbn, _title, _author, _status;

function readFom() {
  _sbn = document.getElementById("sbn").value;
  _title = document.getElementById("title").value;
  _author = document.getElementById("author").value;
  _status = document.getElementById("status").value;
  console.log(_sbn, _title, _status, _author);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("book/" + _sbn)
    .set({
      sbn: _sbn,
      title: _title,
      author: _author,
      status: _status,
    });
  alert("Data Inserted");
  document.getElementById("sbn").value = "";
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("status").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("book/" + _sbn)
    .on("value", function (snap) {
      document.getElementById("sbn").value = snap.val().sbn;
      document.getElementById("title").value = snap.val().title;
      document.getElementById("author").value = snap.val().author;
      document.getElementById("status").value = snap.val().status;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("book/" + _sbn)
    .update({
    
      title: _title,
      author: _author,
      status: _status,
    });
  alert("Data Update");
  document.getElementById("sbn").value = "";
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("status").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("book/" + _sbn)
    .remove();
  alert("Data Deleted");
  document.getElementById("sbn").value = "";
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("status").value = "";
};
