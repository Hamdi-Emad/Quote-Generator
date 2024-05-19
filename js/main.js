var contentArr = [
   `<h1>" The purpose of our lives is to be happy."</h1><br /><span> — Dalai Lama</span>`,
   `<h1>" Get busy living or get busy dying."</h1><br /> <span>— Stephen King</span> `,
   `<h1>" Life is what happens when you're busy making other plans." </h1> <br /> <span>— John Lennon</span>`,
   `<h1>" You only live once, but if you do it right, once isenough." </h1> <br /> <span> — Mae West</span>`,
   `<h1>" Many of lifes failures are people who did not realize howclose they were to success when they gave up."  </h1> <br /> <span>— Thomas A.Edison</span>`,
   `<h1>" If you want to live a happy life, tie it to a goal, not topeople or things."  </h1> <br /> <span>— Albert Einstein</span>`,
   `<h1>" Never let the fear of striking out keep you from playingthe game."  </h1> <br /> <span>— Babe Ruth</span>`,
   `<h1>" Money and success don't change people; they merely amplifywhat is already there."  </h1> <br /> <span> — Will Smith</span>`,
   `<h1>" Your time is limited, so don't waste it living someoneelse's life. Don't be trapped by dogma , which is livingwith the results of other people's thinking."  </h1><br /> <span> — Steve Jobs</span>`,
   `<h1>" Not how long, but how well you have lived is the mainthing."  </h1><br /> <span> — Seneca</span>`,
   `<h1>" If life were predictable it would cease to be life, and bewithout flavor." </h1> <br /> <span> — Eleanor Roosevelt </span> `,
   `<h1>" The whole secret of a successful life is to find out whatis one's destiny to do, and then do it."</h1>  <br /> <span>— Henry Ford</span> `,
   `<h1>" In order to write about life first you must live it."  </h1> <br /> <span>— Ernest Hemingway</span>`,
   `<h1>" The big lesson in life, baby, is never be scared of anyoneor anything."  </h1> <br /> <span>— Frank Sinatra</span>`,
   `<h1>" Curiosity about life in all of its aspects, I think, isstill the secret of great creative people."  </h1> <br /> <span> — Leo Burnett</span>`,
   ` <h1>" Life is not a problem to be solved, but a reality to beexperienced."  </h1> <br /> <span>— Soren Kierkegaard</span>`,
   `<h1>" The unexamined life is not worth living." </h1> <br /> <span> — Socrates</span> `,
   `<h1>" Turn your wounds into wisdom." </h1>  <br /> <span>— Oprah Winfrey</span>`,
   `<h1>" The way I see it, if you want the rainbow, you gotta putup with the rain."  </h1> <br /> <span> — Dolly Parton</span>`,
   `<h1>"111 Do all the good you can, for all the people you can, inall the ways you can, as long as you can." </h1>  <br />  <span>— HillarClinton</span>`,
];
function quoteCode() {
   var indexx = Math.floor(Math.random() * contentArr.length); // توليد رقم عشوائي لايتعدي عدد عناصر المصفوفة
   document.getElementById("contentText").innerHTML = contentArr[indexx]; // للحصول علي نتيجة مختلفة كل مرة index استخدام هذا الرقم العشوائي كـ
}
quoteCode(); // quote بمعني اني لما افتح الصفحة الاقي فيه
document.getElementById("contentBtn").onclick = quoteCode; // مختلف quote بتعمل click كل
