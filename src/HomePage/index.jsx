import RedBg from "../assets/images/red_bg.jpg";
import DeleteAllPopup from "./components/DeleteAllPopup";
import MainBodySection from "./components/MainBodySection";
import TaskModal from "./components/TaskModal";
import useHomePage from "./useHomePage";

function HomePage() {
    const {
        tasks,
        modalState,
        removeIndex,
        isDeleteAllModalOpen,
        handleModalState,
        handleTaskPriority,
        handleTaskSubmit,
        handleTaskComplete,
        handleInputChange,
        handleTaskEdit,
        handleTaskUpdate,
        handleRemoveTask,
        handleMarkAllComplete,
        handleDeleteAll,
        handleToggleDeleteAllModalState,
        handleOnDragEnd
    } = useHomePage();

    return (
        <>
            <main className="h-screen">
                <div
                    className="bg-no-repeat bg-cover h-1/2"
                    style={{ backgroundImage: `url(${RedBg})`, backgroundSize: "100% 100%" }}
                ></div>
                <MainBodySection
                    tasks={tasks}
                    removeIndex={removeIndex}
                    handleModalState={handleModalState}
                    handleInputChange={handleInputChange}
                    handleTaskPriority={handleTaskPriority}
                    handleTaskComplete={handleTaskComplete}
                    handleTaskEdit={handleTaskEdit}
                    handleRemoveTask={handleRemoveTask}
                    handleMarkAllComplete={handleMarkAllComplete}
                    handleToggleDeleteAllModalState={handleToggleDeleteAllModalState}
                    handleOnDragEnd={handleOnDragEnd}
                />
            </main>
            {modalState.isOpen && (
                <TaskModal
                    id={modalState.taskId}
                    title={modalState.title}
                    taskName={modalState.taskName}
                    taskPriority={modalState.taskPriority}
                    taskDescription={modalState.taskDescription}
                    handleInputChange={handleInputChange}
                    handleModalState={handleModalState}
                    handleTaskPriority={handleTaskPriority}
                    handleTaskSubmit={handleTaskSubmit}
                    handleTaskUpdate={handleTaskUpdate}
                />
            )}
            {isDeleteAllModalOpen && <DeleteAllPopup
                handleToggleDeleteAllModalState={handleToggleDeleteAllModalState}
                handleDeleteAll={handleDeleteAll}
            />}
        </>
    );
}

export default HomePage;
