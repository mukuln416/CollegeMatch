/* global rgba */

class College{
    constructor(name, location1, rating){
        this.location1 = location1;
        this.rating = rating;
        this.name = name;
    }
}

//database
var college_arr = [];

college_arr[0] = new College("Stanford", "N_CA", 370);
college_arr[1] = new College("UC San Diego", "S_CA", 275);
college_arr[2] = new College("California Institute of Technology", "S_CA", 320);
college_arr[3] = new College("UC Berekley", "M_CA", 300);
college_arr[4] = new College("UC Irvine", "S_CA", 245);
college_arr[5] = new College("CSU Sacramento", "N_CA", 160);
college_arr[6] = new College("UC Riverside", "S_CA", 180);
college_arr[7] = new College("San Jose State University", "N_CA", 190);
college_arr[8] = new College("UC Santa Barbara", "S_CA", 230);
college_arr[9] = new College("UC Davis", "N_CA", 200);
college_arr[10] = new College("UC Merced", "M_CA", 180);
college_arr[11] = new College("UC Los Angeles", "M_CA", 310);
college_arr[12] = new College("CSU Chico", "N_CA", 170);
college_arr[13] = new College("University of San Fransisco", "N_CA", 150);
college_arr[14] = new College("CSU Fresno", "M_CA", 180);
college_arr[15] = new College("College of Alameda", "N_CA", 50);
college_arr[16] = new College("Foothill College", "M_CA", 40);
college_arr[17] = new College("CSU East Bay", "N_CA", 130);
college_arr[18] = new College("CSU Monterey Bay", "M_CA", 130);
college_arr[19] = new College("UC Santa Cruz", "N_CA", 190);
college_arr[20] = new College("Los Angeles Valley College", "S_CA", 50);
college_arr[21] = new College("CSU Long Beach", "S_CA", 230);
college_arr[22] = new College("University of Southern California", "S_CA", 300);
college_arr[23] = new College("Peperdine University", "S_CA", 270);
college_arr[24] = new College("San Diego State University", "S_CA", 170);
college_arr[25] = new College("California State University--Fullerton", "S_CA", 150);
college_arr[26] = new College("Santa Clara University", "M_CA", 185);
college_arr[27] = new College("Saint Mary University", "M_CA", 110);
college_arr[28] = new College("Community College", "M_CA", 20);
college_arr[29] = new College("Community College", "N_CA", 20);
college_arr[30] = new College("Community College", "S_CA", 20);
college_arr[31] = new College("Biola University", "S_CA", 140);
college_arr[32] = new College("California Polytechnic State University", "S_CA", 280);
college_arr[33] = new College("Chapman University", "S_CA", 190);
college_arr[34] = new College("UC San Francisco (medical only)", "N_CA", 280);
college_arr[35] = new College("CSU San Bernardino", "S_CA", 160);
college_arr[36] = new College("Massachusates Institute of Technology", "MA", 380);
college_arr[37] = new College("Harvard", "MA", 380);
college_arr[38] = new College("Boston School of Medicine", "MA", 360);
college_arr[39] = new College("TUFTS University", "MA", 360);
college_arr[40] = new College("Emerson College", "MA", 270);
college_arr[41] = new College("Framingham University", "MA", 140);
college_arr[42] = new College("Franklin W. Olin College of Engineering", "MA",360 );
college_arr[43] = new College("Smith College", "MA", 320);
college_arr[44] = new College("Brandeis University", "MA", 310);











//data_handling
var user_location, ethnicity_points, gpa_points, ap_points, SATorACT_points, ECT1_points, ECT2_points, ECT3_points, ECT4_points, VH_points, JE_points, IT_points, totalecpoints ;

function formhandling1(){
    var form1 = document.getElementById("form1");
    document.getElementById("errortag1").innerHTML = "";
    if(checkforErrors1() == true){
        user_location = form1.elements[0].value;
        if(form1.elements[1].checked == true || form1.elements[3].checked == true){
            ethnicity_points = 10;
        }
        else {
            ethnicity_points = 0;
        }
        gpa_points = form1.elements[6].value * 20
        console.log(gpa_points)
        ap_points = parseInt(form1.elements[7].value) * 5
        if(ap_points > 50){
            ap_points = 50;
        }
        if(form1.elements[8].checked == true){
            document.getElementById("form2").style.display = "block";
            document.getElementById("f1break").style.display = "none";
            document.getElementById("form1").style.display = "none";
            document.getElementById("errortag1").style.display = "none";
        }
        else if(form1.elements[9].checked == true) {
            document.getElementById("form3").style.display = "block";
            document.getElementById("form1").style.display = "none";
            document.getElementById("f1break").style.display = "none";
            document.getElementById("errortag1").style.display = "none";
        }
        
        
    }
    else{
        document.getElementById("errortag1").innerHTML = "*Sorry, but you have not entered all the information correctly";
        document.getElementById("errortag1").style.color = "red";
    }
    
    
}

