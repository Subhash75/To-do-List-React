const columns = [
    { columnName: "Name", size: "20%" },
    { columnName: "Priority", size: "20%" },
    { columnName: "Description", size: "20%" },
    { columnName: "Mark as complete", size: "20%" },
    { columnName: "Actions", size: "20%" },
];

const predefinedTasks = [
    {
        id: 1,
        name: "Submit report",
        priority: "Critical",
        description:
            "Complete the quarterly financial report and submit to the manager.",
        isComplete: false,
    },
    {
        id: 2,
        name: "Team meeting",
        priority: "Intermediate",
        description: "Discuss project updates and next steps with the team.",
        isComplete: false,
    },
    {
        id: 3,
        name: "Client call",
        priority: "Critical",
        description:
            "Call the client to discuss the project requirements and timelines.",
        isComplete: false,
    },
    {
        id: 4,
        name: "Review code",
        priority: "Intermediate",
        description: "Review the latest code changes and provide feedback.",
        isComplete: false,
    },
];

export { columns, predefinedTasks };
