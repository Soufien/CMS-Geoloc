# CMS-Geoloc
Deployd + Angular + Metrialize
Steps to run this application :

----------Install needed packages -----------
1  sudo yum install nodejs
2  sudo yum install mongodb-server
3  npm install deployd -g
4  npm install bower -g


-------------Run Application ----------
1  Download source code
2  cd CMS-Geoloc/public
3  bower install

Open 2 terminal windows :

In the first one run :
  sudo mongod
  
In the second one run :
  sudo dpd
  
And then open your browser and type the following URL to visit the dashoard :
  http://localhost:2403/dashboard/
