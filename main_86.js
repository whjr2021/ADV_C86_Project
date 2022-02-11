var grades = [];
        //update scores with scores, first, last, sort by last
        var update_scores = function () {
           var val = get_item_list(grades);
           document.getElementById("scores").value = val;
           document.getElementById("student_name").value = "";
           document.getElementById("score").value = "";
           document.getElementById("student_name").focus();
        }    
        //function to add last, first, score to studentGrade
        var student_grade_add_click = function() {
        var last = document.getElementById("student_name").value;
               //var first = document.getElementById('first_name').value;
               var score = parseFloat(document.getElementById('score').value);
                grades.push ([last, score]);  
                update_scores();
                document.getElementById("average_score").value = getAverageScore(grades);
        }

        var get_item_list = function(item_list) {
           if ( item_list.length == 0 ) {
              return "";
           }
           var list = "";
           for ( var i = 0; i < item_list.length; i++) {
              var current = item_list[i];
              for ( var attribute in current ) {
                  list += current[attribute] + ", "; 
              }
          list += "\n";  
           }
           return list;
        }
        
        //average function
        function getAverageScore(grades){ //function-takes grades array
        
        var numberOfStudents = grades.length; //declare variable along length  of array for number of students
        var sum = 0; //set sum to zero
        if(numberOfStudents > 0) { // step through grades if > 0 students
            for(var i=0; i < numberOfStudents; i++) {//increment by 1 through grades
                sum += grades[i][1]; //add each score to sum
            }
        return sum/numberOfStudents; //divide total of sum by how many students
        }
        return 0; // if no students, return 0
        }
        
        function clear_click()
        {
                document.getElementById("form").reset();
                document.getElementById("average_score").value="";
                grades.splice(0, grades.length);  //TO CLEAR ARRAY AS WELL AS FORM
        }
        
        var sort_click = function ()  //ENTIRE FUNCTION TO SORT ARRAY AND REPRINT
        {
        grades.sort();
        update_scores();
        }
        
        window.onload = function() {
                document.getElementById("add_button").onclick = student_grade_add_click;
                document.getElementById("sort_button").onclick = sort_click;      
                document.getElementById("student_name").focus();
        }
        