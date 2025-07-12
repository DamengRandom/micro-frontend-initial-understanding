import './index.css'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'; 
import Trending from './components/Trending';

export function mount(el) {
  const root = ReactDOM.createRoot(el); 
  root.render(<StrictMode><Trending /></StrictMode>); 
}
