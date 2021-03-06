angular.module('app.service', ['app.domain']).service('UserService', function (User) {
   this.getUser = function(){
          var user= {   id:1,
              name: "Brij", role: "ADMIN", profile: {
                  email    : "bpant@xebia.com", mobile: 1111111111,
                  education: {
                      degree: "MCA"
                  }
              },
              appliedJob     : []
          };
       return new User(user);
   };
}).service('JobService', function (Job) {
      this.getJobs = function (){

          var jobs = [];
          angular.forEach([

              {   id            : 1,
                  active       : true,
                  profile      : "MANAGER",
                  qualification: ["MBA", "BBA"],
                  status       : "OPEN"
              },
              {   id           : 2,
                  active       : true,
                  profile      : "RECRUITER",
                  qualification: ["MBA", "BBA"],
                  status       : "OPEN"
              },
              {   id           : 3,
                  active       : true,
                  profile      : "IT_HEAD",
                  qualification: ["MCA", "MTECH"],
                  status       : "OPEN"
              },
              {   id           : 4,
                  active       : true,
                  profile      : "SOFTWARE DEVELOPER",
                  qualification: ["MCA", "BCA"],
                  status       : "OPEN"
              } ,
              {   id           : 5,
                  active       : true,
                  profile      : "SOFTWARE TESTER",
                  qualification: ["MCA", "BCA"],
                  status       : "CLOSED"
              }
          ],function(job){
             jobs.push(new Job(job))
          });
          return jobs;
      };

});