function formhandling2(formtype){
    var formx = document.getElementById(formtype)
    document.getElementById("errortag2").innerHTML = "";
    if(checkforErrors2(formtype) == true){
        if(formtype == "form2"){
            SATorACT_points = parseInt(formx.elements[0].value)/16
        }
        else{
            SATorACT_points = parseInt(formx.elements[0].value)*3-8
        }
        
        ECT4_points = parseInt(formx.elements[1].value)*5
        ECT3_points = parseInt(formx.elements[2].value)*10
        ECT2_points = parseInt(formx.elements[3].value)*20 
        ECT1_points = parseInt(formx.elements[4].value)*40
        
        totalecpoints = ECT1_points + ECT2_points + ECT3_points + ECT4_points 
        if (totalecpoints > 80){
            totalecpoints = 80;
        }
        
        
        VH_points = parseInt(formx.elements[5].value)/5
        if (VH_points > 30) {
            VH_points = 30;
        }
        
        JE_points = parseInt(formx.elements[6].value)/5
        if(JE_points > 30){
            JE_points = 30;
        }
        
        if(formx.elements[7].checked == true){
            IT_points = -10
        }
        else{
            IT_points = 0;
        }
        getcolleges1();
    }
    
    else{
        if(formtype == 'form2'){
            document.getElementById("errortag2").innerHTML = "Sorry, but you have not entered all the information correctly";
            document.getElementById("errortag2").style.color = "red";
        }
        else{
            document.getElementById("errortag3").innerHTML = "Sorry, but you have not entered all the information correctly"
            document.getElementById("errortag3").style.color = "red";
        }
    }
}

function getcolleges1() {
    var totalpoints = ethnicity_points + gpa_points + ap_points + SATorACT_points + totalecpoints + VH_points + JE_points + IT_points;
    console.log(totalpoints);
    var target = document.createElement("h3");
    var targetNode = document.createTextNode("Your target colleges should be: ");
    var theDiv = document.getElementById("final_message");
    theDiv.appendChild(target.appendChild(targetNode));
    
    for (var i = 0 ; i < college_arr.length; i++) {
        if ((user_location == college_arr[i].location1 || user_location == "none") && college_arr[i].rating > totalpoints-25 && college_arr[i].rating < totalpoints + 25) {
            var p1 = document.createElement("p");
            var pNode = document.createTextNode(college_arr[i].name + ", ")
            theDiv.appendChild(p1.appendChild(pNode));
            
           /* var p2 = document.createElement("p");
            var pNode = document.createTextNode(college_arr[i].name + ", and ")
            theDiv.appendChild(p2.appendChild(pNode));
            
            var p3 = document.createElement("p");
            var pNode = document.createTextNode(college_arr[i].name)
            theDiv.appendChild(p3.appendChild(pNode)); */
        } 
            
            /*var p2 = document.createElement("p");
            var pNode = document.createTextNode(college_arr[i].name + ", and ")
            theDiv.appendChild(p2.appendChild(pNode));
            
            var p3 = document.createElement("p");
            var pNode = document.createTextNode(college_arr[i].name)
            theDiv.appendChild(p3.appendChild(pNode));*/
        }
    
    document.getElementById("final_message").style.display = "block";
} 

function getMainCollege() {
    var totalpoints = ethnicity_points + gpa_points + ap_points + SATorACT_points + totalecpoints + VH_points + JE_points + IT_points;
    console.log(totalpoints);
    var target = document.createElement("h2");
    var targetNode = document.createTextNode("Your Main Target should be: ");
    var theDiv = document.getElementById("final_two");
    theDiv.appendChild(target.appendChild(targetNode));
    
    for (var i = 0 ; i < college_arr.length; i++) {
        if (user_location == college_arr[i].location1 && college_arr[i].rating > totalpoints-15 && college_arr[i].rating < totalpoints + 15) {
            var p1 = document.createElement("p");
            var pNode = document.createTextNode(college_arr[i].name + ", ")
            theDiv.appendChild(p1.appendChild(pNode));
            
        }
        else {
            var str ="No primary targets in your score, please refer to the list of suggested colleges above";
            theDiv.appendChild(p1.appendChild(str));
        }
    }
    document.getElementById("final_two").style.display = "block";
} 


function checkforErrors1(){ 
    var form1 = document.getElementById("form1");
    if((form1.elements[0].value == "none" || form1.elements[0].value =="M_CA" || form1.elements[0].value =="N_CA" || form1.elements[0].value =="S_CA" || form1.elements[0].value =="MA") && (form1.elements[1].checked == true || form1.elements[2].checked == true || form1.elements[3].checked == true || form1.elements[4].checked == true || form1.elements[5].checked == true) && form1.elements[6].value >= 0 && form1.elements[6].value <= 5.0 && (form1.elements[8].checked == true || form1.elements[9].checked) == true && form1.elements[7].value >= 0 ){
        return true
    }
    else{
        return false
    }
}

function checkforErrors2(formtypee){
    var formx = document.getElementById(formtypee);
    if(formtypee == 'form2'){
        if((formx.elements[0].value >= 0 && formx.elements[0].value <= 1600) && formx.elements[1].value >= 0 && formx.elements[2].value >= 0 && formx.elements[3].value >= 0 && formx.elements[4].value >= 0 && formx.elements[5].value >= 0 && formx.elements[6].value >= 0 && (formx.elements[7].checked == true || formx.elements[8].checked == true) && (parseInt(formx.elements[1].value) + parseInt(formx.elements[2].value) + parseInt(formx.elements[3].value) + parseInt(formx.elements[4].value)) <= 5){
            return true;
        }
        else{
            console.log("false");
            return false;
        }
    }
    else if(formtypee == 'form3'){
        if((formx.elements[0].value >= 0 && formx.elements[0].value <= 36) && formx.elements[1].value >= 0 && formx.elements[2].value >= 0 && formx.elements[3].value >= 0 && formx.elements[4].value >= 0 && formx.elements[5].value >= 0 && formx.elements[6].value >= 0 && (formx.elements[7].checked == true || formx.elements[8].checked == true) && (parseInt(formx.elements[1].value) + parseInt(formx.elements[2].value) + parseInt(formx.elements[3].value) + parseInt(formx.elements[4].value)) <= 5){
            return true;
        }
        else{
            return false;
        }
    }
}