import React, { Suspense, lazy } from 'react';
import './App.css';
const CommentSection = lazy(() => import('./components/CommentSection'));




function App() {
  return (
    <div>
      <h1>Blog</h1>
      <Suspense fallback="Loading...">
        <CommentSection/>
      </Suspense>
    </div>
  );
}

export default App;
