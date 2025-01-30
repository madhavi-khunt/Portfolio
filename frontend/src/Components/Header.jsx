import { Home, Folder, ShoppingCart, Edit } from "lucide-react"; // Icons from Lucide
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="icon-container">
        <Home size={20} />
        <Folder size={20} />
        <ShoppingCart size={20} />
        <Edit size={20} />
      </div>
    </header>
  );
};

export default Header;
