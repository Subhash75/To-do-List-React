import { IoAdd } from "react-icons/io5";
import TaskListing from "./TaskListing";

function MainBodySection({
    tasks,
    handleModalState,
    handleTaskPriority,
    handleInputChange,
    handleTaskComplete,
    handleTaskEdit,
}) {
    return (
        <div className="fixed px-3 py-5 w-[75%] h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl rounded-xl">
            <div className="flex justify-between items-center">
                <h1 className="font-MontserratSemiBold text-primary text-2xl tracking-wide">
                    To Do List
                </h1>
                <button
                    onClick={() => {
                        handleModalState({ title: "Add" });
                        handleTaskPriority({ taskPriority: "" });
                        handleInputChange({ e: null, type: "reset" });
                    }}
                    className="flex gap-x-2 items-center bg-primary hover:bg-white text-white hover:text-primary border border-primary px-5 py-2 text-sm rounded-lg"
                >
                    Add Task <IoAdd size={18} />
                </button>
            </div>
            <TaskListing
                tasks={tasks}
                handleTaskComplete={handleTaskComplete}
                handleTaskEdit={handleTaskEdit}
            />
        </div>
    );
}

export default MainBodySection;
