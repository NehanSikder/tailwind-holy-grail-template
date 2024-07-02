import './App.css';

function App() {
  return (
    <div class="flex flex-col min-h-screen">
      {/* Header */}
      <header class="bg-blue-500 text-white p-4">
        <h1 class="text-center">Header</h1>
      </header>
      {/* Main Body */}
      <div class="flex flex-1">
        {/* left side bar */}
        <aside class="bg-gray-200 w-64 p-4">
          <h2>Left Sidebar</h2>
          <p>Content goes here</p>
        </aside>
        {/* Main Content */}
        <main class="flex-1 bg-white p-4">
          <h2>Main Content</h2>
          <p>This is the main content area.</p>
        </main>
        {/* Right sidebar */}
        <aside class="bg-gray-200 w-64 p-4">
          <h2>Right Sidebar</h2>
          <p>Content goes here</p>
        </aside>

      </div>

      {/* Footer */}
      <footer class="bg-blue-500 text-white p-4">
        <h1 class="text-center">Footer</h1>
      </footer>
    </div>
  )
}

export default App;
