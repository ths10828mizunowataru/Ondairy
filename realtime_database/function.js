const userid = document.getElementById('userid');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const addbtn = document.getElementById('addbtn');

const database = firebase.database();

addbtn.addEventListener('click',(e) => {
    e.preventDefault();
    database.ref('/users/'+ userid.value).set({
        first_name: firstname.value,
        last_name: lastname.value,
    });
});
