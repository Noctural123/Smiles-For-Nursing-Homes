const locations = ['Oklahoma Palliative & Hospice Care', 'Village at Oakwood', 'Heritage Point of Oklahoma City'  ]

function render()
{
  const textbox = document.getElementById('main-question-input');
  const value = textbox.value;
  const ageTextbox = document.getElementById('age-question-input');
  const age = ageTextbox.value;
  
  if(age < 15)
  {
    document.getElementById('output-text').innerHTML = 'Too Young!';
    document.getElementById('output-pic').src = "pictures/tooYoungPic.jpg";
  }
  else if(value < 15 && age >= 15)
  {
    document.getElementById('output-text').innerHTML = 'None Found :(';
    document.getElementById('output-pic').src = "pictures/sadface.png";
  }
  else if(value >= 15 && value < 20 && age >= 15)
  {
    document.getElementById('output-text').innerHTML = locations[0];
    document.getElementById('output-pic').src = "pictures/nursinghome1.jpg";
  }
  else if(value >= 20 && value < 37 && age >= 15)
  {
    document.getElementById('output-text').innerHTML = locations[1];
    document.getElementById('output-pic').src = "pictures/nursinghome2.jpg";
  }
  else if(value > 37 && age >= 15) 
  {
    document.getElementById('output-text').innerHTML = locations[2];
    document.getElementById('output-pic').src = "pictures/nursinghome3.jpg";
  }
  
}
