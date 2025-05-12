const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// function getLearnerData(course, AssignmentGroup, LearnerSubmissions) {

  // 1. first figure out who are the students
  // generate an array of unique students ids
  // generate an array of students ids -> [125,125,125,132,132]
  // generate the array from submissions data then make it unique -> [125,132]

  let students = [125,125,125,132,132]
const unique = students.filter((value, index, self) => {
    return self.indexOf(value) === index;
});

// 2. convert it into array of object where you have a key called id
//       then value be studendid -> [{id:125},{id:132}]
let result = []
for (let i = 0; i < unique.length; i++){
    let obj = {
        id:unique[i]
    }
  switch(true){
    case unique.length == 2:
      result.push(obj);
      break;
    default:
      letter = 'what is going on ?';
  }
};

// 3. get the assignments and calulcate the grade
//       find the assignment for each student and thier score
//       -> [{id:125,1:47,2:150,3:400},{id:132,1:39,2:140}]
//       now you have an object for each student that has score

try {
  idFirst = [];
  idSecond = [];
const scores = LearnerSubmissions.map(function(item) {
  if (item.learner_id === 125){
  id1 = item.submission.score
  return idFirst.push(id1)
  }else{
    id2 = item.submission.score
    return idSecond.push(id2)
  }
});
} catch (error) {
  console.error(error)
};



const learners = {
  result,
  idFirst,
  idSecond,
  perScholas: '30 years',
  log(){
    this.result.forEach(element => {
      console.log(element = "I couldn't combine an array with two different objects. Oussama, sorry!")
    });
  }
};

delete learners.perScholas
learners.log()
// 4. we need to calculate the grade
//       go every student and match assignment using id to find points points_possible
//       you just divide the score by points points_possible
//       -> [{id:125,1:0.94,2:1.0}]
//       avg (add assignment scores together )/ (points possible)
//       remove not due assignments






//       -> [{id:125,1:47,2:150,3:400},{id:132,1:39,2:140}]

// result.forEach(results => {
//   return(results.idFirst, results.idSecond)
// })




// let learners = result.map((student)=> {
//   student.yes="i"
//   return student
// })

// console.log(learners)
    /*
  
      here, we would process this data to achieve the desired result.
  
      
      

  
      
  
      const result = [
        {
          id: 125,
          avg: 0.985, // (47 + 150) / (50 + 150)
          1: 0.94, // 47 / 50
          2: 1.0, // 150 / 150
        },
        {
          id: 132,
          avg: 0.82, // (39 + 125) / (50 + 150)
          1: 0.78, // 39 / 50
          2: 0.833, // late: (140 - 15) / 150
        },
      ];
  
    */
   
    // let result = [];
    // write some code that makes results like that
    // for (let i = 0; i < submissions.length; i++) {
    //   //
    // }
    // result [125,125,125,32,32]
    // return result;
// }