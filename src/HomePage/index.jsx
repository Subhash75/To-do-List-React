import RedBg from "../assets/images/red_bg.jpg";
import MainBodySection from "./components/MainBodySection";
import TaskModal from "./components/TaskModal";
import useHomePage from "./useHomePage";

function HomePage() {
    const {
        tasks,
        modalState,
        handleModalState,
        handleTaskPriority,
        handleTaskSubmit,
        handleTaskComplete,
        handleInputChange,
        handleTaskEdit,
        handleTaskUpdate
    } = useHomePage();

    return (
        <>
            <main className="h-screen">
                <div
                    className="bg-no-repeat bg-contain h-1/2"
                    style={{ backgroundImage: `url(${RedBg})`, backgroundSize: "100%" }}
                ></div>
                <MainBodySection
                    tasks={tasks}
                    handleModalState={handleModalState}
                    handleInputChange={handleInputChange}
                    handleTaskPriority={handleTaskPriority}
                    handleTaskComplete={handleTaskComplete}
                    handleTaskEdit={handleTaskEdit}
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
        </>
    );
}

export default HomePage;
