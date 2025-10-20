export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About This Template</h1>

      <div className="prose prose-lg">
        <p className="text-gray-600 text-lg mb-6">
          This is a clean and minimal React template built with modern tools and best practices.
        </p>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">⚛️</span>
              <div>
                <strong>React 18</strong> - Modern React with hooks and concurrent features
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">⚡</span>
              <div>
                <strong>Vite</strong> - Next generation frontend tooling
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">📘</span>
              <div>
                <strong>TypeScript</strong> - Type safety and better developer experience
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">🎨</span>
              <div>
                <strong>Tailwind CSS</strong> - Utility-first CSS framework
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">🚦</span>
              <div>
                <strong>React Router</strong> - Client-side routing
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Fast development with Hot Module Replacement</li>
            <li>✅ Type-safe code with TypeScript</li>
            <li>✅ Modern UI with Tailwind CSS</li>
            <li>✅ Client-side routing with React Router</li>
            <li>✅ Optimized build for production</li>
            <li>✅ GitHub Pages deployment ready</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
