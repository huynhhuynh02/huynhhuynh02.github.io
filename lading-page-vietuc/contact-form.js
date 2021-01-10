
$(document).ready(function () {

    var firebaseConfig = {
        apiKey: "AIzaSyDaweJvAI77N1Eosa_CcsOK8zMFai2b5Sk",
        authDomain: "ladding-page-vietuc.firebaseapp.com",
        databaseURL: "https://ladding-page-vietuc-default-rtdb.firebaseio.com",
        projectId: "ladding-page-vietuc",
        storageBucket: "ladding-page-vietuc.appspot.com",
        messagingSenderId: "845812191264",
        appId: "1:845812191264:web:3243f6f23f683a2ff52c45",
        measurementId: "G-E2TYLBPVWW"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();


    $('#contactForm').submit((e) => {
        e.preventDefault();
        var data = {

        };
        $(this).serializeArray().map(function (v) {
            data[v.name] = v.value
        });
        var key = firebase.database().ref().child('users').push(data).key;
        console.log('create new contact: ' + key);
        console.log(data);
    });
});