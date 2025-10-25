
export function App() {
  const Button = ({ children }) => (
    <button className="bg-ignite-500 text-white font-family-default rounded-md p-4">
      {children}
    </button>
  )

  return <Button>Hello World</Button>
}
