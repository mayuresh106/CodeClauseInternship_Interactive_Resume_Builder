 const fullName = localStorage.getItem('fullName');
 const email = localStorage.getItem('email');
 const phone = localStorage.getItem('phone');
 const website = localStorage.getItem('website');
 const objective = localStorage.getItem('objective');
 const education = localStorage.getItem('education');
 const school = localStorage.getItem('school');
 const graduation = localStorage.getItem('graduation');

 const achivements = localStorage.getItem('achivements'); 
 const achivements2 = localStorage.getItem('achivements2'); 
 const skills = localStorage.getItem('skills');
 const skills2 = localStorage.getItem('skills2');
 const skills3 = localStorage.getItem('skills3');
 const skills4 = localStorage.getItem('skills4');





 const certification = localStorage.getItem('certification');
 const certification2 = localStorage.getItem('certification2');
 const languages = localStorage.getItem('languages');
 const languages2 = localStorage.getItem('languages2');
 const interest = localStorage.getItem('interest');
 const interest2 = localStorage.getItem('interest2');













 document.getElementById('fullName').textContent = fullName;
 document.getElementById('email').textContent = email;
 document.getElementById('phone').textContent = phone;
 document.getElementById('website').textContent = website;
 document.getElementById('objective').textContent = objective;
 document.getElementById('education').textContent = education;
 document.getElementById('school').textContent = school;
 document.getElementById('graduation').textContent = graduation;
 
 document.getElementById('achivements').textContent = achivements; 
 document.getElementById('achivements2').textContent = achivements2; 
 document.getElementById('skills').textContent = skills;
 document.getElementById('skills2').textContent = skills2;
 document.getElementById('skills3').textContent = skills3;
 document.getElementById('skills4').textContent = skills4;




 document.getElementById('certificate').textContent = certification;
 document.getElementById('certificate2').textContent = certification2;
 document.getElementById('languages').textContent = languages;
 document.getElementById('languages2').textContent = languages2;
 document.getElementById('intrest').textContent = interest;
 document.getElementById('intrest2').textContent = interest2;













 localStorage.clear();

 function downloadPdf() {
     const element = document.querySelector('.container');

     html2pdf()
         .from(element)
         .save('resume.pdf');
 }

 setTimeout(downloadPdf, 1000);