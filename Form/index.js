function display(){
    const name = document.getElementById('name').value;
    const roll = document.getElementById('roll').value;
    const fname = document.getElementById('fname').value;
    const mname = document.getElementById('mname').value;
    const contact = document.getElementById('contact').value;

    if (name && roll && fname && mname && contact) {
    const message = `
    Name: ${name}
    Roll number: ${roll}
    Father's Name: ${fname}
    Mother's Name: ${mname}
    Contact Number: ${contact}
`;

alert(message);} else{
    alert('Fill out required fields')
}
event.preventDefault();
}


