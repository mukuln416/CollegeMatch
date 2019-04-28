/* global rgba */

class College{
    constructor(name, location, rating){
        this.location = location;
        this.rating = rating;
        this.name = name;
    }
}

//database
var college_arr = [];

college_arr[0] = new College("Stanford", "N_CA", 370);
college_arr[1] = new College("UC San Diego", "S_CA", 275);
college_arr[2] = new College("California Institute of Technology", "S_CA", 320);
college_arr[3] = new College("UC Berekly", "M_CA", 300);
college_arr[4] = new College("UC Irvine", "S_CA", 245);
college_arr[5] = new College("CSU Sacramento", "N_CA", 160);
college_arr[6] = new College("UC Riverside", "S_CA", 180);
college_arr[7] = new College("San Jose State University", "N_CA", 190);
college_arr[8] = new College("UC Santa Barbara", "S_CA", 230);
college_arr[9] = new College("UC Davis", "N_CA", 200);
college_arr[10] = new College("UC Merced", "M_CA", 180);
college_arr[11] = new College("UC Los Angeles", "M_CA", 285);
college_arr[12] = new College("CSU Chico", "N_CA", 170);
college_arr[13] = new College("University of San Fransisco", "N_CA", 150);
college_arr[14] = new College("CSU Fresno", "M_CA", 180);
college_arr[15] = new College("College of Alameda", "N_CA", 50);
college_arr[16] = new College("Foothill College", "M_CA", 40);
college_arr[17] = new College("CSU East Bay", "N_CA", 130);
college_arr[18] = new College("CSU Monterey Bay", "M_CA", 130);
college_arr[19] = new College("UC Santa Cruz", "N_CA", 190);
college_arr[20] = new College("Los Angeles Valley College", "S_CA", 50);
college_arr[21] = new College("Cal State Long Beach", "S_CA", 160);
college_arr[22] = new College("University of Southern California", "S_CA", 300);
college_arr[23] = new College("Peperdine University", "S_CA", 270);
college_arr[24] = new College("San Diego State University", "S_CA", 170);
college_arr[25] = new College("California State University--Fullerton", "S_CA", 150);
college_arr[26] = new College("Santa Clara University", "M_CA", 185);
college_arr[27] = new College("Saint Mary University", "M_CA", 110);
college_arr[28] = new College("Community College", "M_CA", 0);
college_arr[29] = new College()



//data_handling
var location, ethnicity_points, gpa_points, ap_points, SATorACT_points, ECT1_points, ECT2_points, ECT3_points, ECT4_points, VH_points, JE_points, IT_points, totalecpoints ;

function formhandling1(){
    var form1 = document.getElementById("form1");
    document.getElementById("errortag1").innerHTML = "";
    if(checkforErrors1() == true){
        var location = form1.elements[0].value;
        if(form1.elements[1].checked == true || form1.elements[3].checked == true){
            ethnicity_points = 10;
        }
        else {
            ethnicity_points = 0;
        }
        gpa_points = parseInt(form1.elements[6].value)
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
        document.getElementById("errortag1").innerHTML = "Sorry, but you have not entered all the information correctly";
        document.getElementById("form1").style.background = rgba(255, 0, 0, 0.65);
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
        }
        else{
            document.getElementById("errortag3").innerHTML = "Sorry, but you have not entered all the information correctly"
        }
    }
}

function getcolleges1() {
    var newcollege = [];
    var collegenumber = 0
    for (var i = 0 ; i < college_arr.length; i++) {
        if (location == college_arr[i].location) {
            newcollege[collegenumber] = college_arr[i];
            collegenumber ++;
        }
    }
    getcolleges2(newcollege);
} 

function getcolleges2(collegearray) {
    var totalpoints = ethnicity_points + gpa_points + ap_points + SATorACT_points + totalecpoints + VH_points + JE_points + IT_points;
    console.log("ethnicity" + isNaN(ethnicity_points)); 
    console.log("gpapoints" +isNaN(gpa_points)); 
    console.log("appoints" +isNaN(ap_points)); 
    console.log("satact" +isNaN(SATorACT_points)); 
    console.log("ec" +isNaN(totalecpoints));
    console.log(totalpoints);
    var realcolleges = [];
    var collegenumber2 = 0;
    for (var i =0; i < collegearray.length; i ++) {
        if (collegearray[i].rating > totalpoints-20 && [i].rating < totalpoints +20 ) {
            realcolleges[collegenumber2] = collegearray[i];
            collegenumber2++;
        }
    }
    printcolleges(realcolleges)
}

function printcolleges(newcollegearray){
    var college_message = "";
    for(var i = 0; i < newcollegearray.length; i ++){
        college_message = college_message + " " + newcollegearray.name;
    }
    document.getElementById("final_message").innerHTML = "Your target schools are:" + college_message;
    document.getElementById("final_message").style.display = "block";
}

function checkforErrors1(){ 
    var form1 = document.getElementById("form1");
    if(form1.elements[0].value =="M_CA" || form1.elements[0].value =="N_CA" || form1.elements[0].value =="S_CA" || form1.elements[0].value =="C" && form1.elements[1].checked == true || form1.elements[2].checked == true || form1.elements[3].checked == true || form1.elements[4].checked == true || form1.elements[5].checked == true && form1.elements[6].value >= 0 && form1.elements[6].value <= 5.0 && form1.elements[8].checked == true || form1.elements[9].checked == true && form1.elements[7].value >= 0 ){
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