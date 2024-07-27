import { MdModeEdit, MdDelete } from "react-icons/md";
import { columns } from "../homepage.constants";

const taskPriorityColorLookupObject = {
    Critical: "bg-primary",
    Intermediate: "bg-tertiary",
    Basic: "bg-green-500",
};

function TaskListing({ tasks, handleTaskComplete, handleTaskEdit }) {
    return (
        <section className="mt-5" style={{ height: "calc(100% - 57px)" }}>
            <div className="flex justify-between border-b border-primary py-2">
                {columns.map((column) => (
                    <p
                        key={column.columnName}
                        className="text-primary font-MontserratSemiBold text-center truncate w-[20%]"
                    >
                        {column.columnName}
                    </p>
                ))}
            </div>
            <div style={{ height: "calc(100% - 40px)" }} className="overflow-auto">
                {tasks.map((task, taskIndex) => {
                    return (
                        <div
                            key={task.id}
                            className={`flex justify-between items-center py-3 ${task.isComplete ? "bg-gray-300" : "bg-white"
                                } ${taskIndex !== tasks.length - 1 && "border-b border-primary"}`}
                        >
                            <p className={`text-sm truncate text-center w-[20%] ${task.isComplete ? "line-through" : "no-underline"
                                } `}>
                                {task.name}
                            </p>
                            <p className="text-sm truncate text-center w-[20%]">
                                <b
                                    className={`${task.isComplete ? "bg-transparent !text-black font-normal line-through" : taskPriorityColorLookupObject[task.priority] ?? "bg-white"
                                        } px-3 py-1 text-white rounded-full inline-block`}
                                >
                                    {task.priority}
                                </b>
                            </p>
                            <p className={`text-sm truncate text-center w-[20%] ${task.isComplete ? "line-through" : "no-underline"
                                } `}>
                                {task.description}
                            </p>
                            <input
                                type="checkbox"
                                onChange={(e) => handleTaskComplete({ e, index: taskIndex })}
                                className="h-4 w-[20%] cursor-pointer"
                            />
                            <div className="flex gap-x-3 justify-center w-[20%]">
                                <MdModeEdit size={24} className="text-primary cursor-pointer" onClick={() => handleTaskEdit({ index: taskIndex })} />
                                <MdDelete size={24} className="text-primary cursor-pointer" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default TaskListing;
