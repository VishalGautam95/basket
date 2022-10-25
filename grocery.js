
values = [];

function myfunction(event) {

    var field = document.getElementById("item").value;
    let attributeValue = event.target.getAttribute("id");


    if (field != "") {

        //   check value in array if exists  
        let FilterIndex = values.indexOf(field)


        // if array contain same value 
        if (FilterIndex >= 0) {

            alert("Already add ")

        } else {

            values.push(field);



            let newArry = []
            
            newArry.push(field)

            for (const listitems_ of newArry) {

                var documentFragment = document.createRange().createContextualFragment(`
                <li>

                <h4>${listitems_}</h4>
                <button onclick=removeElement(event)>Remove</button>
                </li>    
                `)
        
                    if (attributeValue == 'need') {
                    document.getElementById("NEEDmylist").append(documentFragment);


                }

                else {
                    document.getElementById("HAVEmylist").append(documentFragment);

                }

            }

        }

    } 
    else {
        alert("Field is empty")
    }
    document.getElementById("item").value = "";

}
 function removeElement(event){
    event.currentTarget.parentNode.remove()
    
    
 }

































