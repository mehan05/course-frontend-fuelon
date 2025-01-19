
// eslint-disable-next-line react/prop-types
const PopupCard = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <div className="text-center">
          <p className="text-lg font-semibold mb-4">Do  you want write the Test again?</p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Yes
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
