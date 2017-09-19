const projects = [
        { id: 1, name: 'Learn React Native' },
        { id: 2, name: 'Workout' },
];

const tasks = [
    { id: 1, title: 'Learn GraphQL', completed: true, projectID: 1 },
    { id: 2, title: 'Learn React/Redux', completed: false, projectID: 1 },
    { id: 3, title: 'Install Xcode', completed: false, projectID: 1 },
    { id: 4, title: 'Trail run', completed: true, projectID: 2 },
    { id: 5, title: 'Climb at the gym', completed: false, projectID: 2 },
    { id: 6, title: 'Big South Fork 17.5 mile race', completed: false, projectID: 2 }
];

module.exports = { projects, tasks };
