// localStorage.clear();
const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare report",
        taskDescription: "Create monthly sales report",
        taskDate: "2026-04-25",
        taskCategory: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Email client",
        taskDescription: "Send proposal to client",
        taskDate: "2026-04-20",
        taskCategory: "Communication"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Team meeting",
        taskDescription: "Attend weekly sync meeting",
        taskDate: "2026-04-26",
        taskCategory: "Meetings"
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix bugs",
        taskDescription: "Resolve issues in module A",
        taskDate: "2026-04-25",
        taskCategory: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code review",
        taskDescription: "Review teammate code",
        taskDate: "2026-04-22",
        taskCategory: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy app",
        taskDescription: "Deploy latest build",
        taskDate: "2026-04-21",
        taskCategory: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write tests",
        taskDescription: "Add unit tests",
        taskDate: "2026-04-27",
        taskCategory: "Testing"
      }
    ]
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design UI",
        taskDescription: "Create homepage layout",
        taskDate: "2026-04-25",
        taskCategory: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update logo",
        taskDescription: "Revise brand logo",
        taskDate: "2026-04-19",
        taskCategory: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prototype",
        taskDescription: "Build clickable prototype",
        taskDate: "2026-04-28",
        taskCategory: "Design"
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Market research",
        taskDescription: "Analyze competitors",
        taskDate: "2026-04-25",
        taskCategory: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Social media post",
        taskDescription: "Publish campaign post",
        taskDate: "2026-04-23",
        taskCategory: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Ad campaign",
        taskDescription: "Launch ads",
        taskDate: "2026-04-21",
        taskCategory: "Marketing"
      }
    ]
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Customer support",
        taskDescription: "Handle support tickets",
        taskDate: "2026-04-25",
        taskCategory: "Support"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Resolve complaint",
        taskDescription: "Fix customer issue",
        taskDate: "2026-04-22",
        taskCategory: "Support"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Feedback review",
        taskDescription: "Analyze feedback",
        taskDate: "2026-04-27",
        taskCategory: "Support"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "System check",
        taskDescription: "Check ticketing system",
        taskDate: "2026-04-20",
        taskCategory: "Maintenance"
      }
    ]
  }
];


const admin =[ {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }];

   export const setLocalStorage = ()=>{
localStorage.setItem('employees', JSON.stringify(employees));
localStorage.setItem('admin', JSON.stringify(admin))
   }
export const getLocalStorage = ()=>{
const employees = JSON.parse(localStorage.getItem('employees'));
const admin = JSON.parse(localStorage.getItem('admin'));
return{ employees , admin}
}
