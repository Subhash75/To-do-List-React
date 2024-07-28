import { createPortal } from "react-dom";
import { IoClose, IoAdd } from "react-icons/io5";

function TaskModal({
    id,
    title,
    taskName,
    taskPriority,
    taskDescription,
    handleInputChange,
    handleModalState,
    handleTaskPriority,
    handleTaskSubmit,
    handleTaskUpdate
}) {
    return createPortal(
        <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
            onClick={() => handleModalState({ title: "" })}
        >
            <div
                className="bg-white rounded-xl w-[90%] md:w-[75%]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between px-5 py-3 border-b-2">
                    <h2 className="text-primary tracking-wide text-xl font-MontserratSemiBold">
                        {title} Task
                    </h2>
                    <IoClose
                        size={24}
                        className="text-primary cursor-pointer"
                        onClick={() => handleModalState({ title: "" })}
                    />
                </div>

                <div className="px-5 py-3">
                    <div className="flex flex-col sm:flex-row items-center flex-start sm:justify-between">
                        <p className="w-full sm:w-[25%] mb-1 sm:mb-0">Task Name </p>
                        <span className="mx-5 w-[5%] hidden sm:inline-block">:</span>
                        <input
                            name="taskName"
                            value={taskName}
                            placeholder="Enter Task Name"
                            className="border border-black focus:border-primary focus:outline-primary px-3 py-2 rounded-md w-full"
                            onChange={(e) => handleInputChange({ e, type: 'taskName' })}
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row items-center my-4 sm:my-0 sm:mt-3">
                        <p className="w-full sm:w-[25%] mb-1 sm:mb-0">Task Priority</p>
                        <span className="mx-5 w-[5%] hidden sm:inline-block">:</span>

                        <div className="w-full flex flex-wrap gap-3">
                            <button
                                onClick={() => handleTaskPriority({ taskPriority: "Critical" })}
                                className={`border border-primary px-3 xs:px-5 py-1 xs:py-2 text-sm xs:text-base rounded-lg ${taskPriority === "Critical"
                                    ? "text-white bg-primary"
                                    : "text-primary bg-white"
                                    }`}
                            >
                                Critical
                            </button>
                            <button
                                onClick={() => handleTaskPriority({ taskPriority: "Intermediate" })}
                                className={`border bg-white px-3 xs:px-5 py-1 xs:py-2 text-sm xs:text-base rounded-lg ${taskPriority === "Intermediate"
                                    ? "text-white !bg-tertiary"
                                    : "border-tertiary text-tertiary"
                                    }`}
                            >
                                Intermediate
                            </button>
                            <button
                                onClick={() => handleTaskPriority({ taskPriority: "Basic" })}
                                className={`border bg-white px-3 xs:px-5 py-1 xs:py-2 text-sm xs:text-base rounded-lg ${taskPriority === "Basic"
                                    ? "text-white !bg-green-500"
                                    : "border-green-500 text-green-500"
                                    }`}
                            >
                                Basic
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row mt-3">
                        <p className="w-full sm:w-[25%] mb-1 sm:mb-0">Task Description</p>
                        <span className="mx-5 w-[5%] hidden sm:inline-block">:</span>
                        <textarea
                            name='taskDescription'
                            value={taskDescription}
                            placeholder="Enter Task Description"
                            className="border border-black focus:border-primary focus:outline-primary px-3 py-2 rounded-md w-full"
                            onChange={(e) => handleInputChange({ e, type: 'taskDescription' })}
                        />
                    </div>
                </div>

                <div className="border-t-2 px-5 py-2">
                    <button
                        onClick={title === 'Add' ? handleTaskSubmit : () => handleTaskUpdate({ id })}
                        className="ml-auto flex gap-x-2 items-center bg-primary hover:bg-white text-white hover:text-primary border border-primary px-5 py-3 text-sm rounded-lg"
                    >
                        {title === 'Add' ? 'Add' : 'Update'} Task <IoAdd size={18} />
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById("modal-root")
    );
}

export default TaskModal;
