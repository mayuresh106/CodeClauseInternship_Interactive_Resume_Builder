document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const website = formData.get('website');
    const objective = formData.get('objective');
    const education = formData.get('education');
    const school = formData.get('school');
    const graduation = formData.get('graduation');
    const experience = formData.get('experience');
    const company = formData.get('company');
    const city = formData.get('city');
    const state = formData.get('state');
    const service = formData.get('service');
    const achivements = formData.get('achievements');
    const achivements2 = formData.get('achievements2');
    const skills = formData.get('skills');
    const skills2 = formData.get('skills2');
    const skills3 = formData.get('skills3');
    const skills4 = formData.get('skills4');

    const certification = formData.get('certification');
  const certification2 = formData.get('certification2');
  const languages = formData.get('languages');
  const languages2 = formData.get('languages2');
  const interest = formData.get('interest');
  const interest2 = formData.get('interest2');
  const option = formData.get('option');


    











    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('website', website);
    localStorage.setItem('objective', objective);
    localStorage.setItem('education', education);
    localStorage.setItem('school', school);
    localStorage.setItem('graduation', graduation);

    localStorage.setItem('experience', experience);
    localStorage.setItem('company', company);
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
    localStorage.setItem('service', service);
    localStorage.setItem('achivements', achivements);
    localStorage.setItem('achivements2', achivements2);
    localStorage.setItem('skills', skills);
    localStorage.setItem('skills2', skills2);
    localStorage.setItem('skills3', skills3);
    localStorage.setItem('skills4', skills4);


    localStorage.setItem('certification', certification);
  localStorage.setItem('certification2', certification2);
  localStorage.setItem('languages', languages);
  localStorage.setItem('languages2', languages2);
  localStorage.setItem('interest', interest);
  localStorage.setItem('interest2', interest2);



  


    // Phone number validation function
    const phoneRegex = /^\d{10}$/; 
    if (!phone.match(phoneRegex)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }


// Email validation
const emailRegex = /^\S+@\S+\.\S+$/; 
    if (!email.match(emailRegex)) {
      alert('Please enter a valid email address.');
      return;
    }


    


     // Objective length validation
      if (objective.length < 100 || objective.length > 400) {
      alert('Objective must be between 100 and 400 characters.');
      return;
    }

    // 

   
    
    
  // Check if city, state, and end date of employment are also filled

    
    if (experience) {
  if (!city || !state || !service) {
    alert('If designation is filled, please provide input for City, State, and End Date of Employment.');
    return;
  }
}

 
if (city) {
  if (!experience || !state || !service) {
    alert('If city is filled, please provide input for designation, State, and End Date of Employment.');
    return;
  }
}

if (state) {
  if (!city || !experience || !service) {
    alert('If state is filled, please provide input for designation, city, and End Date of Employment.');
    return;
  }
}
    
    
if (service) {
  if (!city || !state || !experience) {
    alert('If End Date of Employment is filled, please provide input for designation, State, and city.');
    return;
  }
}
    
    
  
    
    // Redirect based on the selected option
     if (option === 'template') {
    if (experience === null || experience === "") {
      window.location.href = 'template1.html';
    } else {
      window.location.href = 'template2.html';
    }
  } else if (option === 'resume') {

      if (experience === null || experience === "") {
     
      window.location.href = 'template3.html';

    } else {
      window.location.href = 'template4.html';
      

     
    }

    
  }

  });