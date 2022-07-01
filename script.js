const form = document.querySelector('#form')

function subscribe(passForm){ 
    set fso = CreateObject("Scripting.FileSystemObject"); 
    set s   = fso.CreateTextFile("C:/Users/Mazur/Documents/git/mazur/rocket-news/filename.txt", True);
    
    var email = document.getElementById('email');
    
    s.writeline("Email:" + email);
    
    s.writeline("-----------------------------");
    s.Close();
}