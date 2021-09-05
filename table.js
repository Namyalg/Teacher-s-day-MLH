
  const firebaseConfig = {
    apiKey: "AIzaSyAmleLBrmJH_Io4bWi5FEWvbB7U6TGM3r0",
    authDomain: "studq-c44bf.firebaseapp.com",
    databaseURL: "https://studq-c44bf-default-rtdb.firebaseio.com",
    projectId: "studq-c44bf",
    storageBucket: "studq-c44bf.appspot.com",
    messagingSenderId: "232427224998",
    appId: "1:232427224998:web:cc2c6746b3682f499a9967"
  };

firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var students = database.ref().child("students");
console.log("students")

function deleteQueue(){
  students.remove();
  location.reload();
}




  students.on("child_added", function(snapshot, prevChildKey) {
      var newPost = snapshot.val();
      console.log(newPost);
      var myArrayFromLocalStorage = localStorage.getItem('myArray')
      var myArray = []
      if (myArrayFromLocalStorage && myArrayFromLocalStorage.length) {
         myArray = JSON.parse(myArrayFromLocalStorage)
          
      }

    

      var name = newPost.Name;
      var time = newPost.Time;      
      var table = document.getElementById("myTable");
      var row = table.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell4 = row.insertCell(2);

      cell1.innerHTML = name;
      cell2.innerHTML = time;
      cell4.innerHTML = "<button onclick='deleteEntry(this)'>remove</button>"

    });
  

    function deleteEntry(reference)
    {
        var row = reference.parentNode.parentNode;
        //document.getElementById("myTable").deleteRow(row.rowIndex);
        var n = document.getElementById("myTable").rows[row.rowIndex].cells[0].innerHTML;
        database.ref().child("students").once('value', function(snapshot){
          var names = [];
          snapshot.forEach(
            function (child){
              let name = child.val().Name;
              if(n == name){
                //alert(child.key);
                database.ref().child("students").child(child.key).remove()
                var myArrayFromLocalStorage = localStorage.getItem('myArray')
                  if (myArrayFromLocalStorage && myArrayFromLocalStorage.length) {
                  var myArray = JSON.parse(myArrayFromLocalStorage)
                  myArray.push(name);
                  alert("here")
                  localStorage.setItem('myArray', JSON.stringify(myArray))
                    for(var j = 0; j < myArray.length; j++){
                      console.log(myArray[j])
                    }
    
                }
                location.reload()
                return;
              }

            }
          )
         
        });


        //ref.child(key).remove();
    }