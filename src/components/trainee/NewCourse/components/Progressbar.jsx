import { useState, useEffect } from 'react';

function ProgressBar() {
  const [progress, setProgress] = useState(0);

 

  return (
    <div className="bg-gray-300 rounded-full h-2">
      <div
        className="bg-violet-500 h-full rounded-full"
        style={{ width: `${30}%` }}
      />
    </div>
  );
}

export default ProgressBar;