function result(){
    var q1_a2=document.getElementById('q1_a2')
    var score=0
    if(q1_a2.checked==true){
        score++
        alert('Q1 is right')
    }
    else{
        alert('Q1 is Wrong')
    }
    var q2_a1=document.getElementById('q2_a1')
    
    if(q2_a1.checked==true){
        score++
        alert('Q2 is right')
    }
    else{
        alert('Q2 is Wrong')
    }
    var q3_a1=document.getElementById('q3_a1')
    
    if(q3_a1.checked==true){
        score++
        alert('Q3 is right')
    }
    else{
        alert('Q3 is Wrong')
    }
    var q4_a4=document.getElementById('q4_a4')
    
    if(q4_a4.checked==true){
        score++
        alert('Q4 is right')
    }
    else{
        alert('Q4 is Wrong')
    }
    alert('\n your score  is 4/4 is '+score++)
}
