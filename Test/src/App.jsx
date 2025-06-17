// App.js or App.jsx
import React, { useEffect } from 'react';
import { initEventLogger } from '@codeankitanime/eventlogger';

function App() {
  useEffect(() => {
    initEventLogger({
      events: ['click', 'scroll', 'input'], 

      onFlush: (payload) => {
        console.log('Event Logger Payload:', payload);

        // Send to your backend if needed
        // fetch('https://yourdomain.com/api/event-logs', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(payload),
        // });
      }
    });
  }, []);

  return (
    <div>
      <h1>Hello Event Logger!</h1>
      <input placeholder="Type something..." />
      <button onClick={() => alert('Clicked!')}>Click Me</button>
    </div>
  );
}

export default App;
