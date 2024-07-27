import { createPortal } from "react-dom";
import { IoWarningOutline } from "react-icons/io5";

function DeleteAllPopup({
    handleToggleDeleteAllModalState,
    handleDeleteAll,
}) {
    return createPortal(
        <div
            className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
        >
            <div className="font-Montserrat rounded-lg bg-white py-6 px-10 flex flex-col justify-center items-center">
                <IoWarningOutline size={50} className="text-tertiary" />
                <p className="text-base sm:text-2xl tracking-wide my-6">
                    Are you sure you want to delete all?
                </p>
                <div className="flex gap-5">
                    <button
                        className="border border-primary px-6 py-3 rounded-lg"
                        onClick={handleToggleDeleteAllModalState}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-primary text-white px-6 py-3 rounded-lg"
                        onClick={handleDeleteAll}
                    >
                        Yes! Proceed
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById("modal-root")
    );
}

export default DeleteAllPopup;
