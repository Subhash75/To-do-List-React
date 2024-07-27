import { useState } from "react";
import toast from "react-hot-toast";
import { predefinedTasks } from "./homepage.constants";

if (!localStorage.getItem("tasks")) {
  localStorage.setItem("tasks", JSON.stringify(predefinedTasks));
}

const LSTaskList = JSON.parse(localStorage.getItem("tasks"));

function useHomePage() {
  const [modalState, setModalState] = useState({
    title: "",
    isOpen: false,
    taskId: null,
    taskPriority: "",
    taskName: "",
    taskDescription: "",
  });
  const [tasks, setTasks] = useState(LSTaskList);

  const handleModalState = ({ title = "", taskId = null }) => {
    setModalState((prevState) => ({
      ...prevState,
      title,
      taskId,
      isOpen: !prevState.isOpen,
    }));
  };

  const handleInputChange = ({
    e,
    type,
    taskName = "",
    taskDescription = "",
  }) => {
    if (type === "reset") {
      setModalState((prevState) => ({
        ...prevState,
        taskName: "",
        taskDescription: "",
      }));
    } else if (type === "update") {
      setModalState((prevState) => ({
        ...prevState,
        taskName,
        taskDescription,
      }));
    } else {
      setModalState((prevState) => ({ ...prevState, [type]: e.target.value }));
    }
  };

  const handleTaskPriority = ({ taskPriority = "" }) => {
    setModalState((prevState) => ({ ...prevState, taskPriority }));
  };

  const handleTaskComplete = ({ e, index }) => {
    setTasks((prevState) => {
      const newState = [...JSON.parse(JSON.stringify(prevState))];
      newState[index].isComplete = e.target.checked;

      return newState;
    });
  };

  const handleTaskEdit = ({ index }) => {
    const relevantTask = tasks[index];
    const {
      id: taskId,
      name: taskName,
      description: taskDescription,
      priority: taskPriority,
      isComplete,
    } = relevantTask ?? {};

    if (isComplete) {
      toast.error("Edit operation not allowed when task is marked as complete");
      return;
    }

    handleModalState({ title: "Edit", taskId });
    handleInputChange({ e: null, type: "update", taskName, taskDescription });
    handleTaskPriority({ taskPriority });
  };

  const handleTaskSubmit = () => {
    if (!modalState.taskName) {
      toast.error("Please enter task name");
    } else if (!modalState.taskPriority) {
      toast.error("Please select task priority");
    } else if (!modalState.taskDescription) {
      toast.error("Please enter task description");
    } else {
      handleModalState({ title: "" });
      toast.success("Task added successfully");
      setTasks((prevState) => {
        const newState = [
          ...prevState,
          {
            id: Date.now(),
            name: modalState.taskName,
            priority: modalState.taskPriority,
            description: modalState.taskDescription,
            isComplete: false,
          },
        ];

        localStorage.setItem("tasks", JSON.stringify(newState));
        return newState;
      });
    }
  };

  const handleTaskUpdate = ({ id }) => {
    if (!modalState.taskName) {
      toast.error("Please enter task name");
    } else if (!modalState.taskPriority) {
      toast.error("Please select task priority");
    } else if (!modalState.taskDescription) {
      toast.error("Please enter task description");
    } else {
      handleModalState({ title: "" });
      toast.success("Task updated successfully");
      setTasks((prevState) => {
        const updatedTasks = prevState.map((value) => {
          if (id === value.id) {
            return {
              ...value,
              name: modalState.taskName,
              description: modalState.taskDescription,
              priority: modalState.taskPriority,
            };
          } else {
            return value;
          }
        });


        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        return updatedTasks;
      });
    }
  };

  return {
    tasks,
    modalState,
    handleModalState,
    handleTaskPriority,
    handleTaskSubmit,
    handleInputChange,
    handleTaskComplete,
    handleTaskEdit,
    handleTaskUpdate,
  };
}

export default useHomePage;
