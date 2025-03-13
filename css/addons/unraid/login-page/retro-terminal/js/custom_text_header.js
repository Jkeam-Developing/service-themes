
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
   __  __                 _     __   __  __           __ 
  / / / /___  _________ _(_)___/ /  / / / /___  _____/ /_
 / / / / __ \\/ ___/ __ `/ / __  /  / /_/ / __ \\/ ___/ __/
/ /_/ / / / / /  / /_/ / / /_/ /  / __  / /_/ (__  ) /_  
\\____/_/ /_/_/   \__,_/_/\\__,_/  /_/ /_/\\____/____/\\__/  
                                                         /pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
