import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FilesUploadComponent from './components/FilesUploadComponent/FilesUploadComponent';

function App() {
  return (
    <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
      <i className='fab fa-react' /> React File Upload
    </h4>

    <FilesUploadComponent />
  </div>
  );
}

export default App;
