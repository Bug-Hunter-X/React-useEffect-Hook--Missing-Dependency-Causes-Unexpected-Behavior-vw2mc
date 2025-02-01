```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only when 'count' changes
    console.log('Component rendered with count:', count);
    return () => {
      // Cleanup function, runs before the component is unmounted
      console.log('Component unmounting');
    };
  }, [count]); // 'count' is added to the dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```