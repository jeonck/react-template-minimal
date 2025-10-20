export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to React Template
        </h1>
        <p className="text-xl text-gray-600">
          A modern React + TypeScript + Tailwind CSS starter template
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold mb-2">Fast Development</h3>
          <p className="text-gray-600">
            Powered by Vite for lightning-fast HMR and build times
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold mb-2">Modern Styling</h3>
          <p className="text-gray-600">
            Tailwind CSS for rapid UI development with utility classes
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">📦</div>
          <h3 className="text-xl font-semibold mb-2">TypeScript</h3>
          <p className="text-gray-600">
            Type-safe development with full TypeScript support
          </p>
        </div>
      </div>

      <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Get Started</h2>
        <p className="text-lg mb-6">
          Start building your next project with this clean and simple template.
        </p>
        <div className="flex gap-4">
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Vite Docs
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            React Docs
          </a>
        </div>
      </div>
    </div>
  );
}
