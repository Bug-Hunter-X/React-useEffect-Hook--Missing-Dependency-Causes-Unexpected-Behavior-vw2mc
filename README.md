# React useEffect Hook: Missing Dependency

This example demonstrates a common error when using the `useEffect` hook in React. The effect runs after every render, which can be inefficient or lead to unexpected behavior.  

The solution shows how adding the state variable 'count' to the dependency array fixes the issue by ensuring that the effect only runs when 'count' changes.