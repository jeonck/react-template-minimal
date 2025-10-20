import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Cpu, Database, Box, Code, GitMerge } from 'react-feather';
import ThreeScene from '../components/ThreeScene';

const Home = () => {
  const categories = [
    {
      title: 'Technology & Infrastructure',
      description: 'The foundational hardware and software.',
      icon: <Cpu size={20} />,
      link: '/technology/iot'
    },
    {
      title: 'Data & Analysis',
      description: 'Collecting, processing, and analyzing data.',
      icon: <Database size={20} />,
      link: '/data/big-data'
    },
    {
      title: 'Modeling & Simulation',
      description: 'Creating and simulating virtual models.',
      icon: <Box size={20} />,
      link: '/modeling/3d-2d'
    },
    {
      title: 'Software & Systems',
      description: 'The architecture and applications that power the twin.',
      icon: <Code size={20} />,
      link: '/software/architecture'
    },
    {
      title: 'Interfaces',
      description: 'Interacting with the digital twin.',
      icon: <GitMerge size={20} />,
      link: '/interfaces/ui-ux'
    },
  ];

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <div className="text-center pt-20 md:pt-28">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          <span className="block">Welcome to the</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mt-2">
            DigitalTwin Hub
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
          Your central resource for understanding, building, and deploying digital twin technology.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link 
            to="/technology/iot" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
          <a 
            href="#features" 
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* 3D Model Placeholder */}
      <div className="w-full h-96 rounded-2xl">
        <ThreeScene />
      </div>

      {/* Featured Content Section */}
      <div id="features" className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Explore by Category</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Explore the core components of Digital Twin technology.</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Card key={category.title} {...category} />
        ))}
      </div>

      {/* Informational Sections */}
      <div className="bg-gray-100/70 rounded-3xl p-8 md:p-12 lg:p-16 border border-gray-200/80">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">What is a Digital Twin?</h3>
            <p className="mt-4 text-lg text-gray-600">
              A digital twin is a virtual representation of a physical object or system. It is a dynamic, digital copy that is updated with real-time data, enabling simulation, analysis, and optimization.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/80">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Zap className="mr-3 text-green-500" />
              Key Capabilities
            </h4>
            <ul className="space-y-3 text-gray-600">
              <Principle text="Real-time monitoring and control." />
              <Principle text="Predictive maintenance and anomaly detection." />
              <Principle text="Simulation and what-if scenario analysis." />
              <Principle text="Improved operational efficiency and decision making." />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const Card = ({ title, description, icon, link }: CardProps) => (
  <Link to={link} className="block group">
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/80 h-full flex flex-col p-8">
      <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white mb-6">
        {icon}
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-3 text-gray-600">{description}</p>
      </div>
      <div className="mt-6 flex items-center justify-between text-indigo-600 font-medium">
        <span>Explore Category</span>
        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
      </div>
    </div>
  </Link>
);

interface PrincipleProps {
  text: string;
}

const Principle = ({ text }: PrincipleProps) => (
  <li className="flex items-start">
    <span className="text-green-500 h-6 w-6 flex-shrink-0 mr-3">✓</span>
    <span>{text}</span>
  </li>
);

export default Home;