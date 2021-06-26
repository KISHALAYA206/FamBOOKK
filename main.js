var images = 
[
  "Chat Noir.....Yeaaa....Chat Noir.png", "Me.jpeg" , "mom.jpg" , "pop.jpg"
]
  var names = 
  [
       "My Family" , "Kishalaya Kumar", "Sampati Kumar", "Rupesh Kumar"
  ]

var i = 0;
function update()
{
    var numbers_of_family_members_in_array = 4
    if(i >= numbers_of_family_members_in_array)
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
    i++;
}