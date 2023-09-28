var resume = [
    {
      "name": "Vishnu Prasad",
      "dateofbirth": "2/6/199*",
      "sex": "male",
      "contactdetails": {
        "phone number": "+91-96776*****",
        "Emailid": "Vishnuravichandran.28@gmail.com"
      }
    },
    {
      "education": [
        {
          "degree": "Bachelor of Electrical and Electronics Engineering",
          "university": "Anna University Chennai",
          "course duration": "2011 to 2015",
          "college name": "Info Institute of Engineering",
          "location": "Coimbatore"
        }
      ]
    },
    {
      "skills": [
        "javascript",
        "html",
        "css",
        "react",
        "nodejs",
        "mongodb",
        "git",
        "github",
        "expressjs"
      ]
    }
  ];
  
  // Using a for loop to iterate through resume
  for (var i = 0; i < resume.length; i++) {
    console.log(resume[i]);
  }
  
  // Using a for-in loop to iterate through resume
  for (var key in resume) {
    console.log(resume[key]);
  }
  
  // Using a for-of loop to iterate through resume
  for (var obj of resume) {
    console.log(obj);
  }
   
  
  //using a for -each method to iterate through resume
  resume.forEach(function(item) {
    console.log(item);
  });
