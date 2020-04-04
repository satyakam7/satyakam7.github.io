# Dev-backend

-------instructions----------
devclub backend assignment with sample database table for prof sys.
download the repo
then rename it from satyakam7/github.io to profrev
move the folder to htdocs folder in xampp 

install XAMPP for respective os.
create databases with name cms and profrev on phpmyadmin at http://localhost
import sql from the db folder given
go to http://localhost/profrev

for admin privileges:
http://localhost/profrev/admin

uname: admin
pass: admin

No extra files needed to be installed.








--------------Answrs to ques.-------------
Satyakam
30 March 2020
Dev-Club IIT Delhi
Recruitment Assignment
Sorry for late submission.
Due to low internet services and other household duties I was not able to complete the assignment on time.
Please do excuse me for it.
Brain Warm-up
Answer—> Yes, there must be better ways to do so, but generating the zip file is a better way to do so. If there is a
shortage of memeory throwing more memory is not the way to solve the problem rather thinking of a better algorithm
should be the solution to the way.
Design/Development

Q1. Every single URL on the internet has a unique IP address assigned to it. The IP address belongs to the
computer which hosts the server of the website we are requesting to access. For example, www.google.com has an
IP address of 209.85.227.104. So if you’d like, you can reach www.google.com by typing http://209.85.227.104 on
your browser. DNS is a list of URLs, and their IP addresses.
-When we hit a URL it follows the following process:
● First, it checks the browser cache. The browser maintains a repository of DNS records for websites. So, it is
the first place to run a DNS query.
● Second, the browser checks the OS cache. If it is not in the browser cache, the browser will make a system
call (i.e., gethostname on Windows) to your underlying computer OS to fetch the record since the OS also
maintains a cache of DNS records.
● Third, it checks the router cache. If it’s not on your computer, the browser will communicate with the router
that maintains its’ own cache of DNS records.
● Fourth, it checks the ISP cache. If all steps fail, the browser will move on to the ISP. which is the browser
last hope of finding your requested URL.


——>We can do it by searching the same IP address on mobile/computer as of our present working system while on
same network connection . It won’t work on diff. networking connection . So, the site running on the localhost would
be visible to other user as well.


Q3 Well for managing a database for professors I would prefer using a noSQL data base as it can’t be approximated
how much data have to stored in the database. also i could use sql because of its fixed structure. Sql is more versatile and widely used too.

Q4. setTimeout and setInterval are timed functions. They are both used to run a function at a future time. The
important difference is that, whereas setTimeout() triggers expression only once, setInterval() keeps triggering
expression again and again (unless you tell it to stop).
setTimeout and setInterval are timed functions. They are both used to run a function at a future time.
Vulnerable because:
● The code cannot be optimized because, well the code is not known until it is executed.
● Your code might run slower because it has to create a new instance of JavaScript interpreter to run.
● It opens up your code to injection attacks.


