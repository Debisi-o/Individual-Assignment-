export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Welcome to CPAN144 Assignment 1
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Foundations of Advanced Front-End Development
        </p>
        <div className="max-w-3xl mx-auto text-left bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-gray-700 mb-4">
            This React application demonstrates the core concepts covered in Weeks 1-4:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>React components with state management</li>
            <li>Props for data passing between components</li>
            <li>Event handling for user interactions</li>
            <li>Conditional rendering based on application state</li>
            <li>CSS styling for a polished user interface</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Use the navigation menu above to explore the different features implemented.
          </p>
        </div>
      </div>
    </div>
  );
}
